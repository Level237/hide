import { auth } from "@/auth";
import { db } from "@/db";


export default async function fetchPostCurrentUser(){
    const user=await auth()
    const id=user?.user?.id as string
    try {
        const posts=await db.post.findMany({
            where:{
                userId:id
            }
        })

        return posts;
    } catch (error) {
        
            throw new Error("failded")
        
    }
   
}