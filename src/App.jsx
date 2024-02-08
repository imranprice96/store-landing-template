import { useState } from "react";
import "./styles/App.css";
import Header from "./components/Header";
import HomeSection from "./components/HomeSection";
import HoursSection from "./components/HoursSection";
import LocationSection from "./components/LocationSection";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Header />
      <div className="main-body">
        <HomeSection />
        <LocationSection />
        <HoursSection />
        <ContactSection />
      </div>
      <Footer />
    </>
  );
}

export default App;
