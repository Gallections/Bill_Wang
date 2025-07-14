import {useState, useEffect, useRef} from 'react'
import "../../.././index.css"
import ContentPage from './ContentPage';
import {BrowserRouter as Router, Route, Routes, useLocation} from 'react-router-dom';

function ContentContainer() {
    // Adding useLocation makes sure it also scrolls to the sections that uses routers.
    const location = useLocation();
    const hasNavigated = useRef(false);
    const initialPath = useRef(location.pathname);

    useEffect(() => {
        // Only scroll if this is not the initial page load
        // Check if the current path is different from the initial path
        if (location.pathname !== initialPath.current) {
            hasNavigated.current = true;
        }

        // Only scroll if user has navigated (not on initial load)
        if (hasNavigated.current) {
            const contentElement = document.getElementById("content");
            if (contentElement) {
                contentElement.scrollIntoView({ behavior: "smooth" });
            }
        }
    }, [location.pathname]); // Scroll every time the route changes (except initial load)

    return (
        <>
            <div id= "content" className = "flex fllex-row items-center justify-center w-[100%] pt-[2vh] pb-[2vh] h-auto mt-[1rem]">
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