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
    <section className="bg-white py-16 lg:py-20 border-t border-[#E5E5E5]">
      <div className="max-w-7xl mx-auto px-6">
        <p className="text-xs uppercase tracking-widest text-gray-400 mb-10 text-center">
          — BUILT WITH THE TOOLS MODERN TEAMS USE
        </p>
        <div className="grid grid-cols-3 md:grid-cols-6 gap-0 border border-[#E5E5E5]">
          {stack.map((item, i) => (
            <div
              key={item.name}
              className={`p-6 text-center ${i < stack.length - 1 ? 'border-r border-[#E5E5E5]' : ''} hover:bg-[#FAFAF8] transition-colors`}
            >
              <p className="text-sm font-semibold text-[#0A0A0A] mb-1">{item.name}</p>
              <p className="text-xs text-gray-400">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
