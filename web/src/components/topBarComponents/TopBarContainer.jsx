import {useState, useEffect} from 'react';
import logo from '../.././assets/logo.png'
import Logo from './Logo'
import '../.././index.css'
import DarkLightMode from './DarkLightMode';
import NavBar from './navBar/NavBar';

function TopBarContainer() {
    
    return (
        <>
            <div className="p-1 flex flex-row items-center justify-between w-full px-5">
                <div className="flex items-center">
                    <Logo logoPath={logo} />
                    <div className="flex items-center justify-center w-20 h-20 ml-4">
                        <DarkLightMode isDarkMode={true} />
                    </div>
                </div>
                <div className="flex items-center">
                    <NavBar />
                </div>
            </div>
        </>
    );
}

export default TopBarContainer;