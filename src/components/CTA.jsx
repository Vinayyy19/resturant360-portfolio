function CTA({ onOpenPopup }) {
  return (
    <section className="service-cta" id="cta-section">
      <div className="cta-container">
        {/* Left Content */}
        <div className="cta-content">
          <h2>Ready to Transform Your Service?</h2>

          <p>
            Join thousands of restaurants using Restaurant360 to streamline
            operations, improve customer experience, and grow their business.
          </p>

          <div className="cta-buttons">
            <button className="primary-btn" onClick={onOpenPopup}>
              Request Demo
            </button>
            <button className="secondary-btn" onClick={onOpenPopup}>
              Contact Sales
            </button>
          </div>
        </div>

        {/* Right Image */}
        <div className="cta-image">
          <img
            src="/imgs/sec2.jpg"
            alt="Restaurant Team"
          />
        </div>
      </div>
    </section>
  );
}

export default CTA;