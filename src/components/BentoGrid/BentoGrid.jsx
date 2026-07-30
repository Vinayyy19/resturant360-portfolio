// Import CSS
import "./BentoGrid.css";

// Import images
import hero from "../../assets/hero.png";

// Bento Grid Component
function BentoGrid() {
  return (
    <div className="bento-grid">

      {/* Large POS Card */}
      <div className="card large-card">
        <img src={hero} alt="POS" />

        <div className="overlay">
          <h3>Point of Sale</h3>
          <p>Lightning fast orders</p>
        </div>
      </div>

      {/* Kitchen Card */}
      <div className="card small-card">
        <img src={hero} alt="Kitchen" />

        <div className="overlay">
          <h3>Kitchen Systems</h3>
          <p>Sync in real-time</p>
        </div>
      </div>

      {/* Analytics Card */}
      <div className="analytics-card">

        <div className="icon">
          📈
        </div>

        <h3>Advanced Analytics</h3>

        <p>
          Track every plate and penny.
        </p>

      </div>

    </div>
  );
}

export default BentoGrid;