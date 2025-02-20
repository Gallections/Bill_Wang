import {useState, useEffect} from 'react'
import "../../../.././index.css"

function About() {

    return (
        <>
            <div className = "text-center">
                <h1 className = "text-4xl font-semibold">About Me</h1>
                <p className = "mt-[1.5rem]">Hi! My name is Billy, and I love building interesting full stack projects on my own!
                    Previously, I interned at Westminster Toyota, where I built software solutions to improve business operations. </p>
                <p className = "mt-[1rem]">I am currently studying Computer Science and Statistics @ University of British Columbia where I specialize in creating backend solutions and data analysis.</p>
                <p className = "mt-[1rem]">I'm currently expanding my knowledge in cloud technologies in Docker and Kubernetes while also diving deeper into scalable backend systems. </p>
                <p className = "mt-[1rem]">Always open to learning new things and exploring exciting opportunities for 2025!</p>
            </div>
           
        </>
    )
}

export default About;