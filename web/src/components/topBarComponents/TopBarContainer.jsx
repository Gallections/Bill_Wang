import {useState, useEffect} from 'react';
import logo from '../.././assets/logo.png'
import Logo from './Logo'
import '../.././index.css'
import DarkLightMode from './DarkLightMode';
import NavBarIcon from './navBar/NavBarIcon';
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
            <div className = "p-1 flex flex-row items-center ml-5 mt-1">
                <Logo logoPath = {logo} />
                <DarkLightMode isDarkMode={true} />
                <NavBar mode= {hovered} onHover = {handleMouseEnter} onOut = {handleMouseLeave} rightMargin = {"0"}/>
            </div>
        </>
    );
}

export default TopBarContainer;