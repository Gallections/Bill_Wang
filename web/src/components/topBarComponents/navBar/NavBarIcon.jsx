import {useState, useEffect} from 'react';
import "../../.././index.css"
import NavBarItem from './NavBarItem';
import { FaListUl } from "react-icons/fa";

function NavBarIcon({rightMargin}) {

    const navBarIconStyle = "transition-all duration-200 ease-in-out text-2xl cursor-pointer hover:text-[#FE6E00]";

    return (
        <>
        <div className = "p-3 ml-auto">
            <FaListUl className = {navBarIconStyle} style = {{marginRight: rightMargin}}/>
        </div>
        </>
    )

}

export default NavBarIcon;