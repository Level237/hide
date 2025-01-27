'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Eye, Clock, MessageCircle, ChevronRight } from 'lucide-react'
import { fakeStories } from '@/data/fake-stories'
import { formatDistanceToNow } from 'date-fns'
import { fr } from 'date-fns/locale'
import Link from 'next/link'

export default function MyStoriesPage() {
  const [stories] = useState(fakeStories)

  return (
    <div className="min-h-screen bg-[#1a1a1a] text-white py-8">
      <div className="max-w-2xl mx-auto px-4">
        <div className="mb-8">
          <h1 className="text-2xl font-bold mb-2">Mes Stories Hide</h1>
          <p className="text-gray-400">Gérez vos stories anonymes et leurs réponses</p>
        </div>

        <div className="space-y-4">
          {stories.map((story) => (
            <Link href={`/story/${story.id}`} key={story.id}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                whileHover={{ scale: 1.02 }}
                className="bg-[#2a2a2a] rounded-xl overflow-hidden cursor-pointer group"
              >
                <div 
                  className="h-24 flex items-center justify-center p-4"
                  style={{ background: story.background }}
                >
                  <p className="text-white text-center font-medium">
                    {story.content}
                  </p>
                </div>
                
                <div className="p-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <div className="flex items-center text-sm text-gray-400">
                        <Eye className="w-4 h-4 mr-1" />
                        {story.viewCount}
                      </div>
                      <div className="flex items-center text-sm text-gray-400">
                        <MessageCircle className="w-4 h-4 mr-1" />
                        {story.responses.length}
                      </div>
                      <div className="flex items-center text-sm text-gray-400">
                        <Clock className="w-4 h-4 mr-1" />
                        {formatDistanceToNow(new Date(story.createdAt), { addSuffix: true, locale: fr })}
                      </div>
                    </div>
                    <ChevronRight className="w-5 h-5 text-gray-500 group-hover:text-primary transition-colors" />
                  </div>
                </div>
              </motion.div>
            </Link>
          ))}
        </div>

        <Link href="/story-hide">
          <motion.button
            whileHover={{ scale: 1.02 }}
            className="w-full mt-6 bg-primary hover:bg-primary/90 text-white rounded-xl py-3 px-4 flex items-center justify-center"
          >
            Créer une nouvelle Story Hide
          </motion.button>
        </Link>
      </div>
    </div>
  )
}
