import Link from 'next/link'
import ContentCard, { ContentCardProps } from './content-card'

export default async function RecentContents({
  contents,
  path
}: ContentCardProps) {
  return (
    <section className='pb-24'>
      <div>
        <h2 className='title mb-12'>Recent {path}</h2>
        <ContentCard contents={contents} path={path} />

        <Link
          href={`/${path}`}
          className='text-muted-foreground hover:text-foreground mt-8 inline-flex items-center gap-2 underline decoration-1 underline-offset-2 transition-colors'
        >
          <span>All {path}</span>
        </Link>
      </div>
    </section>
  )
}
