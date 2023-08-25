import { useState } from "react";
import Header from "./Components/Header";
import Home from "./Home";
import Filter from "./Components/Filter";
import Navbar from "./Components/Navbar";
import CardContent from "./Components/CardContent";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  const [currentItem, setCurrentItem] = useState("");

  const handleCurrentItem = (itemType) => {
    setCurrentItem(itemType);
  };
  return (
    <main className="min-h-screen  bg-gradient-to-b from-bg-gradient1 to-bg-gradient2 ">
      <Navbar />
      <Header />

      <BrowserRouter>
        <Filter handle={handleCurrentItem} current={currentItem} />
        <Routes>
          <Route
            path="/TailEssence/"
            element={<Home currentItem={currentItem} />}
          />
          <Route path="/TailEssence/details/:id" element={<CardContent />} />
        </Routes>
      </BrowserRouter>
    </main>
  );
}

export default App;
