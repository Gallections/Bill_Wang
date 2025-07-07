import "../../.././index.css"
import profile from '../../.././assets/cross_arm_square.jpg'

function IntroContainer() {
    return (
        <>
            <div id= "Intro" className = "z-10 introBox ml-[1rem] mr-[1rem] md:ml-[5rem] md:mr-[5rem] p-[2rem] rounded-[1.1rem] flex flex-row flex-wrap  mt-[3rem] items-center justify-center">
                <div className = "flex flex-col gap-[0.5vw] w-full md:w-[50%] h-[73.333%] p-[5%] justify-center">
                    
                    <h2 className = "text-[1.6rem] md:text-[5vw] lg:text-[5vw] font-semibold">Bill</h2>
                    
                    <h2 className = "text-[1.6rem] md:text-[5vw] lg:text-[5vw] font-semibold ">Wang</h2>
                   
                    <h3 className = "font-medium lg:text-[3vw] sm:text-[1rem]">Software Developer</h3>
                    
                    <p className = "text-[0.6rem] md:text-[1.3vw] lg:text-[1.3vw]">
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