import type { Metadata } from 'next';
import GetStartedForm from './GetStartedForm';

export const metadata: Metadata = {
  title: 'Start a Project — Pragmas',
  description:
    'Tell us what you need. We\'ll review your brief and send a detailed scope document — architecture, timeline, and fixed price — within 24 hours.',
};

export default function GetStartedPage() {
  return <GetStartedForm />;
}
