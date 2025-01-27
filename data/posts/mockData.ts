import { Post } from "@/types/Post";

export const mockPosts: Post[] = [
    {
      id: 'post1',
      type: 'story',
      content: '😄😄😄Tu trouve le bon mais il est toujours devant sa machine..',
      reply:1,
      author: {
        id: 'user1',
        name: 'Zed Camara',
        image: 'profile2.jpg',
        anonymous:false
      },
      likes: 23,
     
      shares: 45,
      createdAt: '2025-01-26T08:00:00.000Z',
      background: '#000000',
      isLiked:false
    },
    {
        id: 'post2',
        type: 'image',
        reply:1,
        author: {
            id: 'user2',
            name: 'Ibrahima Djamilatou',
            image: '/profile1.jpg',
            anonymous: false
        },
        image: "/cover.jpg",
        likes: 56,
       
        shares: 89,
        createdAt: '2025-01-26T07:30:00.000Z',
       

        isLiked: true,
        content: "Depuis la je suis bloqué mais je n'arrive pas à trouvé la solution 😄😄😄.."
    },
    {
        id: 'post3',
        type: 'image',
        content: "- Quand j'étais petit,j'étais encore un bleu hein...😅",
        reply:1,
        author: {
            id: 'user5',
            name: 'Martin lunel',
            image: '/profile.jpg',
            anonymous: false,
        },
        likes: 892,
        
        shares: 234,
        createdAt: '2025-01-26T06:00:00.000Z',
        image: '/cover2.jpg',
        isLiked: false
    },
    {
        id: "post8397",
        type: "voice",
        reply:0,
        author: {
            id: 'user2',
            name: 'Ibrahima Djamilatou',
            image: "/profile2.jpg",
            anonymous: false
        },
        likes: 20,
        shares: 0,
        audioId: "Wvejru",
        audio: "/afrobeat.mp3",
        createdAt: "2025-01-26T06:15:00.000Z",
        isLiked: false
    }
  ]