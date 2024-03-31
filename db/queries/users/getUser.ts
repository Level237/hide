import { db } from "@/db";

export default async function getUser(email:any){
    try {
        const user=await db.user.findFirst({
            where:{email}
        })

        return user;
    } catch (error) {
        throw new Error('Failed to fetch user')
    }
}