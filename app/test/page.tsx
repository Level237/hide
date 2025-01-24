import { PostCard } from "@/components/posts/post-card"

export default function TestPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-gray-100 mb-8">Découvrez</h1>
      <div className="grid gap-6">
        <PostCard 
          content="La vie n'est pas toujours ce qu'elle semble être... 🤔"
          image="/images/placeholder.jpg"
          timestamp="Il y a 2h"
          likes={42}
          comments={12}
        />
        <PostCard 
          content="Parfois les mots ne suffisent pas pour exprimer ce qu'on ressent..."
          audioUrl="/audio/sample.mp3"
          timestamp="Il y a 5h"
          likes={23}
          comments={7}
        />
        <PostCard 
          content="Les plus belles histoires sont celles qu'on n'ose pas raconter."
          timestamp="Il y a 1j"
          likes={156}
          comments={34}
        />
      </div>
    </div>
  )
}
