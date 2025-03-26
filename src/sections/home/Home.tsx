import Container from '@/components/layout/container'
import React from 'react'
import Intro from '@/sections/home/Intro'

const Home = () => {
  return (
    <section className='pt-40 pb-24'>
      <Container>
        {/* <h1 className='text-3xl font-bold'>Portfolio</h1> */}
        <Intro />
      </Container>
    </section>
  )
}

export default Home
