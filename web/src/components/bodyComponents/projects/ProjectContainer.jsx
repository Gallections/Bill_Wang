import {useState, useEffect} from 'react'
import Project from './Project';
import smiley from "../../.././assets/smiley.png"
import YTDonloader from "../../.././assets/youtube_downloader.png"
import FootballAI from "../../.././assets/ai_football.png"
import Recipe from "../../.././assets/recipe.jpg"
import Gallections from "../../.././assets/gallections.png"
import insightUBC from "../../.././assets/insightUBC.png"
import website from "../../.././assets/Billy.png"

function ProjectContainer() {

    return (
        <>
            <div id= "project-section" className = "projectBox shadow-[0_5px_15px_rgba(0,0,0,0.35)] mt-[5rem] pt-[3rem] pb-3 rounded-[2rem] pl-5 pr-5 border-4 w-[65rem] flex flex-col hover:">
                <h1 className = "text-center text-4xl font-semibold">Projects</h1>
                <div className = "w-[100%] flex flex-row mt-9 p-5 items-center flex-wrap gap-10 justify-center">
                    <Project imagePath={YTDonloader} 
                        title="YouTube Download Engine" 
                        summary= "Download any YouTube video/playlist or audio with unlimited amount for free!"
                        description= {`• Built a full stack download engine that enables audio/video downloads with customizable options with Flask, dlp, and React.\n• Optimized payload management to support bulk downloads of playlists with 100+ videos averaging 30s per download.\n• Implemented a user-friendly interface with React, enabling seamless user experience and efficient data processing.\n• Leveraged Axios and YouTube API to fetch and download videos, ensuring fast and reliable data retrieval.`}
                        link= "https://github.com/Gallections/Gallections_YtDownloader"
                        techStack = {["Python", "Flask", "JavaScript", "Render", "Vite", "Axios", "React", "YouTube","HTML", "CSS", "Git", "GitHub"]}
                        />

                    <Project imagePath={FootballAI} 
                        title="AI Football Agent" 
                        summary= "Analyze your favourite football match videos with machine learning and computer vision!"
                        description= {`• Developed an AI-driven system to track, classify, and analyze player movements, averaging 85% accuracy in object detection using YOLOv5 model and Roboflow datasets trained on 600+ images.\n• Streamlined camera calibration, movement tracking, and team assignment with OpenCV and KMeans Clustering Analysis.\n• Leveraged NumPy, pandas, Matplotlib, and Supervision to process and visualize data efficiently, enabling comprehensive analytics for 20 min game footages in under 5 mins.`}
                        techStack={["Python", "OpenCV", "Pandas", "Numpy", "GoogleColab", "Roboflow", "Scikit-Learn", "Juypter", "Kaggle", "Git", "GitHub"]}
                        link= "https://github.com/Gallections/AI_Football_Agent"
                        />

                    <Project imagePath={Recipe} 
                        title="Recipe Search Engine" 
                        summary= "Search and customize your own recipe with customized ingredients and steps!"
                        description= {`• Developed a recipe recommendation engine full stack application leveraging Java, JUnit, Json, and Java Swing framework.
                            \n• Streamlined data processing and storage with JSON, ensuring efficient data retrieval and management.
                            \n• Implemented 200+ unit with JUnit for quality assurance, optimized JSON data handling for fast query response.
                            \n• Designed a user-friendly interface with Java Swing, supporting daily users with a seamless experience.`}
                        techStack={["Java", "JUnit", "Json", "Git", "GitHub"]}
                        link= "https://github.com/Gallections/RecipeSearchEngine"
                        /> 

                    <Project imagePath={Gallections} 
                        title="Classic Game Hub (Gallections)" 
                        summary= "My first website that collects all the classic games in one place!"
                        description= {`• Developed a Web Application that features classic games like Minesweeper leveraging JavaScript and HTML/CSS.
                            \n• Designed and implemented 3+ classic games, including Minesweeper, Breakout, and SpaceInvader with JavaScript and HTML/CSS.
                            \n• Optimized gameplay performance and create an interactive, user-friendly interface, supporting up to 500+ daily sessions.
                            \n• Implemented classic game logic and user interface design, ensuring a seamless user experience.`}
                        techStack={["HTML", "CSS", "JavaScript", "Git", "GitHub"]}
                        link= "https://gallections.github.io/"
                        />

                    <Project imagePath={insightUBC} 
                        title="Insight UBC Engine" 
                        summary= "Unique Engine that manages UBC course and facility database with ease!"
                        description= {`Currently in the process of developing this project! Stay Tuned!`}
                        techStack={["TypeScript", "Mocha", "Chai", "Json", "React", "HTML", "CSS", "Git", "GitHub"]}
                        link= "#"
                        />
                    
                    <Project imagePath={website} 
                        title="Bill Wang's Portfolio" 
                        summary= "Billy's personal portfolio website that showcase his skills and experience that you are currently viewing!"
                        description= {`• Built a personal portfolio website using React and Tailwind CSS, ensuring structured and concise layout.
\n• Designed 30+ reusable scalable and reusable React components for modularity and maintainability.
\n• Implemented UI/UX design using Figma, refining layout and interactions for a consistent user experience.
\n• Optimized performance by reducing re-renders by 30% through efficient state management with React hooks.`}
                        techStack={["React", "JavaScript", "HTML", "CSS", "tailwindcss", "Git", "GitHub"]}
                        link= "https://gallections.github.io/Bill_Wang"
                        />

                    {/* <Project imagePath={smiley} 
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
                        techStack={["Django", "Python", "React", "TypeScript", "Axios", "Postman", "HTML", "CSS", "tailwindcss", "Git", "GitHub"]}
                        link= "https://www.google.com/"
                        /> */}
                </div>
            </div>
        </>
    )
}

export default ProjectContainer;