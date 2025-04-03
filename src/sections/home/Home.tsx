import React from 'react';
import Intro from '@/sections/home/Intro';
import RecentContents from '@/components/common-ui/recent-content';
import Container from '@/components/layout/container';
import RecentProjects from '@/components/projects/recent-projects';

const Home = async () => {
  return (
    <section className='py-12'>
      <Container>
        <Intro />

        <RecentProjects limit={2} path='projects' />
        <RecentContents limit={2} path='notes' />
      </Container>
    </section>
  );
};

export default Home;
