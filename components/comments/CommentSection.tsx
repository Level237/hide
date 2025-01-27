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
    <>
    <div className="relative   h-full flex flex-col">
    {/* Comments List */}
   
    <div className="overflow-y-auto h-full space-y-3 w-full    pb-20">
      {commentPost?.map((comment) => (
        <motion.div
          key={comment.id}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="group hover:bg-gray-800/30 overscroll-y-scroll  rounded-lg transition-colors duration-200 p-3"
        >
          <div className="flex gap-3">
            <Avatar
              style={{
                background: `url(${comment.author.image})`,
                backgroundPosition: "center",
                backgroundSize: "cover"
              }}
              className="w-8 h-8 rounded-lg ring-2 ring-gray-700 flex-shrink-0"
            />
            <div className="flex-1 min-w-0">
              <div className="flex items-start justify-between gap-2">
                <div className="flex-1">
                  <div className="flex items-center gap-2">
                    <span className="font-medium text-sm text-gray-200">{comment.author.name}</span>
                    <span className="text-xs text-gray-500">{formatDate(comment.createdAt)}</span>
                  </div>
                  <p className="text-sm text-gray-300 mt-1">{comment.content}</p>
                  <div className="flex items-center gap-4 mt-2">
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => toggleLike(comment.id)}
                      className={cn(
                        "h-8 px-2 text-xs",
                        isLiked[comment.id] ? "text-red-400" : "text-gray-400"
                      )}
                    >
                      <Heart className={cn("w-3.5 h-3.5 mr-1", isLiked[comment.id] && "fill-current")} />
                      {comment.likes}
                    </Button>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => setReplyingTo(replyingTo === comment.id ? null : comment.id)}
                      className="h-8 px-2 text-xs text-gray-400"
                    >
                      <MessageCircle className="w-3.5 h-3.5 mr-1" />
                      Répondre
                    </Button>
                  </div>
                </div>
                {comment.isOwner && (
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button
                        variant="ghost"
                        size="sm"
                        className="h-8 w-8 p-0 opacity-0 group-hover:opacity-100"
                      >
                        <MoreHorizontal className="w-4 h-4 text-gray-400" />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end" className="w-40">
                      <DropdownMenuItem
                        className="text-red-400 text-sm"
                        onClick={() => setCommentToDelete(comment.id)}
                      >
                        <Trash2 className="w-4 h-4 mr-2" />
                        Supprimer
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                )}
              </div>
    
              {/* Reply Input */}
              <AnimatePresence>
                {replyingTo === comment.id && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    className="mt-3"
                  >
                    <div className="flex gap-3">
                      <Avatar
                        style={{
                          background: "url('/profile.jpg')",
                          backgroundPosition: "center",
                          backgroundSize: "cover"
                        }}
                        className="w-8 h-8 rounded-lg ring-2 ring-gray-700"
                      />
                      <div className="flex-1">
                        <Textarea
                          value={replyContent}
                          onChange={(e) => setReplyContent(e.target.value)}
                          placeholder="Écrivez une réponse..."
                          className="min-h-[60px] bg-gray-800/50 text-sm resize-none rounded-lg border-none focus:ring-1 focus:ring-primary/50"
                        />
                        <div className="flex justify-end mt-2">
                          <Button
                            size="sm"
                            className="h-8 text-xs bg-primary hover:bg-primary/90"
                            onClick={() => handleSubmitReply(comment.id)}
                          >
                            <Send className="w-3.5 h-3.5 mr-1" />
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
                <div className="mt-3 pl-4 border-l border-gray-700/50">
                  <Button
                    variant="ghost"
                    size="sm"
                    className="h-8 px-2 text-xs text-gray-400 mb-2"
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
                        className="space-y-3"
                      >
                        {comment.replies.map(reply => (
                          <div key={reply.id} className="flex gap-3 group">
                            <Avatar
                              style={{
                                background: `url(${reply.author.profile})`,
                                backgroundPosition: "center",
                                backgroundSize: "cover"
                              }}
                              className="w-7 h-7 rounded-lg ring-2 ring-gray-700"
                            />
                            <div className="flex-1 min-w-0">
                              <div className="flex items-start justify-between gap-2">
                                <div className="flex-1">
                                  <div className="flex items-center gap-2">
                                    <span className="font-medium text-sm text-gray-200">{reply.author.name}</span>
                                    <span className="text-xs text-gray-500">{formatDate(reply.createdAt)}</span>
                                  </div>
                                  <p className="text-sm text-gray-300 mt-1">{reply.content}</p>
                                  <Button
                                    variant="ghost"
                                    size="sm"
                                    onClick={() => toggleLike(reply.id)}
                                    className={cn(
                                      "h-8 px-2 text-xs mt-1",
                                      isLiked[reply.id] ? "text-red-400" : "text-gray-400"
                                    )}
                                  >
                                    <Heart className={cn("w-3.5 h-3.5 mr-1", isLiked[reply.id] && "fill-current")} />
                                    {reply.likes}
                                  </Button>
                                </div>
                                {reply.isOwner && (
                                  <DropdownMenu>
                                    <DropdownMenuTrigger asChild>
                                      <Button
                                        variant="ghost"
                                        size="sm"
                                        className="h-8 w-8 p-0 opacity-0 group-hover:opacity-100"
                                      >
                                        <MoreHorizontal className="w-4 h-4 text-gray-400" />
                                      </Button>
                                    </DropdownMenuTrigger>
                                    <DropdownMenuContent align="end" className="w-40">
                                      <DropdownMenuItem
                                        className="text-red-400 text-sm"
                                        onClick={() => setCommentToDelete(reply.id)}
                                      >
                                        <Trash2 className="w-4 h-4 mr-2" />
                                        Supprimer
                                      </DropdownMenuItem>
                                    </DropdownMenuContent>
                                  </DropdownMenu>
                                )}
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
    
    {/* New Comment Input - Fixed at bottom */}
    <div className="relative h-full flex flex-col">
{/* Comments List */}


{/* New Comment Input - Fixed at bottom */}


{/* Delete Comment Dialog */}
<AlertDialog open={!!commentToDelete} onOpenChange={() => setCommentToDelete(null)}>
  <AlertDialogContent>
    <AlertDialogHeader>
      <AlertDialogTitle>Supprimer le commentaire</AlertDialogTitle>
      <AlertDialogDescription>
        Êtes-vous sûr de vouloir supprimer ce commentaire ? Cette action est irréversible.
      </AlertDialogDescription>
    </AlertDialogHeader>
    <AlertDialogFooter>
      <AlertDialogCancel>Annuler</AlertDialogCancel>
      <AlertDialogAction
        className="bg-red-500 hover:bg-red-600"
        onClick={() => commentToDelete && handleDeleteComment(commentToDelete)}
      >
        Supprimer
      </AlertDialogAction>
    </AlertDialogFooter>
  </AlertDialogContent>
</AlertDialog>
</div>
    
    {/* Delete Comment Dialog */}
    <AlertDialog open={!!commentToDelete} onOpenChange={() => setCommentToDelete(null)}>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Supprimer le commentaire</AlertDialogTitle>
          <AlertDialogDescription>
            Êtes-vous sûr de vouloir supprimer ce commentaire ? Cette action est irréversible.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Annuler</AlertDialogCancel>
          <AlertDialogAction
            className="bg-red-500 hover:bg-red-600"
            onClick={() => commentToDelete && handleDeleteComment(commentToDelete)}
          >
            Supprimer
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
    </div>

    <div className="fixed  bottom-0 z-50 left-0 right-0 bg-[#2a2a2a]/95 backdrop-blur-sm p-2 border-t border-gray-800">
  <div className="flex gap-3">
    <Avatar
      style={{
        background: "url('/profile.jpg')",
        backgroundPosition: "center",
        backgroundSize: "cover"
      }}
      className="w-8 h-8 rounded-lg ring-2 ring-gray-700"
    />
    <div className="flex-1 ">
      <Textarea
        value={newComment}
        onChange={(e) => setNewComment(e.target.value)}
        placeholder="Écrivez un commentaire..."
        className="min-h-[44px]  bg-gray-800/50 text-sm resize-none rounded-lg border-none focus:ring-1 focus:ring-primary/50"
      />
      <div className="flex justify-end mt-2">
        <Button
          size="sm"
          className="h-8 text-xs bg-primary hover:bg-primary/90"
          onClick={handleSubmitComment}
        >
          <Send className="w-3.5 h-3.5 mr-1" />
          Commenter
        </Button>
      </div>
    </div>
  </div>
</div>
    </>
    

  )
}

     
