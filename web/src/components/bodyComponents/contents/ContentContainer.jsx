import {useState, useEffect} from 'react'
import "../../.././index.css"
import ContentPage from './ContentPage';
import {Route, Routes} from 'react-router-dom';

function ContentContainer() {

    return (
        <>
            <div className = "flex fllex-row items-center justify-center w-[65rem] p-3 h-auto mt-[1rem]">
                <Routes>
                    <Route path= "/" element = {<ContentPage id= "About" />}></Route>
                    <Route path= "/experience" element = {<ContentPage id= "Experience" />}></Route>
                    <Route path= "/extracurricular" element = {<ContentPage id= "Extracurricular" />}></Route>
                    <Route path= "/skills" element = {<ContentPage id= "Skills" />}></Route>
                    <Route path= "/awards" element = {<ContentPage id= "Awards" />}></Route>
                </Routes>
                
            </div>
        </>
    )
}

export default ContentContainer;