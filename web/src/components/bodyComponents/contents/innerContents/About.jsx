import {useState, useEffect} from 'react'
import "../../../.././index.css"

function About() {

    return (
        <>
            <div className = "text-center">
                <h1 className = "text-[1.7rem] lg:text-[3.5vw] md:text-[3.9vw] font-semibold">About Me</h1>
                {/* conversion xl to vw */}
                <p className = "mt-[2vh]">Hi! My name is Billy, and I love building interesting full stack projects on my own!
                    Previously, I interned at Westminster Toyota, where I built software solutions to improve business operations. </p>
                <p className = "mt-[1.2vh]">I am currently studying Computer Science and Statistics @ University of British Columbia where I specialize in creating backend solutions and data analysis.</p>
                <p className = "mt-[1.2vh]">I'm currently expanding my knowledge in cloud technologies in Docker and Kubernetes while also diving deeper into scalable backend systems. </p>
                <p className = "mt-[1.2vh]">Always open to learning new things and exploring exciting opportunities for 2025!</p>
                {/* 1.5rem ->2vh  1rem ->1.2vw */}
            </div>
           
        </>
    )
}

export default About;