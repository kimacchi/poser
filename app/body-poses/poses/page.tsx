"use client"

import React, {useState, useEffect} from 'react'
import { useSearchParams} from "next/navigation"
import PocketBase from 'pocketbase';
import Image from 'next/image';

const pb = new PocketBase('http://127.0.0.1:8090');

interface image{
    age: string,
    clothe: string,
    collectionId: string,
    collectionName: string,
    created: Date,
    gender: string,
    id: string,
    picture: string,
    updated: Date
}

const Page = () => {

    const [images, setImages] = useState<any[]>();

    // * Below code is responsible for filtering through the images.

    const searchParams = useSearchParams();
    const tempAge = searchParams.get("age");
    const tempClothe = searchParams.get("clothe");
    const tempGender = searchParams.get("gender");
    const {clothe, gender, age} = {
        clothe: typeof tempClothe === "string" ? tempClothe : "All",
        gender: typeof tempGender === "string" ? tempGender : "All",
        age: typeof tempAge === "string" ? parseInt(tempAge) : 3
    }
    useEffect(() => {
        let clotheFilter = `${clothe === "All" ? "clothe != 'nothing'" : "clothe = " + '"'+ clothe +'"' }`
        let ageFilter = `${age === 3 ? "age != 'nothing'" : "age = " + '"'+ age +'"'}`
        let genderFilter = `${gender === "All" ? "gender != 'nothing'" : "gender = " + '"'+ gender +'"'}`


        console.log(`${clotheFilter} ${ageFilter && "&&"} ${ageFilter} ${genderFilter && "&&"} ${genderFilter}`.trim())


        const localFunc = async () => {            
            const records = await pb.collection("poses").getFullList({
                filter: `${clotheFilter} ${ageFilter && "&&"} ${ageFilter} ${genderFilter && "&&"} ${genderFilter} && picture != null`.trim()
            })
            const temp: (Record<string, string> | image)[] = records
            setImages(records);
            console.log(records)
        }
        localFunc().catch(error=>console.log(error))
    })

    // * Below code is responsible for managing the slideshow.

    const generateURL = (col:string, id:string, name:string)=>{
        console.log(`http://127.0.0.1:8090/api/files/${col}/${id}/${name}`)
        return `http://127.0.0.1:8090/api/files/${col}/${id}/${name}`
    }

    return (
        <div>
            <div className='p-4 h-5/6 w-2/5 border-4 rounded-3xl '>
                <div className='w-full h-full relative' >
                    {
                        images?.map(ele=>{
                            return (
                                <Image
                                    alt={ele.picture}
                                    src={generateURL(ele.collectionId, ele.id, ele.picture)}
                                    fill
                                    objectFit='contain'
                                    key={ele.id}
                                />
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default Page