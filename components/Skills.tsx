"use client";
const skillsData = [
    "Java",
    "Python",
    "Spring Boot",
    "React.js",
    "Express.js",
    "Angular",
    "TypeScript",
    "JavaScript",
    "Rest APIs",
    "HTML",
    "CSS",
    "Bootstrap",
    "Material UI",
    "Tailwind",
    "MongoDB",
    "SQL",
    "JPA-Hibernate",
    "Prisma",
    "CI/CD",
    "Git",
    "OOPs",
    "Unit Testing",
    "Contract Testing",
    "Jasmine Test"
  ];
const Skills = () =>{
    return (
        <div className="flex-col flex gap-4 ">
            <h1 className="text-2xl font-bold">Skills</h1>
            <div className="flex flex-wrap gap-4">
            {skillsData.map((skill, index)=>(
                <div key={index} className="flex border-gray-200 rounded-md p-4 bg-gray-500 text-white px-2 py-1 text-sm dark:border-gray-800">{skill}</div>
            ))}
            </div>
        </div>
        )
    }

export default Skills;