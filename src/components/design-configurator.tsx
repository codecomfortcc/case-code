"use client"

import React from 'react'
import { AspectRatio } from './ui/aspect-ratio'
import NextImage from 'next/image'
import { cn } from '@/lib/utils'
interface DesignConfiguratorProps {
  configId: string
  ImageUrl: string
  imageDimensions: {
    width: number
    height: number
  }
}
const DesignConfigurator = ({
  configId,ImageUrl,imageDimensions
}:DesignConfiguratorProps) => {
  return (
  <div className='relative mt-20 grid grid-cols-3 mb-20 pb-20'>
    <div className='realtive h-[37.5rem] overflow-hidden rounded-lg border-2 border-dashed border-gray-300 p-12 text-center focus:outline-none focus:ring-2 focus:primary focus:ring-offset-2'>
    <div className='relative w-60 bg-opacity-50 pointer-events-none aspect-[896/1831] '>
      <AspectRatio ratio={896/1831} className='pointer-events-none relative z-50 aspect-[896/1831] w-full'>
        <NextImage 
        fill
        src="/phone-template.png"  alt='phone Image'className='pointer-events-none z-50 select-none' />
      </AspectRatio>
        <div className='absolute z-40 inset-0 left-[3px] top-px right-[3px] bottom-px rounded-[32px] shadow-[0_0_0_99999px_rgba(229,231,235,0.6)]'/>
        <div  className={cn('absolute z-40 inset-0 left-[3px] top-px right-[3px] bottom-px rounded-[32px]','bg-blue-950')}/>
      
    </div>
    <div className='relative w-full h-full'>
    <NextImage src={ImageUrl} alt='your-name' fill className='pointer-events-none'/>
    </div>
    </div>
  </div>
  )
}

export default DesignConfigurator
