import React from 'react';
import './aside.scss';
import { BsFillGrid1X2Fill, BsFillGearFill, BsFillCameraReelsFill, BsFillCloudDrizzleFill } from "react-icons/bs"
function Aside() {
    return (
        <aside>
            <ul>
                <li>
                    <a href='#d' className='link'><BsFillGrid1X2Fill /></a>
                </li>
                <li>
                    <a href='#d' className='link'><BsFillCloudDrizzleFill /></a>
                </li>
                <li>
                    <a href='#d' className='link'><BsFillCameraReelsFill /></a>
                </li>
                <li>
                    <a href='#d' className='link'><BsFillGearFill /></a>
                </li>
            </ul>
        </aside>
    );
}

export default Aside;