import { Comment } from "./comments"

type PostType = 'story' | 'voice' | 'image'

export interface Post {
  id: string
  type: PostType,
  reply:number,
  content?: string
  author: {
    id:string,
    name: string
    image?: string
    anonymous: boolean
  }
  likes: number,
  shares: number
  createdAt: string
  background?: string
  image?: string,
  audioId?:string,
  audio?: string,
  isLiked:boolean,
  saved?:boolean,
  audioDuration?: number
}