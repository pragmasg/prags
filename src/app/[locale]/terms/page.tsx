import type { Metadata } from 'next';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';

export const metadata: Metadata = {
  title: 'Terms of Service — Pragmas',
  description:
    'Terms of service for Pragmas. All work product is fully transferred to you upon final payment.',
};

export default function TermsPage() {
  return (
    <main className="min-h-screen bg-[#0A0A0A]">
      <Navbar />

      <article className="max-w-3xl mx-auto px-6 py-24">
        <span className="text-xs tracking-widest uppercase text-[#F97316]">— LEGAL</span>
        <h1 className="text-4xl font-bold text-[#F5F5F5] mt-6 mb-4">Terms of Service</h1>
        <p className="text-sm text-[#888888] mb-12">Last updated: March 2026</p>

        <div className="space-y-12 text-sm leading-relaxed">
          <section>
            <h2 className="text-xl font-bold mb-4 text-[#F5F5F5]">1. Services</h2>
            <p className="text-[#BBBBBB] mb-4">
              Pragmas (&quot;we&quot;, &quot;us&quot;, &quot;our&quot;) provides software development services including analytics
              dashboards, automation workflows, and AI-powered tools. Each engagement is governed by
              a written project scope document agreed upon by both parties prior to work commencing.
            </p>
            <p className="text-[#BBBBBB]">
              We reserve the right to decline projects at our discretion. Acceptance of a project
              brief does not constitute a binding agreement until a scope document is signed and a
              deposit payment is received.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold mb-4 text-[#F5F5F5]">2. Payment Terms</h2>
            <p className="text-[#BBBBBB] mb-4">
              All projects are priced at a fixed fee as stated in the project scope document. Payment
              schedules are defined per-project, typically as:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-[#BBBBBB] mb-4">
              <li>50% deposit due before work begins</li>
              <li>50% balance due upon delivery of the final deliverable</li>
            </ul>
            <p className="text-[#BBBBBB] mb-4">
              Payments are processed via Stripe. Invoices are due within 7 days of issuance. Late
              payments may result in a pause of work. We do not charge hourly overruns — the fixed
              price in the scope document is final.
            </p>
            <p className="text-[#BBBBBB]">
              Monthly retainer agreements are billed in advance and auto-renew unless cancelled with
              14 days&apos; written notice before the next billing cycle.
            </p>
          </section>

          {/* IP Transfer — highlighted as a selling point */}
          <section className="border-l-2 border-[#F97316] pl-6">
            <h2 className="text-xl font-bold mb-4 text-[#F5F5F5]">3. Intellectual Property</h2>
            <p className="text-[#BBBBBB] mb-4">
              This is our core commitment and a fundamental part of how we operate:
            </p>
            <p className="text-[#F5F5F5] font-medium mb-4">
              All work product — including source code, design assets, documentation, workflow
              configurations, and any other deliverables — is fully and irrevocably transferred to
              the client upon receipt of final payment.
            </p>
            <p className="text-[#BBBBBB] mb-4">
              You own everything we build for you. No licensing fees. No vendor lock-in. No ongoing
              dependency on Pragmas to run your systems. You are free to modify, deploy, resell, or
              hand the code to any other developer.
            </p>
            <p className="text-[#BBBBBB]">
              We retain the right to reference the project in our portfolio (e.g., &quot;built an
              analytics dashboard for a logistics company&quot;) unless you request confidentiality in
              writing, which we will always honour.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold mb-4 text-[#F5F5F5]">4. Revisions &amp; Support</h2>
            <p className="text-[#BBBBBB] mb-4">
              Each project includes a defined number of revision rounds as specified in the scope
              document. Revisions are defined as changes to the agreed scope — not additions of new
              features or requirements.
            </p>
            <p className="text-[#BBBBBB] mb-4">
              All projects include 2 weeks of post-launch support at no additional cost. During this
              period we will fix bugs, address performance issues, and make minor adjustments
              related to the delivered scope.
            </p>
            <p className="text-[#BBBBBB]">
              Support requests beyond the post-launch window are billed separately or covered under
              a monthly retainer agreement.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold mb-4 text-[#F5F5F5]">5. Limitations of Liability</h2>
            <p className="text-[#BBBBBB] mb-4">
              To the maximum extent permitted by applicable law, Pragmas shall not be liable for
              any indirect, incidental, special, consequential, or punitive damages, including loss
              of profits, data, or business opportunities, arising from or related to our services.
            </p>
            <p className="text-[#BBBBBB] mb-4">
              Our total liability for any claim related to a specific project shall not exceed the
              total fees paid by the client for that project.
            </p>
            <p className="text-[#BBBBBB]">
              These terms are governed by the laws of the jurisdiction in which Pragmas is
              incorporated. Any disputes shall be resolved through good-faith negotiation first,
              followed by binding arbitration if necessary.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold mb-4 text-[#F5F5F5]">6. Contact</h2>
            <p className="text-[#BBBBBB]">
              For questions about these terms, contact us at{' '}
              <a href="mailto:legal@pragmas.io" className="text-[#F97316] hover:underline">
                legal@pragmas.io
              </a>
              .
            </p>
          </section>
        </div>
      </article>

      <Footer />
    </main>
  );
}
