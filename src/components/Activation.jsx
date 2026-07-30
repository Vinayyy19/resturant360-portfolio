const steps = [
  {
    number: "1",
    title: "Choose Your Plan",
    desc: "Select the perfect plan based on your restaurant size.",
    icon: "📋"
  },
  {
    number: "2",
    title: "Secure Payment",
    desc: "Complete payment safely with encrypted checkout.",
    icon: "💳"
  },
  {
    number: "3",
    title: "Get Instant Access",
    desc: "Receive your Restaurant360 dashboard credentials instantly.",
    icon: "🚀"
  }
];

function Activation() {
  return (
    <section className="activation">

      <div className="activation-header">
        <span>Getting Started</span>

        <h2>How to Activate</h2>

        <p>
          Launch your restaurant management system in less than 5 minutes.
        </p>
      </div>

      <div className="steps">
        {steps.map((step) => (
          <div className="step" key={step.number}>

            <div className="circle">
              {step.number}
            </div>

            <div className="icon">
              {step.icon}
            </div>

            <h3>{step.title}</h3>

            <p>{step.desc}</p>

          </div>
        ))}
      </div>

      <button className="activate-btn">
        Activate Your Restaurant →
      </button>

    </section>
  );
}

export default Activation;