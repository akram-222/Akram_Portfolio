import "./illustrationShow.scss"
import plane from "../../assests/plane.jpg"
export const IllustrationShow = () => {
    let expandIndicator = (e):void => {
        let indicatorsContainer = e.target.closest('.indicators-container');
        let indicators = indicatorsContainer.querySelectorAll('.indicator-expand');
        [...indicators].map(indicator => indicator.classList.remove('indicator-expand'))
        e.target.classList.toggle('indicator-expand');
        console.log()
    }
    return (
        <div className="illustrationShow-container" style={{ backgroundImage: `url(${plane})` }}>
            <div onClick={(e) => expandIndicator(e)} className="indicators-container">
                <span  className="indicate indicate-1" data-info="this is tooltip 1">1</span>
                <span className="indicate indicate-2" data-info="this is tooltip 1">2</span>
                <span className="indicate indicate-3" data-info="this is tooltip 1">3</span>
            </div>
        </div>)
}