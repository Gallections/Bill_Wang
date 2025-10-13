import {useState, useEffect} from 'react'

function Gallery({obj}) {
    return (
        <>
            <div className="relative flex flex-col md:flex-row w-[100%] rounded-md border-2 border-[#FF9204]"
                style={{boxShadow: "rgba(248, 248, 248, 0.35) 0px 10px 30px"}}>
                <img className="object-cover aspect-[16/9] h-[200px] w-[100%] md:w-[60%] rounded" src={obj.imageSrc} alt="gallery image" />
                <img className="absolute" />
                <div className="text-start p-[1.2rem]">{obj.text}</div>
            </div>
        </>
    )
}

export default Gallery;