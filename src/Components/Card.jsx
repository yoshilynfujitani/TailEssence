import DOMPurify from "dompurify";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { Link } from "react-router-dom";

import { BsCode } from "react-icons/bs";
import { BsCodeSlash } from "react-icons/bs";

const Card = ({ content }) => {
  const { id, Title, type, Code } = content;
  const [inCard, setInCard] = useState(false);

  const sanitizedCode = DOMPurify.sanitize(Code);

  return (
    <div
      className="relative  transition bg-gradient-to-b from-[#090409] to-[#09010a] rounded-md min-h-[300px] mx-5 md:mx-0 flex flex-col items-center justify-center cursor-pointer "
      onMouseEnter={() => setInCard(true)}
      onMouseLeave={() => setInCard(false)}
    >
      <div dangerouslySetInnerHTML={{ __html: sanitizedCode }} />
      <AnimatePresence>
        {inCard && (
          <motion.div
            key="modal"
            initial={{ y: 0, opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ y: 20, opacity: 0 }}
            className="absolute py-5 bottom-0  flex items-center justify-center"
          >
            <Link to={`/TailEssence/details/${id}`}>
              <h1 className="flex items-center space-x-2">
                <BsCode />
                View Source Code
              </h1>
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Card;
