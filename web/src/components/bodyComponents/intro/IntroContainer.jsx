import "../../.././index.css"
import profile from '../../.././assets/cross_arm_square.jpg'

function IntroContainer() {
    return (
        <>
            <div id= "Intro" className = "typewriter w-[100%] sm:w-[90%] z-10 introBox ml-[1rem] mr-[1rem] md:ml-[5rem] md:mr-[5rem] p-[2rem] rounded-[1.1rem] flex flex-row flex-wrap  mt-[1rem] md:mt-[3rem] items-center justify-center">
                <div className = "flex flex-col gap-[0.5vw] w-full md:w-[50%] h-[73.333%] p-[5%] justify-center">
                    
                    <h2 className = "text-[1.6rem] md:text-[5vw] lg:text-[5rem] font-semibold">Bill</h2>
                    
                    <h2 className = "text-[1.6rem] md:text-[5vw] lg:text-[5rem] font-semibold ">Wang</h2>
                   
                    <h3 className = "written font-medium lg:text-[3vw] sm:text-[1rem]">Software Developer</h3>
                    
                    <p className = "text-[0.6rem] md:text-[1.3vw] lg:text-[1.3vw]">
                    I'm a UBC student who loves building software that’s both functional and thoughtful. I dabble in full-stack development and emerging technologies, where I bring logic to life. I’m always experimenting, learning, and aiming to turn ideas into tools that matter.
                    </p>
                </div>

                <div className = "flex flex-row w-[95%] h-[95%] sm:w-[28vw] sm:h-[28vw] items-center justify-center">
                    <img src = {profile} className ="w-[95%] h-[95%] rounded-[0.5rem]"></img>
                </div>
            </div>
        </>
    )

}
export default IntroContainer;