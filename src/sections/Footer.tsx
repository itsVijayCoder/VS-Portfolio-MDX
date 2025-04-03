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
      <footer className='footer-gradient flex flex-col items-center justify-center space-y-10 overflow-hidden rounded-lg border-t-2 py-10 sm:py-20'>
        <div className='flex flex-col gap-x-10 gap-y-3 sm:flex-row'>
          {FOOTER_NAVIGATION.map((item) => (
            <div
              key={item.id}
              className='group flex items-center justify-center p-1'
            >
              <Link
                href={item.href}
                className='text-muted-foreground group-hover:text-primary-blue flex text-sm leading-6 font-semibold transition-all duration-300 group-hover:-translate-y-0.5'
              >
                {item.name}
              </Link>
            </div>
          ))}
        </div>
        <div className='flex items-center justify-center space-x-10'>
          {FOOTER_SOCIAL_LINKS.map((item) => (
            <div key={item.id} className='group'>
              <Link
                href={item.href}
                className='text-muted-foreground/80 group-hover:text-primary-blue flex flex-col items-center text-sm leading-6 duration-300 group-hover:-translate-y-0.5'
              >
                <item.icon className='size-6' />
              </Link>
            </div>
          ))}
        </div>
        <div className='text-muted-foreground/70 text-center text-xs leading-5'>
          &copy; 2025 Vijay Subramanian, Inc. All rights reserved.
        </div>
      </footer>
    </Container>
  );
};

export default Footer;
