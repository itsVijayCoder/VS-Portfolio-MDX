import Link from 'next/link';
import NotesCard from './notes-card';
import { getAllContent } from '@/lib/content';

export default async function RecentNotes() {
  const allNotes = await getAllContent('notes', 2);

  return (
    <section className='pb-24'>
      <div>
        <h2 className='title mb-12'>Recent notes</h2>
        <NotesCard notes={allNotes} />

        <Link
          href='/notes'
          className='text-muted-foreground hover:text-foreground mt-8 inline-flex items-center gap-2 underline decoration-1 underline-offset-2 transition-colors'
        >
          <span>All notes</span>
        </Link>
      </div>
    </section>
  );
}
