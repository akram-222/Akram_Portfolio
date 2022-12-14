import React, { useContext, useState, useEffect, createContext } from "react";

const MOUSECOORDS = createContext({coords:{x:0,y:0}});

export function MouseCoordsContextProvider({ children }) {
    const [coords, setCoords] = useState({ x: 0, y: 0 })
    useEffect(() => {
        let mainContainer = document.getElementById('map-container')! as HTMLElement;
        mainContainer?.addEventListener('mousemove', (e) => {

            let x = (e.pageX - mainContainer.offsetLeft);
            let y = (e.pageY - mainContainer.offsetTop);
            setCoords({ x: x, y: y });
            console.log( e)
            return coords
        })
    }, [coords])
    return (
        <MOUSECOORDS.Provider value={{ coords }}>{children}</MOUSECOORDS.Provider>
    );
}

export function useMouseCoords() {
    const context = useContext(MOUSECOORDS);
    if (context === undefined) {
        throw new Error("Context must be used within a Provider");
    }
    return context;
}