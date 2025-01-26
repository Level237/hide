type PostType = 'story' | 'voice' | 'image'

interface Post {
  id: string
  type: PostType
  content: string
  author: {
    name: string
    image?: string
    anonymous: boolean
  }
  likes: number,
  commentsId?:number,
  comments: number
  shares: number
  createdAt: string
  background?: string
  image?: string,
  audioId?:string,
  audio?: string
  audioDuration?: number
}