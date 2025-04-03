import { formatDate } from '@/lib/utils';
import { ArrowLeftIcon } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import MDXContent from '@/components/mdx-content';
import { getContentBySlug } from '@/lib/content';
import Container from '@/components/layout/container';
import { PathDirectory } from '@/types/types';

type DynamicContentPageProps = {
  path: PathDirectory;
  slug: string;
};
const DynamicContentPage = async ({ path, slug }: DynamicContentPageProps) => {
  const contents = await getContentBySlug(path, slug);

  if (!contents) {
    return notFound();
  }

  const { metadata, content } = contents;
  const { title, author, date, image, description } = metadata;
  return (
    <section className='py-10 md:py-16'>
      <Container className='max-w-3xl'>
        <Link
          href={`/${path}`}
          className='text-muted-foreground group hover:text-foreground mb-8 inline-flex items-center gap-2 text-sm font-light transition-colors'
        >
          <ArrowLeftIcon className='h-5 w-5 transition duration-300 group-hover:-translate-x-1' />
          <span className=''>Back to {path}</span>
        </Link>

        {image && (
          <div className='relative mb-6 h-48 w-full overflow-hidden rounded-lg md:h-96'>
            <Image src={image} alt={title || ''} className='object-cove' fill />
          </div>
        )}

        <header className='space-y-3'>
          <div className='flex flex-col items-start justify-between gap-3 space-y-3 md:flex-row'>
            <h1 className='title text-4xl'>{title}</h1>
            <div className='text-foreground/60 my-3 flex items-center gap-2 text-xs md:m-0'>
              <Image
                src='/memoji/vs-memoji.png'
                alt='memoji'
                width={100}
                height={100}
                className='size-10 rounded-full'
              />
              <p className='bg-foreground/10 rounded p-1'>
                {author} / {formatDate(date ?? '')}
              </p>
            </div>
          </div>
          <p className='text-muted-foreground mt-1 text-sm font-light'>
            {description}
          </p>
        </header>

        <article className='mdx-content-style'>
          <MDXContent source={content} />
        </article>

        {/* <footer className='mt-8'>
          {video && (
            <div className='space-y-6'>
              <h1 className='title'>Demo Video</h1>
              <div className='relative mb-6 h-96 w-full overflow-hidden rounded-lg'>
                <video
                  src={video}
                  controls
                  className='object-cover'
                  width='100%'
                  height='100%'
                />
              </div>
            </div>
          )}
        </footer> */}
      </Container>
    </section>
  );
};

export default DynamicContentPage;
