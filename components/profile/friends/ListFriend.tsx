import { Avatar } from '@/components/ui/avatar'
import { Button } from '@/components/ui/button'
import { MessageCircle } from 'lucide-react'
import Image from 'next/image'
import React from 'react'

export default function ListFriend() {
  return (
    <div className="bg-[#363636] mb-24 py-5 relative rounded-xl w-full min-w-[45rem]   flex  flex-col px-4 gap-8">
      
      <div>
        <h2 className='text-white font-bold text-lg'>Connexion</h2>
      </div>
      <div className='flex  justify-between flex-1 items-center'>
      <div className='flex items-start justify-start gap-4'>
      <div className=''>
      <Avatar style={{ background:"url('/profile2.jpg')",backgroundPosition:"center",backgroundSize:"cover" }} className='cursor-pointer w-12 h-12 rounded-xl'>
                    
                   
                    </Avatar>
      </div>
      
      <div className='flex justify-start items-start gap-1  flex-col '>
            <div className='flex gap-2 justify-between min-w-24'>
            <h2 className="font-bold text-sm text-white" >Zed Camara</h2>
            <span className="text-sm text-gray-500 ">Conakry</span>
            </div>
            <div className='flex justify-between gap-3'>
            <div className="flex items-center justify-center -space-x-3">
            <Image width={300} src="/profile1.jpg" height={300} alt='friends' className="h-6 w-6 border border-white rounded-full object-cover"/>
                <Image width={300} src="/profile3.jpg" height={300} alt='friends' className="h-6 w-6 border border-white rounded-full object-cover"/>
                <Image width={300} src="/joe.jpg" height={300} alt='friends' className="h-6 w-6 border border-white rounded-full object-cover"/>
                <Image width={300} src="/melissa.jpg" height={300} alt='friends' className="h-6 w-6 border border-white rounded-full object-cover"/>
                <Image width={300} src="/grace.jpg" height={300} alt='friends' className="h-6 w-6 border border-white rounded-full object-cover"/>
                <div className="h-6 w-6 text-white items-center flex justify-center bg-primary border border-white rounded-full object-cover">
                    <h2 className='text-[0.74rem]'>+2</h2>
                </div>
      </div>
      <div className='w-96'>
      <span className="text-sm w-12 text-gray-500 ">Ibrahima,Monica,Aishou,Anita,Romila and 15 other shared connections</span>
      </div>
            </div>
      </div>
      </div>
      <div className=''>
      <Button className='bg-[#00ff001a]'>
    <MessageCircle className='w-4 h-4 text-primary'/>
    <span className='ml-2 text-sm text-primary'>Message</span>
  </Button>
      </div>
      </div>
      <div className='flex justify-between flex-1 items-center'>
      <div className='flex items-start justify-start gap-4'>
      <div className=''>
      <Avatar style={{ background:"url('/profile1.jpg')",backgroundPosition:"center",backgroundSize:"cover" }} className='cursor-pointer w-12 h-12 rounded-xl'>
                    
                   
                    </Avatar>
      </div>
      
      <div className='flex justify-start items-start gap-1  flex-col '>
            <div className='flex gap-2 justify-between min-w-24'>
            <h2 className="font-bold text-sm text-white" >Ibrahima</h2>
            <span className="text-sm text-gray-500 ">Conakry</span>
            </div>
            <div className='flex justify-between gap-3'>
            <div className="flex items-center justify-center -space-x-3">
            <Image width={300} src="/profile2.jpg" height={300} alt='friends' className="h-6 w-6 border border-white rounded-full object-cover"/>
                <Image width={300} src="/profile3.jpg" height={300} alt='friends' className="h-6 w-6 border border-white rounded-full object-cover"/>
                <Image width={300} src="/joe.jpg" height={300} alt='friends' className="h-6 w-6 border border-white rounded-full object-cover"/>
                <Image width={300} src="/melissa.jpg" height={300} alt='friends' className="h-6 w-6 border border-white rounded-full object-cover"/>
                <Image width={300} src="/grace.jpg" height={300} alt='friends' className="h-6 w-6 border border-white rounded-full object-cover"/>
                <div className="h-6 w-6 text-white items-center flex justify-center bg-primary border border-white rounded-full object-cover">
                    <h2 className='text-[0.74rem]'>+25</h2>
                </div>
      </div>
      <div className='w-96'>
      <span className="text-sm w-12 text-gray-500 ">Ibrahima,Monica,Aishou,Anita,Romila and 15 other shared connections</span>
      </div>
            </div>
      </div>
      </div>
      <div className=''>
      <Button className='bg-[#00ff001a]'>
    <MessageCircle className='w-4 h-4 text-primary'/>
    <span className='ml-2 text-sm text-primary'>Message</span>
  </Button>
      </div>
      </div>
      <div className='flex justify-between flex-1 items-center'>
      <div className='flex items-start justify-start gap-4'>
      <div className=''>
      <Avatar style={{ background:"url('/profile3.jpg')",backgroundPosition:"center",backgroundSize:"cover" }} className='cursor-pointer w-12 h-12 rounded-xl'>
                    
                   
                    </Avatar>
      </div>
      
      <div className='flex justify-start items-start gap-1  flex-col '>
            <div className='flex gap-2 justify-between min-w-24'>
            <h2 className="font-bold text-sm text-white" >Romila</h2>
            <span className="text-sm text-gray-500 ">Conakry</span>
            </div>
            <div className='flex justify-between gap-3'>
            <div className="flex items-center justify-center -space-x-3">
            <Image width={300} src="/profile1.jpg" height={300} alt='friends' className="h-6 w-6 border border-white rounded-full object-cover"/>
                <Image width={300} src="/profile2.jpg" height={300} alt='friends' className="h-6 w-6 border border-white rounded-full object-cover"/>
                <Image width={300} src="/joe.jpg" height={300} alt='friends' className="h-6 w-6 border border-white rounded-full object-cover"/>
                <Image width={300} src="/melissa.jpg" height={300} alt='friends' className="h-6 w-6 border border-white rounded-full object-cover"/>
                <Image width={300} src="/grace.jpg" height={300} alt='friends' className="h-6 w-6 border border-white rounded-full object-cover"/>
                <div className="h-6 w-6 text-white items-center flex justify-center bg-primary border border-white rounded-full object-cover">
                    <h2 className='text-[0.74rem]'>+2</h2>
                </div>
      </div>
      <div className='w-96'>
      <span className="text-sm w-12 text-gray-500 ">Ibrahima,Monica,Aishou,Anita,Romila and 15 other shared connections</span>
      </div>
            </div>
      </div>
      </div>
      <div className=''>
      <Button className='bg-[#00ff001a]'>
    <MessageCircle className='w-4 h-4 text-primary'/>
    <span className='ml-2 text-sm text-primary'>Message</span>
  </Button>
      </div>
      </div>
      <div className='flex justify-between flex-1 items-center'>
      <div className='flex items-start justify-start gap-4'>
      <div className=''>
      <Avatar style={{ background:"url('/joe.jpg')",backgroundPosition:"center",backgroundSize:"cover" }} className='cursor-pointer w-12 h-12 rounded-xl'>
                    
                   
                    </Avatar>
      </div>
      
      <div className='flex justify-start items-start gap-1  flex-col '>
            <div className='flex gap-2 justify-between min-w-24'>
            <h2 className="font-bold text-sm text-white" >Joe</h2>
            <span className="text-sm text-gray-500 ">Conakry</span>
            </div>
            <div className='flex justify-between gap-3'>
            <div className="flex items-center justify-center -space-x-3">
            <Image width={300} src="/profile1.jpg" height={300} alt='friends' className="h-6 w-6 border border-white rounded-full object-cover"/>
                <Image width={300} src="/profile3.jpg" height={300} alt='friends' className="h-6 w-6 border border-white rounded-full object-cover"/>
                <Image width={300} src="/profile2.jpg" height={300} alt='friends' className="h-6 w-6 border border-white rounded-full object-cover"/>
                <Image width={300} src="/melissa.jpg" height={300} alt='friends' className="h-6 w-6 border border-white rounded-full object-cover"/>
                <Image width={300} src="/grace.jpg" height={300} alt='friends' className="h-6 w-6 border border-white rounded-full object-cover"/>
                <div className="h-6 w-6 text-white items-center flex justify-center bg-primary border border-white rounded-full object-cover">
                    <h2 className='text-[0.74rem]'>+2</h2>
                </div>
      </div>
      <div className='w-96'>
      <span className="text-sm w-12 text-gray-500 ">Ibrahima,Monica,Aishou,Anita,Romila and 15 other shared connections</span>
      </div>
            </div>
      </div>
      </div>
      <div className=''>
      <Button className='bg-[#00ff001a]'>
    <MessageCircle className='w-4 h-4 text-primary'/>
    <span className='ml-2 text-sm text-primary'>Message</span>
  </Button>
      </div>
      </div>
      <div className=' w-full'>
        <button className='bg-[#00ff001a] text-primary rounded-xl text-[0.8rem] py-3 w-full'>Load More friends</button>
      </div>
    </div>
  )
}
