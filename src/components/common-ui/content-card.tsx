import Link from 'next/link'

import { ContentMetadata } from '@/lib/content'
import { formatDate } from '@/lib/utils'
import { ArrowRightIcon } from 'lucide-react'

export type ContentCardProps = {
  contents: ContentMetadata[]
  path: string
}
export default function ContentCard({ contents, path }: ContentCardProps) {
  return (
    // <ul className='flex flex-col gap-3'>
    <ul className='grid grid-cols-2 gap-3'>
      {contents.map(content => (
        <li
          key={content.slug}
          className='bg-car group hover:bg-muted-foreground/5 relative col-span-2 rounded-lg p-5 shadow-lg transition-all duration-300 hover:translate-y-1 hover:shadow-md md:col-span-1 lg:col-span-2'
        >
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
              <p className='group-hover:text-primary-blue mt-1 text-sm font-light transition-all duration-300 group-hover:font-medium group-hover:underline'>
                {formatDate(content.date)}
              </p>
            )}
          </Link>
        </li>
      ))}
    </ul>
  )
}
