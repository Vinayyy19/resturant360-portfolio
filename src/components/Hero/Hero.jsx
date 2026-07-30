// Import CSS
import "./Hero.css";

// Import Bento Grid Component
import BentoGrid from "../BentoGrid/BentoGrid";

// Hero Component
function Hero() {
  return (
    <section className="hero">
      {/* Left Content */}
      <div className="hero-left">
        {/* Badge */}
        <div className="hero-badge">
          ✨ VERSION 2.0 NOW LIVE
        </div>

        {/* Heading */}
        <h1>
          All-in-One
          <br />
          <span>Restaurant</span>
          <br />
          Management
        </h1>

        {/* Description */}
        <p>
          From POS to Kitchen Display Systems — we've got you covered.
          Empower your staff and delight your guests with seamless
          technology.
        </p>

        {/* Buttons */}
        <div className="hero-buttons">
          <button className="primary-btn">
            View Plans
          </button>

          <button className="secondary-btn">
            ▶ Book a Demo
          </button>
        </div>

        {/* Trusted */}
        <div className="trusted">
          👥 Trusted by 5,000+ kitchens worldwide
        </div>
      </div>

      {/* Right Side Bento Grid */}
      <BentoGrid />
    </section>
  );
}

export default Hero;