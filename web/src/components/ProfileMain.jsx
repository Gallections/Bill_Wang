import {useState, useEffect} from 'react'
import './topBarComponents/TopBarContainer'
import './bodyComponents/bodyContainer'
import './footerComponents/FooterContainer'
import './sideBarComponents/SideBarContainer'
import TopBarContainer from './topBarComponents/TopBarContainer'
import '.././index.css'
import SideBarContainer from './sideBarComponents/SideBarContainer'
import BodyContainer from './bodyComponents/bodyContainer'
import FooterContainer from './footerComponents/FooterContainer'
import bgImageDark from '.././assets/background.avif'

function ProfileMain() {

    return (
        <>
            <div className="relative">
                {/* Top Bar (Fixed at the top) */}
                <div className="fixed top-0 left-0 w-full z-20">
                    <TopBarContainer />
                </div>


                {/* Sidebar (Fixed to the left) */}
                <div className="fixed top-20 left-0 h-full w-16 z-20">
                    <SideBarContainer />
                </div>

                {/* Content Section (Scrollable) */}
                <div className="sm:ml-20 mt-20 overflow-auto p-4 flex-grow z-20">
                    {/* Add your content here, block below is just an example! */}
                    {/* <div className = "bg-green-400 w-30 h-30"></div>  */}
                    <BodyContainer />
                </div>

                <div className = "w-full h-auto z-20">
                    <FooterContainer />
                </div>

                
            </div>
        </>
    )
}

export default ProfileMain