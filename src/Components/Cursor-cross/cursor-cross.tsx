import "./cursor-cross.scss"
export const CursorCross = ({ coords }) => {
    return (
        <div className="cursor-cross">
            <span style={{ left: `${coords.x - 40}px` }} className='cursor-cross Y-axis'></span>
            <span style={{ top: `${coords.y - 40}px` }} className='cursor-cross X-axis'></span>
        </div>
    )
}