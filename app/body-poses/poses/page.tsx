"use client"

import React, {useState, useEffect, useRef} from 'react'
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
        window.addEventListener("click", handleOverlayStatus)
    }, [])
    // useEffect(() => {
    //     console.log(overlayActive)
    // })

    // * Below code is responsible for managing the slideshow.
    
    const handleOverlayStatus = () => {
        // setOverlayActive((prev)=>!prev)
    }

    const next =() => {
        console.log("next");
        setImages(prev => {
            let temp = prev;
            const item = temp.shift()
            if(item){
                temp = [...temp, item]
                return temp
            }
            return prev
        })
    }

    const previous = () => {
        setImages(prev => {
            let temp = prev;
            const item = temp.pop()
            if(item){
                temp = [item, ...temp]
                return temp
            }
            return prev
        })
    }

    const overlayHideControl = (hideable: boolean) => {
        if(!hideable){
            console.log("mouse entered")
            window.removeEventListener("click", handleOverlayStatus)
        }
        else{
            console.log("mouse left")
            window.addEventListener("click", handleOverlayStatus)
        }
    }
    

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
            {
                images &&
                <div className='w-full h-full relative'>
                    <Image
                        alt={images[0].name}
                        src={images[0].url}
                        fill
                        objectFit='contain'
                        
                    />
                </div>
            }
            <div 
                className={'bg-darkPurple gap-8 w-full h-24 bg-opacity-40 absolute bottom-0 z-10 flex justify-center items-center' + ` ${overlayActive ? "" : "invisible"}`}
                onMouseEnter={() => {
                    overlayHideControl(false)
                }}
                onMouseLeave={() => {
                    overlayHideControl(true)
                }}
                // onMouseOut={()=>{
                //     overlayHideControl(true)
                // }}
            >
                <button onClick={previous} className='hover:bg-lightPurple hover:bg-opacity-20 p-3 flex items-center justify-center rounded-full'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" className="bi bi-chevron-left" viewBox="0 0 16 16">
                        <path fillRule="evenodd" d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"/>
                    </svg>
                </button>
                <button onClick={next} className='hover:bg-lightPurple hover:bg-opacity-20 p-3 flex items-center justify-center rounded-full' >
                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" className="bi bi-chevron-right" viewBox="0 0 16 16">
                        <path fillRule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"/>
                    </svg>
                </button>
            </div>
        </div>
    )
}

export default Page