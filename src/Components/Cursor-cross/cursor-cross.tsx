
import { useMouseCoords } from "../../Contexts/MousePostion"
import "./cursor-cross.scss"

export const CursorCross = () => {
    const { coords } = useMouseCoords()
    // console.log(coords.x) 
    return (
        <div className="cursor-cross">
            <span style={{ left: `${coords.x}px` }} className='cursor-cross Y-axis'></span>
            <span style={{ top: `${coords.y}px` }} className='cursor-cross X-axis'></span>
        </div>
    )
}