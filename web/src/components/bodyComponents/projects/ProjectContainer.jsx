import {useState, useEffect} from 'react'
import Project from './Project';
import smiley from "../../.././assets/smiley.png"

function ProjectContainer() {

    return (
        <>
            <div id= "project-section" className = "projectBox mt-[5rem] pt-[3rem] pb-3 rounded-[2rem] pl-5 pr-5 border-4 w-[65rem] flex flex-col hover:">
                <h1 className = "text-center text-4xl font-semibold">Projects</h1>
                <div className = "w-[100%] flex flex-row mt-9 p-5 items-center flex-wrap gap-10 justify-center">
                    <Project imagePath={smiley} 
                        title="Project Name" 
                        summary= "Short Project Description: Lorem’s console is at risk with phishing websites."
                        description= {`Lorem ipsum dolor sit amet, consectetur adipiscing elit. \nSed do eiusmod tempor incididunt ut labore et dolore magna aliqua. \nUt enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. \nDuis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. \nExcepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`}
                        link= "https://www.google.com/"
                        techStack = {["Python", "Flask", "JavaScript", "Render", "Vite", "Axios", "React", "YouTube","HTML", "CSS", "Git", "GitHub"]}
                        />

                    <Project imagePath={smiley} 
                        title="Project Name" 
                        summary= "Short Project Description: Lorem’s console is at risk with phishing websites."
                        description= {`Lorem ipsum dolor sit amet, consectetur adipiscing elit. \nSed do eiusmod tempor incididunt ut labore et dolore magna aliqua. \nUt enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. \nDuis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. \nExcepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`}
                        techStack={["Python", "OpenCV", "Pandas", "Numpy", "GoogleColab", "Roboflow", "Scikit-Learn", "Juypter", "Kaggle", "Git", "GitHub"]}
                        link= "https://www.google.com/"
                        />

                    <Project imagePath={smiley} 
                        title="Project Name" 
                        summary= "Short Project Description: Lorem’s console is at risk with phishing websites."
                        description= {`Lorem ipsum dolor sit amet, consectetur adipiscing elit. \nSed do eiusmod tempor incididunt ut labore et dolore magna aliqua. \nUt enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. \nDuis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. \nExcepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`}
                        techStack={["HTML", "CSS", "JavaScript", "Git", "GitHub"]}
                        link= "https://www.google.com/"
                        />

                    <Project imagePath={smiley} 
                        title="Project Name" 
                        summary= "Short Project Description: Lorem’s console is at risk with phishing websites."
                        description= {`Lorem ipsum dolor sit amet, consectetur adipiscing elit. \nSed do eiusmod tempor incididunt ut labore et dolore magna aliqua. \nUt enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. \nDuis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. \nExcepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`}
                        techStack={["Java", "JUnit", "Json", "Git", "GitHub"]}
                        link= "https://www.google.com/"
                        />

                    <Project imagePath={smiley} 
                        title="Project Name" 
                        summary= "Short Project Description: Lorem’s console is at risk with phishing websites."
                        description= {`Lorem ipsum dolor sit amet, consectetur adipiscing elit. `}
                        techStack={["TypeScript", "Mocha", "Chai", "Json", "React", "HTML", "CSS", "Git", "GitHub"]}
                        link= "https://www.google.com/"
                        />

                    <Project imagePath={smiley} 
                        title="Project Name" 
                        summary= "Short Project Description: Lorem’s console is at risk with phishing websites."
                        description= {`Lorem ipsum dolor sit amet, consectetur adipiscing elit. \nSed do eiusmod tempor incididunt ut labore et dolore magna aliqua. \nUt enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. \nDuis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. \nExcepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`}
                        techStack={["JavaScript", "Webpack", "ExpressJs", "HTML", "CSS", "tailwindcss", "Git", "GitHub"]}
                        link= "https://www.google.com/"
                        />

                    <Project imagePath={smiley} 
                        title="Project Name" 
                        summary= "Short Project Description: Lorem’s console is at risk with phishing websites."
                        description= {`Lorem ipsum dolor sit amet, consectetur adipiscing elit. \nSed do eiusmod tempor incididunt ut labore et dolore magna aliqua. \nUt enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. \nDuis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. \nExcepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`}
                        techStack={["React", "JavaScript", "HTML", "CSS", "tailwindcss", "Git", "GitHub"]}
                        link= "https://www.google.com/"
                        />
                    
                    <Project imagePath={smiley} 
                        title="Project Name" 
                        summary= "Short Project Description: Lorem’s console is at risk with phishing websites."
                        description= {`Lorem ipsum dolor sit amet, consectetur adipiscing elit. \nSed do eiusmod tempor incididunt ut labore et dolore magna aliqua. \nUt enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. \nDuis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. \nExcepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`}
                        techStack={["Django", "Python", "React", "TypeScript", "Axios", "Postman", "HTML", "CSS", "tailwindcss", "Git", "GitHub"]}
                        link= "https://www.google.com/"
                        />
                </div>
            </div>
        </>
    )
}

export default ProjectContainer;