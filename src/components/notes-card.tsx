import Link from 'next/link'

import { NoteMetadata } from '@/lib/notes'
import { formatDate } from '@/lib/utils'

export default function NotesCard({ notes }: { notes: NoteMetadata[] }) {
  return (
    <ul className='flex flex-col gap-8'>
      {notes.map(note => (
        <li key={note.slug}>
          <Link
            href={`/notes/${note.slug}`}
            className='flex flex-col justify-between gap-x-4 gap-y-1 sm:flex-row'
          >
            <div className='max-w-lg'>
              <p className='text-lg font-semibold'>{note.title}</p>
              <p className='text-muted-foreground mt-1 line-clamp-2 text-sm font-light'>
                {note.description}
              </p>
            </div>

            {note.date && (
              <p className='mt-1 text-sm font-light'>{formatDate(note.date)}</p>
            )}
          </Link>
        </li>
      ))}
    </ul>
  )
}
