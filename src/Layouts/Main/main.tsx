import React from 'react';
import { useMouseCoords } from '../../Contexts/MousePostion';
import './main.scss';

function Main() {
    const {coords} = useMouseCoords()
    return (
        <main>
            {/* <span style={{ top: `${coords[1] - 40}px`, left: `${coords[0] - 40}px` }} className='cursor-cross'></span> */}
            <span style={{ left: `${coords[0] - 40}px` }} className='cursor-cross Y-axis'></span>
            <span style={{ top: `${coords[1] - 40}px` }} className='cursor-cross X-axis'></span>
        </main>
    );
}

export default Main;