import {useState, useEffect} from 'react'

function AwardContainer({award}) {

    return (
        <>
            <div className="award-container flex flex-row items-center h-[90px]">
                <div className="img-cont border-box p-[10px] aspect-square z-10 rounded-lg w-[90px]">
                    <img className="rounded-md w-[70px] h-[70px] object-cover" src={`/icons/${award.icon}`} alt="award icon" />
                </div>
                <div className="descr flex ml-[-10px] flex-col pl-[1.5rem] pr-[1rem] justify-center h-[90px]">
                    <h3 className="text-[0.9rem] md:text-[1.1rem]">{award.name}</h3>
                    <p className="italic text-[0.7rem] md:text-sm">{award.outcome}</p>
                </div>
            </div>
        </>
    )
}

export default AwardContainer;