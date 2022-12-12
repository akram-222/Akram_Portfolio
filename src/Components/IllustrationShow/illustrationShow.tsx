import "./illustrationShow.scss"
import plane from "../../assests/plane.jpg"
import { useRef } from "react"
import { BiExpand } from "react-icons/bi"
export const IllustrationShow = () => {
    const indicatorsContainer = useRef<HTMLDivElement>(null);
    let expandIndicator = (e): void => {
        let indicators = indicatorsContainer.current!.querySelectorAll('.indicator-expand');
        if (e.target.classList.contains('indicate')) {
            if (e.target.classList.contains('indicator-expand')) return;
            [...indicators].map(indicator => indicator.classList.remove('indicator-expand'))
            e.target.classList.add('indicator-expand')
            e.target.innerHTML = `
            <h5>${e.target.dataset.info}</h5>
            <a class="tooltip-link" href="https://en.wikipedia.org/wiki/Tail_rotor">More Info</a>
            `
            
        }
        [...indicators].map(
            (indicator) => {
                indicator.classList.remove('indicator-expand')
                // indicator.innerHTML = indicator.getAttribute('data-number')!
                indicator.innerHTML = indicator.getAttribute('data-number')!
                return undefined
            }
        )
    }

    return (
        <div className="illustrationShow-container" style={{ backgroundImage: `url(${plane})` }}>
            <div onClick={(e) => expandIndicator(e)} className="indicators-container" ref={indicatorsContainer}>
                <span className="indicate indicate-1" data-number='1' data-info="Helicopter Tail Rotor">
                    1
                </span>
                <span className="indicate indicate-2" data-number='2' data-info="this is tooltip 1">2</span>
                <span className="indicate indicate-3" data-number='3' data-info="this is tooltip 1">3</span>
            </div>
        </div>)
}