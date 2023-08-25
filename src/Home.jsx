import Card from "./Components/Card";
import Components from "./Components";

const Home = ({ currentItem }) => {
  let filteredComponent;

  if (currentItem === "") {
    filteredComponent = Components;
  } else {
    filteredComponent = Components.filter((item) => item.type === currentItem);
  }

  console.log(currentItem);

  return (
    <div className="text-white py-5 grid gap-2 grid-cols-1 md:grid-cols-3 md:px-32">
      {filteredComponent.map((item) => (
        <Card content={item} key={item.id} />
      ))}
    </div>
  );
};

export default Home;
