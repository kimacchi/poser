"use client"

import React, {useCallback} from 'react'
import PocketBase from 'pocketbase';
import {useDropzone, DropzoneInputProps} from 'react-dropzone'


const pb = new PocketBase('http://127.0.0.1:8090');

let formData = new FormData();
const Photos = () => {


  const onFormChange = async (event: React.ChangeEvent<HTMLInputElement>) => {
    if(event.currentTarget.files){
      for(let file of event.currentTarget.files){
        formData.append("picture", file);
      }
      formData.append("title", "this is a test title")
    }else{
      console.log("no valid file")
    }

    const record = await pb.collection("poses").create(formData);
    console.log(record);
    formData = new FormData();
  }

  const onDrop = useCallback(async (acceptedFiles: any) => {
    if(acceptedFiles){
      for(let file of acceptedFiles){
        formData.append("picture", file);
      }
      formData.append("title", "this is a test title")
    }else{
      console.log("no valid file")
    }

    const record = await pb.collection("poses").create(formData);
    console.log(record);
    formData = new FormData();
  }, [])
  const {getRootProps, getInputProps, isDragActive} = useDropzone({onDrop})

  return (
    <div className='flex h-full items-center justify-center'>
      <div className="w-2/5 h-5/6 border-4 rounded-3xl border-white flex flex-col items-center p-4">
        <div {...getRootProps()} className='bg-darkPurple w-full h-32 flex items-center justify-center p-8 rounded-xl shadow-inner shadow-black border border-lightPurple hover:shadow-none hover:border-none'>
          <input {...getInputProps()} />
          {
            isDragActive ?
              <p>Drop the files here ...</p> :
              <p>Drag n drop some files here, or click to select files</p>
          }
        </div>
      </div>
    </div>
  )
}

export default Photos