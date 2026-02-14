import { Footer } from '@/src/layout/footer/v2';
import { MainHeader } from '@/src/layout/header';
import { CtaSection } from '@/src/sections/cta/v1';
import { HeroSection } from '@/src/sections/hero/v3';
import { TestimonialSection } from '@/src/sections/testimonial/grid';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Evolvica | Testimonial',
  description:
    'Evolvica - Transform How You Qualify, Review, and Coach with AI',
};

export default function Page() {
  return (
    <>
      <MainHeader version="1" />
      <HeroSection
        title="Testimonial"
        breadcrumbItems={[
          {
            label: 'Home',
            href: '/',
          },
          {
            label: 'Testimonial',
          },
        ]}
      />
      <TestimonialSection />
      <CtaSection className="section-padding-primary !pt-0" />
      <Footer />
    </>
  );
}
