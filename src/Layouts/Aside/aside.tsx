import React from 'react';
import './aside.scss';
import { BsFillGrid1X2Fill, BsFillGearFill, BsFillCameraReelsFill, BsFillCloudDrizzleFill } from "react-icons/bs"
function Aside() {
    return (
        <aside>
            <ul>
                <li><BsFillGrid1X2Fill /></li>
                <li><BsFillCloudDrizzleFill /></li>
                <li><BsFillCameraReelsFill /></li>
                <li><BsFillGearFill /></li>                
            </ul>
        </aside>
    );
}

export default Aside;