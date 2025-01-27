export interface StoryHide {
  id: string
  content: string
  createdAt: string
  responses: StoryResponse[]
  shareLink: string
  viewCount: number
  isPrivate: boolean
}

export interface StoryResponse {
  id: string
  content: string
  createdAt: string
  isAnonymous: boolean
  author?: {
    id: string
    name: string
    image?: string
  }
}
