import { AiOutlineInfoCircle } from "react-icons/ai"
import "./topKPIs.scss"
export const TopKPIs = () => {
    return (
        <section className="topKPIs__section">
            <h3>Top KPIs</h3>
            <div className="topKPIs__layout">
                <div>
                    <h4>High Risk Targets universitigated <AiOutlineInfoCircle/>></h4>
                    <span>8</span>
                    <span className="change">5 (.5%)</span>
                    <div className="chart"></div>
                    <span className="time">Last 30 days</span>
                </div>
                <div>
                    <h4>High Risk Targets universitigated <AiOutlineInfoCircle/></h4>
                    <span>8</span>
                    <span className="change">5 (.5%)</span>
                    <div className="chart"></div>
                    <span className="time">Last 30 days</span>
                </div>
                <div className="topKPIs__layout--grow">
                    <h4>High Risk Targets universitigated <AiOutlineInfoCircle/></h4>
                    <span>8</span>
                    <span className="change">5 (.5%)</span>
                    <div className="chart"></div>
                    <span className="time">Last 30 days</span>
                </div>
                <div>
                    <h4>High Risk Targets universitigated <AiOutlineInfoCircle/></h4>
                    <span>8</span>
                    <span className="change">5 (.5%)</span>
                    <div className="chart"></div>
                    <span className="time">Last 30 days</span>
                </div>
            </div>
        </section>
    )
}

