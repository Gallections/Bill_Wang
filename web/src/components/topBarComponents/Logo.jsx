import {useState} from 'react'
import '../.././index.css'

function Logo({logoPath}) {

    return (
        <>
            <div className = "p-3 mr-5">
                <img src= {logoPath} alt = "logo" className = "w-20 h-20 rounded-1g"></img>
            </div>
        </>
    );
}

export default Logo;