import ContactMe from "@/components/ContactMe";
import CustomDock from "@/components/CustomDock";
import Education from "@/components/Education";
import Introduction from "@/components/Introduction";
import LightEffect from "@/components/LightEffect";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Meteors from "@/components/ui/meteors";
import WorkExperience from "@/components/WorkExperience";


export default function Home() {
  return (
    <div className="colorScheme-light relative lg:w-8/12 md:w-7/12 sm:w-full mx-auto items-center justify-items-center min-h-screen p-8 pb-20 gap-16 font-[family-name:var(--font-geist-sans)] overflow-hidden">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
      <Meteors number={25}/>
      <LightEffect/>
      <Introduction/>
      <WorkExperience/>
      <Education/>
      <Skills/>
      <Projects/>
      <ContactMe/>
      <CustomDock />
    
      </main>
    </div>
  );
}
