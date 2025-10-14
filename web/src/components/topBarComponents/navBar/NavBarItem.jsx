import {useState, useEffect} from 'react'
import '../../.././index.css'
import { Link } from "react-router-dom";

function NavBarItem({title, isActive, onClick, link, isMobile = false}) {

    const baseClasses = "cursor-pointer transition-all duration-300 ease-in-out font-medium text-center relative";
    const desktopClasses = "px-4 py-2 mx-1 rounded-full hover:bg-[var(--color-primary-orange)] hover:bg-opacity-20 hover:scale-105";
    const mobileClasses = "w-full p-4 rounded-xl hover:bg-[var(--color-primary-orange)] hover:bg-opacity-20 text-left";
    
    // Fixed active state styling with proper text color and lower background opacity
    const activeDesktopClasses = "text-white bg-[var(--color-primary-orange)] bg-opacity-90 scale-105 shadow-md font-semibold";
    const activeMobileClasses = "text-white bg-[var(--color-primary-orange)] bg-opacity-90 shadow-md font-semibold";
    
    const combinedClasses = `${baseClasses} ${isMobile ? mobileClasses : desktopClasses} ${
        isActive 
            ? (isMobile ? activeMobileClasses : activeDesktopClasses)
            : ''
    }`;

    const handleClick = (e) => {
        onClick();
        
        // For anchor links, allow default behavior but still call onClick
        if (link.startsWith('#')) {
            // Let the browser handle the hash navigation
            return;
        }
    };

    const renderContent = () => {
        if (isMobile) {
            return <span className="block text-lg font-medium">{title}</span>;
        }
        return title;
    };

    const renderActiveIndicator = () => {
        if (isActive && !isMobile) {
            return (
                <span className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-6 h-0.5 bg-white rounded-full transition-all duration-300"></span>
            );
        }
        return null;
    };

    return (
        <div className={combinedClasses} onClick={handleClick}>
            {(title === "Projects" || title === "Contact") ? (
                <a 
                    href={link} 
                    className="block w-full h-full relative text-inherit no-underline"
                    onClick={(e) => e.stopPropagation()}
                >
                    {renderContent()}
                    {renderActiveIndicator()}
                </a>
            ) : (
                <Link 
                    to={link} 
                    className="block w-full h-full relative text-inherit no-underline"
                    onClick={(e) => e.stopPropagation()}
                >
                    {renderContent()}
                    {renderActiveIndicator()}
                </Link>
            )}
        </div>
    );
}

export default NavBarItem;