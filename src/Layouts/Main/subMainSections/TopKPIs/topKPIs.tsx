import { AiOutlineInfoCircle } from "react-icons/ai"
import "./topKPIs.scss";
export const TopKPIs = () => {
    return (
        <section className="topKPIs__section">
            <h3>Top KPIs</h3>
            <div className="topKPIs__layout">
                <div className="topKPI">
                    <h4 className="topKPI__header">High Risk Targets universitigated <AiOutlineInfoCircle size={15}/></h4>
                    <span className="topKPI__current">8</span>
                    <span className="topKPI__change">5 (.5%)</span>
                    <div className="topKPI___change--chart">chart</div>
                    <span className="topKPI__timestamp">Last 30 days</span>
                </div>
                <div className="topKPI">
                    <h4 className="topKPI__header">High Risk Targets universitigated <AiOutlineInfoCircle size={15}/></h4>
                    <span className="topKPI__current">8</span>
                    <span className="topKPI__change">5 (.5%)</span>
                    <div className="topKPI___change--chart">chart</div>
                    <span className="topKPI__timestamp">Last 30 days</span>
                </div>
                <div className="topKPIs__layout--grow topKPI">
                    <h4 className="topKPI__header">High Risk Targets universitigated <AiOutlineInfoCircle size={15}/></h4>
                    <span className="topKPI__current">8</span>
                    <span className="topKPI__change">5 (.5%)</span>
                    <div className="topKPI___change--chart">chart</div>
                    <span className="topKPI__timestamp">Last 30 days</span>
                </div>
                <div className="topKPI">
                    <h4 className="topKPI__header">High Risk Targets universitigated <AiOutlineInfoCircle size={15}/></h4>
                    <span className="topKPI__current">8</span>
                    <span className="topKPI__change">5 (.5%)</span>
                    <div className="topKPI___change--chart">chart</div>
                    <span className="topKPI__timestamp">Last 30 days</span>
                </div>
            </div>
        </section>
    )
}

