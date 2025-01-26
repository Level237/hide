import { create } from 'zustand'

interface PostStoreState{
    bgPost:string,
    changeBgHandler:(color:string)=>void,
    isRecording:boolean,
    audioUrl:string,
    audioBlob:Blob,
    setAudioUrl:(audioUrl:string)=>void,
    setAudioBlob:(audioBlob:Blob)=>void,
    playRecord:()=>void,
    posts: Post[]
    selectedPost: Post | null
    setPosts: (posts: Post[]) => void
    setSelectedPost: (post: Post | null) => void
    addPost: (post: Post) => void
    removePost: (postId: string) => void
    updatePost: (postId: string, updates: Partial<Post>) => void
    likePost: (postId: string) => void
    savePost: (postId: string) => void
    addComment: (postId: string, comment: Comment) => void
    removeComment: (postId: string, commentId: string) => void
    likeComment: (postId: string, commentId: string) => void
}

export type PostType = 'story' | 'voice' | 'image'

export interface Comment {
  id: string
  content: string
  author: {
    id: string
    name: string
    profile?: string
    anonymous?: boolean
  }
  likes: number
  replies: Comment[]
  createdAt: string
  isOwner?: boolean
}

export interface Post {
  id: string
  type: PostType
  content?: string
  author: {
    id: string
    name: string
    profile?: string
  }
  likes: number
  comments: Comment[]
  shares: number
  createdAt: string
  background?: string
  image?: string
  audio?: {
    url: string
    duration: number
  }
  views: number
  saved: boolean
  isLiked: boolean
  isOwner: boolean
}

// Données de test pour les posts
const mockPosts: Post[] = [
  {
    id: 'post1',
    type: 'story',
    content: '😄😄😄Tu trouve le bon mais il est toujours devant sa machine..',
    author: {
      id: 'user1',
      name: 'Zed Camara',
      profile: 'profile2.jpg',
    },
    likes: 23,
    comments: [
      {
        id: 'comment1',
        content: 'Tellement vrai ! Continue de partager ta joie de vivre 🙌',
        author: {
          id: 'user2',
          name: 'Ibrahima Djamilatou',
          profile: '/profile1.jpg'
        },
        likes: 12,
        replies: [],
        createdAt: '2025-01-26T08:30:00.000Z'
      }
    ],
    shares: 45,
    createdAt: '2025-01-26T08:00:00.000Z',
    background: 'linear-gradient(45deg, #FF416C, #FF4B2B)',
    views: 1567,
    saved: false,
    isLiked: false,
    isOwner: false
  },
  {
    id: 'post2',
    type: 'voice',
    author: {
      id: 'user3',
      name: 'Lucas Bernard',
      profile: '/profile3.jpg',
    },
    likes: 567,
    comments: [
      {
        id: 'comment2',
        content: 'Super message vocal ! J\'adore ton accent 😊',
        author: {
          id: 'user4',
          name: 'Emma Petit',
          profile: '/profile4.jpg'
        },
        likes: 28,
        replies: [],
        createdAt: '2025-01-26T07:45:00.000Z'
      }
    ],
    shares: 89,
    createdAt: '2025-01-26T07:30:00.000Z',
    audio: {
      url: '/audio/message1.mp3',
      duration: 45
    },
    views: 2890,
    saved: true,
    isLiked: true,
    isOwner: false
  },
  {
    id: 'post3',
    type: 'image',
    content: "Depuis la je suis bloqué mais je n'arrive pas à trouvé la solution 🤔",
    author: {
      id: 'user5',
      name: 'Thomas Richard',
      profile: '/profile5.jpg'
    },
    likes: 892,
    comments: [
      {
        id: 'comment3',
        content: 'As-tu essayé de redémarrer ? 😅',
        author: {
          id: 'user6',
          name: 'Julie Moreau',
          profile: '/profile6.jpg'
        },
        likes: 45,
        replies: [
          {
            id: 'reply1',
            content: 'Classique ! Mais ça marche souvent 😂',
            author: {
              id: 'user5',
              name: 'Thomas Richard',
              profile: '/profile5.jpg'
            },
            likes: 23,
            replies: [],
            createdAt: '2025-01-26T06:20:00.000Z'
          }
        ],
        createdAt: '2025-01-26T06:15:00.000Z'
      }
    ],
    shares: 234,
    createdAt: '2025-01-26T06:00:00.000Z',
    image: '/bug-screenshot.jpg',
    views: 4567,
    saved: false,
    isLiked: true,
    isOwner: false
  }
]

export const PostStore=create<PostStoreState>((set)=>({
    bgPost:"#000000",
    isRecording:false,
    audioUrl:"",
    audioBlob:new Blob(),
    changeBgHandler:(color:string)=>{
    set({bgPost:color})
    },
    playRecord:()=>{
        set((state) => ({ isRecording: !state.isRecording }));  
        
    },
    setAudioUrl:(audioUrl:string)=>{
        set({audioUrl:audioUrl})
    },
    setAudioBlob:(audioBlob:Blob)=>{
        set({audioBlob:audioBlob})
    },
    posts: mockPosts,
    selectedPost: null,
    setPosts: (posts) => set({ posts }),
    setSelectedPost: (post) => set({ selectedPost: post }),
    addPost: (post) => set((state) => ({ posts: [post, ...state.posts] })),
    removePost: (postId) => set((state) => ({
      posts: state.posts.filter((post) => post.id !== postId)
    })),
    updatePost: (postId, updates) => set((state) => ({
      posts: state.posts.map((post) =>
        post.id === postId ? { ...post, ...updates } : post
      )
    })),
    likePost: (postId) => set((state) => ({
      posts: state.posts.map((post) =>
        post.id === postId
          ? {
              ...post,
              likes: post.isLiked ? post.likes - 1 : post.likes + 1,
              isLiked: !post.isLiked
            }
          : post
      )
    })),
    savePost: (postId) => set((state) => ({
      posts: state.posts.map((post) =>
        post.id === postId ? { ...post, saved: !post.saved } : post
      )
    })),
    addComment: (postId, comment) => set((state) => ({
      posts: state.posts.map((post) =>
        post.id === postId
          ? { ...post, comments: [comment, ...post.comments] }
          : post
      )
    })),
    removeComment: (postId, commentId) => set((state) => ({
      posts: state.posts.map((post) =>
        post.id === postId
          ? {
              ...post,
              comments: post.comments.filter((comment) => comment.id !== commentId)
            }
          : post
      )
    })),
    likeComment: (postId, commentId) => set((state) => ({
      posts: state.posts.map((post) =>
        post.id === postId
          ? {
              ...post,
              comments: post.comments.map((comment) =>
                comment.id === commentId
                  ? { ...comment, likes: comment.likes + 1 }
                  : comment
              )
            }
          : post
      )
    }))
}))