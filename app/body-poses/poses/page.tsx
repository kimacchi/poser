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

interface url{
    url: string,
    name: string,
    id: string
}

const Page = () => {

    const [images, setImages] = useState<url[]>([]);

    const [overlayActive, setOverlayActive] = useState(true)

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
            records.forEach(record=>{
                const newImage: url = {
                    url: `http://127.0.0.1:8090/api/files/${record.collectionId}/${record.id}/${record.picture}`,
                    name: record.picture,
                    id: record.id
                }
                setImages((prev)=>{
                    if (!prev)
                        return [newImage]
                    else
                        return [...prev, newImage]
                })
            })
            console.log(records[0].picture)
        }
        localFunc().catch(error=>console.log(error))
        window.addEventListener("click", ()=>{
            setOverlayActive((prev)=>!prev)
        })
    }, [])
    // useEffect(() => {
    //     console.log(overlayActive)
    // })

    // * Below code is responsible for managing the slideshow.


    

    return (
        <div className='h-full w-full'>
            {/* {
                images?.map(ele=>{
                    return (
                        <div className='w-full h-full relative' key={ele.name}>
                            <Image
                                alt={ele.name}
                                src={ele.url}
                                fill
                                objectFit='contain'
                                
                            />
                        </div>
                    )
                })
            } */}
            <div className={'bg-darkPurple w-full h-24 bg-opacity-40 absolute bottom-0 z-10 flex justify-center items-center' + ` ${overlayActive ? "" : "hidden"}`}>
                <div></div>
                <div></div>
                <div></div>
            </div>
        </div>
    )
}

export default Page