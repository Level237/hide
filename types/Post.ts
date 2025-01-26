import { Comment } from "./comments"

type PostType = 'story' | 'voice' | 'image'

export interface Post {
  id: string
  type: PostType
  content: string
  author: {
    name: string
    image?: string
    anonymous: boolean
  }
  likes: number,
  comments: Comment[]
  shares: number
  createdAt: string
  background?: string
  image?: string,
  audioId?:string,
  audio?: string
  audioDuration?: number
}