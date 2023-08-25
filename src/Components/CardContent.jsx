import React from "react";
import { useNavigate, useParams } from "react-router-dom";

const CardContent = () => {
  const navigate = useNavigate();
  let { id } = useParams();
  return (
    <div className="px-32">
      <button className="text-white" onClick={() => navigate(-1)}>
        {" "}
        Back
      </button>
      <h1 className="text-white">{id}</h1>
    </div>
  );
};

export default CardContent;
