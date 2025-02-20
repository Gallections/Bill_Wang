import {useState, useEffect} from 'react'
import "../../../.././index.css"

function Experience() {

    return (
        <>
            <div className = "p-3">
                <h1 className = "text-4xl text-center font-semibold">Work Experience</h1>
                <h2 className = "mt-[1rem] text-3xl font-medium">Westminster Toyota CA</h2>
                <h2 className = "text-xl font-base">Software Engineer Intern | Apr, 2024 - Jul, 2024</h2>
                <p className = "mt-[1rem]">• Led the development of a Python-based application that streamlined the vehicle sales process, improving efficiency and reducing time per sale by 5 minutes, benefiting 100+ sales reps. </p>
                <p className = "mt-[0.1rem]">• Designed and contributed to a user-oriented vehicle sales forum, boosting user satisfaction and enhancing engagement, resulting in 500+ active forum users.  </p>
                <p className = "mt-[0.1rem]">• Collaborated with cross-functional teams to optimize system performance, ensuring smooth operations for the sales team and improving overall productivity. </p>
                <p className = "mt-[0.1rem]">• Contributed to code reviews and debugging to maintain high code quality and reliability. </p>
                <p className = "mt-[0.1rem]">• Participate in team sprint planning, standups, and retrospectives.</p>
            </div>
        </>
    )
}

export default Experience;