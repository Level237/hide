import { NextResponse } from 'next/server'
import { NextRequest } from 'next/server'
import { getToken, GetTokenParams } from 'next-auth/jwt';


export async function middleware(request:NextRequest){
    const token = await getToken({
        req: request,
        secret: process.env.AUTH_SECRET,
      });
    if(!token){
        console.log(token,process.env.AUTH_SECRET);
        return NextResponse.redirect(new URL('/login',request.url))
    }else{
        console.log(token);
        return NextResponse.next() 
        
    }
      
 
}

export const config={
    matcher:"/dashboard"
}