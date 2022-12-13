import "./tooltip.scss"
export const Tooltip = () => {



    return (
        <div className="item-hints">
            <div className="hint hint-1" data-position="4">
                <span className="hint-radius"></span>
                <span className="hint-dot"></span>
                <div className="hint-content do--split-children">
                    <p>The tail rotor is a smaller rotor mounted vertically or near-vertically at the tail of a traditional single-rotor helicopter</p>
                </div>
            </div>
            <div className="hint  hint-2" data-position="4">
                <span className="hint-radius"></span>
                <span className="hint-dot"></span>
                <div className="hint-content do--split-children">
                    <p>The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.</p>
                </div>
            </div>
            <div className="hint  hint-3" data-position="4">
                <span className="hint-radius"></span>
                <span className="hint-dot"></span>
                <div className="hint-content do--split-children">
                    <p>The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.</p>
                </div>
            </div>
        </div>


    )
}