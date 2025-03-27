import React from 'react'
import Intro from '@/sections/home/Intro'
import { MDXRemote } from 'next-mdx-remote/rsc'

const Home = () => {
  const content = `
    # This is a Markdown content running from MDX file in Next.js Server Component
  `
  return (
    <section className='py-24'>
      <Intro />

      <MDXRemote source={content} />
    </section>
  )
}

export default Home
