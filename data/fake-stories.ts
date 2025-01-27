import { StoryHide, StoryResponse } from '@/types/story-hide'

export const fakeStoryResponses: StoryResponse[] = [
  {
    id: '1',
    content: 'Je pense la même chose ! Continue comme ça 🙌',
    createdAt: '2025-01-27T10:30:00Z',
    isAnonymous: true
  },
  {
    id: '2',
    content: 'Tellement vrai ce que tu dis...',
    createdAt: '2025-01-27T11:15:00Z',
    isAnonymous: false,
    author: {
      id: 'user1',
      name: 'Marie',
      image: '/avatars/marie.jpg'
    }
  },
  {
    id: '3',
    content: "C'est exactement ce que je ressentais !",
    createdAt: '2025-01-27T12:00:00Z',
    isAnonymous: true
  },
  {
    id: '4',
    content: 'Tu as tellement raison 💯',
    createdAt: '2025-01-27T13:45:00Z',
    isAnonymous: true
  },
  {
    id: '5',
    content: 'Je comprends mieux maintenant...',
    createdAt: '2025-01-27T14:20:00Z',
    isAnonymous: false,
    author: {
      id: 'user2',
      name: 'Thomas',
      image: '/avatars/thomas.jpg'
    }
  }
]

export const fakeStories: StoryHide[] = [
  {
    id: 'story1',
    content: 'Parfois, la vie nous réserve des surprises inattendues...',
    background: 'linear-gradient(45deg, #FF6B6B, #4ECDC4)',
    createdAt: '2025-01-27T09:00:00Z',
    responses: fakeStoryResponses.slice(0, 3),
    shareLink: 'https://hide.app/story/story1',
    viewCount: 156,
    isPrivate: true
  },
  {
    id: 'story2',
    content: 'La patience est la clé de tout...',
    background: 'linear-gradient(45deg, #A8E6CF, #DCEDC1)',
    createdAt: '2025-01-26T15:30:00Z',
    responses: fakeStoryResponses.slice(2, 5),
    shareLink: 'https://hide.app/story/story2',
    viewCount: 89,
    isPrivate: true
  },
  {
    id: 'story3',
    content: 'Certains secrets sont mieux gardés...',
    background: 'linear-gradient(45deg, #FFD93D, #FF6B6B)',
    createdAt: '2025-01-25T20:15:00Z',
    responses: fakeStoryResponses.slice(1, 4),
    shareLink: 'https://hide.app/story/story3',
    viewCount: 234,
    isPrivate: true
  }
]

export const gradientOptions = [
  {
    id: 'gradient1',
    name: 'Sunset',
    value: 'linear-gradient(45deg, #FF6B6B, #4ECDC4)'
  },
  {
    id: 'gradient2',
    name: 'Forest',
    value: 'linear-gradient(45deg, #A8E6CF, #DCEDC1)'
  },
  {
    id: 'gradient3',
    name: 'Ocean',
    value: 'linear-gradient(45deg, #6B48FF, #1EE3CF)'
  },
  {
    id: 'gradient4',
    name: 'Cherry',
    value: 'linear-gradient(45deg, #FFD93D, #FF6B6B)'
  },
  {
    id: 'gradient5',
    name: 'Midnight',
    value: 'linear-gradient(45deg, #4A00E0, #8E2DE2)'
  }
]
