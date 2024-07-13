import { Search } from 'lucide-react'
import React from 'react'

export default function HomeNotification() {
  return (
    <div className='bg-[#363636] min-h-[100vh] px-6 rounded-xl py-4 mx-3'>
      <div className="flex items-center justify-between">
      <h2 className='text-xl font-bold text-white'>Notification</h2>
      <div className='text-white'>
        <Search/>
      </div>
      </div>
     
    </div>
  )
}
