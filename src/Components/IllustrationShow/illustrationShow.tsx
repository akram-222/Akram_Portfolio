import "./illustrationShow.scss"
import plane from "../../assests/plane.jpg"
export const IllustrationShow = () => {
    return (
        <div className="illustrationShow-container" style={{ backgroundImage: `url(${plane})` }}>
            <div className="indicators-container">
                <span className="indicate indicate-1" data-info="this is tooltip 1">1</span>
                <span className="indicate indicate-2" data-info="this is tooltip 1">2</span>
                <span className="indicate indicate-3" data-info="this is tooltip 1">3</span>
            </div>
        </div>)
}