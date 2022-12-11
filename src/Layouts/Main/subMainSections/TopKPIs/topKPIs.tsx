import "./topKPIs.scss"
export const TopKPIs = () => {
    return (
        <section className="topKPIs__section">
            <h3>Top KPIs</h3>
            <div className="topKPIs__layout">
                <div className="topKPIs__layout--normal">1</div>
                <div className="topKPIs__layout--normal">2</div>
                <div className="topKPIs__layout--grow">3</div>
                <div className="topKPIs__layout--normal">4</div>
                <div className="topKPIs__layout--normal">5</div>
            </div>
        </section>
    )
}

