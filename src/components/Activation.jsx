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
    <section className="activation" id="activation-section">
      <h2>How to Activate</h2>
     <p>Set up and running in minutes, not days.</p>
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