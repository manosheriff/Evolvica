import { Footer } from '@/src/layout/footer/v2';
import { MainHeader } from '@/src/layout/header';
import { HeroSection } from '@/src/sections/hero/v3';
import { ProjectDetailsSection } from '@/src/sections/project-details/v1';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Evolvica | Project details',
  description:
    'Evolvica - Transform How You Qualify, Review, and Coach with AI',
};

export default function Page() {
  return (
    <>
      <MainHeader version="1" />
      <HeroSection
        title="Project Details"
        breadcrumbItems={[
          {
            label: 'Home',
            href: '/',
          },
          {
            label: 'Project Details',
          },
        ]}
      />
      <ProjectDetailsSection />
      <Footer />
    </>
  );
}
