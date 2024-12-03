"use client";
import Link from "next/link";
import { Button } from "./ui/button";

interface ProjectItem {
    title: string; // The name of the project
    description: string; // Brief description of the project
    code: string; // Link to the source code repository
    link: string; // Link to the live demo (optional)
    previewVideo?: string; // Link to a preview video (optional)
    technologies: string[]; // List of technologies used in the project
  }

  const projectData: ProjectItem[] = [
    {
      title: "Speed Check",
      description: "A virtual keyboard implemented where users can test their typing speed and read fun facts.",
      code: "https://github.com/Shivam27777/typeSpeed", // Replace with actual code link
      link: "https://frolicking-manatee-3af5ba.netlify.app/", // Replace with actual live demo link
      previewVideo : "/videos/typeSpeed.mp4",
      technologies: ["React", "Tailwind.css"]
    },
    {
      title: "Fast Pick",
      description: "Developed a React-based application that integrates Rapid-API and Google Maps API to retrieve data on nearby restaurants and attractions. Implemented data analysis and displayed relevant information on an embedded map.",
      code: "https://github.com/Shivam27777/Fast_Pick", // Replace with actual code link
      link: "https://aquamarine-narwhal-aed84a.netlify.app/", // Replace with actual live demo link
      previewVideo : "/videos/fastPick.mp4",
      technologies: ["React", "Rapid API", "Google Maps API"]
    },
    {
      title: "Paytm Clone",
      description: "An application where users can send money to other users. Features include user login and best practices like JWT authentication.",
      code: "https://github.com/Shivam27777/PaytmClone", // Replace with actual code link
      link:"https://github.com/Shivam27777/PaytmClone",
      previewVideo : "/videos/paytmClone.mp4",
      technologies: ["React.js", "Tailwind.css", "Zod", "MongoDB", "Express.js", "Node.js"]
    }
  ];

const Projects = () =>{
    return (
        <div className="flex-col flex gap-4 ">
            <h1 className="text-2xl font-bold">Projects</h1>
            
    <div className="grid md:grid-cols-2 grid-cols-1 gap-4">               
    {projectData.map((item, index) => (
        <div className="flex flex-col border border-gray-100 rounded-md dark:border-gray-800" key={index}>
            <video src={item?.previewVideo} autoPlay muted className="w-full h-full rounded-t-sm"/>
            <div className="flex flex-col gap-2 p-2">
                <h2 className="text-lg font-bold ">{item.title}</h2>
                <p className="text-base text-gray-500"> {item.description}</p>
                <div className="flex flex-wrap gap-2">
                    {item.technologies.map((tech,index)=>(
                        <div key={index} className="flex border border-gray-200 rounded-md px-2 py-1 text-sm bg-gray-500 text-white ">{tech}</div>
                    ))}
                </div>
                <div className="flex gap-2">
                    <Link href={item.link}><Button variant="default">View</Button></Link>
                    <Link href={item.code}><Button variant="outline">Code</Button></Link>
                </div>
            </div>
            </div>
    ))}
    </div> 
     </div>
    )
}

export default Projects;