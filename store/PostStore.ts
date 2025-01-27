import { mockComment } from '@/data/posts/commentsData'
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
   comments:Comment[],
    setAudioUrl:(audioUrl:string)=>void,
    setAudioBlob:(audioBlob:Blob)=>void,
    playRecord:()=>void,
    posts: Post[],
    selectedPost: Post | null
    setPosts: (posts: Post[]) => void
    selectPostById: (id: string) => void,
    addPost: (post: Post) => void
    removePost: (postId: string) => void
    updatePost: (postId: string, updates: Partial<Post>) => void
    likePost: (postId: string) => void
    savePost: (postId: string) => void
    addComment: (comment: Comment) => void,
    addReply:(commentId:string,comment:Comment)=>void,
    removeComment: (postId: string, commentId: string) => void
    likeComment: (commentId: string) => void
}





// Données de test pour les posts


export const PostStore=create<PostStoreState>((set,get)=>({
    bgPost:"#000000",
    isRecording:false,
   
    
    audioUrl:"",
    comments:mockComment,
    loadComments:(postId) => {
      set((state) => {
        // Trouver tous les commentaires pour ce post
       
          const comments = state.comments.filter((comment)=>comment.postId===postId)
          
        
        return { comments: comments };
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
    addComment:  (comment) => set((state) => ({ comments: [comment, ...state.comments] })),
    addReply:(commentId:string,reply:Comment)=>{
      set((state) => ({
        comments:state.comments.map((comment)=>
        comment.id === commentId ?
          {
            ...comment,
            replies: [reply, ...comment.replies]
          
        
      }:comment)}));
    },
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
    likeComment: (commentId) => set((state) => {
      const likedComment=state.comments?.map((comment) =>
        comment.id === commentId
          ? {
              ...comment,
              likes: comment.isLiked ? comment.likes - 1 : comment.likes + 1,
              isLiked: !comment.isLiked
            }
          : comment
      )

      return {comments:likedComment}
    }),
}))