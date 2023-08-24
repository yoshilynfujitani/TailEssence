import DOMPurify from "dompurify";
import { useState } from "react";

const Card = ({ content }) => {
  const { Title, type, Code } = content;
  const [inCard, setInCard] = useState(false);

  const sanitizedCode = DOMPurify.sanitize(Code);

  return (
    <div
      className="relative transition bg-gradient-to-b from-[#090409] to-[#09010a] rounded-md min-h-[300px] mx-10 md:mx-0 flex items-center justify-center cursor-pointer "
      onMouseEnter={() => setInCard(true)}
      onMouseLeave={() => setInCard(false)}
    >
      <div dangerouslySetInnerHTML={{ __html: sanitizedCode }} />

      {inCard && <div className="absolute bottom-0 py-5">View Source Code</div>}
    </div>
  );
};

export default Card;
