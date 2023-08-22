import { useState } from "react";

import { IoText } from "react-icons/io5";
import { IoRadioButtonOnOutline } from "react-icons/io5";
import { PiCardsFill } from "react-icons/pi";

const Filter = ({ handle, current }) => {
  const optionStyle = `flex items-center gap-1 bg-gradient-to-b from-[#2c2c2e] via-[#231A29] to-[#100814]  text-white  py-2 px-3 rounded-md `;

  const [isOpen, setIsOpen] = useState(false)

  const setButtonVal = (value) => {
    handle(value)
    setIsOpen((e) => !e)
  }
  return (
    <div className=" px-10 md:px-32 md:py-10 first-letter: lg:px-48 lg:py-0">
      {/* <select
        onChange={(e) => handle(e.target.value)}
        className="rounded-md py-2 px-3 bg-gradient-to-b from-[#2c2c2e] via-[#231A29] to-[#100814]  text-white border border-gray-900 font-semibold "
      >
        <option value="" disabled hidden>
          Choose here
        </option>
        <option value="Button" className={optionStyle}>
          Button
        </option>
        <option value="Nav">Navigation Bar</option>
        <option value="Card" className="rounded-md">
          Card
          </option>
        </select> */}
      {/* Mobile */}
      <div className="">
        <button className="min-w-[80px] rounded-md py-2 px-3 bg-gradient-to-b from-[#2c2c2e] via-[#231A29] to-[#100814]  text-white border border-gray-900 font-semibold" onClick={() => setIsOpen(e => !e)}> {current ? current : "Choose Here"}</button >
        {isOpen ?
          <div className="absolute   flex flex-col my-1 bg-gray-900 min-w-[80px] rounded-md p-1 space-y-1">
            <button onClick={() => setButtonVal("Button")} className={optionStyle}><IoRadioButtonOnOutline />Button</button>
            <button onClick={() => setButtonVal("Text")} className={optionStyle}><IoText />Text</button>
            <button onClick={() => setButtonVal("Cards")} className={optionStyle}><PiCardsFill />Cards</button>
          </div> : ""
        }
      </div >
      {/* Desktop */}
    </div>
  );
};

export default Filter;
