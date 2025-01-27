'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Share2, Download, Heart, ArrowLeft } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { fakeStories } from '@/data/fake-stories'
import { formatDistanceToNow } from 'date-fns'
import { fr } from 'date-fns/locale'
import html2canvas from 'html2canvas'
import { useRouter } from 'next/navigation'

export default function StorySharePage({ 
  params 
}: { 
  params: { id: string; responseId: string } 
}) {
  const router = useRouter()
  const story = fakeStories.find(s => s.id === params.id)
  const response = story?.responses.find(r => r.id === params.responseId)
  const [downloading, setDownloading] = useState(false)

  if (!story || !response) {
    return (
      <div className="min-h-screen bg-[#1a1a1a] text-white flex items-center justify-center">
        <div className="text-center space-y-4">
          <p className="text-gray-400">Story ou réponse introuvable</p>
          <Button
            onClick={() => router.back()}
            className="bg-primary hover:bg-primary/90"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Retour
          </Button>
        </div>
      </div>
    )
  }

  const handleDownload = async () => {
    setDownloading(true)
    try {
      const element = document.getElementById('story-capture')
      if (element) {
        const canvas = await html2canvas(element, {
          backgroundColor: '#1a1a1a',
          scale: 2
        })
        const link = document.createElement('a')
        link.download = `story-${story.id}-response.png`
        link.href = canvas.toDataURL('image/png')
        link.click()
      }
    } catch (error) {
      console.error('Error downloading image:', error)
    }
    setDownloading(false)
  }

  return (
    <div className="min-h-screen bg-[#1a1a1a] text-white py-8 px-4">
      <div className="max-w-lg mx-auto space-y-8">
        {/* Header */}
        <div className="flex items-center justify-between">
          <Button
            onClick={() => router.back()}
            variant="ghost"
            className="text-gray-400 hover:text-white"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Retour
          </Button>
          <div className="flex gap-4">
            <Button
              onClick={handleDownload}
              className="bg-primary hover:bg-primary/90"
              disabled={downloading}
            >
              <Download className="w-4 h-4 mr-2" />
              {downloading ? 'Téléchargement...' : 'Télécharger'}
            </Button>
            <Button
              onClick={() => {
                if (navigator.share) {
                  navigator.share({
                    title: 'Story Hide Response',
                    text: 'Découvrez cette réponse anonyme sur Story Hide !',
                    url: window.location.href
                  })
                }
              }}
              className="bg-[#2a2a2a] hover:bg-[#303030]"
            >
              <Share2 className="w-4 h-4 mr-2" />
              Partager
            </Button>
          </div>
        </div>

        {/* Shareable Content */}
        <div 
          id="story-capture"
          className="bg-[#2a2a2a] rounded-3xl overflow-hidden shadow-2xl"
        >
          {/* Story */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="relative"
          >
            <div 
              className="aspect-[4/3] flex items-center justify-center p-8"
              style={{ background: story.background }}
            >
              <p className="text-2xl font-bold text-center text-white">
                {story.content}
              </p>
            </div>
          </motion.div>

          {/* Response */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="p-6 space-y-6"
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-gray-800 flex items-center justify-center">
                  <span className="text-xl font-bold text-primary">A</span>
                </div>
                <div>
                  <h3 className="font-medium">Réponse Anonyme</h3>
                  <p className="text-sm text-gray-400">
                    {formatDistanceToNow(new Date(response.createdAt), {
                      addSuffix: true,
                      locale: fr
                    })}
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-2 text-primary">
                <Heart className="w-5 h-5 fill-current" />
                <span className="font-medium">12</span>
              </div>
            </div>

            <p className="text-lg text-gray-200 leading-relaxed">
              {response.content}
            </p>

            <div className="pt-4 border-t border-gray-800">
              <div className="flex items-center justify-between text-sm text-gray-400">
                <span>storyhide.app</span>
                <span>Partagez vos pensées anonymement</span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* App Promotion */}
        <div className="text-center space-y-4">
          <p className="text-gray-400">
            Vous aussi, partagez vos pensées et recevez des réponses anonymes
          </p>
          <Button
            onClick={() => router.push('/story-hide')}
            className="bg-gradient-to-r from-primary to-purple-500 hover:opacity-90"
          >
            Créer ma Story Hide
          </Button>
        </div>
      </div>
    </div>
  )
}
