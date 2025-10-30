import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import Image from "next/image"
import Skeleton from "../../../atom/Skeleton"
import { useEffect, useState } from "react"
import { api, ENDPOINT } from "@/lib/endpoint"
import SearchThumbnail from "../atom/SearchThumbnail"

export function SearchSection() {
  const [open,setOpen]=useState(false);
  const [movieName,setMovieName]=useState("");
  const [isLoading,setIsLoading]=useState(true);
  const [data,setData]=useState([]);
  const handleInputChange = (e)=>{
    setMovieName(e.target.value);
  }

  useEffect(()=>{
    setIsLoading(true);
    const fetchSeachMovie = async()=>{
      if (!movieName) {
        return;
      }
      console.log(movieName);
      const movie =await api.get(ENDPOINT.searchAllMovies(movieName));
      setData(movie.data.media);
      console.log(movie.data);
      setIsLoading(false);
    }
    const movieTimeOut = setTimeout(()=>{
      fetchSeachMovie();
    },2000);

    return ()=>clearTimeout(movieTimeOut);
  },[movieName]);

  return (
    <Dialog open={open} onOpenChange={setOpen} >
      <div>
        <DialogTrigger asChild>
           <div className="rounded-3xl border border-[#383838] lg:flex justify-center items-center px-4 gap-2 hidden  ">
                <Image src="/search.svg" alt="search icon" height={20} width={20} />
                <input
                type="text"
                placeholder="Search..."
                className=" py-2 bg-transparent  text-white font-medium focus:outline-none text-sm max-w-[150px]"
                />
            </div>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[855px] border-none text-white" >
          <DialogHeader>
            <DialogTitle>Search Anytime</DialogTitle>
          </DialogHeader>
          <Input 
              className=""
              placeholder="F1 The Movie" 
              value={movieName}
              onChange={(e)=>{handleInputChange(e)}} 
          />
            {isLoading ? 
            (
              <div className="w-full flex justify-center gap-4 p-5 overflow-scroll scrollbar-hide">
                <Skeleton className="min-w-[150px] h-[200px] rounded-2xl"/>
                <Skeleton className="min-w-[150px] h-[200px] rounded-2xl"/>
                <Skeleton className="min-w-[150px] h-[200px] rounded-2xl"/>
                <Skeleton className="min-w-[150px] h-[200px] rounded-2xl"/>
                <Skeleton className="min-w-[150px] h-[200px] rounded-2xl"/>
                <Skeleton className="min-w-[150px] h-[200px] rounded-2xl"/>
              </div>
            )
            :  
            (
              <SearchThumbnail data={data} setOpen={setOpen} setMovieName={setMovieName}/>
            )
            }
        </DialogContent>
      </div>
    </Dialog>
  )
}



