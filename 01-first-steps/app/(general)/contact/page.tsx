import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact Page',
  description: 'This is the contact page of our Next.js application.',
};

export default function ContactPage() {
  return (
    <>
      <span className="text-7xl">Contact page</span>
    </>
  )
}