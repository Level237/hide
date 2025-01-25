'use client'
import { Button } from '@/components/ui/button'
import { Avatar } from '@/components/ui/avatar'
import { UserCircle2, Heart, MessageCircle, Share2, ArrowLeft } from 'lucide-react'
import { CommentSection } from '@/components/comments/CommentSection'

// Mock data for testing
const post = {
  id: '1',
  content: 'Ceci est un exemple de publication avec un contenu intéressant et engageant. Les utilisateurs peuvent interagir avec ce contenu de différentes manières.',
  author: {
    name: 'John Doe',
    image: '/profile.jpg',
    anonymous: false
  },
  likes: 42,
  comments: 12,
  shares: 5,
  createdAt: '2025-01-24T14:30:00.000Z',
  background: 'linear-gradient(45deg, #FF416C, #FF4B2B)'
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
  const formatDate = (date: string) => {
    return new Date(date).toLocaleDateString('fr-FR', {
      day: 'numeric',
      month: 'short',
      hour: 'numeric',
      minute: 'numeric'
    })
  }

  return (
    <div className="min-h-screen bg-[#1a1a1a] text-white">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 bg-[#2a2a2a] border-b border-gray-800 z-50">
        <div className="max-w-4xl mx-auto px-4 h-16 flex items-center justify-between">
          <Button variant="ghost" className="text-gray-400 hover:text-gray-300">
            <ArrowLeft className="w-5 h-5 mr-2" />
            Retour
          </Button>
          <h1 className="text-lg font-semibold">Publication</h1>
          <div className="w-20" /> {/* Spacer for centering */}
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-4 pt-24 pb-16">
        {/* Post */}
        <div className="bg-[#2a2a2a] rounded-2xl shadow-xl overflow-hidden mb-8">
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

            {/* Post Content */}
            <div 
              className="rounded-xl p-6 mb-4 text-lg"
              style={{ background: post.background }}
            >
              {post.content}
            </div>

            {/* Post Stats */}
            <div className="flex items-center gap-6 text-gray-400">
              <Button variant="ghost" className="hover:text-gray-300">
                <Heart className="w-5 h-5 mr-2" />
                {post.likes}
              </Button>
              <Button variant="ghost" className="hover:text-gray-300">
                <MessageCircle className="w-5 h-5 mr-2" />
                {post.comments}
              </Button>
              <Button variant="ghost" className="hover:text-gray-300">
                <Share2 className="w-5 h-5 mr-2" />
                {post.shares}
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
