import ShareButton from '@/components/Section/ShareButton';
import WatchListButton from '@/components/Section/WatchListButton';
import { Button } from '@/components/ui/button';
import { api, ENDPOINT, media } from '@/lib/endpoint'
import { FilmIcon, Share2 } from 'lucide-react';
import Link from 'next/link';
import React from 'react'

async function page ({ searchParams }) {
  const {id} =await searchParams;
  const details = (await api.get(ENDPOINT.getTvShowsDetails(id))).data.media.results[0];
  return (
    <div className='h-[90vh] w-full mt-[80px]'>
        {details ? 
        <>
          <div className='h-[85%]'>
              <iframe  src={`https://www.youtube.com/embed/${details.key}`} className='h-full w-full'></iframe>
          </div>
          <div className='w-[100%] h-[15%] gap-4 px-4 flex items-center justify-between'>
              <p className='text-white text-2xl'>{details.name}</p>
              <div className='flex justify-center gap-4 items-center'>
                <ShareButton/>
                <WatchListButton watchList={{
                  id:id,
                  media_type:details.media_type || "movie"
                }}/>
              </div>
          </div>
        </> :  
        
        <div className='h-[85%] w-full flex justify-center items-center flex-col text-[#94a3b8]'>
          <FilmIcon size={100}/>
          <p>Uh Oh! Video is Unavailable</p>
          <Link href="/tv" className='px-3 py-3 bg-[#e11d48] hover:bg-[#cd0b35] text-sm text-white rounded-md mt-2'>
                Take me Home
          </Link>
        </div>
        }
        
    </div>
  )
}

export default page