import {useState, useEffect} from 'react';
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

    // BELOW is an example of using useEffect.
    // useEffect(() => {
    //     if (localStorage.getItem("theme") === "dark") {
    //         document.documentElement.classList.add('dark');
    //     } else {
    //         document.documentElement.classList.remove("dark")
    //     }
    // }, [])

    useEffect(()=> {
        if (darkMode) {
            if (document.body.classList.contains("lightTheme")) {
                document.body.classList.remove("lightTheme");
            }
            if (!document.body.classList.contains("darkTheme")) {
                document.body.classList.add('darkTheme');
            }
        } else {
            if (document.body.classList.contains("darkTheme")) {
                document.body.classList.remove("darkTheme");
            }
            if (!document.body.classList.contains("lightTheme")) {
                document.body.classList.add('lightTheme');
            }
        }
    }, [darkMode])

    return (
        <>
        {/* This is making sure that the dark mode can be switched */}
        {/* !!!TODO: toggle function is not implemented yet! */}
        <div className = "p-3 ml-10">
            {darkMode ? 
            (<FaSun className= {darkModeStyle} onClick = {toggleTheme} />) : 
            (<FaMoon className = {lightModeStyle}  onClick = {toggleTheme} />)
            }
        </div> 
        </>
    )
}

export default DarkLightMode;