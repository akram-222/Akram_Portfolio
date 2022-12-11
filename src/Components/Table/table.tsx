
import "./table.scss";
export const FlightSchedulesTable = () => {
    return (
        <section className="wrapper">
            <main className="row title">
                <ul>
                    <li>Nombre</li>
                    <li>Programa Educativo</li>
                    <li><span className="title-hide"></span>Embargo Editorial</li>
                    <li>Folio</li>
                    <li>Constancia</li>
                </ul>
            </main>
            <section className="row-fadeIn-wrapper">
                <article className="row fadeIn nfl">
                    <ul>
                        <li><a href="#s">NFL</a><span className="small">(fadeIn)</span></li>
                        <li>$50</li>
                        <li>12</li>
                        <li>48</li>
                        <li>2:00ET</li>
                    </ul>
                </article>
            </section>
            <section className="row-fadeOut-wrapper">
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
            </section>
            <article className="row nfl">
                <ul>
                    <li><a href="#d">NHL</a></li>
                    <li>$50</li>
                    <li>12</li>
                    <li>48</li>
                    <li>12:00ET</li>
                </ul>
                <ul className="more-content">
                    <li>This 1665-player contest boasts a $300,000.00 prize pool and pays out the top 300 finishing positions. First place wins $100,000.00. Good luck!</li>
                </ul>
            </article>
        </section>
    )
}