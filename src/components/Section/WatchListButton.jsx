"use client"

import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { Button } from '../ui/button';
import { LoaderCircle, PlusIcon } from 'lucide-react';
import { api, ENDPOINT } from '@/lib/endpoint';
import { toast } from 'sonner';

function WatchListButton({watchList}) {
    const user = useSelector((state)=> state.user);
    const [isLoading,setLoading]=useState(false);
    const addToWatchList=async()=>{
        try {
            setLoading(true);
            const response = await api.post(ENDPOINT.addToWishlist, watchList);
            if (response.data.status==="success") {
                toast.success("Added to Watch List")
            }
        } catch (error) {
            toast.warning(error.response.data.message);
        }finally{
            setLoading(false);
        }
    }

    if (!user.isLoggedIn) {
        return <></>
    }
  return (
    <Button className={`text-white bg-[#e11d48] hover:bg-[#cd0b35] h-10 ${isLoading?"cursor-not-allowed":"cursor-pointer"}`} onClick={addToWatchList}>
        {isLoading ?<LoaderCircle className=' animate-spin'/> : <PlusIcon className='w-4 h-4'/>}
        WatchList
    </Button>
  )
}

export default WatchListButton