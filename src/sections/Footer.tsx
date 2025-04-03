import Container from '@/components/layout/container';
// import { Github, Instagram, Linkedin } from 'lucide-react';
import {
  GitHubLogoIcon,
  InstagramLogoIcon,
  LinkedInLogoIcon
} from '@radix-ui/react-icons';
import Link from 'next/link';
import React from 'react';

const FOOTER_NAVIGATION = [
  { id: 1, name: 'Home', href: '/' },
  { id: 2, name: 'Projects', href: '/projects' },
  { id: 3, name: 'Notes', href: '/notes' },
  { id: 4, name: 'About', href: '/about' },
  { id: 5, name: 'Contact', href: '/contact' }
];

const FOOTER_SOCIAL_LINKS = [
  {
    id: 1,
    name: 'GitHub',
    href: 'https://github.com/itsVijayCoder',
    //  icon: '/icons/github.svg',
    icon: GitHubLogoIcon
  },
  {
    id: 2,
    name: 'Linkedin',
    href: 'https://twitter.com/itsVijayCoder',
    //  icon: '/icons/linkedin.png',
    icon: LinkedInLogoIcon
  },
  {
    id: 3,
    name: 'Instagram',
    href: 'https://twitter.com/itsVijayCoder',
    //  icon: '/icons/instagram.png',
    icon: InstagramLogoIcon
  }
];
const Footer = () => {
  return (
    <Container>
      <footer className='flex-col items-center justify-center space-y-10 overflow-hidden border-t border-zinc-200 py-20 dark:border-zinc-700'>
        <div className='sm:flex sm:justify-center sm:space-x-12'>
          {FOOTER_NAVIGATION.map((item) => (
            <div key={item.id} className=''>
              <Link
                href={item.href}
                className='text-muted-foreground hover:text-primary-blue text-sm leading-6'
              >
                {item.name}
              </Link>
            </div>
          ))}
        </div>
        <div className='flex items-center justify-center space-x-10'>
          {FOOTER_SOCIAL_LINKS.map((item) => (
            <div key={item.id} className=''>
              <Link
                href={item.href}
                className='text-muted-foreground/60 hover:text-primary-blue flex flex-col items-center text-sm leading-6'
              >
                <item.icon className='size-6' />
                {/* <Image
                  src={item.icon}
                  alt={item.name}
                  width={24}
                  height={24}
                  className='text-primary-blue hover:fill-primary-blue size-8'
                /> */}
                {/* {item.name} */}
              </Link>
            </div>
          ))}
        </div>
        <div className='text-muted-foreground/60 text-center text-xs leading-5'>
          &copy; 2025 Vijay Subramanian, Inc. All rights reserved.
        </div>
      </footer>
    </Container>
  );
};

export default Footer;
