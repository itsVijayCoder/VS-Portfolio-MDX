import Link from 'next/link';
import Projects from './projects';
import { RecentContentsProps } from '@/types/types';
import { getContent } from '@/lib/content';

export default async function RecentProjects({
  limit,
  path
}: RecentContentsProps) {
  const projects = await getContent(path, limit ? limit : 0);
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
  );
}
