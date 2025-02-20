import {useState, useEffect} from 'react'
import "../../../.././index.css"

function Extracurricular() {

    return (
        <>
            <div className = "pl-5 pr-5 pt-3 pb-3 flex flex-col items-center justify-center gap-5">
                <h1 className = "text-4xl text-center font-semibold">Extracurriculars</h1>
                <div>
                    <h2 className = "mt-[1rem] text-3xl font-medium">BizTech UBC Hackathon</h2>
                    <h2 className = "text-xl font-base">Team Leader | October, 2024</h2>
                    <p className = "mt-[0.8rem]">• Led and developed a mobile Android application that tracks user’s physical activity based on daily step count with gamified experience. </p>
                    <p className = "mt-[0.1rem]">• Designed and implemented core backend solutions in Kotlin OOP, contributing significantly to both the frontend and integration using Android Studio in XML.  </p>
                    <p className = "mt-[0.1rem]">• Worked closely with a team of 3 developers, guiding the development process and ensuring smooth collaboration.</p>
                    <p className = "mt-[0.1rem]">• Enhanced app navigation efficiency and user experience by implementing a user-centric design. </p>
                    <p className = "mt-[0.1rem]">• Led the pitch and earned collective recognition from the judges.</p>
                </div>

                <div>
                    <h2 className = "mt-[1rem] text-3xl font-medium">Etsy</h2>
                    <h2 className = "text-xl font-base">Small Business Owner | May, 2024 - Sep, 2024</h2>
                    <p className = "mt-[0.8rem]">• Founded and managed an Etsy shop, handling product creation, marketing, and customer service. </p>
                    <p className = "mt-[0.1rem]">• Designed and developed custom products using Canva and Krita, ensuring high-quality craftsmanship and customer satisfaction.  </p>
                    <p className = "mt-[0.1rem]">• Utilized SEO and digital marketing strategies leveraging tools such as eRank and Etsy Bee to optimize sales.</p>
                </div>

                <div>
                    <h2 className = "mt-[1rem] text-3xl font-medium">Bilignma</h2>
                    <h2 className = "text-xl font-base">YouTube Content Creator | Aug, 2024 - present</h2>
                    <p className = "mt-[0.8rem]">• Develop educational tutorials, problem-solving walkthroughs, and tech reviews to simplify complex concepts for a diverse audience. </p>
                    <p className = "mt-[0.1rem]">• Script, edit, and produce videos from scratch using software tools such as Capcut, Inshot, oneNote, OBS, and Krita, ensuring high quality visuals and audio. </p>
                    <p className = "mt-[0.1rem]">• Optimize video titles, descriptions, and tags for SEO, increasing organic reach and discoverability on YouTube.</p>
                </div>

            </div>
        </>
    )
}

export default Extracurricular;