function Pricing() {
  return (
    <section className="pricing">

      <div className="pricing-header">
        <span className="pricing-tag">Pricing</span>
        <h2>Simple Pricing. Powerful Features.</h2>
        <p>
          Everything your restaurant needs in one affordable monthly plan.
        </p>
      </div>

      <div className="pricing-card">

        {/* Left */}
        <div className="pricing-left">

          <div className="badge">
            ⭐ Most Popular
          </div>

          <h2>Restaurant360 Pro</h2>

          <h1>
            ₹79
            <span>/month</span>
          </h1>

        </div>

        {/* Middle */}

        <div className="pricing-features">

          <div>✔ POS Billing</div>
          <div>✔ Inventory Management</div>
          <div>✔ Kitchen Display</div>
          <div>✔ Employee Management</div>
          <div>✔ Sales Analytics</div>
          <div>✔ 24×7 Support</div>

        </div>

        {/* Right */}

        <div className="pricing-action">

          <button>
            Start Free Trial →
          </button>

          <small>
            No setup fee <br />
            Cancel anytime
          </small>

        </div>

      </div>

    </section>
  );
}

export default Pricing;