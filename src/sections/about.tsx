import React from 'react';
import { Timeline } from '@/components/ui/timeline';
import { aboutMeTimeline } from '@/data/about-me-timeline';
import Intro from './home/Intro';

export default function About() {
  return (
    <section className='py-12'>
      <div className='px-4 md:px-20'>
        <Intro />
      </div>
      <Timeline data={aboutMeTimeline} />
    </section>
  );
}
