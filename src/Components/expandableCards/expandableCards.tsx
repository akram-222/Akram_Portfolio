import "./expandableCards.css";
import cp1 from "../../assests/cp1.png";
import cp2 from "../../assests/cp2.png";
import cp3 from "../../assests/cp3.png";
import cp4 from "../../assests/cp4.png";
import cp5 from "../../assests/cp5.png";
import cp6 from "../../assests/cp6.png";
const ExpandableCards = () => {
  return (
    <div className="expandableContainer h-auto">
      <div className="gallery">
        <div className="card">
          <img
            // src="https://user-images.githubusercontent.com/69124951/197331108-aff1dcef-1b6a-4c1a-96b7-ea95b00ec482.gif"
            src={cp1}
            alt=""
          />
          <div className="info">
            <h4 className="title">JS Arrow Animation</h4>
          </div>
        </div>
        <div className="card">
          <img src={cp2} alt="" />
          <div className="info">
            <h4 className="title">Space CSS Animation</h4>
          </div>
        </div>
        <div className="card">
          <img src={cp3} alt="Holy Grail Flexbox Layout" />
          <div className="info">
            <h4 className="title">Holy Grail Flexbox Layout</h4>
          </div>
        </div>
        <div className="card">
          <img src={cp4} alt="CSS Clock Animation" />
          <div className="info">
            <h4 className="title">CSS Clock Animation</h4>
          </div>
        </div>
        <div className="card">
          <img src={cp5} alt="JS Tooltip Effect" />
          <div className="info">
            <h4 className="title">JS Tooltip Effect</h4>
          </div>
        </div>
        <div className="card">
          <img src={cp6} alt="css shadow animation" />
          <div className="info">
            <h4 className="title">CSS Shadow Animation</h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExpandableCards;
