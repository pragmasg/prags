export default function SocialProof() {
  const sectors = [
    { name: 'E-commerce', desc: 'Revenue & inventory dashboards' },
    { name: 'SaaS', desc: 'Product analytics & onboarding' },
    { name: 'Fintech', desc: 'Reporting & compliance automation' },
    { name: 'Logistics', desc: 'Operations & tracking workflows' },
    { name: 'Healthcare', desc: 'Data pipelines & reporting' },
    { name: 'Agencies', desc: 'White-label AI tooling' },
  ];

  return (
    <section className="bg-[#FAFAF8] py-16 border-y border-[#E5E5E5]">
      <div className="max-w-7xl mx-auto px-6">
        <p className="text-xs uppercase tracking-widest text-gray-400 mb-8 text-center">
          — INDUSTRIES WE WORK WITH
        </p>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {sectors.map((sector) => (
            <div
              key={sector.name}
              className="text-center py-6 px-4 border border-[#E5E5E5] bg-white hover:border-[#0A0A0A] transition-colors"
            >
              <p className="text-sm font-medium text-[#0A0A0A] mb-1">{sector.name}</p>
              <p className="text-xs text-gray-400 leading-tight">{sector.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
