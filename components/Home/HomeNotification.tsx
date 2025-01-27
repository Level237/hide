'use client'
import { MoreHorizontal, Search, Heart, MessageCircle, Share2, Mic, Image as ImageIcon } from 'lucide-react'
import { useState } from 'react'
import { Avatar } from '../ui/avatar'
import { Button } from '../ui/button'
import { formatDistanceToNow } from 'date-fns'
import { fr } from 'date-fns/locale'
import { cn } from '@/lib/utils'
import { motion } from 'framer-motion'
import Link from 'next/link'

type NotificationType = 'like' | 'comment' | 'share' | 'voice' | 'image' | 'story'

interface Notification {
  id: string
  type: NotificationType
  userId: string
  userName: string
  userImage: string
  postId: string
  postType?: 'voice' | 'image' | 'story'
  createdAt: string
  read: boolean
}

// Données de test
const mockNotifications: Notification[] = [
  {
    id: '1',
    type: 'like',
    userId: 'user1',
    userName: 'Zed Camara',
    userImage: '/profile2.jpg',
    postId: 'post1',
    createdAt: new Date(Date.now() - 1000 * 60 * 3).toISOString(), // 3 minutes ago
    read: false
  },
  {
    id: '2',
    type: 'voice',
    userId: 'user2',
    userName: 'Marie Doe',
    userImage: '/profile.jpg',
    postId: 'post2',
    postType: 'voice',
    createdAt: new Date(Date.now() - 1000 * 60 * 15).toISOString(), // 15 minutes ago
    read: true
  },
  {
    id: '3',
    type: 'comment',
    userId: 'user3',
    userName: 'John Smith',
    userImage: '/profile3.jpg',
    postId: 'post3',
    createdAt: new Date(Date.now() - 1000 * 60 * 45).toISOString(), // 45 minutes ago
    read: false
  }
]

export default function HomeNotification() {
  const [filter, setFilter] = useState<'all' | 'unread'>('all')
  const [notifications, setNotifications] = useState(mockNotifications)

  const getNotificationMessage = (notification: Notification) => {
    switch (notification.type) {
      case 'like':
        return 'a aimé votre publication'
      case 'comment':
        return 'a commenté votre publication'
      case 'share':
        return 'a partagé votre publication'
      case 'voice':
        return 'a publié un message vocal'
      case 'image':
        return 'a publié une nouvelle photo'
      case 'story':
        return 'a publié une nouvelle story'
      default:
        return 'a interagi avec votre publication'
    }
  }

  const getNotificationIcon = (type: NotificationType) => {
    switch (type) {
      case 'like':
        return <Heart className="w-4 h-4 text-red-400" />
      case 'comment':
        return <MessageCircle className="w-4 h-4 text-blue-400" />
      case 'share':
        return <Share2 className="w-4 h-4 text-green-400" />
      case 'voice':
        return <Mic className="w-4 h-4 text-purple-400" />
      case 'image':
        return <ImageIcon className="w-4 h-4 text-yellow-400" />
      default:
        return null
    }
  }

  const formatDate = (date: string) => {
    return formatDistanceToNow(new Date(date), { addSuffix: true, locale: fr })
  }

  const filteredNotifications = notifications.filter(notif => 
    filter === 'all' || (filter === 'unread' && !notif.read)
  )

  return (
    <div className='bg-gradient-to-br from-gray-800/50 to-gray-900/50 min-h-[100vh] pb-24 flex flex-col gap-6 rounded-xl py-4 mx-8'>
      <section className='flex flex-col gap-6 px-6'>
        <div className="flex items-center justify-between">
          <h2 className='text-xl font-bold text-white'>Notifications</h2>
          <Button variant="ghost" size="icon" className="text-gray-400 hover:text-gray-300">
            <Search className="w-5 h-5" />
          </Button>
        </div>
        <div className='flex items-center gap-3 justify-end'>
          <Button
            size="sm"
            variant={filter === 'all' ? 'default' : 'ghost'}
            onClick={() => setFilter('all')}
            className={cn(
              "text-sm",
              filter === 'all' ? "bg-primary text-white" : "text-gray-400"
            )}
          >
            Toutes
          </Button>
          <Button
            size="sm"
            variant={filter === 'unread' ? 'default' : 'ghost'}
            onClick={() => setFilter('unread')}
            className={cn(
              "text-sm",
              filter === 'unread' ? "bg-primary text-white" : "text-gray-400"
            )}
          >
            Non lues
          </Button>
        </div>
      </section>

      <section className='flex flex-col divide-y divide-gray-800/50'>
        {filteredNotifications.map((notification, index) => (
          <motion.div
            key={notification.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className={cn(
              'px-6 py-4 hover:bg-gray-800/20 transition-colors duration-200',
              !notification.read && 'bg-gray-800/10'
            )}
          >
            <Link href={`/post/${notification.postId}`} className="block">
              <div className='flex items-start gap-4'>
                <Avatar
                  style={{
                    background: `url(${notification.userImage})`,
                    backgroundPosition: "center",
                    backgroundSize: "cover"
                  }}
                  className='w-10 h-10 rounded-xl ring-2 ring-gray-700'
                />
                <div className='flex-1 min-w-0'>
                  <div className='flex items-start justify-between gap-4'>
                    <div className='flex-1'>
                      <div className='flex items-center gap-2 text-sm'>
                        <span className='font-medium text-white'>{notification.userName}</span>
                        <span className='text-gray-400'>{getNotificationMessage(notification)}</span>
                        {getNotificationIcon(notification.type)}
                      </div>
                      <p className='text-sm text-gray-500 mt-1'>
                        {formatDate(notification.createdAt)}
                      </p>
                    </div>
                    <Button
                      variant="ghost"
                      size="icon"
                      className="text-gray-400 hover:text-gray-300 -mt-1"
                    >
                      <MoreHorizontal className="w-5 h-5" />
                    </Button>
                  </div>
                </div>
              </div>
            </Link>
          </motion.div>
        ))}
      </section>
    </div>
  )
}
