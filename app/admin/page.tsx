"use client"

import React, {useCallback, useState} from 'react'
import PocketBase from 'pocketbase';
import {useDropzone, DropzoneInputProps} from 'react-dropzone'
import Image from 'next/image';

import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';


const pb = new PocketBase('http://127.0.0.1:8090');
let formData = new FormData();

const ageOption = [
  "0","1","2","3"
]
const clotheOption = [
  "Nude", "All", "Clothed"
]
const genderOption = [
  "Feminine", "Masculine", "All"
]

const Photos = () => {
  const [age, setAge] = useState(parseInt(ageOption[0]))
  const [clothe, setClothe] = useState(clotheOption[0])
  const [gender, setGender] = useState(genderOption[0])
  const [file, setFile] = useState("");


  const onDrop = useCallback(async (acceptedFiles: any) => {
    if(acceptedFiles){
      for(let file of acceptedFiles){
        formData.append("picture", file);
        setFile(URL.createObjectURL(file))
      }
    }else{
      console.log("no valid file")
    }
  }, [])
  const {getRootProps, getInputProps, isDragActive} = useDropzone({onDrop})

  const createImage = async () => {
    formData.append("age", "" + age)
    formData.append("gender", gender)
    formData.append("clothe", clothe)
    const record = await pb.collection("poses").create(formData);
    console.log(record);
    formData = new FormData();
  }

  return (
    <div className='flex h-full items-center justify-around'>
      
      <div className="w-2/5 h-5/6 border-4 rounded-3xl border-white flex flex-col items-center p-4 justify-around">
        <div {...getRootProps()} className='bg-darkPurple w-full h-32 flex items-center justify-center p-8 rounded-xl shadow-inner shadow-black border border-lightPurple hover:shadow-none hover:border-none'>
          <input {...getInputProps()} />
          {
            isDragActive ?
              <p>Drop the files here ...</p> :
              <p>Drag n drop some files here, or click to select files</p>
          }
        </div>
        <p>age</p>
        <Dropdown options={ageOption} value={"" + age} onChange={(option) => setAge(parseInt(option.value))} placeholder="Select an option"/>
        <p>gender</p>
        <Dropdown options={genderOption} value={gender} onChange={(option) => setGender(option.value)} placeholder="Select an option"/>
        <p>clothe</p>
        <Dropdown options={clotheOption} value={clothe} onChange={(option) => setClothe(option.value)} placeholder="Select an option"/>
        <button className='bg-darkPurple p-4 rounded-xl hover:scale-105' onClick={createImage}>
          Create Image
        </button>
      </div>
      <div className='p-4 h-5/6 w-2/5 border-4 rounded-3xl'>
        <div className='w-1/3 h-1/3 aspect-auto absolute'>
          <Image
            alt="ssdfg"
            src={file}
            fill

          />

        </div>
      </div>
    </div>
  )
}

export default Photos