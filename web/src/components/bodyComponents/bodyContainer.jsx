import {useEffect, useState} from 'react'
import "../.././index.css"
import IntroContainer from './intro/IntroContainer';
import ContentContainer from './contents/ContentContainer';
import ProjectContainer from './projects/ProjectContainer';
import Contact from './contact/Contact';

function BodyContainer() {

    return (
        <>
            <div className = "flex flex-col p-5 ml-5 mr-5 w-auto h-[100%] items-center justify-center">
                {/* min-h-[35rem] */}
                <IntroContainer />
                <ContentContainer />
                <ProjectContainer />
                <Contact />
            </div>
        </>
    );
}

export default BodyContainer;