import Container from '@/components/layout/container'
import React from 'react'
import Intro from '@/sections/home/Intro'
import { MDXRemote } from 'next-mdx-remote/rsc'

const Home = () => {
  const content = `
    # This is a Markdown content running from MDX file in Next.js Server Component
  `
  return (
    <section className='pt-40 pb-24'>
      <Container>
        {/* <h1 className='text-3xl font-bold'>Portfolio</h1> */}
        <Intro />

        <MDXRemote source={content} />
      </Container>
    </section>
  )
}

export default Home
