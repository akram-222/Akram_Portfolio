import "./illustrationShow.scss"
import plane from "../../assests/plane.jpg"
import { Tooltip } from "../Tooltip/tooltip"
export const IllustrationShow = () => {


    return (
        <div className="illustrationShow-container" style={{ backgroundImage: `url(${plane})` }}>
            <Tooltip />
        </div>
    )
}