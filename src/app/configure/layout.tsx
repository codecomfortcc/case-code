import MaxWidthWrapper from '@/components/ui/max-width-wrapper'
import React from 'react'

const ConfigureLayout = ({children}:{children:React.ReactNode}) => {
  return (
  <MaxWidthWrapper className='flex-1 flex flex-col '>
    {children}
  </MaxWidthWrapper>
  )
}

export default ConfigureLayout

