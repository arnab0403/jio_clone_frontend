"use client"

import ShareButton from '@/components/Section/ShareButton';
import { API_BASE_URL } from '@/lib/endpoint'
import { FolderLock } from 'lucide-react';
import Link from 'next/link';
import React from 'react'
import { useSelector } from 'react-redux';

function page ({ searchParams }) {
  
  const { name } = React.use(searchParams); 
  console.log(name)

  const user  = useSelector(state=>state.user);


  return (
    <div className='h-[90vh] w-full mt-[80px]'>
        {user?.user?.isPremium ? 
        <>
          <div className='h-[85%]'>
               <video controls height={500} className='h-full w-full' autoPlay >
                  <source src={API_BASE_URL+`/premium/video/stream?name=${name}`}/>
               </video>
          </div>
          <div className='w-[100%] h-[15%] gap-4 px-4 flex items-center justify-between'>
              {/* <p className='text-white text-2xl'>{details.name}</p> */}
              <div className='flex justify-end gap-4 items-center w-full'>
                <ShareButton/>
              </div>
          </div>
        </> :  
        
        <div className='h-[85%] w-full flex justify-center items-center flex-col text-[#94a3b8]'>
          <FolderLock size={100} strokeWidth={1}/>
          <p>Subscribe to view premium content</p>
          <Link href="/subscription" className='px-3 py-2 bg-[#e11d48] hover:bg-[#cd0b35] text-sm text-white rounded-md mt-2'>
               Subscribe
          </Link>
        </div>
        }
        
    </div>
  )
}

export default page