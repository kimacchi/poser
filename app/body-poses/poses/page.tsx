"use client"

import React, {useState, useEffect} from 'react'
import { useSearchParams} from "next/navigation"

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
    return (
        <div>{clothe}</div>
    )
}

export default Page