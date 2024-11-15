/* eslint-disable @typescript-eslint/no-unused-vars */
interface WorkExperienceItem {
    startDate: string; 
    endDate: string;   
    jobTitle: string;  
    companyName: string; 
    description: string[]; 
  }
  const experienceData: WorkExperienceItem[] = [
    {
      startDate: "Jul 2024",
      endDate: "Present",
      jobTitle: "Software Developer I",
      companyName: "MoneyGram International",
      description: [
        "Captured business requirements and built a project from scratch with a direct impact on revenue generation and quantitative analysis, automating processes for the entire team.",
        "Wrote JSX code, deployed to Amazon S3 buckets across multiple environments, added new features, and worked extensively with MUI DataTables."
      ]
    },
    {
      startDate: "Sep 2022",
      endDate: "Jul 2024",
      jobTitle: "Senior Analyst / Full Stack Developer",
      companyName: "Capgemini",
      description: [
        "Enhanced an Angular-based application serving over 80,000 individuals in Germany by fixing bugs, developing new features, and improving user experience.",
        "Conducted code reviews, created new REST APIs, optimized TypeScript code, added scripts in the Spring Boot DAO layer, and wrote contract, acceptance, and Jasmine test cases."
      ]
    },
    {
      startDate: "Jun 2021",
      endDate: "Aug 2021",
      jobTitle: "Business Analyst Intern",
      companyName: "Peters Surgical",
      description: [
        "Designed and implemented a Management Information System (MIS)."
      ]
    }
  ];
  
const WorkExperience = () =>{
    return (
        <div className="flex-col flex gap-4 ">
            <h1 className="text-2xl font-bold">Work Experience</h1>
            
<ol className="relative border-s border-gray-200 dark:border-gray-700">                  
    {experienceData.map((item, index) => (<li key={index} className="mb-10 ms-4">
        <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
        <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">{item.startDate} - {item.endDate}</time>
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{item.jobTitle} at {item.companyName}</h3>
        
        <ol className="text-base text-gray-700">
            {item.description.map((desc, index)=>(
                <li key={index}> {desc} </li>
            ))}
        </ol>
    </li>))}
</ol>            
     </div>
    )
}

export default WorkExperience;