const stack = [
  { name: 'Next.js', desc: 'React framework', category: 'Frontend' },
  { name: 'Supabase', desc: 'Auth & database', category: 'Backend' },
  { name: 'n8n', desc: 'Workflow automation', category: 'Automation' },
  { name: 'Anthropic', desc: 'AI & language models', category: 'AI' },
  { name: 'Vercel', desc: 'Edge deployment', category: 'Infra' },
  { name: 'TypeScript', desc: 'Type-safe code', category: 'Language' },
];

export default function TechStack() {
  return (
    <section className="bg-[#0D0D1A] py-16 lg:py-20 border-t border-white/[0.08]">
      <div className="max-w-7xl mx-auto px-6">
        <p className="text-xs uppercase tracking-widest text-[#8892AA] mb-10 text-center">
          — Built with the tools modern teams use
        </p>

        <div className="grid grid-cols-3 md:grid-cols-6 gap-0 border border-white/[0.08]">
          {stack.map((item, i) => (
            <div
              key={item.name}
              className={`group p-6 lg:p-8 text-center border-r border-white/[0.08] last:border-r-0 hover:bg-white/[0.04] transition-all duration-200 relative overflow-hidden${
                i < stack.length - 1 ? '' : ' border-r-0'
              }`}
            >
              {/* Animated top accent bar */}
              <div className="h-0.5 bg-[#00FF9D] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left mb-4" />

              <p className="text-[10px] uppercase tracking-widest text-[#00FF9D] mb-2">
                {item.category}
              </p>
              <p className="text-sm font-bold text-[#F0F4FF]">{item.name}</p>
              <p className="text-xs text-[#8892AA] mt-1">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
