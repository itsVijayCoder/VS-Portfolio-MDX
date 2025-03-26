import Image from 'next/image'
import React from 'react'

const Intro = () => {
  return (
    <>
      <section className='flex flex-col-reverse items-start gap-x-10 gap-y-4 pb-24 md:flex-row md:items-center'>
        <div className='mt-2 flex-1 md:mt-0'>
          <h1 className='title no-underline'>Hey, I&#39;m Vijay.</h1>
          <p className='text-muted-foreground mt-3 font-light'>
            I&#39;m a software engineer based in India. I love building things
            for the web. I&#39;m passionate about building side projects, and
            learning new technologies and share knowledge with others.
          </p>
        </div>

        <div className='relative'>
          <Image
            src='/images/author/vijay.png'
            alt='Vijay Subramanian'
            width={175}
            height={175}
            priority
            className='flex-1 rounded-lg grayscale'
          />
        </div>
      </section>
    </>
  )
}

export default Intro
