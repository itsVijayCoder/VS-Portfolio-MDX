import Image from 'next/image';
import Link from 'next/link';
import { formatDate } from '@/lib/utils';
import { ContentMetadata } from '@/types/types';

export type ProjectsPageProps = {
  projects: ContentMetadata[];
  path: string;
};
export default function Projects({ projects, path }: ProjectsPageProps) {
  return (
    <section className='space-y-10'>
      <ul className='grid grid-cols-1 gap-8 sm:grid-cols-2'>
        {projects.map((project) => (
          <div key={project.slug} className='group relative'>
            <Link href={`/${path}/${project.slug}`}>
              {project.image && (
                <div className='bg-background h-60 w-full overflow-hidden'>
                  <Image
                    src={project.coverImg ? project.coverImg : project.image}
                    alt={project.title || ''}
                    fill
                    className='rounded-lg object-center transition-transform duration-500 group-hover:scale-105'
                  />
                </div>
              )}

              <div className='bg-background/80 absolute inset-[1px] rounded-lg opacity-0 transition-opacity duration-500 group-hover:opacity-100' />

              <div className='absolute inset-x-0 bottom-0 translate-y-2 px-6 py-5 opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100'>
                <h2 className='title line-clamp-1 text-3xl no-underline'>
                  {project.title}
                </h2>
                <p className='text-muted-foreground line-clamp-1 text-base'>
                  {project.description}
                </p>
                <p className='text-muted-foreground text-sm font-light'>
                  {formatDate(project.date ?? '')}
                </p>
              </div>
            </Link>
          </div>
        ))}
      </ul>
    </section>
  );
}
