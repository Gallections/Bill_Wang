import {useState} from 'react'
import '../.././index.css'
import SideBarItem from './SideBarItem';
import { FaLinkedin, FaTwitter } from "react-icons/fa";
import { FaGithub, FaInstagram } from "react-icons/fa";
import { AiFillMail } from "react-icons/ai";

function SideBarContainer() {
    const iconStyles = "w-[90%] h-[90%]"

    return (
        <>
            <div className = "flex flex-col w-12 p-2 ml-9 mt-[5rem] items-center justify-center">
                <SideBarItem icon = {<FaLinkedin className = {iconStyles} />} link="https://www.linkedin.com/in/bill-wxng/" />
                <SideBarItem icon = {<FaGithub className = {iconStyles} />} link="https://github.com/Gallections" />
                <SideBarItem icon = {<AiFillMail className = {iconStyles} />} link="mailto:mosbill067@gmail.com" />
                <SideBarItem icon = {<FaTwitter className = {iconStyles} />}  link="#" />
                <SideBarItem icon = {<FaInstagram className = {iconStyles} />} link="#" />
            </div>
        </>
    )
}

export default SideBarContainer;