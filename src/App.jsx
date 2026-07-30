
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import "./styles/lower.css";

import Activation from "./components/Activation";
import Pricing from "./components/Pricing";
import CTA from "./components/CTA";
import Footer from "./components/Footer";

function App() {
  return (
    <>
     <Navbar />
      <Hero />
      <Activation />
      <Pricing />
      <CTA />
      <Footer />

    </>
  );
}

export default App;