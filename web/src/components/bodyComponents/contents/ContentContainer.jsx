import {useState, useEffect} from 'react'
import "../../.././index.css"
import ContentPage from './ContentPage';
import {BrowserRouter as Router, Route, Routes, useLocation} from 'react-router-dom';

function ContentContainer() {
    // Adding useLocation makes sure it also scrolls to the sections that uses routers.
    const location = useLocation();

    useEffect(() => {
        const contentElement = document.getElementById("content");
        if (contentElement) {
            contentElement.scrollIntoView({ behavior: "smooth" });
        }
    }, [location.pathname]); // Scroll every time the route changes


    return (
        <>
            <div id= "content" className = "flex fllex-row items-center justify-center w-[90vw] pt-[2vh] pb-[2vh] h-auto mt-[1rem]">
                {/* 65rem p-3 */}
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