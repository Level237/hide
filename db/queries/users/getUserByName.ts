import { db } from "@/db";
import { notFound } from "next/navigation";

export default async function getUserByName(name:string){
    try {
        const user=await db.user.findFirst({
            where:{name}
        })

        return user;
    } catch (error) {
        throw new Error('Failed to fetch user')
    }
}