import "../styles/Hero.css";
import BentoGrid from "./BentoGrid";

function Hero() {
  return (
    <section className="hero">
      <div className="hero-left">
        <div className="hero-badge">
          ✨ VERSION 2.0 NOW LIVE
        </div>
        <h1>
          All-in-One
          <br />
          <span>Restaurant</span>
          <br />
          Management
        </h1>
        <p>
          From POS to Kitchen Display Systems — we've got you covered.
          Empower your staff and delight your guests with seamless
          technology.
        </p>
        <div className="hero-buttons">
          <a href="#pricing-section" className="primary-btn" style={{ textDecoration: 'none' }}>
            View Plans
          </a>
          <a href="#cta-section" className="secondary-btn" style={{ textDecoration: 'none' }}>
            ▶ Book a Demo
          </a>
        </div>
        <div className="trusted">
          👥 Trusted by 5,000+ kitchens worldwide
        </div>
      </div>
      <BentoGrid />
    </section>
  );
}

export default Hero;