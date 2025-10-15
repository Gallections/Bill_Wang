import {useState, useEffect} from 'react'

function AwardContainer({award}) {

    return (
        <>
            <div className="h-20 award-container flex border-box rounded-lg bg-orange-400 flex-start">
                <div className="bg-green-200 min-w-20 rounded-lg p-2">
                    <img className="w-15 h-15" src ={`/icons/${award.icon}`} alt="award icon" />
                </div>
                <div className="descr flex p-5 rounded-lg justify-center flex-col gap-1 bg-orange-400">
                    <h3 className="italic font-bold">{award.name}</h3>
                    <p>{award.outcome}</p>
                </div>
            </div>
        </>
    )
}

export default AwardContainer;