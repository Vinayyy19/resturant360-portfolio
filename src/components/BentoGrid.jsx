import "../styles/BentoGrid.css";
import sec2 from "../../imgs/sec2.jpg";
import sec3 from "../../imgs/sec 3.jpg";

function BentoGrid() {
  return (
    <div className="bento-grid">
      {/* Kitchen Systems */}
      <div className="card bento-card">
        <img src={sec2} alt="Kitchen Systems" />
        <div className="overlay-badge">
          <h3>Kitchen Systems</h3>
          <p>Sync orders & workflow in real-time</p>
        </div>
      </div>

      {/* Advanced Analytics */}
      <div className="card bento-card">
        <img src={sec3} alt="Advanced Analytics" />
        <div className="overlay-badge">
          <div className="icon">📈</div>
          <h3>Advanced Analytics</h3>
          <p>Track every plate, order & penny</p>
        </div>
      </div>
    </div>
  );
}

export default BentoGrid;