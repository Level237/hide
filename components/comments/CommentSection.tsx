import { useState } from 'react'
import { Avatar } from '../ui/avatar'
import { Button } from '../ui/button'
import { Textarea } from '../ui/textarea'
import { UserCircle2, Heart, MessageCircle, Share2, MoreHorizontal, Send } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import { cn } from '@/lib/utils'

interface Comment {
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
}

interface CommentSectionProps {
  postId: string
  comments: Comment[]
}

export function CommentSection({ postId, comments: initialComments }: CommentSectionProps) {
  const [comments, setComments] = useState<Comment[]>(initialComments)
  const [newComment, setNewComment] = useState('')
  const [replyingTo, setReplyingTo] = useState<string | null>(null)
  const [replyContent, setReplyContent] = useState('')
  const [expandedComment, setExpandedComment] = useState<string | null>(null)

  const handleSubmitComment = () => {
    if (!newComment.trim()) return

    const comment: Comment = {
      id: Math.random().toString(),
      content: newComment,
      author: {
        name: 'Vous',
        image: '/profile.jpg'
      },
      likes: 0,
      replies: [],
      createdAt: new Date().toISOString()
    }

    setComments([comment, ...comments])
    setNewComment('')
  }

  const handleSubmitReply = (commentId: string) => {
    if (!replyContent.trim()) return

    const reply: Comment = {
      id: Math.random().toString(),
      content: replyContent,
      author: {
        name: 'Vous',
        image: '/profile.jpg'
      },
      likes: 0,
      replies: [],
      createdAt: new Date().toISOString()
    }

    setComments(comments.map(comment => {
      if (comment.id === commentId) {
        return {
          ...comment,
          replies: [reply, ...comment.replies]
        }
      }
      return comment
    }))

    setReplyContent('')
    setReplyingTo(null)
  }

  const formatDate = (date: string) => {
    return new Date(date).toLocaleDateString('fr-FR', {
      day: 'numeric',
      month: 'short',
      hour: 'numeric',
      minute: 'numeric'
    })
  }

  return (
    <div className="space-y-6">
      {/* New Comment Input */}
      <div className="bg-[#2a2a2a] rounded-xl p-4">
        <div className="flex gap-4">
          <Avatar 
            style={{ background: "url('/profile.jpg')", backgroundPosition: "center", backgroundSize: "cover" }} 
            className="w-10 h-10 rounded-xl ring-2 ring-gray-700"
          />
          <div className="flex-1">
            <Textarea
              value={newComment}
              onChange={(e) => setNewComment(e.target.value)}
              placeholder="Écrivez un commentaire..."
              className="min-h-[80px] bg-[#363636] border-none focus:ring-1 focus:ring-primary/50 resize-none rounded-xl"
            />
            <div className="flex justify-end mt-2">
              <Button 
                onClick={handleSubmitComment}
                className="bg-primary hover:bg-primary/90"
              >
                <Send className="w-4 h-4 mr-2" />
                Commenter
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Comments List */}
      <div className="space-y-4">
        {comments.map(comment => (
          <motion.div
            key={comment.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-[#2a2a2a] rounded-xl p-4"
          >
            <div className="flex gap-4">
              {comment.author.image ? (
                <Avatar 
                  style={{ background: `url(${comment.author.image})`, backgroundPosition: "center", backgroundSize: "cover" }} 
                  className="w-10 h-10 rounded-xl ring-2 ring-gray-700"
                />
              ) : (
                <div className="w-10 h-10 rounded-xl ring-2 ring-gray-700 bg-gray-800 flex items-center justify-center">
                  <UserCircle2 className="w-6 h-6 text-gray-400" />
                </div>
              )}
              
              <div className="flex-1 space-y-2">
                <div className="flex items-center justify-between">
                  <div>
                    <span className="font-medium text-gray-200">{comment.author.name}</span>
                    <span className="text-sm text-gray-500 ml-2">{formatDate(comment.createdAt)}</span>
                  </div>
                  <Button variant="ghost" size="icon" className="text-gray-400 hover:text-gray-300">
                    <MoreHorizontal className="w-5 h-5" />
                  </Button>
                </div>

                <p className="text-gray-300">{comment.content}</p>

                <div className="flex items-center gap-4 pt-2">
                  <Button variant="ghost" size="sm" className="text-gray-400 hover:text-gray-300">
                    <Heart className="w-4 h-4 mr-1" />
                    {comment.likes}
                  </Button>
                  <Button 
                    variant="ghost" 
                    size="sm" 
                    className="text-gray-400 hover:text-gray-300"
                    onClick={() => setReplyingTo(replyingTo === comment.id ? null : comment.id)}
                  >
                    <MessageCircle className="w-4 h-4 mr-1" />
                    {comment.replies.length}
                  </Button>
                  <Button variant="ghost" size="sm" className="text-gray-400 hover:text-gray-300">
                    <Share2 className="w-4 h-4 mr-1" />
                    Partager
                  </Button>
                </div>

                {/* Reply Input */}
                <AnimatePresence>
                  {replyingTo === comment.id && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      className="pt-4"
                    >
                      <div className="flex gap-4">
                        <Avatar 
                          style={{ background: "url('/profile.jpg')", backgroundPosition: "center", backgroundSize: "cover" }} 
                          className="w-8 h-8 rounded-xl ring-2 ring-gray-700"
                        />
                        <div className="flex-1">
                          <Textarea
                            value={replyContent}
                            onChange={(e) => setReplyContent(e.target.value)}
                            placeholder="Écrivez une réponse..."
                            className="min-h-[60px] bg-[#363636] border-none focus:ring-1 focus:ring-primary/50 resize-none rounded-xl"
                          />
                          <div className="flex justify-end mt-2">
                            <Button 
                              onClick={() => handleSubmitReply(comment.id)}
                              size="sm"
                              className="bg-primary hover:bg-primary/90"
                            >
                              <Send className="w-4 h-4 mr-2" />
                              Répondre
                            </Button>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* Replies */}
                {comment.replies.length > 0 && (
                  <div className="pt-4 pl-4 border-l border-gray-700">
                    <Button
                      variant="ghost"
                      size="sm"
                      className="text-gray-400 hover:text-gray-300 mb-4"
                      onClick={() => setExpandedComment(expandedComment === comment.id ? null : comment.id)}
                    >
                      {expandedComment === comment.id ? 'Masquer' : `Voir ${comment.replies.length} réponses`}
                    </Button>

                    <AnimatePresence>
                      {expandedComment === comment.id && (
                        <motion.div
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          exit={{ opacity: 0 }}
                          className="space-y-4"
                        >
                          {comment.replies.map(reply => (
                            <div key={reply.id} className="flex gap-4">
                              {reply.author.image ? (
                                <Avatar 
                                  style={{ background: `url(${reply.author.image})`, backgroundPosition: "center", backgroundSize: "cover" }} 
                                  className="w-8 h-8 rounded-xl ring-2 ring-gray-700"
                                />
                              ) : (
                                <div className="w-8 h-8 rounded-xl ring-2 ring-gray-700 bg-gray-800 flex items-center justify-center">
                                  <UserCircle2 className="w-5 h-5 text-gray-400" />
                                </div>
                              )}
                              
                              <div className="flex-1">
                                <div className="flex items-center justify-between">
                                  <div>
                                    <span className="font-medium text-gray-200">{reply.author.name}</span>
                                    <span className="text-sm text-gray-500 ml-2">{formatDate(reply.createdAt)}</span>
                                  </div>
                                  <Button variant="ghost" size="icon" className="text-gray-400 hover:text-gray-300">
                                    <MoreHorizontal className="w-4 h-4" />
                                  </Button>
                                </div>
                                <p className="text-gray-300 text-sm">{reply.content}</p>
                                <div className="flex items-center gap-4 pt-2">
                                  <Button variant="ghost" size="sm" className="text-gray-400 hover:text-gray-300">
                                    <Heart className="w-4 h-4 mr-1" />
                                    {reply.likes}
                                  </Button>
                                  <Button variant="ghost" size="sm" className="text-gray-400 hover:text-gray-300">
                                    <Share2 className="w-4 h-4 mr-1" />
                                    Partager
                                  </Button>
                                </div>
                              </div>
                            </div>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                )}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  )
}
