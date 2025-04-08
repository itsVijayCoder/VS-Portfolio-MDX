import Link from 'next/link';
import ContentCard from './content-card';
import { getAllContent } from '@/lib/content';
import { RecentContentsProps } from '@/types/types';

export default async function RecentContents({
  limit,
  path
}: RecentContentsProps) {
  const contents = await getAllContent(path, limit ? limit : 0);
  return (
    <section className='pb-4'>
      <div>
        <h2 className='title mb-12'>Recent {path}</h2>
        <ContentCard contents={contents} path={path} />

        <Link
          href={`/${path}`}
          className='text-muted-foreground hover:text-foreground decoration-primary-blue mt-8 inline-flex items-center gap-2 underline decoration-[1.5px] underline-offset-4 transition-colors'
        >
          <span>All {path}</span>
        </Link>
      </div>
    </section>
  );
}
