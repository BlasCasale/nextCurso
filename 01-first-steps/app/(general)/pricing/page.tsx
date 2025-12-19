import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Pricing Page',
  description: 'This is the pricing page of our Next.js application.',
  keywords: ['pricing', 'nextjs', 'app directory'],
};

export default function PricingPage() {
  return (
    <>
      <span className="text-7xl">Pricing page</span>
    </>
  )
}