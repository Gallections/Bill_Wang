import {useState, useEffect} from 'react';
import logo from '../.././assets/logo.png'
import Logo from './Logo'
import '../.././index.css'
import DarkLightMode from './DarkLightMode';
import NavBar from './navBar/NavBar';

function TopBarContainer() {

    const [hovered, setIsHovered] = useState(false);

    const handleMouseEnter= () => {
        if (!hovered) {
            setIsHovered(true);
        };
    }

    const handleMouseLeave= () => {
        setIsHovered(!hovered)
    }
    
    return (
        <>
            <div className = "p-1 flex flex-row items-start justify-center ml-5 mt-1">
                <Logo logoPath = {logo} />
                <div className="flex items-center justify-center w-20 h-20">
                    <DarkLightMode isDarkMode={true} />
                </div>
                <NavBar className="" mode= {hovered} onHover = {handleMouseEnter} onOut = {handleMouseLeave} rightMargin = {"0"}/>
            </div>
        </>
    );
}

export default TopBarContainer;