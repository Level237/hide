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



// Mock data for testing
const post: Post = {
  id: 'docm356',
  type: 'voice',
  content: 'Ceci est un exemple de publication avec un contenu intéressant et engageant.',
  author: {
    name: 'John Doe',
    image: '/profile.jpg',
    anonymous: false
  },
  likes: 42,
  comments: 12,
  shares: 5,
  createdAt: '2025-01-24T14:30:00.000Z',
  background: 'linear-gradient(45deg, #FF416C, #FF4B2B)',
  image: '/cover.jpg',
  audio: '/afrobeat.mp3',
  audioDuration: 30
}

const mockComments = [
  {
    id: '1',
    content: 'Super publication ! J\'adore le contenu que vous partagez.',
    author: {
      name: 'Alice Martin',
      image: '/profile.jpg'
    },
    likes: 8,
    replies: [
      {
        id: '1-1',
        content: 'Merci beaucoup Alice ! Je suis content que ça vous plaise.',
        author: {
          name: 'John Doe',
          image: '/profile.jpg'
        },
        likes: 3,
        replies: [],
        createdAt: '2025-01-24T15:00:00.000Z'
      }
    ],
    createdAt: '2025-01-24T14:45:00.000Z'
  },
  {
    id: '2',
    content: 'Très intéressant ! J\'aimerais en savoir plus sur ce sujet.',
    author: {
      name: 'User Anonyme',
      anonymous: true
    },
    likes: 5,
    replies: [],
    createdAt: '2025-01-24T15:15:00.000Z'
  }
]

export default function PostPage({ params }: { params: { id: string } }) {
  const router = useRouter()
  const [isPlaying, setIsPlaying] = useState(false)
  const [currentTime, setCurrentTime] = useState(0)
  const audioRef = useRef<HTMLAudioElement | null>(null)
  const [audioVolume, setAudioVolume] = useState(1)

  const formatDate = (date: string) => {
    return new Date(date).toLocaleDateString('fr-FR', {
      day: 'numeric',
      month: 'short',
      hour: 'numeric',
      minute: 'numeric'
    })
  }

  const handlePlayPause = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause()
      } else {
        audioRef.current.play()
      }
      setIsPlaying(!isPlaying)
    }
  }

  const handleTimeUpdate = () => {
    if (audioRef.current) {
      setCurrentTime(audioRef.current.currentTime)
    }
  }

  const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const volume = parseFloat(e.target.value)
    setAudioVolume(volume)
    if (audioRef.current) {
      audioRef.current.volume = volume
    }
  }

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.addEventListener('timeupdate', handleTimeUpdate)
      audioRef.current.addEventListener('ended', () => setIsPlaying(false))
    }
    return () => {
      if (audioRef.current) {
        audioRef.current.removeEventListener('timeupdate', handleTimeUpdate)
        audioRef.current.removeEventListener('ended', () => setIsPlaying(false))
      }
    }
  }, [])

  return (
    <div className="min-h-screen bg-[#1a1a1a] text-white">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 bg-[#2a2a2a] border-b border-gray-800 z-50">
        <div className="max-w-4xl mx-auto px-4 h-16 flex items-center justify-between">
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

      {/* Main Content */}
      <main className="max-w-3xl mx-auto px-4 pt-24 pb-16">
        {/* Post */}
        <div className="bg-[#2a2a2a]  rounded-2xl shadow-xl overflow-hidden mb-8">
          {/* Post Header */}
          <div className="p-6">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-4">
                {post.author.anonymous ? (
                  <div className="w-12 h-12 rounded-xl ring-2 ring-gray-700 bg-gray-800 flex items-center justify-center">
                    <UserCircle2 className="w-7 h-7 text-gray-400" />
                  </div>
                ) : (
                  <Avatar 
                    style={{ background: `url(${post.author.image})`, backgroundPosition: "center", backgroundSize: "cover" }} 
                    className="w-12 h-12 rounded-xl ring-2 ring-gray-700"
                  />
                )}
                <div>
                  <h2 className="font-semibold text-lg text-gray-200">
                    {post.author.anonymous ? 'Anonyme' : post.author.name}
                  </h2>
                  <p className="text-sm text-gray-500">{formatDate(post.createdAt)}</p>
                </div>
              </div>
            </div>

            {/* Post Content based on type */}
            {post.type === 'story' && (
              <div 
                className="rounded-xl p-6 mb-4 text-center text-xl font-medium"
                style={{ background: post.background }}
              >
                {post.content}
              </div>
            )}
              
            {post.type === 'image' && (
              
              <div className="space-y-4">
                <p className="text-gray-200 mb-4">{post.content}</p>
                {post.image && (
                  <div className="relative w-full h-[400px] rounded-xl overflow-hidden">
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

            {post.type === 'voice' && (
             <div className="mt-5 rounded-2xl p-6 bg-gradient-to-br from-gray-800 to-gray-900">
             <div className="flex flex-col space-y-4">
               <div className="flex items-center space-x-3 text-gray-400">
                 <Mic className="w-5 h-5" />
                 <span className="text-sm font-medium">Message vocal</span>
               </div>
               
               <div className="relative">
                 <div className="absolute inset-0  bg-gradient-to-r from-primary/20 to-transparent rounded-xl blur-xl"></div>
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

            {/* Post Stats */}
            <div className="flex items-center gap-6 text-gray-400 mt-4">
              <Button  className="bg-transparent hover:bg-transparent hover:text-red-500">
                <Heart className="w-5 h-5 mr-1 " />
                {post.likes} likes
              </Button>
              <Button className="bg-transparent hover:bg-transparent hover:text-blue-500">
                <MessageCircle className="w-5 h-5  mr-2" />
                {post.comments} replies
              </Button>
              <Button className="bg-transparent hover:bg-transparent hover:text-primary">
                <Share2 className="w-5 h-5 mr-2" />
                {post.shares} shares
              </Button>
            </div>
          </div>

          {/* Comments Section */}
          <div className="border-t border-gray-800">
            <div className="p-6">
              <h3 className="text-lg font-semibold mb-6">Commentaires</h3>
              <CommentSection postId={params.id} comments={mockComments} />
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
