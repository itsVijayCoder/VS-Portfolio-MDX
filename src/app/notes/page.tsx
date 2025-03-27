// 'use client'
// import NotesCard from '@/components/notes-card'
import NotesWithSearch from '@/components/notes-with-search'
import { getNotes } from '@/lib/notes'
// import Link from 'next/link'

import React from 'react'

// const NOTE_ITEMS = [
//   {
//     title: ' Introduction to Next.js',
//     slug: 'introduction-to-next'
//   },
//   {
//     title: ' Introduction to React',
//     slug: 'introduction-to-react'
//   }
// ]
const NotesPage = async () => {
  const note = await getNotes()
  return (
    <>
      {/* <h1>Notes Page</h1>
      <ul>
        {NOTE_ITEMS.map(note => (
          <li key={note.slug}>
            <Link href={`/notes/${note.slug}`}>
              <p>{note.title}</p>
            </Link>
          </li>
        ))}
      </ul> */}

      <section className='py-16'>
        <div className='container max-w-3xl'>
          <h1 className='title mb-12'>Posts</h1>

          {/* <NotesCard notes={note} /> */}
          <NotesWithSearch notes={note} />
        </div>
      </section>
    </>
  )
}

export default NotesPage
