import React from 'react';
// import Intro from '@/sections/home/Intro';
import Container from '@/components/layout/container';
import RecentProjects from '@/components/projects/recent-projects';
import { HeroParallax } from '@/components/ui/hero-parallax';
import { HERO_PRODUCTS } from '@/data/hero-parallax-data';
import RecentContents from '@/components/common-ui/recent-content';

const Home = async () => {
  return (
    <section className='space-y-8 py-4 md:py-12'>
      <HeroParallax products={HERO_PRODUCTS} />
      <Container className='space-y-8'>
        {/* <Intro /> */}

        <RecentContents limit={2} path='notes' />
        <RecentProjects limit={2} path='projects' />
      </Container>
    </section>
  );
};

export default Home;
