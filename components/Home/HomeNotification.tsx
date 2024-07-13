import { MoreHorizontal, Search } from 'lucide-react'
import React from 'react'
import { Avatar } from '../ui/avatar'

export default function HomeNotification() {
  return (
    <div className='bg-[#363636] min-h-[100vh] pb-24 flex flex-col gap-6  rounded-xl py-4 mx-8 '>
      <section className='flex flex-col gap-6 px-6'>
      <div className="flex items-center justify-between">
      <h2 className='text-xl font-bold text-white'>Notification</h2>
      <div className='text-white'>
        <Search/>
      </div>
      
      </div>
      <div className='flex items-center gap-3 justify-end'>
      <button className='text-[0.78rem] bg-[#268b1228] text-primary py-1 px-4 rounded-md'>Toutes</button>
      <button className='text-[0.78rem]  bg-[#282828] text-white py-1 px-4 rounded-md'>Non lues</button>
               
      </div>
      </section>
     <section className='flex flex-col'>
      <section className='bg-[#05050533] border-t-[1px]  border-t-[#ffffff23] max-h-32 px-6 py-8'>
      
            <div className='flex flex-row justify-between items-start'>
              <div className='flex items-center min-w-96 justify-start gap-4'>
              <div>
            <Avatar style={{ background:"url('/profile2.jpg')",backgroundPosition:"center",backgroundSize:"cover" }} className='cursor-pointer w-10 h-10 rounded-xl'>
                    
                   
                    </Avatar>
            </div>
            <div className='flex flex-col'>
                <div className='w-[26rem] gap-2 text-sm'>
                <span className='text-white break-words '>Zed Camara</span><span className='break-words text-gray-400'> à publier un voice vous pouvez le lire maintenant. </span>
                </div>
                <div className='leading-4'>
                    <span className='text-[0.8rem] text-gray-400'>il y'a <span className='text-primary '> 3 minutes</span>  </span>
                </div>
            </div>
              </div>
            <div className='text-white'>
              <MoreHorizontal/>
            </div>
            </div>
            
            
      
      </section>
      <section className=' max-h-32 border-t-[1px]  border-t-[#ffffff23] px-6 py-8'>
      
      <div className='flex flex-row justify-between items-start'>
        <div className='flex items-center min-w-96 justify-start gap-4'>
        <div>
      <Avatar style={{ background:"url('/profile1.jpg')",backgroundPosition:"center",backgroundSize:"cover" }} className='cursor-pointer w-10 h-10 rounded-xl'>
              
             
              </Avatar>
      </div>
      <div className='flex flex-col'>
          <div className='w-[26rem] gap-2 text-sm'>
          <span className='text-white break-words '>Ibrahima</span><span className='break-words text-gray-400'> a envoyé une demande d'ami </span>
          </div>
          <div className='leading-4'>
              <span className='text-[0.8rem] text-gray-400'>il y'a <span className='text-primary '> 4 heures</span>  </span>
          </div>
      </div>
        </div>
      <div className='text-white'>
        <MoreHorizontal/>
      </div>
      </div>
      
      

</section>
<section className='bg-[#05050533] border-t-[1px]  border-t-[#ffffff23] max-h-32 px-6 py-8'>
      
            <div className='flex flex-row justify-between items-start'>
              <div className='flex items-center min-w-96 justify-start gap-4'>
              <div>
            <Avatar style={{ background:"url('/profile3.jpg')",backgroundPosition:"center",backgroundSize:"cover" }} className='cursor-pointer w-10 h-10 rounded-xl'>
                    
                   
                    </Avatar>
            </div>
            <div className='flex flex-col'>
                <div className='w-[26rem] gap-2 text-sm'>
                <span className='text-white break-words '>Romila</span><span className='break-words text-gray-400'> à publier un voice vous pouvez le lire maintenant. </span>
                </div>
                <div className='leading-4'>
                    <span className='text-[0.8rem] text-gray-400'>il y'a <span className='text-primary '> 3 minutes</span>  </span>
                </div>
            </div>
              </div>
            <div className='text-white'>
              <MoreHorizontal/>
            </div>
            </div>
            
            
      
      </section>
      <section className='bg-[#05050533] border-t-[1.6px]  border-t-[#ffffff27] max-h-32 px-6 py-8'>
      
            <div className='flex flex-row justify-between items-start'>
              <div className='flex items-center min-w-96 justify-start gap-4'>
              <div>
            <Avatar style={{ background:"url('/profile3.jpg')",backgroundPosition:"center",backgroundSize:"cover" }} className='cursor-pointer w-10 h-10 rounded-xl'>
                    
                   
                    </Avatar>
            </div>
            <div className='flex flex-col'>
                <div className='w-[26rem] gap-2 text-sm'>
                <span className='text-white break-words '>Romila</span><span className='break-words text-gray-400'> à publier un voice vous pouvez le lire maintenant. </span>
                </div>
                <div className='leading-4'>
                    <span className='text-[0.8rem] text-gray-400'>il y'a <span className='text-primary '> 3 minutes</span>  </span>
                </div>
            </div>
              </div>
            <div className='text-white'>
              <MoreHorizontal/>
            </div>
            </div>
            
            
      
      </section>
      <section className='bg-[#05050533] border-t-[1.6px]  border-t-[#ffffff27] max-h-32 px-6 py-8'>
      
            <div className='flex flex-row justify-between items-start'>
              <div className='flex items-center min-w-96 justify-start gap-4'>
              <div>
            <Avatar style={{ background:"url('/profile1.jpg')",backgroundPosition:"center",backgroundSize:"cover" }} className='cursor-pointer w-10 h-10 rounded-xl'>
                    
                   
                    </Avatar>
            </div>
            <div className='flex flex-col'>
                <div className='w-[26rem] gap-2 text-sm'>
                <span className='text-white break-words '>Ibrahima</span><span className='break-words text-gray-400'> à publier un voice vous pouvez le lire maintenant. </span>
                </div>
                <div className='leading-4'>
                    <span className='text-[0.8rem] text-gray-400'>il y'a <span className='text-primary '> 3 minutes</span>  </span>
                </div>
            </div>
              </div>
            <div className='text-white'>
              <MoreHorizontal/>
            </div>
            </div>
            
            
      
      </section>
     </section>
    </div>
  )
}
