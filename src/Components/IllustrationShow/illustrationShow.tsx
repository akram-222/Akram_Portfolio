import "./illustrationShow.scss"
import plane from "../../assests/plane.jpg"
export const IllustrationShow = () => {
    return (
        <div className="illustrationShow-container" style={{ backgroundImage: `url(${plane})` }}>
            <div className="indicators-container">
                <span className="indicate indicate-1" data-info="this is tooltip 1">1</span>
            </div>
        </div>)
}