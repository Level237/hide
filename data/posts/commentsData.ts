import { Comment } from "@/types/comments";

export const mockComment :Comment[]= [
    {
        id: 'comment1',
        postId: 'post1',
        content: 'Tellement vrai ! Continue de partager ta joie de vivre 🙌',
        author: {
            id: 'user2',
            name: 'Ibrahima Djamilatou',
            image: '/profile1.jpg',
            anonymous: false
        },
        likes: 12,
        
        replies: [],
        createdAt: '2025-01-26T08:30:00.000Z',
        isLiked: false
    },
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
            createdAt: '2025-01-26T07:45:00.000Z',
            isLiked: false
        },
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

                        createdAt: '2025-01-26T06:20:00.000Z',
                        isLiked: false,
                        replies: []
                    }
                ],
                isLiked:false,
                createdAt: '2025-01-26T06:15:00.000Z'
            }
        
  ]