import { AiOutlineInfoCircle } from "react-icons/ai";
import { ChartView } from "../../../../Components/Charts/chartView";
import "./topKPIs.scss";
import { IllustrationShow } from "../../../../Components/IllustrationShow/illustrationShow";
export const TopKPIs = () => {
    return (
        <section className="topKPIs__section">
            <h3>Top KPIs</h3>
            <div className="topKPIs__layout">
                <div className="topKPIs__layout--grow topKPI" >
                    <IllustrationShow />
                </div>
                <div className="topKPI">

                </div>
                <div className="topKPI">
                    <h4 className="topKPI__header">
                        High Risk Targets  <AiOutlineInfoCircle size={15} />
                    </h4>
                    {/* <span className="topKPI__change">
                        <BsFillCaretDownFill />5 (.5%)
                    </span> */}
                    <div className="topKPI__change--chart">
                        <ChartView />
                    </div>
                    <span className="topKPI__timestamp">Last 30 days</span>
                </div>
             
                <div className=" topKPI">
                    <h4 className="topKPI__header">
                        High Risk Targets  <AiOutlineInfoCircle size={15} />
                    </h4>
                    {/* <span className="topKPI__change">
                        <BsFillCaretDownFill />5 (.5%)
                    </span> */}
                    <div className="topKPI__change--chart">
                        <ChartView />
                    </div>
                    <span className="topKPI__timestamp">Last 30 days</span>
                </div>
            </div>
        </section>
    );
};
