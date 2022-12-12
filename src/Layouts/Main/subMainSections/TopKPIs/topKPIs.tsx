import { AiOutlineInfoCircle } from "react-icons/ai";
import { BsFillCaretDownFill } from "react-icons/bs";
import { ChartView } from "../../../../Components/Charts/chartView";
import "./topKPIs.scss";
import plane from "../../../../assests/plane.png"
export const TopKPIs = () => {
    return (
        <section className="topKPIs__section">
            <h3>Top KPIs</h3>
            <div className="topKPIs__layout">
                <div className="topKPIs__layout--grow topKPI">
                    <img className="plane" src={plane} alt="plane" />
                        {/* <iframe
                            title="F-35A Lightning II"
                            // frameorder="0"
                            allowFullScreen
                            // mozallowFullScreen="true"
                            // webkitallowfullscreen="true"
                        allow="autoplay
                            fullscreen; xr-spatial-tracking"
  
                            src="https://sketchfab.com/models/a06d6113cfb44a0aa7b8f17106aca9c4/embed?ui_theme=dark"
                        >

                        </iframe>{" "} */}
                        
                   
                </div>
                <div className="topKPI">
                    <h4 className="topKPI__header">
                        High Risk Targets universitigated <AiOutlineInfoCircle size={15} />
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
                        High Risk Targets universitigated <AiOutlineInfoCircle size={15} />
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
