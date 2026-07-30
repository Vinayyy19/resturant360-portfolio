import React, { useEffect } from 'react';

export default function App() {
  // Effect to apply subtle interactive tilt on clay cards matching the original template
  useEffect(() => {
    const cards = document.querySelectorAll('.clay-card');
    
    const handleMouseMove = (e) => {
      const card = e.currentTarget;
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      
      const rotateX = (y - centerY) / 25;
      const rotateY = (centerX - x) / 25;
      
      card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.02)`;
    };

    const handleMouseLeave = (e) => {
      const card = e.currentTarget;
      card.style.transform = `perspective(1000px) rotateX(0deg) rotateY(0deg) scale(1)`;
    };

    cards.forEach(card => {
      card.addEventListener('mousemove', handleMouseMove);
      card.addEventListener('mouseleave', handleMouseLeave);
    });

    return () => {
      cards.forEach(card => {
        card.removeEventListener('mousemove', handleMouseMove);
        card.removeEventListener('mouseleave', handleMouseLeave);
      });
    };
  }, []);

  return (
    <main className="pt-32 pb-20 px-8 max-w-7xl mx-auto font-sans text-[#191c1e]">
      {/* Precision Tools / Features Bento Section */}
      <section className="py-16">
        
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-[32px] font-bold leading-[1.25] text-[#191c1e] mb-2">
            Precision Tools for Modern Dining
          </h2>
          <p className="text-base leading-[1.6] text-[#5a4136] max-w-2xl mx-auto">
            Every module is built to handle the rush of a busy kitchen, with a tactile interface designed for speed and accuracy.
          </p>
        </div>

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          {/* Real-time Analytics Card */}
          <div className="clay-card p-8 hover:-translate-y-2 transition-transform cursor-pointer">
            <div className="clay-icon-container mb-6">
              <span className="material-symbols-outlined">bar_chart</span>
            </div>
            <h3 className="text-[24px] font-bold leading-[1.3] text-[#191c1e] mb-3">
              Real-time Analytics
            </h3>
            <p className="text-base leading-[1.6] text-[#5a4136]">
              Track every plate and penny as it happens. Make data-driven decisions on the fly with live dashboarding.
            </p>
          </div>

          {/* Smart Inventory Card */}
          <div className="clay-card p-8 hover:-translate-y-2 transition-transform cursor-pointer">
            <div className="clay-icon-container mb-6">
              <span className="material-symbols-outlined">inventory_2</span>
            </div>
            <h3 className="text-[24px] font-bold leading-[1.3] text-[#191c1e] mb-3">
              Smart Inventory
            </h3>
            <p className="text-base leading-[1.6] text-[#5a4136]">
              Automated stock tracking that warns you before you run out of key ingredients. Predictive ordering built-in.
            </p>
          </div>

          {/* POS & Billing Card */}
          <div className="clay-card p-8 hover:-translate-y-2 transition-transform cursor-pointer">
            <div className="clay-icon-container mb-6">
              <span className="material-symbols-outlined">point_of_sale</span>
            </div>
            <h3 className="text-[24px] font-bold leading-[1.3] text-[#191c1e] mb-3">
              POS & Billing
            </h3>
            <p className="text-base leading-[1.6] text-[#5a4136]">
              Lightning-fast interface designed for high-volume transactions, split checks, and mobile payments.
            </p>
          </div>

        </div>
      </section>
    </main>
  );
}