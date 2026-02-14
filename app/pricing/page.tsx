import { Footer } from '@/src/layout/footer/v2';
import { MainHeader } from '@/src/layout/header';
import { CtaSection } from '@/src/sections/cta/v1';
import { HeroSection } from '@/src/sections/hero/v3';
import { PricingSection } from '@/src/sections/pricing/version-2';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Evolvica | Pricing',
  description:
    'Evolvica - Transform How You Qualify, Review, and Coach with AI',
};

export default function Page() {
  return (
    <>
      <MainHeader version="1" />
      <HeroSection
        title="Team"
        breadcrumbItems={[
          {
            label: 'Home',
            href: '/',
          },
          {
            label: 'Team',
          },
        ]}
      />
      <PricingSection />
      <CtaSection className="section-padding-primary" />
      <Footer />
    </>
  );
}
