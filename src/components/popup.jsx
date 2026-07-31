import { useState } from 'react';

function Popup({ onClose }) {
  const [selectedPlan, setSelectedPlan] = useState('yearly');

  const plans = [
    {
      id: 'monthly',
      name: '1. Monthly Plan',
      price: '$49 / mo',
      desc: 'Flexible month-to-month billing. Cancel anytime.',
      badge: 'Flexible'
    },
    {
      id: 'yearly',
      name: '2. Yearly Plan',
      price: '$39 / mo',
      desc: 'Billed annually ($468/yr). Save 20% with priority support.',
      badge: 'Best Value'
    },
    {
      id: 'custom',
      name: '3. Custom Plan',
      price: 'Custom Pricing',
      desc: 'Tailored for multi-location restaurants & enterprise needs.',
      badge: 'Enterprise'
    }
  ];

  const handleSelectPlan = (planId) => {
    setSelectedPlan(planId);
  };

  const handleConfirm = () => {
    alert(`You selected the ${plans.find(p => p.id === selectedPlan)?.name}! We will reach out to set up your account.`);
    onClose();
  };

  return (
    <div
      className="popup-overlay"
      onClick={onClose}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'rgba(0, 0, 0, 0.65)',
        backdropFilter: 'blur(8px)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 10000,
        padding: '20px'
      }}
    >
      <div
        className="popup-content"
        onClick={(e) => e.stopPropagation()}
        style={{
          background: 'linear-gradient(135deg, #ffffff, #f9f9f9)',
          padding: '36px 30px',
          borderRadius: '32px',
          maxWidth: '520px',
          width: '100%',
          textAlign: 'center',
          border: '1.5px solid rgba(255, 255, 255, 0.8)',
          boxShadow: '0 24px 60px rgba(0, 0, 0, 0.25), inset 0 2px 4px rgba(255, 255, 255, 0.9), inset 0 -3px 8px rgba(0, 0, 0, 0.04)',
          position: 'relative'
        }}
      >
        <button
          onClick={onClose}
          style={{
            position: 'absolute',
            top: '16px',
            right: '16px',
            background: 'rgba(0,0,0,0.06)',
            border: 'none',
            fontSize: '18px',
            width: '34px',
            height: '34px',
            borderRadius: '50%',
            cursor: 'pointer',
            fontWeight: 'bold',
            color: '#555',
            transition: 'background 0.2s'
          }}
        >
          ✕
        </button>

        <h2 style={{ fontSize: '26px', fontWeight: '800', color: '#111', marginBottom: '6px' }}>
          Choose Your <span style={{ color: '#ff6b00' }}>Plan</span>
        </h2>
        <p style={{ color: '#666', fontSize: '14px', marginBottom: '24px' }}>
          Select the option that best matches your restaurant operations:
        </p>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '14px', marginBottom: '24px' }}>
          {plans.map((plan) => {
            const isSelected = selectedPlan === plan.id;
            return (
              <div
                key={plan.id}
                onClick={() => handleSelectPlan(plan.id)}
                style={{
                  padding: '16px 20px',
                  borderRadius: '20px',
                  border: isSelected ? '2px solid #ff6b00' : '1.5px solid rgba(0,0,0,0.08)',
                  background: isSelected ? 'rgba(255, 107, 0, 0.04)' : '#ffffff',
                  boxShadow: isSelected
                    ? '0 8px 20px rgba(255, 107, 0, 0.15), inset 0 2px 4px rgba(255,255,255,0.9)'
                    : '0 4px 12px rgba(0,0,0,0.03)',
                  cursor: 'pointer',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  textAlign: 'left',
                  transition: 'all 0.25s ease'
                }}
              >
                <div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '4px' }}>
                    <h3 style={{ fontSize: '16px', fontWeight: '700', color: '#111', margin: 0 }}>
                      {plan.name}
                    </h3>
                    {plan.badge && (
                      <span
                        style={{
                          fontSize: '11px',
                          fontWeight: '700',
                          padding: '2px 8px',
                          borderRadius: '12px',
                          background: isSelected ? '#ff6b00' : '#f0f0f0',
                          color: isSelected ? '#fff' : '#666'
                        }}
                      >
                        {plan.badge}
                      </span>
                    )}
                  </div>
                  <p style={{ fontSize: '12px', color: '#666', margin: 0 }}>{plan.desc}</p>
                </div>

                <div style={{ textAlign: 'right', minWidth: '100px' }}>
                  <span style={{ fontSize: '15px', fontWeight: '800', color: '#ff6b00' }}>
                    {plan.price}
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        <button
          onClick={handleConfirm}
          style={{
            width: '100%',
            background: 'linear-gradient(135deg, #ff6b00, #ff8c00)',
            color: '#fff',
            padding: '15px',
            borderRadius: '50px',
            fontSize: '16px',
            fontWeight: '700',
            border: 'none',
            cursor: 'pointer',
            boxShadow: '0 10px 24px rgba(255, 107, 0, 0.3), inset 0 2px 4px rgba(255,255,255,0.4)',
            transition: 'transform 0.2s, box-shadow 0.2s'
          }}
        >
          Proceed with Selected Plan
        </button>
      </div>
    </div>
  );
}

export default Popup;
