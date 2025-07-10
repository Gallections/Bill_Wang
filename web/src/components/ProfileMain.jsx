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

function ProfileMain() {

    return (
        <>
            <div className="relative">
                {/* Top Bar (Fixed at the top) */}
                <div className="fixed top-5 sm:top-10 left-0 w-full z-20">
                    <TopBarContainer />
                </div>

                {/* Sidebar (Fixed to the left) */}
                <div className="fixed top-20 left-0 h-full w-16 z-20">
                    <SideBarContainer />
                </div>

                {/* Content Section (Scrollable) */}
                <div className="mt-20 overflow-auto w-full p-4 z-20">
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