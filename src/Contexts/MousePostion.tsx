import React, { useContext, useState, useEffect, createContext } from "react";

const MOUSECOORDS = createContext({coords:[0,0]});

export function MouseCoordsContextProvider({ children }) {
    const [coords, setCoords] = useState([0, 0])
    useEffect(() => {
        document.addEventListener('mousemove', (e) => {
            setCoords([e.pageX, e.pageY]);
            // console.log(coords)
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