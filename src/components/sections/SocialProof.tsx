'use client';

import { motion } from 'framer-motion';

/* Placeholder client logos — rendered as wordmarks in premium style */
const clients = [
  { name: 'Meridian Capital',  abbr: 'MCAP'  },
  { name: 'Helix Systems',     abbr: 'HLX'   },
  { name: 'Aura Commerce',     abbr: 'AURA'  },
  { name: 'NovaMed',           abbr: 'NVM'   },
  { name: 'Finlayer',          abbr: 'FIN'   },
  { name: 'Praxis Group',      abbr: 'PRXS'  },
];

const sectors = [
  { name: 'E-commerce',  desc: 'Revenue & inventory intelligence' },
  { name: 'SaaS',        desc: 'Product analytics & onboarding' },
  { name: 'Fintech',     desc: 'Compliance automation & reporting' },
  { name: 'Logistics',   desc: 'Operations & tracking workflows' },
  { name: 'Healthcare',  desc: 'Data pipelines & clinical analytics' },
  { name: 'Agencies',    desc: 'White-label AI infrastructure' },
];

const testimonial = {
  quote: "Pragmas built what a Big Four firm quoted us at $800k — in 5 days, for a fraction of the cost. The quality was indistinguishable.",
  author: 'Chief Operating Officer',
  company: 'Series B Fintech · Europe',
};

export default function SocialProof() {
  return (
    <section className="bg-[#07101F] py-24 border-b border-[rgba(148,163,184,0.07)]">
      <div className="max-w-7xl mx-auto px-6">

        {/* ─── Client logo strip ─── */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-20"
        >
          <p className="text-[10px] uppercase tracking-[0.2em] text-[#4A5B72] font-mono text-center mb-10">
            Trusted by forward-looking teams
          </p>

          <div className="grid grid-cols-3 md:grid-cols-6 gap-px bg-[rgba(148,163,184,0.07)]">
            {clients.map((client, i) => (
              <motion.div
                key={client.name}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.07 }}
                className="bg-[#07101F] px-6 py-8 flex flex-col items-center justify-center gap-1 group hover:bg-[#0B1828] transition-colors duration-300"
              >
                <span
                  className="text-[11px] font-bold tracking-[0.25em] text-[#4A5B72] group-hover:text-[#8A9BB5] transition-colors duration-300"
                  style={{ fontFamily: 'var(--font-mono)' }}
                >
                  {client.abbr}
                </span>
                <span className="text-[9px] tracking-wide text-[#2A3B52] group-hover:text-[#4A5B72] transition-colors duration-300">
                  {client.name}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* ─── Testimonial ─── */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="mb-20 max-w-3xl mx-auto text-center"
        >
          <div
            className="relative glass-gold px-8 py-10 lg:px-14 lg:py-14"
            style={{ boxShadow: '0 16px 48px rgba(0,0,0,0.3), 0 0 0 1px rgba(201,168,76,0.1)' }}
          >
            {/* Gold quote mark */}
            <div
              className="absolute top-8 left-8 text-[80px] leading-none text-[#C9A84C] opacity-15 select-none"
              style={{ fontFamily: 'Georgia, serif' }}
              aria-hidden="true"
            >
              &ldquo;
            </div>

            <p
              className="relative text-[18px] lg:text-[20px] font-medium leading-[1.65] text-[#EDE8E0] mb-8 italic"
              style={{ fontFamily: 'var(--font-display)' }}
            >
              {testimonial.quote}
            </p>

            <div className="flex items-center justify-center gap-3">
              <div className="w-8 h-px bg-[rgba(201,168,76,0.4)]" />
              <div>
                <p className="text-[12px] font-semibold text-[#C9A84C]">{testimonial.author}</p>
                <p className="text-[11px] text-[#4A5B72] font-mono">{testimonial.company}</p>
              </div>
              <div className="w-8 h-px bg-[rgba(201,168,76,0.4)]" />
            </div>
          </div>
        </motion.div>

        {/* ─── Sector grid ─── */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="section-label text-center mb-8">Industries we serve</p>
          <h2
            className="text-[28px] lg:text-[36px] font-bold text-[#EDE8E0] text-center mb-12 tracking-tight"
            style={{ fontFamily: 'var(--font-display)' }}
          >
            Built for teams that move fast
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-px bg-[rgba(148,163,184,0.07)]">
            {sectors.map((sector, index) => (
              <motion.div
                key={sector.name}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
                className="group bg-[#07101F] hover:bg-[#0B1828] transition-all duration-300 p-6 cursor-default"
              >
                <div className="w-1 h-6 bg-[rgba(201,168,76,0.2)] group-hover:bg-[#C9A84C] transition-colors duration-300 mb-5" />
                <p
                  className="text-[13px] font-semibold text-[#EDE8E0] mb-2"
                  style={{ fontFamily: 'var(--font-display)' }}
                >
                  {sector.name}
                </p>
                <p className="text-[11px] text-[#4A5B72] leading-relaxed">{sector.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  );
}
