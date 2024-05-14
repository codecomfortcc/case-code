import DesignConfigurator from '@/components/design-configurator'
import { db } from '@/db'
import { notFound } from 'next/navigation'
import React from 'react'
interface PageProps {
  searchParams: {
    [key:string]:string| string[]|undefined
  }
}
const DesignPage = async({searchParams}:PageProps) => {
  //! Make  db call
  const {id} = searchParams
  if(!id || typeof id !== "string"){
    return notFound()
  }
  const configuration =await db.configuration.findUnique({"where":{id}})
  if(!configuration){
    return notFound()
  }
  const {imageUrl,width,height}=configuration
  return (
 <DesignConfigurator configId={configuration.id} imageDimensions={{width,height}} ImageUrl={imageUrl}/>
  )
}

export default DesignPage
