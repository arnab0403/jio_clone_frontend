import { cn } from '@/lib/utils'
import React from 'react'

function Skeleton({className}) {
  return (
    <div className={cn("animate-pulse bg-[#4b4b4b]",className)}>

    </div>
  )
}

export default Skeleton