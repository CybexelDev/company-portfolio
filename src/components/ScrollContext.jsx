import { useState, useEffect, useContext, createContext, } from "react";

const ScrollContext = createContext();

export const ScrollProvider = ({ children }) => {

    const [scrollY, setScrollY] = useState(0);
    useEffect(() => {
        const handleScroll = () => {
            setScrollY(window.scrollY);
            //console.log("Scroll Y Position:", window.scrollY);
        };

        window.addEventListener("scroll", handleScroll);

        return () => window.removeEventListener("scroll", handleScroll);
    }, []);
    return (
        <ScrollContext.Provider value={{ scrollY }}>
            {children}
        </ScrollContext.Provider>
    );
}

export const useScroll = () => useContext(ScrollContext);