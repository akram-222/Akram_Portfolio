import { AiOutlineInfoCircle } from "react-icons/ai"
import { BsFillCaretDownFill } from "react-icons/bs"
import { ChartView } from "../../../../Components/Charts/chartView";
import "./topKPIs.scss";
export const TopKPIs = () => {
    return (
        <section className="topKPIs__section">
            <h3>Top KPIs</h3>
            <div className="topKPIs__layout">
                <div className="topKPI">
                    <h4 className="topKPI__header">High Risk Targets universitigated <AiOutlineInfoCircle size={15}/></h4>
                    <span className="topKPI__current">8</span>
                    <span className="topKPI__change"><BsFillCaretDownFill />5 (.5%)</span>
                    <div className="topKPI__change--chart"><ChartView /></div>
                    <span className="topKPI__timestamp">Last 30 days</span>
                </div>

                <div className=" topKPI">
                    <h4 className="topKPI__header">High Risk Targets universitigated <AiOutlineInfoCircle size={15}/></h4>
                    <span className="topKPI__current">8</span>
                    <span className="topKPI__change"><BsFillCaretDownFill />5 (.5%)</span>
                    <div className="topKPI__change--chart"><ChartView /></div>
                    <span className="topKPI__timestamp">Last 30 days</span>
                </div>
            </div>
        </section>
    )
}

