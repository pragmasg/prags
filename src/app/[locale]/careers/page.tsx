import type { Metadata } from 'next';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';

export const metadata: Metadata = {
  title: 'Careers — Pragmas',
  description:
    'Work with Pragmas. We are a lean AI consultancy that collaborates with specialist freelancers on project-based engagements.',
};

export default function CareersPage() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />

      {/* Hero */}
      <section className="max-w-7xl mx-auto px-6 py-24">
        <span className="text-xs tracking-widest uppercase text-gray-500">— CAREERS</span>
        <h1
          className="text-4xl md:text-6xl font-semibold text-[#0A0A0A] mt-6 max-w-3xl leading-tight"
          style={{ fontFamily: 'var(--font-mono, "IBM Plex Mono", monospace)' }}
        >
          Work with us.
        </h1>
        <p className="mt-8 text-lg text-gray-500 max-w-xl leading-relaxed">
          Pragmas is a small, focused team. We stay lean on purpose — it keeps us fast, direct,
          and accountable to our clients. When we bring people in, it's because the work demands
          it and the fit is right.
        </p>
      </section>

      {/* How we work */}
      <section className="bg-[#FAFAF8] py-24">
        <div className="max-w-7xl mx-auto px-6">
          <span className="text-xs tracking-widest uppercase text-gray-500">— HOW WE WORK</span>
          <h2
            className="text-3xl font-semibold text-[#0A0A0A] mt-6 mb-12"
            style={{ fontFamily: 'var(--font-mono, "IBM Plex Mono", monospace)' }}
          >
            What working here looks like.
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-[#E5E5E5]">
            {[
              {
                title: 'Remote-first',
                body: 'We work asynchronously across time zones. There are no mandatory standups. Communication is written, documented, and deliberate. You manage your own time.',
              },
              {
                title: 'Project-based',
                body: 'We do not hire full-time staff for most engagements. Work is structured around specific client projects with clear scopes and defined deliverables — not open-ended roles.',
              },
              {
                title: 'Expert generalists',
                body: 'We value people who can move across the stack. Deep expertise in one area matters, but the ability to pick up adjacent tools and think end-to-end is what makes collaboration here work.',
              },
            ].map((item) => (
              <div key={item.title} className="bg-[#FAFAF8] p-10">
                <h3
                  className="text-lg font-semibold text-[#0A0A0A] mb-4"
                  style={{ fontFamily: 'var(--font-mono, "IBM Plex Mono", monospace)' }}
                >
                  {item.title}
                </h3>
                <p className="text-gray-500 leading-relaxed text-sm">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Open roles */}
      <section className="bg-[#0A0A0A] py-24">
        <div className="max-w-7xl mx-auto px-6">
          <span className="text-xs tracking-widest uppercase text-gray-400">— OPEN ROLES</span>
          <h2
            className="text-3xl font-semibold text-white mt-6 mb-6"
            style={{ fontFamily: 'var(--font-mono, "IBM Plex Mono", monospace)' }}
          >
            No open positions right now.
          </h2>
          <p className="text-gray-400 max-w-xl leading-relaxed mb-8">
            We don't post roles until there's a real project to staff. When something comes up
            that fits your background, we'd rather reach out to someone we already know than
            start from scratch. If you want to be on our radar, send us a short note.
          </p>
          <a
            href="mailto:hello@pragmas.io?subject=Careers"
            className="inline-block border border-white text-white px-8 py-4 text-sm hover:bg-white hover:text-[#0A0A0A] transition-colors"
            style={{ fontFamily: 'var(--font-mono, "IBM Plex Mono", monospace)' }}
          >
            Notify me when roles open
          </a>
        </div>
      </section>

      {/* Freelance & collaboration */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <span className="text-xs tracking-widest uppercase text-gray-500">— FREELANCE</span>
          <h2
            className="text-3xl font-semibold text-[#0A0A0A] mt-6 mb-12"
            style={{ fontFamily: 'var(--font-mono, "IBM Plex Mono", monospace)' }}
          >
            Freelance and collaboration.
          </h2>

          <div className="border border-[#E5E5E5] p-10 max-w-2xl">
            <p className="text-gray-600 leading-relaxed mb-4">
              Most of our project capacity comes from a roster of specialist freelancers we trust
              and have worked with before. When client demand grows or a project calls for a skill
              set outside our core team, we bring in the right person for that engagement.
            </p>
            <p className="text-gray-600 leading-relaxed mb-8">
              If you are a strong practitioner in AI engineering, data infrastructure, backend
              development, or automation — and you want to collaborate on focused, well-scoped
              work — we want to hear from you. Tell us what you do, what you've built, and how
              you prefer to work.
            </p>
            <a
              href="mailto:hello@pragmas.io?subject=Freelance collaboration"
              className="inline-block bg-[#0A0A0A] text-white px-8 py-4 text-sm hover:bg-gray-900 transition-colors"
              style={{ fontFamily: 'var(--font-mono, "IBM Plex Mono", monospace)' }}
            >
              Reach out to collaborate
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
