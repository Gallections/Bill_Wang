import {useEffect, useState} from 'react'
import "../../.././index.css"
import profile from '../../.././assets/profile.png'

function IntroContainer() {
    return (
        <>
            <div id= "Intro" className = "z-10 pt-[5vh] pb-[5vh] pl-[3vw] pr-[3vw] introBox rounded-[1.1rem] flex flex-row flex-wrap w-[80vw] lg:h-[80vh] mt-[3vh] items-center justify-center">
                {/*z-10 introBox rounded-[1.1rem] flex flex-row w-[65rem] h-[30rem] mt-[1rem] gap-10 items-center justify-center  */}
                <div className = "flex flex-col gap-[0.5vw] w-[45vw] h-[73.333%] p-[5%] justify-center">
                    {/* flex flex-col w-[30rem] h-[22rem] p-[2rem] justify-center */}
                    <h2 className = "text-[1.6rem] md:text-[5vw] lg:text-[5vw] font-semibold">Bill</h2>
                    {/* text-5xl */}
                    <h2 className = "text-[1.6rem] md:text-[5vw] lg:text-[5vw] font-semibold ">Wang</h2>
                    {/* text-5xl */}
                    <h3 className = "font-medium lg:text-[3vw] sm:text-[1rem]">Software Developer</h3>
                    {/* text-3xl mt-[2rem] */}
                    <p className = "text-[0.6rem] md:text-[1.3vw] lg:text-[1.3vw]">
                    {/* mt-[2rem] */}
                    Hi! I am a software developer with experience in full-stack development, web development, and UI/UX design. I specialize in JavaScript, TypeScript, Python, Java, C++ and React, with a strong foundation in full-stack and front-end development. My work includes building user-friendly applications, integrating machine learning models, and optimizing user experiences.
                    </p>
                </div>

                <div className = "flex flex-row min-w-[17rem] min-h-[17rem] w-[28vw] h-[28vw] items-center justify-center">
                    {/* 22rem, 22rem */}
                    <img src = {profile} className ="w-[95%] h-[95%] rounded-[0.5rem]"></img>
                </div>
            </div>
        </>
    )

}
export default IntroContainer;