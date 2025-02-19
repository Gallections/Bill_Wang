import {useState} from 'react'
import '../../.././index.css'

function NavBarItem({title, isActive, onClick}) {

    return (
        // need to change the color from black to white later on
        <>
            <div className = {`cursor-pointer transition-all duration-300 ease-in-out font-medium text-base ml-3 mr-3 ${isActive ? 'text-orange-400 scale-110' : 'hover:text-orange-400 hover:scale-110'}`}
                onClick = {onClick}>
                {title}
            </div>
        </>
    );
}

export default NavBarItem;