import {useEffect, useState} from 'react'
import "../.././index.css"
import IntroContainer from './intro/IntroContainer';
import ContentContainer from './contents/ContentContainer';
import ProjectContainer from './projects/ProjectContainer';
import Contact from './contact/Contact';

function BodyContainer() {

    return (
        <>
            <div className = "flex flex-col p-5 mr-5 w-auto min-h-[35rem] items-center justify-center">
                <IntroContainer />
                <ContentContainer />
                <ProjectContainer />
                <Contact />

            </div>
        </>
    );
}

export default BodyContainer;