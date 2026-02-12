import { HeaderProps } from '@/src/layout/header/desktop/v2';
import { menuItemsProps } from '../menu';

export const headerData: HeaderProps = {
  contactInfo: {
    phone: '01550458866',
    mail: 'Info@evolvica.com',
    address: 'adress',
  },
  ctaBtn: {
    href: '/contact',
    label: 'Get  A Quote',
    openNewTab: false,
  },
  menuItems: menuItemsProps,
};
