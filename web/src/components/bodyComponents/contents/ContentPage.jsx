import {useEffect, useState} from 'react';
import "../../.././index.css"
import About from './innerContents/About';
import Experience from './innerContents/Experience';
import Extracurricular from './innerContents/Extracurricular';
import Skills from './innerContents/Skills';
import Awards from './innerContents/Awards';
import TimelineContainer from './innerContents/TimelineContainer';
import experiences from '../../../../data/experiences.json';
import extracurriculars from "../../../../data/extracurriculars.json"


function ContentPage({id}) {
    return (
        <>
            <div className = "flex flex-col w-[90%] pl-[0] pr-[0] pt-[2rem] pb-[2rem] items-center justify-center text-[0.9rem] md:text-[1.55vw] lg:text-[1.35vw]">
                {
                    (id == "Experience") ?
                    <>
                        <h1 className = "text-[1.7rem] lg:text-[3.5vw] md:text-[3.9vw] text-center font-semibold">Experience</h1>
                        {
                            experiences.map((ex)=> (
                                <TimelineContainer tc={ex} />
                            ))
                        }
                    </>:
                    (id == "Extracurricular") ?
                    <>
                        <h1 className = "text-[1.7rem] lg:text-[3.5vw] md:text-[3.9vw] text-center font-semibold">Extracurricular</h1>
                        {
                            extracurriculars.map((ex)=> (
                                <TimelineContainer tc={ex} />
                            ))
                        }
                    </>
                    :
                    (id == "Skills") ?
                    <Skills />  :
                    (id == "Awards") ?
                    <Awards />:
                    <></>
                }

            </div>
        </>
    )
}

export default ContentPage;
