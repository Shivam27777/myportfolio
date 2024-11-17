"use client";
interface EducationItem {
    startDate: string;  // Start date of the education
    endDate: string;    // End date of the education (completion year)
    collegeName?: string;  // Name of the college (if applicable)
    schoolName?: string;   // Name of the school (if applicable)
    courseName: string;    // The name of the course/degree
    address: string;       // The address of the institution
  }

  const educationData: EducationItem[] = [
    {
      startDate: "2018", // Start year of B.Tech
      endDate: "2022",   // Completion year of B.Tech
      collegeName: "Delhi Technological University",
      courseName: "B. Tech Mechanical Engineering (GPA: 8.75)",
      address: "New Delhi, India"
    },
    {
      startDate: "2015", // Start year of XII
      endDate: "2017",   // Completion year of XII
      schoolName: "Mother Khazani Convent School",
      courseName: "XII (Percentage: 78)",
      address: "New Delhi, India"
    },
    {
      startDate: "2013", // Start year of X
      endDate: "2015",   // Completion year of X
      schoolName: "Dewan Public School",
      courseName: "X (CGPA: 9)",
      address: "Meerut, India"
    }
  ];

const Education = () =>{
    return (
        <div>
            <h1 className="text-2xl font-bold"> Education</h1>
            <ol className="relative border-s border-gray-200 dark:border-gray-700">                  
    {educationData.map((item, index) => (<li key={index} className="mb-10 ms-4">
        <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
        <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">{item.startDate} - {item.endDate}</time>
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{item.courseName} at {item?.collegeName || item?.schoolName}</h3>
        <p className="text-base text-gray-700 dark:text-gray-300">{item.address}</p>
    </li>))}
</ol>  
        </div>

    )
}

export default Education;