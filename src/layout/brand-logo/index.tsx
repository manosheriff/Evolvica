import { CustomLink } from '@/src/components/custom-link';

export function BrandLogo() {
  return (
    <CustomLink href="/">
      {/* <Image
        className="logo-light dark:hidden"
        src={logoLight.src}
        width={logoLight.width}
        height={logoLight.height}
        placeholder="blur"
        blurDataURL={logoLight.blurDataURL}
        alt={`${process.env.NEXT_PUBLIC_SITE_NAME} brand logo`}
        sizes="100vw"
        priority
      />
      <Image
        className="logo-dark hidden dark:block"
        src={logoDark.src}
        width={logoDark.width}
        height={logoDark.height}
        placeholder="blur"
        blurDataURL={logoDark.blurDataURL}
        alt={`${process.env.NEXT_PUBLIC_SITE_NAME} brand logo`}
        sizes="100vw"
        priority
      /> */}
      <h1 className="text-2xl font-bold tracking-tight text-white">
        Evolvica<span className="text-blue-500">.</span>
      </h1>
    </CustomLink>
  );
}
