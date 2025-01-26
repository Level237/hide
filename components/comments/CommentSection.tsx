'use client'
import { useState, useEffect } from 'react'
import { Avatar } from '../ui/avatar'
import { Button } from '../ui/button'
import { Textarea } from '../ui/textarea'
import { UserCircle2, Heart, MessageCircle, Share2, MoreHorizontal, Send, Trash2 } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import { cn } from '@/lib/utils'

import { Comment } from '@/types/comments'
import { formatDistanceToNow } from 'date-fns'
import { fr } from 'date-fns/locale'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog"
import { PostStore } from '@/store/PostStore'

interface CommentSectionProps {
  postId: string
}

export function CommentSection({ postId }: CommentSectionProps) {
  
  const loadComments=PostStore((state:any)=>state.loadComments)
  const comments=PostStore((state:any)=>state.comments)
  const addComment=PostStore((state:any)=>state.addComment)
  const removeComment=PostStore((state:any)=>state.removeComment)
  const likeComment=PostStore((state:any)=>state.likeComment)
  const selectedPost=PostStore((state:any)=>state.selectedPost)
  const [newComment, setNewComment] = useState('')
  const [replyingTo, setReplyingTo] = useState<string | null>(null)
  const [replyContent, setReplyContent] = useState('')
  const [expandedComment, setExpandedComment] = useState<string | null>(null)
  const [commentToDelete, setCommentToDelete] = useState<string | null>(null)
  const [isLiked, setIsLiked] = useState<{ [key: string]: boolean }>({})

  useEffect(() => {
    loadComments(postId)
  }, [postId])

  const handleSubmitComment = () => {
    if (!newComment.trim()) return

    const comment: Comment = {
      id: Math.random().toString(),
      content: newComment,
      postId,
      author: {
        id: 'current-user',
        name: 'Vous',
        image: '/profile.jpg',
        anonymous:false,
      },
      likes: 0,
      replies: [],
      createdAt: new Date().toISOString(),
      isOwner: true
    }

    addComment(postId, comment)
    loadComments(postId)
  }

  const handleSubmitReply = (commentId: string) => {
    if (!replyContent.trim()) return

    const reply: Comment = {
      id: Math.random().toString(),
      content: replyContent,
      postId,
      author: {
        id: 'current-user',
        name: 'Vous',
        image: '/profile.jpg'
      },
      likes: 0,
      replies: [],
      createdAt: new Date().toISOString(),
      isOwner: true
    }

    // Trouver le commentaire parent et ajouter la réponse
    const parentComment = comments?.find(c => c.id === commentId)
    if (parentComment) {
      const updatedComment = {
        ...parentComment,
        replies: [reply, ...parentComment.replies]
      }
      addComment(postId, updatedComment)
    }

    setReplyContent('')
    setReplyingTo(null)
  }

  const handleDeleteComment = (commentId: string) => {
    removeComment(postId, commentId)
    setCommentToDelete(null)
  }

  const toggleLike = (commentId: string) => {
    setIsLiked(prev => {
      const newState = { ...prev, [commentId]: !prev[commentId] }
      likeComment(postId, commentId)
      return newState
    })
  }

  const formatDate = (date: string) => {
    return formatDistanceToNow(new Date(date), { addSuffix: true, locale: fr })
  }

  if (!comments) return null

  return (
    <div className="space-y-6">
      {/* New Comment Input */}
      <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-xl p-4 shadow-xl">
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
              className="min-h-[80px] bg-gray-800/50 border-none focus:ring-1 focus:ring-primary/50 resize-none rounded-xl placeholder:text-gray-500"
            />
            <div className="flex justify-end mt-2">
              <Button 
                onClick={handleSubmitComment}
                className="bg-primary hover:bg-primary/90 transition-all duration-200"
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
        {comments.map((comment:Comment) => (
          <motion.div
            key={comment.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="group bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-xl p-4 shadow-xl hover:shadow-2xl transition-all duration-200"
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
                  {comment.isOwner && (
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button variant="ghost" size="icon" className="opacity-0 group-hover:opacity-100 transition-opacity text-gray-400 hover:text-gray-300">
                          <MoreHorizontal className="w-5 h-5" />
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end" className="bg-gray-900 border-gray-800">
                        <DropdownMenuItem 
                          className="text-red-400 hover:text-red-300 focus:text-red-300 cursor-pointer"
                          onClick={() => setCommentToDelete(comment.id)}
                        >
                          <Trash2 className="w-4 h-4 mr-2" />
                          Supprimer
                        </DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  )}
                </div>

                <p className="text-gray-300">{comment.content}</p>

                <div className="flex items-center gap-4 pt-2">
                  <Button 
                    variant="ghost" 
                    size="sm" 
                    onClick={() => toggleLike(comment.id)}
                    className={cn(
                      "text-gray-400 hover:text-gray-300",
                      isLiked[comment.id] && "text-red-400 hover:text-red-300"
                    )}
                  >
                    <Heart className={cn("w-4 h-4 mr-1", isLiked[comment.id] && "fill-current")} />
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
                            className="min-h-[60px] bg-gray-800/50 border-none focus:ring-1 focus:ring-primary/50 resize-none rounded-xl placeholder:text-gray-500"
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
                  <div className="pt-4 pl-4 border-l border-gray-700/50">
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
                            <div key={reply.id} className="flex gap-4 group">
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
                                  {reply.isOwner && (
                                    <DropdownMenu>
                                      <DropdownMenuTrigger asChild>
                                        <Button variant="ghost" size="icon" className="opacity-0 group-hover:opacity-100 transition-opacity text-gray-400 hover:text-gray-300">
                                          <MoreHorizontal className="w-4 h-4" />
                                        </Button>
                                      </DropdownMenuTrigger>
                                      <DropdownMenuContent align="end" className="bg-gray-900 border-gray-800">
                                        <DropdownMenuItem 
                                          className="text-red-400 hover:text-red-300 focus:text-red-300 cursor-pointer"
                                          onClick={() => setCommentToDelete(reply.id)}
                                        >
                                          <Trash2 className="w-4 h-4 mr-2" />
                                          Supprimer
                                        </DropdownMenuItem>
                                      </DropdownMenuContent>
                                    </DropdownMenu>
                                  )}
                                </div>
                                <p className="text-gray-300 text-sm">{reply.content}</p>
                                <div className="flex items-center gap-4 pt-2">
                                  <Button 
                                    variant="ghost" 
                                    size="sm" 
                                    onClick={() => toggleLike(reply.id)}
                                    className={cn(
                                      "text-gray-400 hover:text-gray-300",
                                      isLiked[reply.id] && "text-red-400 hover:text-red-300"
                                    )}
                                  >
                                    <Heart className={cn("w-4 h-4 mr-1", isLiked[reply.id] && "fill-current")} />
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

      {/* Delete Comment Dialog */}
      <AlertDialog open={!!commentToDelete} onOpenChange={() => setCommentToDelete(null)}>
        <AlertDialogContent className="bg-gray-900 border-gray-800">
          <AlertDialogHeader>
            <AlertDialogTitle className="text-gray-200">Supprimer le commentaire</AlertDialogTitle>
            <AlertDialogDescription className="text-gray-400">
              Êtes-vous sûr de vouloir supprimer ce commentaire ? Cette action est irréversible.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel className="bg-gray-800 text-gray-300 hover:bg-gray-700">Annuler</AlertDialogCancel>
            <AlertDialogAction
              className="bg-red-500 hover:bg-red-600 text-white"
              onClick={() => commentToDelete && handleDeleteComment(commentToDelete)}
            >
              Supprimer
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  )
}
