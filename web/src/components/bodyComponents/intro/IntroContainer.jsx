import {useEffect, useState} from 'react'
import "../../.././index.css"
import profile from '../../.././assets/profile_example.png'

function IntroContainer() {

    return (
        <>
            <div className = "introBox rounded-[1.1rem] flex flex-row w-[65rem] h-[30rem] mt-[1rem] gap-10 items-center justify-center">
                <div className = "flex flex-col w-[30rem] h-[22rem] p-[2rem]">
                    <h1 className = "text-5xl font-semibold">Bill</h1>
                    <h1 className = "text-5xl font-semibold mt-[0.8rem] ">Wang</h1>
                    <h3 className = "font-medium text-3xl mt-[2rem]">Software Engineer</h3>
                    <p className = "mt-[2rem] text-[0.9rem]">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus deleniti repellendus, nobis ut sunt modi molestiae quasi beatae maiores velit suscipit sit, dolorem porro ex nesciunt fuga magnam commodi exercitationem!
                    </p>
                </div>

                <div className = "flex flex-row w-[22rem] h-[22rem] items-center justify-center">
                    <img src = {profile} className ="w-[95%] h-[95%] rounded-[0.5rem]"></img>
                </div>

            </div>
        </>
    )

}
export default IntroContainer;