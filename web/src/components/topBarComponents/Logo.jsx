import {useState} from 'react'
import '../.././index.css'

function Logo({logoPath}) {

    return (
        <>
        <div className = "p-3 mr-5">
            <img src= {logoPath} alt = "logo" className = "w-15 h-15 rounded-1g shadow-md"></img>
        </div>
        </>
    );
}

export default Logo;