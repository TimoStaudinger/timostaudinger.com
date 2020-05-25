import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

export interface Content {
  slug: string
  title: string
  excerpt: string
  coverImage: string
  previewImage: string
  content: string
}

export interface Post extends Content {
  date: string
}

export interface Project extends Content {}

const readContent = (dir: string): string[] => {
  const postDirectory = path.resolve(process.cwd(), dir)
  const postFiles = fs.readdirSync(postDirectory)

  return postFiles.map((fileName) => {
    const fullPath = path.join(postDirectory, fileName)
    return fs.readFileSync(fullPath, 'utf8')
  })
}

export const getPosts = (): Post[] => {
  const posts = readContent('_posts')

  return posts.map((post) => {
    let {data, content} = matter(post)

    return {...(data as Post), content}
  })
}

export const getProjects = (): Project[] => {
  const projects = readContent('_projects')

  return projects.map((project) => {
    let {data, content} = matter(project)

    return {...(data as Project), content}
  })
}
