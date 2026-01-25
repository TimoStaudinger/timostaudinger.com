import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

export interface Writing {
  slug: string
  title: string
  date: string
  excerpt: string
  coverImage: string
  previewImage: string
  content: string
}

const readContent = (dir: string): string[] => {
  const writingDirectory = path.resolve(process.cwd(), dir)
  const writingFiles = fs.readdirSync(writingDirectory)

  return writingFiles.map((fileName) => {
    const fullPath = path.join(writingDirectory, fileName)
    return fs.readFileSync(fullPath, 'utf8')
  })
}

export const getWriting = (): Writing[] => {
  const writings = readContent('content/writing')

  return writings.map((writing) => {
    let {data, content} = matter(writing)

    return {...(data as Writing), content}
  })
}
