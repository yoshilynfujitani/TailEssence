const Header = () => {
  return (
    <section className="text-center px-10 py-20 md:px-32 md:py-24  lg:px-48 lg:py-40">
      <h1 className="text-4xl font-bold bg-gradient-to-b from-slate-50 to-gray-400 bg-clip-text text-transparent md:text-6xl lg:leading-[80px]">
        Make design and development easier
      </h1>
      <p className="py-5 text-md text-gray-300 lg:text-xl">
        Start building your website with these pre-built React components styled
        with TailwindCSS.
      </p>
      {/* <button className="transition-all bg-gradient-to-r from-gray-900 to-purple-950  text-white rounded-full px-4 py-2 font-semibold border border-gray-600  active:border-slate-400">
        Start Browsing
      </button> */}
    </section>
  );
};

export default Header;
