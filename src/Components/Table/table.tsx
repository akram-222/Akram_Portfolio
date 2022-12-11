
import "./table.scss";
import { tabledata } from "./data";
export const FlightSchedulesTable = () => {
    return (
        <section className="wrapper">
            <div className="row title">
                <ul>
                    <li>Flight NO.</li>
                    <li>Status</li>
                    <li>Arr Gate</li>
                    <li>Duration</li>
                    <li>Delayed</li>
                </ul>
            </div>
            {tabledata.map(flight => {
                return (
                    <section className="row-fadeIn-wrapper">
                        <article className="row fadeIn nfl">
                            <ul>
                                <li><a href="#s">{flight.airline_icao}</a><span className="small">(fadeIn)</span></li>
                                <li>{flight.status}</li>
                                <li>{flight.arr_gate}</li>
                                <li>{flight.duration}</li>
                                <li>{flight.delayed}</li>
                            </ul>
                        </article>
                    </section>
                )
            })}
            {/* <section className="row-fadeOut-wrapper">
                <article className="row nfl">
                    <ul>
                        <li><a href="#d">NFL</a><span className="small">(fadeOut)</span></li>
                        <li>$5</li>
                        <li>45</li>
                        <li>100</li>
                        <li>3:00ET</li>
                    </ul>
                    <ul className="more-content">
                        <li>Elaboración de Texto: </li>
                    </ul>
                </article>
            </section> */}
        </section>
    )
}