import {useState, useEffect} from 'react'

function SideBarItem({icon, link}) {

    return (
        <>
            <div className = "transition duration-200 ease-in-out cursor-pointer w-8 h-8 mt-3 mb-3 flex flex-row items-center justify-center hover:text-[#FE6E00] hover:scale-110">
                <a href = {link} className="inline-block w-[100%] h-[100%]" target = "_blank">
                    {icon}
                </a>
                
            </div>
        </>
    )
}

export default SideBarItem;