import {useState, useEffect} from 'react'
import { SiGithub, SiLinkedin, SiX, SiInstagram, SiMailboxdotorg } from "react-icons/si";
import { FaArrowUp } from "react-icons/fa";


function FooterContainer() {
    return (
    <>
    {/* change the height to someting else */}
        <div className = "z-20 footer border-boxing bg-black pt-5 w-full h-auto flex flex-col justify-center">
            <div className = "divider w-full h-[0.15rem]"></div>
            <div className = "w-auto h-auto mt-10 flex ml-5 flex-row items-center">
                <h1 className = "text-xl font-medium">Bill Wang's Portfolio</h1>
                {/* add a logo */}
            </div>
            <div className = "z-20 w-auto h-auto flex flex-row">
                <div >
                    <h1 className = "mt-3 pl-5 text-lg font-medium">Contact</h1>
                    <div className = "mt-2 pl-5 flex flex-row items-center gap-5">
                        <a href= "https://github.com/Gallections" target="_blank" rel="noopener noreferrer"><SiGithub className = "text-xl cursor-pointer" /></a>
                        <a href= "https://www.linkedin.com/in/bill-wxng/" target="_blank" rel="noopener noreferrer"><SiLinkedin className = "text-xl cursor-pointer"/> </a>
                        <a href= "" target="_blank" rel="noopener noreferrer"><SiInstagram className = "text-xl cursor-pointer"/> </a>
                        <a href= "https://github.com/Gallections" target="_blank" rel="noopener noreferrer"><SiX className = "text-xl cursor-pointer"/></a>
                        <a href= "mailto:mosbill067@gmail.com" rel="noopener noreferrer"><SiMailboxdotorg className = "text-xl cursor-pointer"/></a>
                    </div>
                </div>
                <button className="ml-auto mr-10 p-3">
                    <a href= "#Intro">
                    <FaArrowUp className= "text-2xl hover:scale-130"/>
                    </a>
                </button>
            </div>
        
            <div className = "text-sm w-full text-center text-[#FFFFFF]/50 mt-5 bg-[#171717] p-2 bg-">
                Copyright © {new Date().getFullYear()} Gallections Bill Wang. All Rights Reserved.
            </div>
        </div>
    </>
    ); 

}

export default FooterContainer;