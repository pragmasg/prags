'use client';

import { motion } from 'framer-motion';

const stack = [
  { name: 'Next.js',    desc: 'React framework',       category: 'Frontend'   },
  { name: 'Supabase',   desc: 'Auth & database',       category: 'Backend'    },
  { name: 'n8n',        desc: 'Workflow automation',   category: 'Automation' },
  { name: 'Anthropic',  desc: 'AI & language models',  category: 'AI'         },
  { name: 'Vercel',     desc: 'Edge deployment',       category: 'Infra'      },
  { name: 'TypeScript', desc: 'Type-safe code',        category: 'Language'   },
];

export default function TechStack() {
  return (
    <section className="bg-[#0B1828] py-16 border-y border-[rgba(148,163,184,0.07)]">
      <div className="max-w-7xl mx-auto px-6">
        <p className="text-[10px] uppercase tracking-[0.2em] text-[#4A5B72] font-mono text-center mb-10">
          — Built with the tools modern teams trust
        </p>

        <div className="grid grid-cols-3 md:grid-cols-6 gap-px bg-[rgba(148,163,184,0.07)]">
          {stack.map((item, i) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.07 }}
              className="group bg-[#0B1828] hover:bg-[#0F2040] transition-all duration-300 p-6 lg:p-8 text-center relative overflow-hidden"
            >
              {/* Gold top accent */}
              <div className="absolute top-0 left-4 right-4 h-px bg-[#C9A84C] scale-x-0 group-hover:scale-x-100 transition-transform duration-400 origin-left" />

              <p
                className="text-[9px] uppercase tracking-[0.18em] text-[#C9A84C] mb-3 opacity-60 group-hover:opacity-100 transition-opacity duration-300"
                style={{ fontFamily: 'var(--font-mono)' }}
              >
                {item.category}
              </p>
              <p
                className="text-[14px] font-bold text-[#EDE8E0] mb-1"
                style={{ fontFamily: 'var(--font-display)' }}
              >
                {item.name}
              </p>
              <p className="text-[11px] text-[#4A5B72] group-hover:text-[#8A9BB5] transition-colors duration-300">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
