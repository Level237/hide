'use client'
import { Button } from '@/components/ui/button'
import { Avatar } from '@/components/ui/avatar'
import { UserCircle2, Heart, MessageCircle, Share2, ArrowLeft, Play, Pause, Volume2, Mic } from 'lucide-react'
import { CommentSection } from '@/components/comments/CommentSection'
import { useRouter } from 'next/navigation'
import Image from 'next/image'
import { useState, useRef, useEffect } from 'react'
import { cn } from '@/lib/utils'
import PostVoice from '@/components/posts/PostVoice'
import { PostStore } from '@/store/PostStore'
import { Post } from '@/types/Post'
import { motion, AnimatePresence } from 'framer-motion'

export default function PostPage({ params }: { params: { id: string } }) {
  const router = useRouter()
  const likePost = PostStore((state) => state.likePost)
  const comments = PostStore((state) => state.comments)
  const post = PostStore((state) => state.selectedPost)
  const [isPlaying, setIsPlaying] = useState(false)
  const [currentTime, setCurrentTime] = useState(0)
  const audioRef = useRef<HTMLAudioElement | null>(null)
  const [audioVolume, setAudioVolume] = useState(1)
  const loadComment = PostStore((state) => state.loadComments)
  const [showComments, setShowComments] = useState(true)

  useEffect(() => {
    loadComment(params.id)
  }, [])

  const handleLike = (e: React.MouseEvent, postId: string) => {
    e.stopPropagation()
    likePost(postId)
  }

  const formatDate = (date?: string) => {
    return new Date(date).toLocaleDateString('fr-FR', {
      day: 'numeric',
      month: 'short',
      hour: 'numeric',
      minute: 'numeric'
    })
  }

  if (!post) {
    return (
      <div className="min-h-screen bg-[#1a1a1a] flex items-center justify-center">
        <div className="text-gray-400">Chargement du post...</div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-[#1a1a1a] text-white">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 bg-[#2a2a2a] border-b border-gray-800 z-50">
        <div className="max-w-[90rem] mx-auto px-4 h-16 flex items-center justify-between">
          <Button 
            variant="ghost" 
            className="text-gray-400 hover:text-gray-300"
            onClick={() => router.back()}
          >
            <ArrowLeft className="w-5 h-5 mr-2" />
            Retour
          </Button>
          <h1 className="text-lg font-semibold">Publication</h1>
          <div className="w-20" />
        </div>
      </header>

      {/* Main Content - Grid Layout */}
      <main className="pt-16 h-screen grid overflow-hidden grid-cols-[60%_40%]">
        {/* Left Column - Post Content */}
        <section className="h-screen sticky top-0   px-8 py-6">
          <div className="max-w-3xl mx-auto">
            <div className="  overflow-hidden">
              {/* Post Header */}
              <div className="p-6">
                <div className="flex items-center gap-4">
                  {post?.author.anonymous ? (
                    <div className="w-12 h-12 rounded-xl ring-2 ring-gray-700 bg-gray-800 flex items-center justify-center">
                      <UserCircle2 className="w-7 h-7 text-gray-400" />
                    </div>
                  ) : (
                    <Avatar 
                      style={{ background: `url(${post?.author.image})`, backgroundPosition: "center", backgroundSize: "cover" }} 
                      className="w-12 h-12 rounded-xl ring-2 ring-gray-700"
                    />
                  )}
                  <div>
                    <h2 className="font-semibold text-lg text-gray-200">
                      {post?.author.anonymous ? 'Anonyme' : post?.author.name}
                    </h2>
                    <p className="text-sm text-gray-500">{formatDate(post?.createdAt)}</p>
                  </div>
                </div>

                {/* Post Content based on type */}
                <div className="mt-6">
                  {post?.type === 'story' && (
                    <div className="h-80 flex justify-center items-center p-10 px-8 rounded-2xl" 
                         style={{ background: `${post.background}` }}>
                      <h2 className="text-2xl text-center font-bold text-white">
                        {post.content}
                      </h2>
                    </div>
                  )}
                    
                  {post?.type === 'image' && (
                    <div className="space-y-4">
                      <p className="text-gray-200">{post.content}</p>
                      {post.image && (
                        <div className="relative w-full h-[350px] rounded-xl overflow-hidden">
                          <Image
                            src={post.image}
                            alt="Post image"
                            layout="fill"
                            objectFit="cover"
                            className="rounded-xl"
                          />
                        </div>
                      )}
                    </div>
                  )}

                  {post?.type === 'voice' && (
                    <div style={{background:`${post.background}`}} className="rounded-2xl p-6">
                      <div className="flex flex-col space-y-4">
                        <div className="flex items-center space-x-3 text-gray-400">
                          <Mic className="w-5 text-white h-5" />
                          <span className="text-sm text-white font-medium">Message vocal</span>
                        </div>
                        
                        <div className="relative">
                          <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-transparent rounded-xl blur-xl"></div>
                          <div className="relative bg-gray-800/50 rounded-xl p-4 backdrop-blur-sm">
                            <PostVoice
                              heightVoice={50} 
                              widthVoice={500} 
                              audioUrl={`${post.audio}`} 
                              waveId={`${post.id}`}
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>

                {/* Post Stats */}
                <div className="flex items-center gap-6 text-gray-400 mt-6">
                  <Button 
                    onClick={(e) => handleLike(e, post.id)} 
                    className="bg-transparent hover:bg-transparent hover:text-red-500"
                  >
                    <Heart className="w-5 h-5 mr-1" />
                    {post?.likes} likes
                  </Button>
                  <Button 
                    className="bg-transparent hover:bg-transparent hover:text-blue-500"
                    onClick={() => setShowComments(true)}
                  >
                    <MessageCircle className="w-5 h-5 mr-2" />
                    {comments?.length} replies
                  </Button>
                  <Button className="bg-transparent hover:bg-transparent hover:text-primary">
                    <Share2 className="w-5 h-5 mr-2" />
                    {post?.shares} shares
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Right Column - Comments Section */}
        <AnimatePresence>
          {showComments && (
            <motion.section
              initial={{ x: "100%", opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: "100%", opacity: 0 }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className="h-[calc(100vh-4rem)] overflow-y-auto bg-[#2a2a2a]/50 backdrop-blur-sm scrollbar-thin scrollbar-thumb-gray-700 scrollbar-track-transparent"
            >
              <div className="p-6">
                <div className="flex items-center justify-between mb-6 sticky top-0 bg-[#2a2a2a] py-4 z-10">
                  <h3 className="text-lg font-semibold">
                    Commentaires ({comments?.length || 0})
                  </h3>
                  <Button
                    variant="ghost"
                    size="sm"
                    className="lg:hidden text-gray-400 hover:text-gray-300"
                    onClick={() => setShowComments(false)}
                  >
                    <ArrowLeft className="w-5 h-5" />
                  </Button>
                </div>
                <div className="space-y-4">
                  <CommentSection postId={post.id} commentPost={comments} />
                </div>
              </div>
            </motion.section>
          )}
        </AnimatePresence>
      </main>
    </div>
  )
}