"use client";
import { Input } from "@/components/ui/input";
import { Progress } from "@/components/ui/progress";
import { useToast } from "@/components/ui/use-toast";
import { useUploadThing } from "@/lib/uploadthing";
import { cn } from "@/lib/utils";
import { Image, Loader2, MousePointerSquareDashed } from "lucide-react"

import { useRouter } from "next/navigation";
import React, { useState, useTransition } from "react";
import Dropzone, { FileRejection } from "react-dropzone";
const UploadPage = () => {
  const [isDragOver, setIsDragOver] = useState<boolean>(false);
  const [uploadProgress, setUploadProgress] = useState<number>(0);
  const [isPending, startTransition] = useTransition();
  const {toast}=useToast();
  const router =useRouter()
  const { startUpload,isUploading}=useUploadThing("imageUploader",{
    onClientUploadComplete:([data])=>{
      const configId=data.serverData.configId;
      startTransition(()=>{
        router.push(`/configure/design?id=${configId}`)
      })
    },
    onUploadProgress(p){
      setUploadProgress(p)
    }
  })
  const onDropRejected = (rejectedFiles:FileRejection[]) => {
    const [file]=rejectedFiles

    setIsDragOver(false);
    toast({
      title: `${file.file.type} type is not supported`,
      description: `Please upload a valid image file`,
      variant: "destructive",
    })
  };
  const onDropAccepted = (acceptedFiles:File[]) => {
    startUpload(acceptedFiles,{configId:undefined})
    setIsDragOver(false)
  };
  return (
    <div
      className={cn(
        "relative h-full flex-1 my-16 w-full rounded-xl bg-gray-900/5 p-2 ring-1 ring-inset ring-gray-900/10 lg:rounded-2xl flex justify-center flex-col items-center",
        {
          "ring-blue-900/25 bg-blue-900/10": isDragOver,
        }
      )}
    >
      <div className="relative flex flex-1 flex-col items-center justify-center w-full">
        <Dropzone
          onDropRejected={onDropRejected}
          onDropAccepted={onDropAccepted}
          accept={{
            "image/png": [".png"],
            "image/jpeg": [".jpeg"],
            "image/jpg": [".jg"],
          }}
          onDragEnter={() => setIsDragOver(true)}
          onDragLeave={() => setIsDragOver(false)}
        >
          {({ getRootProps, getInputProps }) => (
            <div
              className="h-full w-full flex=1 flex flex-col items-center justify-center"
              {...getRootProps()}
            >
              <Input {...getInputProps()} />
              {isDragOver ? (
                <MousePointerSquareDashed
                  className="
            h-6 w-6 text-zinc-500 mb-2"
                />
              ) : isUploading || isPending ? (
                <Loader2 className="animate-spin h-6 w-6 text-zinc-500 mb-2" />
              ) : (
                <Image className="h-6 w-6 text-zinc-500 mb-2" />
              )}
              <div className="flex flex-col justify-center mb-2 text-sm text-zinc-700 items-center">
                {isUploading ? (
                  <div className="flex flex-col items-center">
                    <span>Uploading...</span>
                    <Progress
                      value={uploadProgress}
                      className="mt-2 w-40 h-2 bg-gray-200"
                    />
                  </div>
                ) : isPending ? (
                  <div className="flex flex-col items-center">
                    <p>Redirecting ,please-wait...</p>
                  </div>
                ) : isDragOver ? (
                  <p>
                    <span className="font-semibold ">Drop file </span>
                    to upload
                  </p>
                ) : (
                  <p>
                    <span className="font-semibold">Click to upload </span>
                    or drag and drop
                  </p>
                )}
                {!isPending ? (
                  <p className="text-xs text-zinc-500">
                    png, jpeg, jpg
                  </p>
                ) : null}
              </div>
            </div>
          )}
        </Dropzone>
      </div>
    </div>
  );
};

export default UploadPage;
