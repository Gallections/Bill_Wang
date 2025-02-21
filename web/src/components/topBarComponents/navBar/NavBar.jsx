import {useState} from 'react';
import '../../.././index.css';
import NavBarIcon from './NavBarIcon';
import NavBarItem from './NavBarItem';

function NavBar({ onHover, onOut, mode, rightMargin}) {

    const navBarClassStyle = "navBar cursor-pointer transition-all duration-300 ease-in-out h-15 mr-[2.5rem] flex flex-row p-[0.75rem] ml-auto rounded-[7.5rem] border-[0.2rem] items-center justify-center hover:border-[#FE6E00]"
    const [isActive, setIsActive] = useState(null);

    const handleActiveClick = (item) => {
        setIsActive(item);
    }

    return (
        <>
            <div className = {navBarClassStyle}
                onMouseEnter= {onHover} 
                onMouseLeave={
                    () => {
                        onOut()
                        if (mode) {
                            setIsActive(null);
                        }
                    }
                }>
                {/* Need to insert NavbarItems here */}
                {mode ? 
                <>
                    <NavBarItem title = 'About' isActive = {isActive === "About"} link= "/" onClick = {() => handleActiveClick("About")} />
                    <NavBarItem title = 'Experience' isActive = {isActive === "Experience"} link= "/experience" onClick = {() => handleActiveClick("Experience")}/>
                    <NavBarItem title = 'Extracurricular' isActive = {isActive === "Extracurricular"} link= "/extracurricular" onClick = {() => handleActiveClick("Extracurricular")}/>
                    <NavBarItem title = 'Skills' isActive = {isActive === "Skills"} link= "/skills" onClick = {() => handleActiveClick("Skills")}/>
                    <NavBarItem title = 'Awards' isActive = {isActive === "Awards"} link= "/awards" onClick = {() => handleActiveClick("Awards")}/>
                    <NavBarItem title = 'Projects' isActive = {isActive === "Projects"} link = "#project-section" onClick = {() => handleActiveClick("Projects")}/>
                    <NavBarItem title = 'Contact' isActive = {isActive === "Contact"} link = "#contactBox" onClick = {() => handleActiveClick("Contact")}/>
                    <NavBarIcon rightMargin={rightMargin} />
                </> :
                <NavBarIcon rightMargin={rightMargin} />}
            </div>
        </>
    )
}

export default NavBar;