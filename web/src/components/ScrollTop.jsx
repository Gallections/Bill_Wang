import { useEffect } from "react";

const ScrollToTopOnFirstLoad = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []); // Empty dependency array ensures it runs only once on mount

    return null;
};

export default ScrollToTopOnFirstLoad;
