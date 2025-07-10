import {useState, useEffect} from 'react'
import "../../../.././index.css"

function Awards() {

    return (
        <>
            <div id="Awards" className = "pl-3 pr-3 pt-3 pb-3">
                <h1 className = "text-[1.7rem] lg:text-[3.5vw] md:text-[3.9vw] text-center font-semibold ">Awards</h1>
                <p className = "mt-[1rem] ">• UBC Dean scholar of science. </p>
                <p className = "mt-[0.1rem] ">• AP Scholar award.  </p>
                <p className = "mt-[0.1rem] ">• Canadian Senior Math Competition BC team champion, gold medalist.</p>
                <p className = "mt-[0.1rem] ">• Euclid Math Competition top top 10% in Canada. </p>
                <p className = "mt-[0.1rem] ">• Hypatia Math Competition top 5% in Canada, BC bronze medalist.</p>
                <br />
                <p className = "mt-[0.1rem] ">• Two times provincial gold medalists in Chinese traditional Painting.</p>
            </div>
        </>
    )
}

export default Awards;