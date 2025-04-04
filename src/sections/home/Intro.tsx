import { TypewriterEffectSmooth } from '@/components/ui/typewriter-effect';
import Image from 'next/image';
import React from 'react';

const Intro = () => {
  const words = [
    { text: 'Vijay', className: '!text-primary-blue font-inter' },
    { text: 'Subramanian', className: '!text-primary-blue font-inter' }
  ];
  return (
    <>
      <section className='flex flex-col-reverse items-start gap-x-10 gap-y-4 pb-12 md:flex-row md:items-center'>
        <div className='mt-2 flex-1 md:mt-0'>
          <h1 className='title items-center gap-2 no-underline md:flex lg:gap-4'>
            Hey, I&#39;m{' '}
            <span className=''>
              <TypewriterEffectSmooth words={words} />
            </span>
          </h1>
          <p className='text-muted-foreground mt-3 indent-20 font-light'>
            I&#39;m a software engineer based in India. I love building things
            for the web. I&#39;m passionate about building side projects, and
            learning new technologies and share knowledge with others.
          </p>
        </div>

        <div className='relative'>
          <Image
            src='/images/author/vijay.webp'
            alt='Vijay Subramanian'
            width={175}
            height={175}
            priority
            className='flex-1 rounded-xl grayscale'
          />
        </div>
      </section>
    </>
  );
};

export default Intro;
