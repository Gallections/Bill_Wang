import {useState, useEffect} from 'react'
import "../../../.././index.css"

function Awards() {

    return (
        <>
            <div className = "pl-3 pr-3 pt-3 pb-3">
                <h1 className = "text-4xl text-center font-semibold">Awards</h1>
                <p className = "mt-[1rem] text-lg">• UBC Dean scholar of science </p>
                <p className = "mt-[0.1rem] text-lg">• AP Scholar award  </p>
                <p className = "mt-[0.1rem] text-lg">• Canadian Senior Math Competition BC team champion</p>
                <p className = "mt-[0.1rem] text-lg">• Euclid Math Competition top top 10% in Canada </p>
                <br />
                <p className = "mt-[0.1rem] text-lg">• Two times provincial gold medal in Chinese traditional Painting</p>
            </div>
        </>
    )
}

export default Awards;