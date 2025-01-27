'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Textarea } from '@/components/ui/textarea'
import { motion, AnimatePresence } from 'framer-motion'
import { UserCircle2, Lock, Share2, Sparkles, Copy, CheckCheck } from 'lucide-react'
import { gradientOptions } from '@/data/fake-stories'

export default function StoryHidePage() {
  const [content, setContent] = useState('')
  const [selectedGradient, setSelectedGradient] = useState(gradientOptions[0])
  const [showShareOptions, setShowShareOptions] = useState(false)
  const [copied, setCopied] = useState(false)
  const [published, setPublished] = useState(false)

  const handlePublish = () => {
    if (!content.trim()) return
    setPublished(true)
    setTimeout(() => {
      setShowShareOptions(true)
    }, 1000)
  }

  const handleCopyLink = () => {
    navigator.clipboard.writeText('https://hide.app/story/your-unique-id')
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div className="min-h-screen bg-[#1a1a1a] text-white">
      <div className="max-w-2xl mx-auto px-4 py-8">
        {!published ? (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-8"
          >
            <div className="text-center space-y-3">
              <motion.h1 
                className="text-4xl font-bold"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
              >
                <span className="bg-gradient-to-r from-primary to-purple-500 bg-clip-text text-transparent">
                  Story Hide
                </span>
              </motion.h1>
              <motion.p 
                className="text-gray-400"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
              >
                Partagez vos pensées secrètes avec style
              </motion.p>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="bg-[#2a2a2a] rounded-2xl overflow-hidden"
            >
              <div 
                className="min-h-[300px] p-6 flex flex-col items-center justify-center transition-all duration-500"
                style={{ background: selectedGradient.value }}
              >
                <Textarea
                  value={content}
                  onChange={(e) => setContent(e.target.value)}
                  placeholder="Écrivez votre message..."
                  className="w-full max-w-lg bg-white/10 backdrop-blur-sm text-white border-none text-xl text-center resize-none rounded-xl placeholder:text-white/60 focus:ring-1 focus:ring-white/30"
                />
              </div>

              <div className="p-6 space-y-6">
                <div>
                  <label className="text-sm font-medium text-gray-300 mb-3 block">
                    Choisissez un style
                  </label>
                  <div className="grid grid-cols-5 gap-3">
                    {gradientOptions.map((gradient) => (
                      <button
                        key={gradient.id}
                        onClick={() => setSelectedGradient(gradient)}
                        className={`h-12 rounded-xl ring-2 transition-all duration-200 ${
                          selectedGradient.id === gradient.id
                            ? 'ring-primary scale-105'
                            : 'ring-transparent hover:ring-gray-700'
                        }`}
                        style={{ background: gradient.value }}
                      />
                    ))}
                  </div>
                </div>

                <div className="flex items-center justify-between pt-4 border-t border-gray-800">
                  <div className="flex items-center gap-2 text-gray-400">
                    <Lock className="w-4 h-4" />
                    <span className="text-sm">Visible uniquement par vos amis</span>
                  </div>
                  <Button
                    onClick={handlePublish}
                    className="bg-primary hover:bg-primary/90 text-white px-8"
                    disabled={!content.trim()}
                  >
                    <Sparkles className="w-4 h-4 mr-2" />
                    Publier
                  </Button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        ) : (
          <AnimatePresence>
            {showShareOptions && (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="bg-[#2a2a2a] rounded-2xl p-8 text-center space-y-8"
              >
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ type: "spring", stiffness: 200, damping: 20 }}
                  className="w-20 h-20 bg-primary/20 rounded-full mx-auto flex items-center justify-center"
                >
                  <Sparkles className="w-10 h-10 text-primary" />
                </motion.div>
                
                <div className="space-y-2">
                  <h2 className="text-2xl font-bold">Story publiée !</h2>
                  <p className="text-gray-400">
                    Partagez le lien avec vos amis pour recevoir leurs réponses
                  </p>
                </div>

                <div className="flex items-center gap-2 bg-[#1f1f1f] rounded-lg p-3">
                  <input
                    type="text"
                    value="https://hide.app/story/your-unique-id"
                    readOnly
                    className="flex-1 bg-transparent border-none text-sm text-gray-400 focus:outline-none"
                  />
                  <Button
                    onClick={handleCopyLink}
                    variant="ghost"
                    size="sm"
                    className="text-primary hover:text-primary/90"
                  >
                    {copied ? (
                      <CheckCheck className="w-4 h-4" />
                    ) : (
                      <Copy className="w-4 h-4" />
                    )}
                  </Button>
                </div>

                <div className="flex justify-center gap-4">
                  <Button
                    onClick={() => window.location.reload()}
                    variant="outline"
                    className="border-gray-700 hover:bg-gray-800"
                  >
                    Nouvelle story
                  </Button>
                  <Button className="bg-primary hover:bg-primary/90">
                    <Share2 className="w-4 h-4 mr-2" />
                    Partager
                  </Button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        )}
      </div>
    </div>
  )
}
