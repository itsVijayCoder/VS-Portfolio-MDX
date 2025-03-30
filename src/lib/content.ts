import path from 'path'
import fs from 'fs'
import matter from 'gray-matter'
import { PathDirectory, Content, ContentMetadata } from '@/types/types'

const getContentRootDirectory = (pathDir: PathDirectory) => {
  return path.join(process.cwd(), `/src/content/${pathDir}`)
}

// This function will be reusable for both notes and projects
export const getContentBySlug = async (
  pathDir: PathDirectory,
  slug: string
): Promise<Content | null> => {
  try {
    const rootDirectory = getContentRootDirectory(pathDir)
    const filePath = path.join(rootDirectory, `${slug}.mdx`)
    const fileContent = fs.readFileSync(filePath, 'utf-8')
    const { content, data } = matter(fileContent)
    return { metadata: { slug, ...data }, content }
  } catch (error) {
    console.error(`Error in getContentBySlug for ${pathDir}`, error)
    return null
  }
}

// This function will be reusable for both notes and projects
export const getContent = async (
  pathDir: PathDirectory,
  limit?: number
): Promise<ContentMetadata[]> => {
  const rootDirectory = getContentRootDirectory(pathDir)
  const files = fs.readdirSync(rootDirectory)

  const content = files
    .map(file => getContentMetadata(pathDir, file))
    .sort((a, b) => {
      if (new Date(a.date ?? '') < new Date(b.date ?? '')) {
        return 1
      } else {
        return -1
      }
    })

  if (limit) {
    return content.slice(0, limit)
  }

  return content
}

// This function will be reusable for both notes and projects
export const getContentMetadata = (
  pathDir: PathDirectory,
  filepath: string
): ContentMetadata => {
  const slug = filepath.replace('.mdx', '')
  const rootDirectory = getContentRootDirectory(pathDir)
  const filePath = path.join(rootDirectory, filepath)
  const fileContent = fs.readFileSync(filePath, 'utf-8')
  const { data } = matter(fileContent)
  return { slug, ...data }
}
