'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Avatar } from '@/components/ui/avatar'
import { Button } from '@/components/ui/button'
import { UserCircle2, Heart, Share2, Eye, ArrowLeft, Copy, CheckCheck } from 'lucide-react'
import { fakeStories } from '@/data/fake-stories'
import { formatDistanceToNow } from 'date-fns'
import { fr } from 'date-fns/locale'
import { useRouter } from 'next/navigation'
import Link from 'next/link'

export default function StoryDetailPage({ params }: { params: { id: string } }) {
  const router = useRouter()
  const story = fakeStories.find(s => s.id === params.id)
  const [copied, setCopied] = useState(false)
  const [showResponses, setShowResponses] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowResponses(true)
    }, 500)
    return () => clearTimeout(timer)
  }, [])

  if (!story) return null

  const handleCopyLink = () => {
    navigator.clipboard.writeText(story.shareLink)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div className="min-h-screen bg-[#1a1a1a] text-white">
      <header className="fixed top-0 left-0 right-0 bg-[#2a2a2a] border-b border-gray-800 z-50">
        <div className="max-w-4xl mx-auto px-4 h-16 flex items-center justify-between">
          <Button
            variant="ghost"
            size="sm"
            onClick={() => router.back()}
            className="text-gray-400 hover:text-gray-300"
          >
            <ArrowLeft className="w-5 h-5 mr-2" />
            Retour
          </Button>
          <Button
            variant="ghost"
            size="sm"
            onClick={handleCopyLink}
            className="text-gray-400 hover:text-gray-300"
          >
            {copied ? (
              <CheckCheck className="w-5 h-5 mr-2" />
            ) : (
              <Copy className="w-5 h-5 mr-2" />
            )}
            Partager
          </Button>
        </div>
      </header>

      <main className="pt-24 pb-16 px-4">
        <div className="max-w-2xl mx-auto space-y-6">
          {/* Story Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-[#2a2a2a] rounded-2xl overflow-hidden"
          >
            <div 
              className="h-48 flex items-center justify-center p-8"
              style={{ background: story.background }}
            >
              <h1 className="text-2xl font-bold text-white text-center">
                {story.content}
              </h1>
            </div>
            
            <div className="p-4 flex items-center justify-between text-sm text-gray-400">
              <div className="flex items-center gap-4">
                <span className="flex items-center">
                  <Eye className="w-4 h-4 mr-1" />
                  {story.viewCount} vues
                </span>
                <span>
                  {formatDistanceToNow(new Date(story.createdAt), { addSuffix: true, locale: fr })}
                </span>
              </div>
            </div>
          </motion.div>

          {/* Responses Section */}
          <AnimatePresence>
            {showResponses && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="space-y-4"
              >
                <h2 className="text-xl font-semibold">
                  Réponses ({story.responses.length})
                </h2>

                {story.responses.map((response, index) => (
                  <Link 
                    key={response.id}
                    href={`/story/${story.id}/response/${response.id}/share`}
                  >
                    <motion.div
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="bg-[#2a2a2a] rounded-xl p-4 hover:bg-[#303030] transition-colors cursor-pointer group"
                    >
                      <div className="flex items-start gap-3">
                        {response.isAnonymous ? (
                          <div className="w-10 h-10 rounded-xl ring-2 ring-gray-700 bg-gray-800 flex items-center justify-center flex-shrink-0">
                            <UserCircle2 className="w-6 h-6 text-gray-400" />
                          </div>
                        ) : (
                          <Avatar
                            style={{
                              background: `url(${response.author?.image})`,
                              backgroundPosition: "center",
                              backgroundSize: "cover"
                            }}
                            className="w-10 h-10 rounded-xl ring-2 ring-gray-700"
                          />
                        )}
                        
                        <div className="flex-1">
                          <div className="flex items-center justify-between">
                            <span className="font-medium text-sm">
                              {response.isAnonymous ? 'Anonyme' : response.author?.name}
                            </span>
                            <span className="text-xs text-gray-500">
                              {formatDistanceToNow(new Date(response.createdAt), { addSuffix: true, locale: fr })}
                            </span>
                          </div>
                          <p className="mt-2 text-gray-300">{response.content}</p>
                          <div className="flex items-center gap-4 mt-3">
                            <Button
                              variant="ghost"
                              size="sm"
                              className="text-gray-400 hover:text-red-400"
                            >
                              <Heart className="w-4 h-4 mr-1" />
                              J'aime
                            </Button>
                            <Button
                              variant="ghost"
                              size="sm"
                              className="text-gray-400 hover:text-primary group-hover:text-primary"
                            >
                              <Share2 className="w-4 h-4 mr-1" />
                              Partager
                            </Button>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  </Link>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </main>
    </div>
  )
}
