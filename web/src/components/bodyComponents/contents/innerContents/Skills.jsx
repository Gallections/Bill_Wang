import {useState, useEffect} from 'react'
import "../../../.././index.css"

function Skills() {

    return (
        <>
            <div className = "p-3">
                <h1 className = "text-[1.7rem] lg:text-[3.5vw] md:text-[3.9vw] text-center font-semibold">Skills</h1>
                <p className = "mt-[1rem]">• <span className = "font-semibold">Languages:</span> Python, JavaScript, TypeScript, Java, Kotlin, C, C++, R, HTML, CSS, Bash, Racket, SQL</p>
                <p className = "mt-[0.1rem]">• <span className = "font-semibold">Frameworks/Libraries:</span>pandas, numpy, matplotlib, Jupyter, OpenCV, tidyverse, Flask, Django, pytest, Node.js, Express.js, npm, yarn, Git, React, Tailwind CSS, Vite, webpack, Chrome API, Astro, Three.js, mocha, chai, Junit.</p>
                <p className = "mt-[0.1rem]">• <span className = "font-semibold">Databases:</span> PostgreSQL, MongoDB</p>
                <p className = "mt-[0.1rem]">• <span className = "font-semibold">Testing:</span> mocha, Chai, PyTest, JUnit, Jest </p>
                <p className = "mt-[0.1rem]">• <span className = "font-semibold">Tools:</span> Figma, Android Studio, GitHub, Perforce, Unreal Engine 5, Postman, SQLite, MySQL, Render, Notion, Blender, Trello, Mirro</p>
                <p className = "mt-[0.1rem]">• <span className = "font-semibold">Course Work:</span>  Data Structures and Algorithms, software construction, Operating Systems, Algorithmic Analysis, artificial intelligence</p>
            </div>
        </>
    )
}

export default Skills;