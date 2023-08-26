import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import Components from "../Components";
import Card from "./Card";
import DOMPurify from "dompurify";
import CopyBtn from "./CopyBtn";

const CardContent = () => {
  const navigate = useNavigate();
  let { id } = useParams();

  const content = Components.find((item) => item.id === Number(id));
  const sanitizedCode = DOMPurify.sanitize(content.Code);
  console.log(content.type);
  return (
    <div className="px-5 md:px-20">
      <button
        className="text-white border px-4 py-2 rounded-md my-5"
        onClick={() => navigate(-1)}
      >
        {" "}
        Back
      </button>
      <h1 className=" bg-gradient-to-r bg-clip-text text-transparent from-blue-500 via-purple-400 to-purple-600 text-xl font-semibold">
        Source Code
      </h1>
      <CopyBtn code={content.Code} />
      <div className="border border-slate-800 bg-slate-950 p-5 rounded-md overflow-scroll md:overflow-hidden">
        <pre>
          <h1 className="text-xs text-gray-300 md:text-md">{content.Code}</h1>
        </pre>
      </div>
      {/* Component */}
      <div className="flex justify-center items-center py-[100px]">
        <div dangerouslySetInnerHTML={{ __html: sanitizedCode }} />
      </div>
    </div>
  );
};

export default CardContent;
