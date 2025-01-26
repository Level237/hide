'use client'
import { PostStore, Post } from '@/store/PostStore'
import { useRouter } from 'next/navigation'
import { Avatar } from '../ui/avatar'
import { Button } from '../ui/button'
import { Heart, MessageCircle, Share2, Play, Volume2 } from 'lucide-react'

import Image from 'next/image'
import { formatDistanceToNow } from 'date-fns'
import { fr } from 'date-fns/locale'
import { cn } from '@/lib/utils'

export default function PostList() {
  const posts = PostStore((state)=>state.posts)
  const likePost=PostStore((state)=>state.likePost)
  const router = useRouter()

  const handlePostClick = (post: Post) => {
    router.push(`/post/${post.id}`)
  }

  const handleLike = (e: React.MouseEvent, postId: string) => {
    e.stopPropagation()
    likePost(postId)
  }

  const formatDate = (date: string) => {
    return formatDistanceToNow(new Date(date), { addSuffix: true, locale: fr })
  }

  return (
    <div className="space-y-6 py-4">
      {posts.map((post) => (
        <div
          key={post.id}
          
          onClick={() => handlePostClick(post)}
          className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-xl p-4 shadow-xl cursor-pointer hover:shadow-2xl transition-all duration-200"
        >
          {/* En-tête du post */}
          <div className="flex items-center gap-3 mb-4">
            <Avatar 
              style={{ 
                background: post.author.profile ? `url(${post.author.profile})` : 'none',
                backgroundPosition: "center",
                backgroundSize: "cover"
              }}
              className="w-10 h-10 rounded-xl ring-2 ring-gray-700"
            />
            <div>
              <h3 className="font-medium text-gray-200">{post.author.name}</h3>
              <p className="text-sm text-gray-400">{formatDate(post.createdAt)}</p>
            </div>
          </div>

          {/* Contenu du post selon son type */}
          {post.type === 'story' && (
            <div 
              className="rounded-xl p-6 mb-4 min-h-[200px] flex items-center justify-center text-center"
              style={{ background: post.background }}
            >
              <p className="text-xl font-medium text-white">{post.content}</p>
            </div>
          )}

          {post.type === 'image' && (
            <div className="space-y-4 mb-4">
              <div className="relative w-full h-[400px] rounded-xl overflow-hidden">
                <Image
                  src={post.image || ''}
                  alt={post.content || ''}
                  fill
                  className="object-cover"
                />
              </div>
              {post.content && (
                <p className="text-gray-200">{post.content}</p>
              )}
            </div>
          )}

          {post.type === 'voice' && post.audio && (
            <div className="bg-gradient-to-r from-blue-600/20 to-blue-800/20 rounded-xl p-4 mb-4">
              <div className="flex items-center gap-4">
                <Button
                  variant="ghost"
                  size="icon"
                  className="h-12 w-12 rounded-xl bg-white/10 hover:bg-white/20 text-white"
                >
                  <Play className="h-6 w-6" />
                </Button>

                <div className="flex-1 space-y-2">
                  <div className="h-2 bg-white/20 rounded-full">
                    <div className="h-full w-0 bg-white rounded-full transition-all duration-200" />
                  </div>
                  <div className="flex justify-between text-sm text-white/80">
                    <span>0:00</span>
                    <span>{Math.floor(post.audio.duration / 60)}:{(post.audio.duration % 60).toString().padStart(2, '0')}</span>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <Volume2 className="h-5 w-5 text-white/80" />
                </div>
              </div>
            </div>
          )}

          {/* Statistiques et actions */}
          <div className="flex items-center gap-6 text-gray-400">
            <Button 
              variant="ghost" 
              size="sm"
              onClick={(e) => handleLike(e, post.id)}
              className={cn(
                "hover:text-gray-300 gap-2",
                post.isLiked && "text-red-400 hover:text-red-300"
              )}
            >
              <Heart className={cn("w-5 h-5", post.isLiked && "fill-current")} />
              {post.likes}
            </Button>

            <Button 
              variant="ghost" 
              size="sm"
              className="hover:text-gray-300 gap-2"
            >
              <MessageCircle className="w-5 h-5" />
              {post.comments.length}
            </Button>

            <Button 
              variant="ghost" 
              size="sm"
              className="hover:text-gray-300 gap-2"
            >
              <Share2 className="w-5 h-5" />
              {post.shares}
            </Button>

            <span className="ml-auto text-sm">
              {post.views} vues
            </span>
          </div>
        </div>
      ))}
    </div>
  )
}
