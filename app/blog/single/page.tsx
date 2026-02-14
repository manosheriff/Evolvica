import { Footer } from '@/src/layout/footer/v2';
import { MainHeader } from '@/src/layout/header';
import { BlogDetilsSection } from '@/src/sections/blog-details/v1';
import { HeroSection } from '@/src/sections/hero/v3';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Evolvica | Blog details',
  description:
    'Evolvica - Transform How You Qualify, Review, and Coach with AI',
};

export default function Page() {
  return (
    <>
      <MainHeader version="2" />
      <HeroSection
        title="Blog Details"
        breadcrumbItems={[
          {
            label: 'Home',
            href: '/',
          },
          {
            label: 'Blog Details',
          },
        ]}
      />
      <BlogDetilsSection />
      <Footer />
    </>
  );
}
