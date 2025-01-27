import { useEffect, useState } from 'react'
import { Avatar } from '../ui/avatar'
import { Button } from '../ui/button'
import { Textarea } from '../ui/textarea'
import { UserCircle2, Heart, MessageCircle, Share2, MoreHorizontal, Send, Trash2, AlertCircle } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import { cn } from '@/lib/utils'
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
import { Comment } from '@/types/comments'
import { PostStore } from '@/store/PostStore'
import { cp } from 'fs'




export function CommentSection({ postId,commentPost}:{postId:string,commentPost:Comment[]} ) {
  
  const addComment=PostStore((state)=>state.addComment)
  const addReply=PostStore((state)=>state.addReply)
  const likeComment=PostStore((state)=>state.likeComment);
  const load=PostStore((state)=>state.loadComments)
  const comments=PostStore((state)=>state.comments)
  const [newComment, setNewComment] = useState('')
  const [replyingTo, setReplyingTo] = useState<string | null>(null)
  const [replyContent, setReplyContent] = useState('')
  const [expandedComment, setExpandedComment] = useState<string | null>(null)
  const [commentToDelete, setCommentToDelete] = useState<string | null>(null)
  const [isLiked, setIsLiked] = useState<{ [key: string]: boolean }>({})
console.log(comments)


  const handleSubmitComment = () => {
    if (!newComment.trim()) return

    const comment: Comment = {
      id: Math.random().toString(),
      content: newComment,
      postId: postId,
      author: {
        name: 'Vous',
        image: '/profile.jpg',
        id: 'profi'
      },
      likes: 0,
      replies: [],
      createdAt: new Date().toISOString(),
      isOwner: true,
      isLiked: false
    }
    
    addComment(comment)
    load(postId)
    setNewComment("")
  }

  const handleSubmitReply = (commentId: string) => {
    if (!replyContent.trim()) return

    const reply: Comment = {
      id: Math.random().toString(),
      content: replyContent,
      author: {
        name: 'Vous',
        image: '/profile.jpg',
        id: "profi"
      },
      likes: 0,
      replies: [],
      createdAt: new Date().toISOString(),
      isOwner: true,
      postId: postId,
      isLiked: false
    }

    addReply(commentId,reply)
    load(postId)
    setNewComment("")

    setReplyContent('')
    setReplyingTo(null)
  }

  const handleDeleteComment = (commentId: string) => {
    setComments(comments.filter(comment => {
      if (comment.id === commentId) return false
      comment.replies = comment.replies.filter(reply => reply.id !== commentId)
      return true
    }))
    setCommentToDelete(null)
  }

  const toggleLike = (commentId: string) => {
   likeComment(commentId)
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
      <div className=" bg-[#282828]  p-4">
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
              className="min-h-[80px] bg-[#1f1f1f] border-none focus:ring-1 focus:ring-primary focus:outline-none resize-none rounded-xl placeholder:text-gray-500"
            />
            <div className="flex justify-end mt-4">
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
        {comments===null && <><p>Erreur</p></>}
        {comments!=null && comments.map(comment => (
          <motion.div
            key={comment.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="group bg-gradient-to-br bg-[#282828] backdrop-blur-sm rounded-xl p-4  transition-all duration-200"
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
                        <Button  size="icon" className="opacity-0 hover:bg-transparent bg-transparent group-hover:opacity-100 transition-opacity text-gray-400 hover:text-gray-300">
                          <MoreHorizontal className="w-5 h-5" />
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end" className=" border-gray-800">
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
                   
                    size="sm" 
                    onClick={() => toggleLike(comment.id)}
                    className={cn(
                      "text-gray-400 bg-transparent hover:bg-transparent hover:text-gray-300",
                      comment.isLiked && "text-red-400 hover:text-red-300"
                    )}
                  >
                    <Heart className={cn("w-4 h-4 mr-1", comment.isLiked && "fill-current")} />
                    {comment.likes}
                  </Button>
                  <Button 
                   
                    size="sm" 
                    className="text-gray-400 bg-transparent hover:bg-transparent hover:text-gray-300"
                    onClick={() => setReplyingTo(replyingTo === comment.id ? null : comment.id)}
                  >
                    <MessageCircle className="w-4 h-4 mr-1" />
                    {comment.replies.length}
                  </Button>
                  <Button  size="sm" className="text-gray-400 bg-transparent hover:bg-transparent hover:text-gray-300">
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
                            className="min-h-[60px] bg-[#1f1f1f] border-none focus:ring-1 focus:ring-primary/50 resize-none rounded-xl placeholder:text-gray-500"
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
                      
                      size="sm"
                      className="text-gray-400 bg-transparent hover:bg-transparent hover:text-gray-300 mb-4"
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
                                        <Button  size="icon" className="opacity-0 bg-transparent hover:bg-transparent group-hover:opacity-100 transition-opacity text-gray-400 hover:text-gray-300">
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
                                <p className="text-gray-300 text-sm mt-2">{reply.content}</p>
                                <div className="flex items-center gap-4 pt-2">
                                  <Button 
                                    
                                    size="sm" 
                                    onClick={() => toggleLike(reply.id)}
                                    className={cn(
                                      "text-gray-400 bg-transparent hover:bg-transparent hover:text-red-400",
                                      isLiked[reply.id] && "text-red-400 hover:text-red-300"
                                    )}
                                  >
                                    <Heart className={cn("w-4 h-4 mr-1", isLiked[reply.id] && "fill-current")} />
                                    {reply.likes}
                                  </Button>
                                  <Button  size="sm" className="text-gray-400 bg-transparent hover:bg-transparent hover:text-gray-300">
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
