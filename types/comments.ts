export interface Comment {
    id: string,
    postId:string,
    content: string
    author: {
        id:string,
      name: string
      image?: string
      anonymous?: boolean
    }
    likes: number
    replies: Comment[]
    createdAt: string
    isOwner?: boolean
  }
  
