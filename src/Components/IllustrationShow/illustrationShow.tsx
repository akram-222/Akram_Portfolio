import "./illustrationShow.scss"
import plane from "../../assests/plane.jpg"
import { useRef } from "react"
export const IllustrationShow = () => {
    const indicatorsContainer = useRef<HTMLDivElement>(null);
    let expandIndicator = (e): void => {
        let indicators = indicatorsContainer.current!.querySelectorAll('.indicator-expand');
        if (e.target.classList.contains('indicate')) {
            [...indicators].map(indicator => indicator.classList.remove('indicator-expand'))
            e.target.classList.add('indicator-expand')
            e.target.innerHTML = e.target.dataset.info
        }
        [...indicators].map(
            indicator=> {
                indicator.classList.remove('indicator-expand')
                // indicator.innerHTML = indicator.dataset.number
            }
        )
        // e.target.innerHTML = e.target.dataset.number
    }

    return (
        <div className="illustrationShow-container" style={{ backgroundImage: `url(${plane})` }}>
            <div onClick={(e) => expandIndicator(e)} className="indicators-container" ref={indicatorsContainer}>
                <span className="indicate indicate-1" data-number='1' data-info="this is tooltip 1">1</span>
                <span className="indicate indicate-2" data-number='2' data-info="this is tooltip 1">2</span>
                <span className="indicate indicate-3" data-number='3' data-info="this is tooltip 1">3</span>
            </div>
        </div>)
}