import Link from 'next/link'
import Projects, { ProjectsPageProps } from './projects'

export default async function RecentProjects({
  projects,
  path
}: ProjectsPageProps) {
  return (
    <section className='pb-24'>
      <div>
        <h2 className='title mb-12'>Recent projects</h2>
        <Projects projects={projects} path={path} />

        <Link
          href='/projects'
          className='text-muted-foreground hover:text-foreground mt-8 inline-flex items-center gap-2 underline decoration-1 underline-offset-2 transition-colors'
        >
          <span>All projects</span>
        </Link>
      </div>
    </section>
  )
}
