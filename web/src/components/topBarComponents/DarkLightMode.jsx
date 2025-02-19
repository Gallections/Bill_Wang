import {useState} from 'react';
import { FaSun } from "react-icons/fa";
import { FaMoon } from "react-icons/fa";
import "../.././index.css"



function DarkLightMode({isDarkMode}) {

    const [darkMode, setDarkMode] = useState(isDarkMode);

    // This is the toggle function that changes the icon from one to another
    const toggleTheme = () => {
        setDarkMode(!darkMode);
    }

    let darkModeStyle = `transition-all duration-300 ease-in-out text-3xl cursor-pointer hover:text-orange-400 hover:scale-110`;
    let lightModeStyle = `transition-all duration-300 ease-in-out text-3xl cursor-pointer hover:text-orange-400 hover:scale-110`;

    return (
        <>
        {/* This is making sure that the dark mode can be switched */}
        {/* !!!TODO: toggle function is not implemented yet! */}
        <div className = "p-3 ml-15">
            {darkMode ? 
            (<FaSun className= {darkModeStyle} onClick = {toggleTheme} />) : 
            (<FaMoon className = {lightModeStyle}  onClick = {toggleTheme} />)
            }
        </div> 
        </>
    )
}

export default DarkLightMode;