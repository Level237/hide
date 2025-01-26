import { mockPosts } from '@/data/posts/mockData'
import { Comment } from '@/types/comments'
import { Post } from '@/types/Post'
import { create } from 'zustand'

interface PostStoreState{
    bgPost:string,
    changeBgHandler:(color:string)=>void,
    isRecording:boolean,
    audioUrl:string,
    audioBlob:Blob,
    loadComments:(postId:string)=>void,
   comments:Comment[] | null,
    setAudioUrl:(audioUrl:string)=>void,
    setAudioBlob:(audioBlob:Blob)=>void,
    playRecord:()=>void,
    posts: Post[]
    selectedPost: Post | null
    setPosts: (posts: Post[]) => void
    selectPostById: (id: string) => void,
    addPost: (post: Post) => void
    removePost: (postId: string) => void
    updatePost: (postId: string, updates: Partial<Post>) => void
    likePost: (postId: string) => void
    savePost: (postId: string) => void
    addComment: (postId: string, comment: Comment) => void
    removeComment: (postId: string, commentId: string) => void
    likeComment: (postId: string, commentId: string) => void
}





// Données de test pour les posts


export const PostStore=create<PostStoreState>((set,get)=>({
    bgPost:"#000000",
    isRecording:false,
    audioUrl:"",
    comments:null,
    loadComments:(postId) => {
      set((state) => {
          let newArr:Comment[]=[]
          const filterComments = state.posts.map((post) => post.comments);
          const fil=filterComments.forEach((el)=>{
            
            el.filter((comment)=>{
              if(comment.postId===postId){
                newArr.push(comment)
              }
            })
          }
          
          )
          
          
          set({comments:newArr})
          return {comments:newArr}
        
      });
    },
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
    selectPostById: (id: string) => {
      set((state) => {
        const post = state.posts.find((post) => post.id === id);
        
        localStorage.setItem('post',JSON.stringify(post))
        
        return { selectedPost: post};
      });
    },
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
     
      posts: state.posts.map((post:Post) =>(
        post.id === postId
        ? { ...post, comments: [comment, ...post.comments] }
        : post
      )
        
        
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