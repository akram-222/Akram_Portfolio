import './aside.scss';
import { BsFillGearFill, BsFillCameraReelsFill, BsZoomIn } from "react-icons/bs"
// import { MousePostion } from "../../Utils/mousePositions"
import { ImCompass2 } from 'react-icons/im'
import { useMouseCoords } from '../../Contexts/MousePostion';
function Aside() {
    const { coords } = useMouseCoords()
    return (
        <aside>
            <ul>
                <li>
                    <a href='#d' className='link'><ImCompass2 size={20} style={{ transform: `rotate(${(coords.x+coords.y) / 4}deg)` }} /></a>
                </li>
                <li>
                    <a href='#d' className='link link__color--effect today-flights'>{new Date().getDate()}</a>
                </li>

                <li>
                    <a href='#d' className='link link__color--effect'><BsZoomIn /></a>
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