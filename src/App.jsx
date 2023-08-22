import { useState } from "react";
import Header from "./Components/Header";
import Home from "./Home";
import Filter from "./Components/Filter";
import Navbar from "./Components/Navbar";

function App() {
  const [currentItem, setCurrentItem] = useState();

  const handleCurrentItem = (itemType) => {
    setCurrentItem(itemType);
  };
  return (
    <main className="h-screen w-screen overflow-clip bg-gradient-to-b from-bg-gradient1 to-bg-gradient2 ">
      <Navbar />
      <Header />
      <Filter handle={handleCurrentItem} current={currentItem} />
      <Home currentItem={currentItem} />
    </main>
  );
}

export default App;
