const sectors = [
  { name: 'E-commerce', desc: 'Revenue & inventory dashboards' },
  { name: 'SaaS', desc: 'Product analytics & onboarding' },
  { name: 'Fintech', desc: 'Reporting & compliance automation' },
  { name: 'Logistics', desc: 'Operations & tracking workflows' },
  { name: 'Healthcare', desc: 'Data pipelines & reporting' },
  { name: 'Agencies', desc: 'White-label AI tooling' },
];

export default function SocialProof() {
  return (
    <section className="bg-[#050510] py-20 border-b border-white/[0.08]">
      <div className="max-w-7xl mx-auto px-6">
        <p className="text-xs uppercase tracking-widest text-[#00FF9D] mb-4 text-center">
          Industries we work with
        </p>
        <p className="text-2xl font-bold text-[#F0F4FF] text-center mb-12">
          Built for teams that move fast
        </p>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-0">
          {sectors.map((sector, index) => (
            <div
              key={sector.name}
              className="group relative bg-white/[0.03] border border-white/[0.08] p-6 hover:bg-white/[0.07] hover:border-[#00FF9D]/30 hover:shadow-[0_0_30px_rgba(0,255,157,0.06)] transition-all duration-300 cursor-default animate-[fadeInUp_0.5s_ease-out_both]"
              style={{ animationDelay: `${index * 0.08}s` }}
            >
              <div className="w-1.5 h-1.5 bg-[#00FF9D] mb-4" />
              <p className="text-sm font-semibold text-[#F0F4FF] mb-1.5">{sector.name}</p>
              <p className="text-xs text-[#8892AA] leading-relaxed">{sector.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
