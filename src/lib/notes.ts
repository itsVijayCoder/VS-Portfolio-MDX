import path from 'path'
import fs from 'fs'
import matter from 'gray-matter'

export type Note = {
  metadata: NoteMetadata
  content: string
}

export type NoteMetadata = {
  slug: string
  title?: string
  description?: string
  date?: string
  tags?: string[]
  author?: string
  image?: string
}

const rootDirectory = path.join(process.cwd(), '/src/content/notes')
// const projectsRootDirectory = path.join(process.cwd(), '/src/content/projects')
export const getNotesBySlug = async (slug: string): Promise<Note | null> => {
  try {
    const filePath = path.join(rootDirectory, `${slug}.mdx`)
    const fileContent = fs.readFileSync(filePath, 'utf-8')
    const { content, data } = matter(fileContent)
    return { metadata: { slug, ...data }, content }
  } catch (error) {
    console.error('Error in getNotesBySlug', error)
    return null
  }
}

export const getNotes = async (limit?: number): Promise<NoteMetadata[]> => {
  const files = fs.readdirSync(rootDirectory)

  const notes = files
    .map(file => getNotesMetadata(file))
    .sort((a, b) => {
      if (new Date(a.date ?? '') < new Date(b.date ?? '')) {
        return 1
      } else {
        return -1
      }
    })

  if (limit) {
    return notes.slice(0, limit)
  }

  return notes
}

export const getNotesMetadata = (filepath: string): NoteMetadata => {
  const slug = filepath.replace('.mdx', '')
  const filePath = path.join(rootDirectory, filepath)
  const fileContent = fs.readFileSync(filePath, 'utf-8')
  const { data } = matter(fileContent)
  return { slug, ...data }
}
