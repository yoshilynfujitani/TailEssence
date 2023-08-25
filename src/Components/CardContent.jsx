import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import Components from "../Components";
import Card from "./Card";

const CardContent = () => {
  const navigate = useNavigate();
  let { id } = useParams();

  const content = Components.find((item) => item.id === Number(id));
  console.log(content.type);
  return (
    <div className="px-5 md:px-32">
      <button className="text-white" onClick={() => navigate(-1)}>
        {" "}
        Back
      </button>
      <h1 className=" bg-gradient-to-r bg-clip-text text-transparent from-blue-500 via-purple-400 to-purple-600 text-xl font-semibold">
        Code
      </h1>
      <div className="border border-slate-800 bg-slate-900 p-5 rounded-md">
        <h1 className="text-white">{content.Code}</h1>
      </div>
      <Card content={content} />
    </div>
  );
};

export default CardContent;
