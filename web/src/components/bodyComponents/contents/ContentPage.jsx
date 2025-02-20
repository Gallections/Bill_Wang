import {useEffect, useState} from 'react';
import "../../.././index.css"
import About from './innerContents/About';
import Experience from './innerContents/Experience';
import Extracurricular from './innerContents/Extracurricular';
import Skills from './innerContents/Skills';
import Awards from './innerContents/Awards';


function ContentPage({id}) {
    

    return (
        <>
            <div className = "flex flex-col w-[90%] p-[2rem] items-center justify-center">
                {(id == 'About') ?
                    <About /> :
                    (id == "Experience") ?
                    <Experience /> :
                    (id == "Extracurricular") ?
                    <Extracurricular /> :
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
