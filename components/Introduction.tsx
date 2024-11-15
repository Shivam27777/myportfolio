"use client";

import Image from "next/image";

const Introduction = () =>{
    return (
        <div className="flex gap-4 ">
    <div className="flex flex-col gap-4 w-9/12" >
        <h1 className="text-4xl font-bold">Hi, I&apos;m Shivam</h1>
        <p className="text-base text-gray-700">I&apos;m a full-stack developer with over 2 years of experience. I have successfully built applications from scratch to production-ready stages. Throughout my career, I've worked across various domains, including frontend development, backend systems, databases, and even explored blockchain technology. </p>
    </div>
    <div className="w-3/12 flex-1">
        <Image src="/myImage.png" // this by default takes the path from public folder
        alt="Shivam's Image"
        width={100}
        height={100}
        
        className="rounded-full border border-gray-100 h-36 w-36"/>

    </div>
    </div>
    )
    
}

export default Introduction;