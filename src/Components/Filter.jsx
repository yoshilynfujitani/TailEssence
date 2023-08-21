const Filter = ({ handle }) => {
  const optionStyle = `bg-red-500 rounded-md`;
  return (
    <div className=" px-10 md:p-32 lg:p-48">
      <select
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
      </select>
    </div>
  );
};

export default Filter;
