'use client';
import { Container } from '@/src/components/container';
import { Button } from '@/src/components/button';
import { CustomLink } from '@/src/components/custom-link';
import { Shapes } from './shapes';
import { cn } from '@/src/utils/shadcn';
import { Swiper, SwiperSlide } from 'swiper/react';
import styles from './hero.module.css';
import SwiperCore, { EffectFade, Navigation, Autoplay } from 'swiper';
import { Swiper as SwiperType } from 'swiper';
import 'swiper/swiper-bundle.min.css';
import { useRef, useEffect, useState } from 'react';
import { FaArrowLeftLong, FaArrowRightLong } from 'react-icons/fa6';

SwiperCore.use([EffectFade, Navigation, Autoplay]);

const navigationButtonCommonClasses = cn(
  'w-[60px] relative z-40 h-[60px] grid place-items-center leading-none text-[1.25rem] bg-accent-900 hover:bg-primary transition-all duration-300 text-white rounded-full'
);

// Flattened interface to match your database columns
export interface HeroItem {
  id: number;
  title: string;
  image_src: string;
  image_alt: string;
  button_label: string;
  button_href: string;
}

// Skeleton component to match your specific layout
function HeroSkeleton() {
  return (
    <div className="relative flex animate-pulse items-center justify-center overflow-hidden bg-gray-200 py-[9.375rem] dark:bg-accent-800 lg:min-h-screen">
      <Container>
        <div className="relative z-10 mx-auto max-w-[800px] text-center lg:mt-[60px]">
          <div className="flex flex-col items-center space-y-6 md:space-y-8">
            <div className="h-10 w-3/4 rounded-md bg-gray-300 dark:bg-accent-700" />
            <div className="h-10 w-1/2 rounded-md bg-gray-300 dark:bg-accent-700" />
            <div className="mt-4 h-12 w-40 rounded-full bg-gray-300 dark:bg-accent-700" />
          </div>
        </div>
      </Container>
    </div>
  );
}

export function Hero() {
  const swiperRef = useRef<SwiperType>();
  const [items, setItems] = useState<HeroItem[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const API_URL = 'https://evolvica.ai/api/main.php';
      const API_KEY = '54678we9uuroijkrtwj43qopurwiuueopioifioijegskljtkjrjh';

      try {
        const response = await fetch(API_URL, {
          method: 'GET',
          headers: {
            'x-api-key': API_KEY,
            'Content-Type': 'application/json',
          },
        });
        if (!response.ok) throw new Error(`Status: ${response.status}`);
        const result = await response.json();
        setItems(result.hero || []);
      } catch (error) {
        console.error('Fetch Error:', error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  if (loading) return <HeroSkeleton />;

  return (
    <section className={styles['hero']}>
      {items && items.length > 0 && (
        <Swiper
          effect="fade"
          loop
          speed={300}
          autoplay={{ delay: 3000 }}
          onBeforeInit={(swiper) => {
            swiperRef.current = swiper;
          }}
        >
          {items.map((item) => (
            <SwiperSlide key={item.id}>
              <div
                className={cn(
                  'relative flex items-center justify-center overflow-hidden py-[9.375rem] lg:min-h-screen'
                )}
              >
                {/* Shapes Component Restored */}
                <Shapes />

                <div
                  className={cn(
                    'absolute inset-0 -z-1 bg-accent-700 bg-cover bg-no-repeat bg-blend-luminosity [background-position:top_center] [transform:scale(1)] [transition:7000ms_ease,opacity_1500ms_ease-in]',
                    styles['hero-bg'],
                    'before:absolute before:inset-0 before:bg-[#EDF8FE] before:opacity-80 dark:before:bg-accent-900',
                    'after:absolute after:inset-0 after:[background:linear-gradient(180deg,rgba(255,255,255,0)_0%,#FFFFFF_100%)] dark:after:[background:linear-gradient(180deg,rgba(20,20,22,0.00)_0%,#141416_100%)]'
                  )}
                  style={{ backgroundImage: `url(${item.image_src})` }}
                />

                <Container>
                  <div
                    className={cn(
                      'relative z-10 mx-auto max-w-[800px] text-center text-accent-900 dark:text-white lg:mt-[60px]',
                      styles['hero-content']
                    )}
                  >
                    <div className="space-y-6 md:space-y-8">
                      <h1 className="font-secondary text-2xl font-semibold uppercase leading-[1.1] md:text-3xl lg:text-4xl">
                        {item.title}
                      </h1>
                      <Button asChild className={cn('rounded-full')}>
                        <CustomLink
                          aria-label={item.button_label}
                          href={item.button_href}
                        >
                          <span>{item.button_label}</span>
                          {/* Original SVG Arrow Restored */}
                          <svg
                            width={28}
                            height={9}
                            viewBox="0 0 28 9"
                            fill="currentColor"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path d="M27.7911 5.02543C27.9863 4.83016 27.9863 4.51358 27.7911 4.31832L24.6091 1.13634C24.4138 0.941077 24.0972 0.941077 23.902 1.13634C23.7067 1.3316 23.7067 1.64818 23.902 1.84345L26.7304 4.67187L23.902 7.5003C23.7067 7.69556 23.7067 8.01214 23.902 8.20741C24.0972 8.40267 24.4138 8.40267 24.6091 8.20741L27.7911 5.02543ZM0.4375 5.17188L27.4375 5.17187L27.4375 4.17187L0.4375 4.17188L0.4375 5.17188Z" />
                          </svg>
                        </CustomLink>
                      </Button>
                    </div>
                  </div>
                </Container>
              </div>
            </SwiperSlide>
          ))}

          {/* Side Navigation Arrows Restored */}
          <div className="absolute right-0 top-[50%] z-50 hidden h-max w-full [transform:translateY(-50%)] lg:block">
            <Container>
              <div className="ml-auto grid max-w-max gap-2.5 px-4">
                <button
                  className={cn(navigationButtonCommonClasses)}
                  onClick={() => swiperRef.current?.slidePrev()}
                >
                  <FaArrowLeftLong />
                </button>
                <button
                  className={cn(navigationButtonCommonClasses)}
                  onClick={() => swiperRef.current?.slideNext()}
                >
                  <FaArrowRightLong />
                </button>
              </div>
            </Container>
          </div>
        </Swiper>
      )}
    </section>
  );
}
