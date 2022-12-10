import React,{useEffect,useState} from 'react';
import './aside.scss';
import { BsFillGrid1X2Fill, BsFillGearFill, BsFillCameraReelsFill, BsFillCloudDrizzleFill } from "react-icons/bs"
// import { MousePostion } from "../../Utils/mousePositions"
import { ImCompass2 } from 'react-icons/im'
function Aside() {
    const [coords, setCoords] = useState([0, 0])
    useEffect(() => {
        document.addEventListener('mousemove', (e) => {
            setCoords([e.pageX, e.pageY]);
            console.log(coords)
            return coords
        })
    }, [coords])
    return (
        <aside>
            <ul>
                <li>
                    <a href='#d' className='link'><ImCompass2 size={20} style={{ transform: `rotate(${(coords[0]+coords[1]) / 4}deg)` }} /></a>
                </li>
                <li>
                    <a href='#d' className='link link__color--effect'>{new Date().getDate()}</a>
                </li>

                <li>
                    <a href='#d' className='link link__color--effect'><BsFillCloudDrizzleFill /></a>
                </li>

                <li>
                    <a href='#d' className='link link__color--effect'><BsFillCameraReelsFill /></a>
                </li>
                <li>
                    <a href='#d' className='link link__color--effect'><BsFillGearFill /></a>
                </li>
            </ul>
        </aside>
    );
}

export default Aside;