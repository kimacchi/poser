"use client"

import React, {useState, useEffect} from 'react'
import { useSearchParams} from "next/navigation"
import PocketBase from 'pocketbase';

const pb = new PocketBase('http://127.0.0.1:8090');

const Page = () => {
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
        let clotheFilter = `${clothe === "All" ? "" : "clothe = " + '"'+ clothe +'"' }`
        let ageFilter = `${age === 3 ? "" : "age = " + '"'+ age +'"'}`
        let genderFilter = `${gender === "All" ? "" : "gender = " + '"'+ gender +'"'}`


        console.log(`${clotheFilter} ${ageFilter && "&&"} ${ageFilter} ${genderFilter && "&&"} ${genderFilter}`.trim())


        const localFunc = async () => {            
            const records = await pb.collection("poses").getFullList({
                filter: `${clotheFilter} ${ageFilter && "&&"} ${ageFilter} ${genderFilter && "&&"} ${genderFilter}`.trim()
            })
            console.log(records)
        }
        localFunc().catch(error=>console.log(error))
    })
    return (
        <div>
            {clothe}
            {age}
            {gender}
        </div>
    )
}

export default Page