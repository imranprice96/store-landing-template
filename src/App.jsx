import { useState } from "react";
import "./styles/App.css";
import Header from "./components/Header";
import HomeSection from "./components/HomeSection";
import HoursSection from "./components/HoursSection";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Header />
      <div className="main-body">
        <HomeSection />
        <HoursSection />
      </div>
    </>
  );
}

export default App;
