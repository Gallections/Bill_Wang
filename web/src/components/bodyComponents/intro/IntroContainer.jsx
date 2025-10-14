import { useState, useEffect } from 'react'
import "../../.././index.css"
import profile from '../../.././assets/smiley-square.jpg'

function IntroContainer() {
    const phrases = ["Software Developer", "Emerging Technologist"];
    const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0);
    const [currentText, setCurrentText] = useState("");
    const [isDeleting, setIsDeleting] = useState(false);
    const [isPaused, setIsPaused] = useState(false);

    useEffect(() => {
        const currentPhrase = phrases[currentPhraseIndex];
        
        const timer = setTimeout(() => {
            if (isPaused) {
                // Pause after completing typing or deleting
                setIsPaused(false);
                if (isDeleting) {
                    // Move to next phrase after deleting
                    setCurrentPhraseIndex((prev) => (prev + 1) % phrases.length);
                    setIsDeleting(false);
                } else {
                    // Start deleting after pause
                    setIsDeleting(true);
                }
            } else if (isDeleting) {
                // Deleting characters
                if (currentText.length > 0) {
                    setCurrentText(currentText.slice(0, -1));
                } else {
                    // Finished deleting, pause briefly
                    setIsPaused(true);
                }
            } else {
                // Typing characters
                if (currentText.length < currentPhrase.length) {
                    setCurrentText(currentPhrase.slice(0, currentText.length + 1));
                } else {
                    // Finished typing, pause before deleting
                    setIsPaused(true);
                }
            }
        }, isPaused ? 2000 : isDeleting ? 50 : 100); // Pause: 2s, Delete: 50ms, Type: 100ms

        return () => clearTimeout(timer);
    }, [currentText, isDeleting, isPaused, currentPhraseIndex, phrases]);

    return (
        <>
            <div id= "Intro" 
                className = "typewriter w-[100%] sm:w-[90%] z-10 introBox ml-[1rem] mr-[1rem] md:ml-[5rem] md:mr-[5rem] p-[2rem] rounded-[1.1rem] flex flex-row flex-wrap  mt-[1rem] md:mt-[3rem] items-center justify-center"
                style= {{boxShadow: "rgba(250, 250, 250, 0.24) 0px 3px 8px"}}
                >
                <div className = "flex flex-col gap-[0.5vw] w-full md:w-[50%] h-[73.333%] p-[5%] justify-center">
                    
                    <h2 
                        className = "text-[1.6rem] md:text-[7vw] lg:text-[7rem] font-semibold text-[var(--color-secondary-orange)]"
                        style={{fontFamily: "Inspiration", textShadow: "5px 5px 3px rgba(255,255,255,0.1)"}}>Billy Wang</h2>
                   
                    <h3 className = "dynamic-typewriter font-medium lg:text-[3vw] sm:text-[1rem]">
                        {currentText}
                        <span className="typewriter-cursor">|</span>
                    </h3>
                    
                    <p className = "italic text-[0.6rem] md:text-[1.3vw] lg:text-[1.3vw]"
                        style={{textShadow: "2px 2px 3px rgba(255,255,255,0.1)"}}>
                    Welcome to my homepage! I'm a UBC student who loves building things that are visual, functional, and meaningful. I dabble in emerging techologies and software engineering, where I bring logic to form. I'm always experimenting, learning, and aiming to turn ideas into tools that connects us in heart.
                    </p>
                </div>

                <div className = "flex flex-row w-[95%] h-[95%] sm:w-[28vw] sm:h-[28vw] items-center justify-center">
                    <img src = {profile} 
                        style = {{boxShadow: "rgba(250, 250, 250, 0.24) 0px 3px 8px"}}
                        className ="w-[95%] h-[95%] rounded-[0.5rem] border-[var(--color-secondary-orange)] border-3"></img>
                </div>
            </div>
        </>
    )

}
export default IntroContainer;