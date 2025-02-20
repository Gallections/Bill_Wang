import {useState, useEffect} from 'react'
import "../../../.././index.css"

function Skills() {

    return (
        <>
            <div className = "p-3">
                <h1 className = "text-4xl text-center font-semibold">Skills</h1>
                <p className = "mt-[1rem] text-lg">• <span className = "font-semibold">Languages:</span> Python, Java, JavaScript, TypeScript, C++, C, Kotlin, R, HTML, CSS, MySQL, SQLite</p>
                <p className = "mt-[0.1rem] text-lg">• <span className = "font-semibold">Frameworks/Libraries:</span> React, Vite, Swing, Flask, Django, NodeJS, Axios, Jupyter, tidyverse, pandas, Numpy, OpenCV, supervision</p>
                <p className = "mt-[0.1rem] text-lg">• <span className = "font-semibold">Version Control:</span> Git, GitHub</p>
                <p className = "mt-[0.1rem] text-lg">• <span className = "font-semibold">Databases:</span> PostgreSQL, MongoDB</p>
                <p className = "mt-[0.1rem] text-lg">• <span className = "font-semibold">Testing:</span> mocha, PyTest, JUnit </p>
                <p className = "mt-[0.1rem] text-lg">• <span className = "font-semibold">Tools:</span> yarn, Figma, Android Studio, Postman, Blender, Kaggle, Roboflow, Bash, RestfulAPI</p>
                <p className = "mt-[0.1rem] text-lg">• <span className = "font-semibold">Course Work:</span>  Data Structures and Algorithms, software construction, Operating Systems, Algorithmic Analysis, artificial intelligence</p>
            </div>
        </>
    )
}

export default Skills;