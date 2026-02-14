import { Footer } from '@/src/layout/footer/v2';
import { MainHeader } from '@/src/layout/header';
import { BlogListSection } from '@/src/sections/blog-list';
import { HeroSection } from '@/src/sections/hero/v3';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Evolvica | Blog',
  description:
    'Evolvica - Transform How You Qualify, Review, and Coach with AI',
};

export default function Page() {
  return (
    <>
      <MainHeader version="1" />
      <HeroSection
        title="Blog Posts"
        breadcrumbItems={[
          {
            label: 'Home',
            href: '/',
          },
          {
            label: 'Blog Posts',
          },
        ]}
      />
      <BlogListSection />
      <Footer />
    </>
  );
}
