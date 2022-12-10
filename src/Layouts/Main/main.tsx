import React from 'react';
import { CursorCross } from '../../Components/Cursor-cross/cursor-cross';
import { useMouseCoords } from '../../Contexts/MousePostion';
import './main.scss';

function Main() {
    const {coords} = useMouseCoords()
    return (
        <main>
            {/* <span style={{ left: `${coords.x - 40}px` }} className='cursor-cross Y-axis'></span>
            <span style={{ top: `${coords.y - 40}px` }} className='cursor-cross X-axis'></span> */}
        <CursorCross coords={coords} />
        </main>
    );
}

export default Main;