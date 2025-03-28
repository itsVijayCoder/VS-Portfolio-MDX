import React from 'react'
import Intro from '@/sections/home/Intro'
import { getContent } from '@/lib/content'
import RecentContents from '@/components/common-ui/recent-content'
import Container from '@/components/layout/container'
import RecentProjects from '@/components/projects/recent-projects'

const Home = async () => {
  const allNotes = await getContent('notes', 2)
  const allProjects = await getContent('projects', 2)
  return (
    <section className='py-12'>
      <Container>
        <Intro />

        <RecentProjects projects={allProjects} path='projects' />
        <RecentContents contents={allNotes} path='notes' />
      </Container>
    </section>
  )
}

export default Home
