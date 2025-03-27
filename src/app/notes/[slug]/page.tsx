import { getNotesBySlug } from '@/lib/notes'
import { formatDate } from '@/lib/utils'
import { ArrowLeftIcon } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
// import { MDXRemote } from 'next-mdx-remote/rsc'
import MDXContent from '@/components/mdx-content'

const Note = async ({ params }: { params: { slug: string } }) => {
  const { slug } = await params

  if (!slug) {
    return null
  }

  const note = await getNotesBySlug(slug)

  if (!note) {
    return notFound()
  }

  const { metadata, content } = note
  const { title, author, date, image } = metadata

  return (
    <section className='py-16'>
      <div className='container max-w-3xl'>
        <Link
          href='/notes'
          className='text-muted-foreground group hover:text-foreground mb-8 inline-flex items-center gap-2 text-sm font-light transition-colors'
        >
          <ArrowLeftIcon className='h-5 w-5 transition duration-300 group-hover:-translate-x-1' />
          <span className=''>Back to posts</span>
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

        <header>
          <h1 className='title'>{title}</h1>
          <p className='text-muted-foreground mt-3 text-xs'>
            {author} / {formatDate(date ?? '')}
          </p>
        </header>

        <article className='prose dark:prose-invert mt-16 space-y-4'>
          <MDXContent source={content} />
          {/* <MDXRemote source={content} /> */}
        </article>

        <footer className='mt-16'>{/* <NewsletterForm /> */}</footer>
      </div>
    </section>
  )
}

export default Note
