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
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-0 border border-[#E5E5E5]">
          {sectors.map((sector, i) => (
            <div
              key={sector.name}
              className={`group text-center py-8 px-4 bg-white hover:bg-[#0A0A0A] transition-colors duration-200 ${
                i < sectors.length - 1 ? 'border-r border-[#E5E5E5]' : ''
              }`}
            >
              <div className="w-1.5 h-1.5 bg-[#00D4AA] mx-auto mb-3" />
              <p className="text-sm font-medium text-[#0A0A0A] group-hover:text-white mb-1 transition-colors">{sector.name}</p>
              <p className="text-xs text-gray-400 group-hover:text-gray-500 leading-tight transition-colors">{sector.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
