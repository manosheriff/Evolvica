import { HeaderProps } from '@/src/layout/header/desktop/v1';

export const menuItemsProps: HeaderProps['menuItems'] = [
  {
    label: 'Home',
    href: '#',
  },
  {
    label: 'About',
    href: '/about',
  },
  {
    label: 'Service',
    href: '/services',
  },
  {
    label: 'Projects',
    href: '/projects',
  },
  { label: 'Blog', href: '/blog' },
  {
    label: 'Contact',
    href: '/contact',
  },
];
