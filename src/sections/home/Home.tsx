import React from 'react';
// import Intro from '@/sections/home/Intro';
import RecentContents from '@/components/common-ui/recent-content';
import Container from '@/components/layout/container';
import RecentProjects from '@/components/projects/recent-projects';
import { HeroParallax } from '@/components/ui/hero-parallax';
import { HERO_PRODUCTS } from '@/data/hero-parallax-data';

const Home = async () => {
  return (
    <section className='py-12'>
      <Container className='space-y-8'>
        {/* <Intro /> */}
        <HeroParallax products={HERO_PRODUCTS} />

        <RecentContents limit={2} path='notes' />
        <RecentProjects limit={2} path='projects' />
      </Container>
    </section>
  );
};

export default Home;
