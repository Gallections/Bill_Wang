import {useState, useEffect} from 'react'
import "../../../.././index.css"

function Experience() {

    return (
        <>
            <div className = "p-3">
                <h1 className = "text-[1.7rem] lg:text-[3.5vw] md:text-[3.9vw] text-center font-semibold">Work Experience</h1>
                
                <div className = "mt-[3rem] p-[3rem] exp-block rounded-2xl">
                    <h2 className = "mt-[1rem] text-[1.5rem] lg:text-[3vw] md:text-[3.5vw] font-medium text-center">UBC Emergine Media Lab</h2>
                    <h2 className = "text-[1rem] lg:text-[2vw] md:text-[2.3vw] font-base">Software Developer | May, 2025 - present</h2>
                    <p className = "mt-[1rem]">•  Collaborating with a cross-functional team of 2 developers and 2 designers, leveraging Unreal Engine and Blender to create 3D assets and model VR scenes, utilizing C++ and Unreal Engine 5 Blueprints to develop user interface and control logic for VR projects, enhancing team productivity by 20% through optimized workflows. </p>
                    <p className = "mt-[0.1rem]">•	Spearheaded weekly Agile stand-ups; tracked sprint goals, documented progress with journaling data, and facilitated communication with a Principal Investigator to meet project deliverables. </p>
                    <p className = "mt-[0.1rem]">•	Managing version control with Perforce, performing integrations across 3 streams to synchronize updates for a codebase with 1,000+ revisions, ensuring seamless collaboration and deployment for the team. </p>
                    <p className = "mt-[0.1rem]">•	Facilitated cross-team collaboration using Trello to manage 30+ tasks across 5 teams and employed Miro and Figma to streamline design planning and intra-team communication, reducing design iteration time by 15% through structured feedback loops.</p>
                </div>
                
                <div className = "mt-[3rem] p-[3rem] rounded-2xl">
                    <h2 className = "mt-[1rem] text-[1.5rem] lg:text-[3vw] text-center md:text-[3.5vw] font-medium">International Genetically Engineered Machine</h2>
                    <h2 className = "text-[1rem] lg:text-[2vw] md:text-[2.3vw] font-base">Frontend Developer | Feb, 2025 - present</h2>
                    <p className = "mt-[1rem]">•	Engineered responsive user interfaces from Figma mock-ups using React, TypeScript, and Astro for iGEM’s official website and internal wiki, emphasizing performance and mobile-first design principles.</p>
                    <p className = "mt-[0.1rem]">•	Enhanced site accessibility with Axe DevTools and optimized rendering through Gatsby, boosting page load speed and SEO scores. </p>
                    <p className = "mt-[0.1rem]">•	Automated backend tasks and integrated services using Node.js, improving deployment workflows and system reliability. </p>
                    <p className = "mt-[0.1rem]">•	Implemented interactive data visualizations using Three.js, Blender, and STL, improving engagement for technical and non-technical audiences.</p>
                    <p className = "mt-[0.1rem]">•	Led sprint meetings and tracked progress in Notion, aligning frontend and backend teams to resolve blockers efficiently.</p>
                </div>
                
                <div className = "mt-[3rem] p-[3rem] exp-block rounded-2xl">
                    <h2 className = "mt-[1rem] text-center text-[1.5rem] lg:text-[3vw] md:text-[3.5vw] font-medium">Westminster Toyota CA</h2>
                    <h2 className = "text-[1rem] lg:text-[2vw] md:text-[2.3vw] font-base">Software Engineer Intern | Apr, 2024 - Jul, 2024</h2>
                    <p className = "mt-[1rem]">• Led the development of a Python-based application that streamlined the vehicle sales process, improving efficiency and reducing time per sale by 5 minutes, benefiting 100+ sales reps. </p>
                    <p className = "mt-[0.1rem]">• Designed and contributed to a user-oriented vehicle sales forum, boosting user satisfaction and enhancing engagement, resulting in 500+ active forum users.  </p>
                    <p className = "mt-[0.1rem]">• Collaborated with cross-functional teams to optimize system performance, ensuring smooth operations for the sales team and improving overall productivity. </p>
                    <p className = "mt-[0.1rem]">• Contributed to code reviews and debugging to maintain high code quality and reliability. </p>
                    <p className = "mt-[0.1rem]">• Participate in team sprint planning, standups, and retrospectives.</p>
                </div>
            </div>
        </>
    )
}

export default Experience;