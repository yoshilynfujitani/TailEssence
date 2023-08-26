import { BiPhoneCall } from "react-icons/bi";

const Navbar = () => {
  return (
    <div className="md:sticky md:top-0 z-20 bg-[#161515]/30 backdrop-blur-md text-white py-2  ">
      <div className="container flex items-center justify-between px-5 md:px-20">
        <h1 className="text-lg font-semibold md:text-2xl">
          Tail
          <span className="bg-gradient-to-r bg-clip-text text-transparent from-blue-500 via-purple-400 to-purple-600">
            Essence
          </span>
        </h1>
        <h1 className="text-gray-200 md:text-lg">
          <BiPhoneCall />
        </h1>
      </div>
    </div>
  );
};

export default Navbar;
