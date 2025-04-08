import Link from 'next/link';

import { formatDate } from '@/lib/utils';
import { ArrowRightIcon } from 'lucide-react';
import { ContentMetadata } from '@/types/types';

export type ContentCardProps = {
  contents: ContentMetadata[];
  path: string;
};
export default function ContentCard({ contents, path }: ContentCardProps) {
  return (
    // <ul className='flex flex-col gap-3'>
    <ul className='grid grid-cols-2 gap-3'>
      {contents?.map((content) => (
        <div
          key={content.slug}
          className='col-span-2 space-y-1 md:col-span-1 lg:col-span-2'
        >
          <div className='bg-car group hover:bg-muted-foreground/5 relative col-span-2 rounded-lg p-5 shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-md'>
            <Link
              href={`/${path}/${content.slug}`}
              className='flex flex-col justify-between gap-x-4 gap-y-1 lg:flex-row'
            >
              <div className='absolute inset-0'></div>
              <div className='max-w-lg'>
                <h2 className='group-hover:text-primary-blue flex items-center gap-2 text-lg font-semibold transition-all duration-150'>
                  {content.title}
                  <span className=''>
                    <ArrowRightIcon className='group-hover:text-primary-blue h-5 w-5 -rotate-45 transition duration-150 group-hover:rotate-0' />
                  </span>
                </h2>
                <p className='text-muted-foreground mt-1 line-clamp-1 text-sm font-light'>
                  {content.description}
                </p>
              </div>
              {content.date && (
                <p className='group-hover:text-primary-blue mt-1 text-sm font-light transition-all duration-300 group-hover:font-medium group-hover:underline group-hover:decoration-[1.5px] group-hover:underline-offset-4 group-hover:duration-300'>
                  {formatDate(content.date)}
                </p>
              )}
            </Link>
          </div>
          <div className=''>
            {content.tags?.map((tag) => (
              <Link
                href={`/tags/${tag}`}
                key={tag}
                className='bg-primary-blue/10 text-primary-blue mt-2 mr-2 inline-flex flex-wrap items-center rounded-full px-3 py-1 text-sm font-medium capitalize transition-all duration-300 hover:-translate-y-1 hover:underline hover:decoration-1 hover:underline-offset-4 hover:duration-300'
              >
                {tag}
              </Link>
            ))}
          </div>
        </div>
      ))}
    </ul>
  );
}
