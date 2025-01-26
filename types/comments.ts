export interface Comment {
    id: string
    content: string
    author: {
      name: string
      image?: string
      anonymous?: boolean
    }
    likes: number
    replies: Comment[]
    createdAt: string
    isOwner?: boolean
  }
  
