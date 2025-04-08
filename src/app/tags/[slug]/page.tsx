import ContentCard from '@/components/common-ui/content-card';
import Container from '@/components/layout/container';
import { getAllContent } from '@/lib/content';
import { ArrowLeftIcon } from 'lucide-react';
import Link from 'next/link';
import { notFound } from 'next/navigation';

interface PageProps {
  params: Promise<{ slug: string }>;
}

export const generateStaticParams = async () => {
  const content = await getAllContent('notes');
  const tags = content.map((item) => (item.tags ? item.tags : '')).flat();
  const uniqueTags = Array.from(new Set(tags));

  const path = uniqueTags.map((tag) => ({ slug: tag }));

  return path;
};

const TagPage = async ({ params }: PageProps) => {
  const { slug } = await params;

  const content = await getAllContent('notes');

  const tagContent = content.filter((item) => item.tags?.includes(slug));

  if (!slug) {
    return null;
  }
  if (tagContent.length === 0) {
    return notFound();
  }
  const path = 'notes';
  return (
    <Container className='flex min-h-screen max-w-3xl flex-col'>
      <h1 className='title my-10'>
        Tag: <span className='capitalize'>{slug}</span>
      </h1>
      <Link
        href={`/${path}`}
        className='text-muted-foreground group hover:text-foreground mb-8 inline-flex items-center gap-2 text-sm font-light transition-colors'
      >
        <ArrowLeftIcon className='h-5 w-5 transition duration-300 group-hover:-translate-x-1' />
        <span className=''>Back to {path}</span>
      </Link>
      <div className='grow'>
        <ContentCard contents={tagContent} path='notes' />
      </div>
    </Container>
  );
};

export default TagPage;
