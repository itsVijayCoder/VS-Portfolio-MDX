import { formatDate } from '@/lib/utils'
import { ArrowLeftIcon } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import MDXContent from '@/components/mdx-content'
import { getContentBySlug, PathDirectory } from '@/lib/content'
import Container from '@/components/layout/container'

type DynamicContentPageProps = {
  path: PathDirectory
  slug: string
}
const DynamicContentPage = async ({ path, slug }: DynamicContentPageProps) => {
  const contents = await getContentBySlug(path, slug)

  if (!contents) {
    return notFound()
  }

  const { metadata, content } = contents
  const { title, author, date, image, description } = metadata
  return (
    <section className='py-16'>
      <Container className='max-w-3xl'>
        <Link
          href={`/${path}`}
          className='text-muted-foreground group hover:text-foreground mb-8 inline-flex items-center gap-2 text-sm font-light transition-colors'
        >
          <ArrowLeftIcon className='h-5 w-5 transition duration-300 group-hover:-translate-x-1' />
          <span className=''>Back to {path}</span>
        </Link>

        {image && (
          <div className='relative mb-6 h-96 w-full overflow-hidden rounded-lg'>
            <Image
              src={image}
              alt={title || ''}
              className='object-cover'
              fill
            />
          </div>
        )}

        <header className='space-y-3'>
          <div className='flex items-start gap-3'>
            <h1 className='title'>{title}</h1>
            <p className='text-foreground/60 mt-4 text-xs'>
              <span className='bg-foreground/10 rounded p-1'>
                {author} / {formatDate(date ?? '')}
              </span>
            </p>
          </div>
          <p className='text-muted-foreground mt-1 text-sm font-light'>
            {description}
          </p>
        </header>

        <article className='prose prose-pre:leading-3 prose-code:px-1.5 prose-li:decoration-dashed prose-li:decoration-1 dark:prose-invert mt-16 space-y-4'>
          <MDXContent source={content} />
        </article>

        <footer className='mt-16'>{/* <NewsletterForm /> */}</footer>
      </Container>
    </section>
  )
}

export default DynamicContentPage
