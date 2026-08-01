import { useState } from "react";
import "./styles/lower.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import "./styles/lower.css";
import Pricing from "./components/Pricing";
import Activation from "./components/Activation";
import Pricing from "./components/Pricing";
import CTA from "./components/CTA";
import Footer from "./components/Footer";
import Popup from "./components/popup";

function App() {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const handleOpenPopup = () => setIsPopupOpen(true);
  const handleClosePopup = () => setIsPopupOpen(false);

  return (
    <>
      <Navbar onOpenPopup={handleOpenPopup} />
      <Hero />
      <Activation />

      <Pricing/>
      <CTA />

      <Pricing onOpenPopup={handleOpenPopup} />
      <CTA onOpenPopup={handleOpenPopup} />

      <Footer />
      {isPopupOpen && <Popup onClose={handleClosePopup} />}
    </>
  );
}

export default App;