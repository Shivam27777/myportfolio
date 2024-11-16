"use client";

import Image from "next/image";

const Introduction = () =>{
    return (
        <div className="flex gap-4 flex-col-reverse sm:flex-row justify-center items-center">
    <div className="flex flex-col gap-4 md:w-9/12 sm:w-full" >
        <h1 className="text-4xl font-bold">Hi, I&apos;m Shivam</h1>
        <p className="text-base text-gray-700 dark:text-gray-300">I&apos;m a full-stack developer with over 2+ years of experience. I have successfully built applications from scratch to production-ready stages. Throughout my career, I've worked across various domains, including frontend development, backend systems, databases, and even explored blockchain technology. </p>
    </div>
    <div className="md:w-3/12 flex-1 sm:w-full">
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