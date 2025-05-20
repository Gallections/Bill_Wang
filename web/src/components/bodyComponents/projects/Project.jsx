import {useState, useEffect} from 'react'
import { FaPython, FaJava,  } from "react-icons/fa";
import { DiJavascript1, DiMongodb, DiHtml5, DiCss3, DiPostgresql, DiDjango, DiGit, DiAws, DiReact} from "react-icons/di";
import { SiNumpy, SiPandas, SiCplusplus, SiFlask, SiFastapi, SiRender, 
    SiPostman, SiJunit5, SiMocha, SiChai ,SiPytest, SiKotlin, 
    SiOpencv,
    SiScikitlearn,
    SiBlender,
    SiNotion,
    SiR,
    SiTypescript,
    SiGo,
    SiVite,
    SiNodedotjs,
    SiExpress,
    SiSwift,
    SiKubernetes,
    SiDocker,
    SiWebpack,
    SiAssemblyscript,
    SiMysql,
    SiSqlite,
    SiNpm,
    SiMarkdown,
    SiFigma,
    SiYarn,
    SiHeroku,
    SiYoutube,
    SiGooglecolab,
    SiRoboflow,
    SiJupyter,
    SiKaggle, 
    SiGithub,
    SiTailwindcss,
    SiClaude,
    SiOpenai,
    SiJson,
    SiAxios,
    SiGooglechrome} from "react-icons/si";

function Project({imagePath, title, description, summary, techStack, link}) {
    let techLibrary = {
        "Python": <FaPython />,
        "Java": <FaJava />,
        "JavaScript": <DiJavascript1 />,
        "MongoDB": <DiMongodb />,
        "HTML": <DiHtml5 />,
        "CSS": <DiCss3 />,
        "React": <DiReact />,
        "Django": <DiDjango />,
        "AWS": <DiAws />,               
        "Git": <DiGit />,
        "PostgreSQL": <DiPostgresql />,
        "Numpy": <SiNumpy />,
        "Pandas": <SiPandas />,
        "C++": <SiCplusplus />,
        "Flask": <SiFlask />,
        "FastAPI": <SiFastapi />,
        "Render": <SiRender />,
        "Postman": <SiPostman />,
        "JUnit": <SiJunit5 />,
        "Mocha": <SiMocha />,
        "Chai": <SiChai />,
        "PyTest": <SiPytest />,
        "Kotlin": <SiKotlin />,
        "OpenCV": <SiOpencv />,
        "Scikit-Learn": <SiScikitlearn />,
        "Blender": <SiBlender />,
        "Notion": <SiNotion />,
        "R": <SiR />,
        "TypeScript": <SiTypescript />,
        "Go": <SiGo />,
        "Vite": <SiVite />,
        "NodeJs": <SiNodedotjs />,
        "ExpressJs": <SiExpress />,
        "Swift": <SiSwift />,
        "Kubernetes": <SiKubernetes />,
        "Docker": <SiDocker />,
        "Webpack": <SiWebpack />,
        "Assembly": <SiAssemblyscript />,
        "MySQL": <SiMysql />,
        "Sqlite": <SiSqlite />,
        "npm": <SiNpm />,
        "Figma": <SiFigma />,
        "Markdown": <SiMarkdown />,
        "yarn": <SiYarn />,
        "Heroku": <SiHeroku />,
        "YouTube": <SiYoutube/>,
        "GoogleColab": <SiGooglecolab />,
        "Roboflow": <SiRoboflow />,
        "Juypter": <SiJupyter />,
        "Kaggle": <SiKaggle />,
        "GitHub": <SiGithub />,
        "tailwindcss": <SiTailwindcss />,
        "Claude": <SiClaude />,
        "OpenAI": <SiOpenai />,
        "Json": <SiJson />,
        "Axios": <SiAxios />,
        "ExpressJS": <SiExpress />,
        "Chrome": <SiGooglechrome />
    }

    return (
        <>
            <div className = "relative shadow-[0_5px_15px_rgba(0,0,0,0.35)] cursor-pointer w-[40%] rounded-[0.3rem] h-[32rem] bg-green-100 flex flex-col group">
            <a href={link} target="_blank" rel="noopener noreferrer" className="absolute w-[100%] h-[100%]">
                <div className = "absolute group-hover:opacity-0 transition-opacity duration-300 w-[100%] h-[100%] rounded-[0.3rem] ">
                    <div className = "w-[100%] h-[70%] bg-red-200 rounded-t-[0.3rem]">
                        <img src = {imagePath} className = "w-[100%] h-[100%] rounded-t-[0.3rem]"></img>
                    </div>
                    <div className = "projectBg w-[100%] h-[30%] rounded-b-[0.3rem] p-5">
                        <h1 className = "text-lg font-medium">{title}</h1>
                        <p className = "text-sm mt-[0.2rem]">{summary}</p>
                    </div>
                </div>

                <div className = "absolute opacity-0 group-hover:opacity-100 transition-opacity duration-300 w-[100%] h-[100%] rounded-[0.3rem] ">
                    <div className = "projectBg w-[100%] h-[100%] rounded-[0.3rem] p-5 flex flex-col items-center">
                        <h1 className = "text-lg font-medium">{title}</h1>
                        <p className = "text-sm" 
                            style={{ whiteSpace: 'pre-line' }}>
                                {description}
                        </p>
                        <div className ="w-[100%] mt-[1rem] mb-[1rem]">
                            <p className= "text-lg font-medium">Tech Stack</p>
                            <div className="flex flex-wrap gap-3 mt-5">
                                {techStack.map((tech) => (
                                    <span key={tech} className="text-3xl">
                                        {techLibrary[tech] || <span>{tech}</span>}  
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </a>
            </div>
        </>
    )
}

export default Project;