import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About Page',
  description: 'This is the about page of our Next.js application.',
};

export default function AboutPage() {
  return (
    <>
      <span className="text-7xl">About page</span>
    </>
  )
}