import { Post } from "@/types/Post";

export const mockPosts: Post[] = [
    {
      id: 'post1',
      type: 'story',
      content: '😄😄😄Tu trouve le bon mais il est toujours devant sa machine..',
      author: {
        id: 'user1',
        name: 'Zed Camara',
        image: 'profile2.jpg',
        anonymous:false
      },
      likes: 23,
      comments: [
        {
          id: 'comment1',
          postId: 'post1',
          content: 'Tellement vrai ! Continue de partager ta joie de vivre 🙌',
          author: {
            id: 'user2',
            name: 'Ibrahima Djamilatou',
            image: '/profile1.jpg',
            anonymous:false
          },
          likes: 12,
          replies: [],
          createdAt: '2025-01-26T08:30:00.000Z'
        }
      ],
      shares: 45,
      createdAt: '2025-01-26T08:00:00.000Z',
      background: '#000000',
      isLiked:false
    },
    {
        id: 'post2',
        type: 'image',
        author: {
            id: 'user2',
            name: 'Ibrahima Djamilatou',
            image: '/profile1.jpg',
            anonymous: false
        },
        image: "/cover.jpg",
        likes: 56,
        comments: [
            {
                id: 'comment2',
                postId: 'post2',
                content: 'Super message vocal ! J\'adore ton accent 😊',
                author: {
                    id: 'user4',
                    name: 'Romila',
                    image: '/profile3.jpg'
                },
                likes: 28,
                replies: [],
                createdAt: '2025-01-26T07:45:00.000Z'
            }
        ],
        shares: 89,
        createdAt: '2025-01-26T07:30:00.000Z',
       

        isLiked: true,
        content: "Depuis la je suis bloqué mais je n'arrive pas à trouvé la solution 😄😄😄.."
    },
    {
        id: 'post3',
        type: 'image',
        content: "- Quand j'étais petit,j'étais encore un bleu hein...😅",
        author: {
            id: 'user5',
            name: 'Martin lunel',
            image: '/profile.jpg',
            anonymous: false,
        },
        likes: 892,
        comments: [
            {
                id: 'comment3',
                postId: 'post3',
                content: "Warrr mon petit c'est toi qui étais laid comme ca ? 😅",
                author: {
                    id: 'user29',
                    name: 'Zed Camara',
                    image: '/profile2.jpg'
                },
                likes: 4,
                replies: [
                    {
                        id: 'reply1',
                        postId: 'post3',
                        content: 'Classique ! Mais ça marche souvent 😂',
                        author: {
                            id: 'user5',
                            name: 'Thomas Richard',
                            image: '/profile5.jpg'
                        },
                        likes: 23,
                        replies: [],
                        createdAt: '2025-01-26T06:20:00.000Z'
                    }
                ],
                createdAt: '2025-01-26T06:15:00.000Z'
            }
        ],
        shares: 234,
        createdAt: '2025-01-26T06:00:00.000Z',
        image: '/cover2.jpg',
        isLiked: false
    },
    {
        id: "post8397",
        type: "voice",
        author: {
            id: 'user2',
            name: 'Ibrahima Djamilatou',
            image: "/profile2.jpg",
            anonymous: false
        },
        likes: 20,
        comments: [],
        shares: 0,
        audioId: "Wvejru",
        audio: "/afrobeat.mp3",
        createdAt: "2025-01-26T06:15:00.000Z",
        isLiked: false
    }
  ]