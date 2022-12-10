import { useState, useEffect } from "react"

export const MousePostion = () => {
    const [coords, setCoords] = useState([0, 0])
    useEffect(() => {
        document.addEventListener('mousemove', (e) => {
            setCoords([e.pageX, e.pageY]);
            console.log(coords)
            return coords
        })
    }, [coords])

}