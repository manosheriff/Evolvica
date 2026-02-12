import { HeroProps } from '@/src/sections/hero/v1';

export const heroData: HeroProps = {
  items: [
    {
      image: {
        src: '/assets/images/hero/hero-1.jpg',
        alt: 'hero 1',
      },
      title: 'AI Solutions for Real-World Business Challenges',
      button: {
        label: 'Get Yours Now',
        href: '/',
      },
    },
    {
      image: {
        src: '/assets/images/hero/hero-11.jpeg',
        alt: 'hero 1',
      },
      title: 'AI-powered solutions, tailored to your industry needs',
      button: {
        label: 'Discover More',
        href: '/contact',
      },
    },
  ],
};
