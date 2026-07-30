import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import "./styles/lower.css";
import Pricing from "./components/Pricing";
import Activation from "./components/Activation";
import CTA from "./components/CTA";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Activation />
      <Pricing/>
      <CTA />
      <Footer />
    </>
  );
}

export default App;