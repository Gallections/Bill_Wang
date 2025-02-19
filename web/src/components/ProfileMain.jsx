import {useState, useEffect} from 'react'
import './topBarComponents/TopBarContainer'
import './bodyComponents/bodyContainer'
import './footerComponents/FooterContainer'
import './sideBarComponents/SideBarContainer'
import TopBarContainer from './topBarComponents/TopBarContainer'
import '.././index.css'

function ProfileMain() {

    return (
        <>
            <div className = 'm-1'> 
                <TopBarContainer />
            </div>
            
        </>
    )
}

export default ProfileMain