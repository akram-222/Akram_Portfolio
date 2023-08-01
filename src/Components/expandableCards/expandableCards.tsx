import "./expandableCards.css";
import { useState } from "react";
import cp1 from "../../assests/cp1.png";
import cp2 from "../../assests/cp2.png";
import cp3 from "../../assests/cp3.png";
import cp4 from "../../assests/cp4.png";
import cp5 from "../../assests/cp5.png";
import cp6 from "../../assests/cp6.png";
const ExpandableCards = () => {
  const [isHovering, setIsHovering] = useState(false);
  const pens = [
    {
      title: "JS Arrow Animation",
      src1: cp1,
      src2: cp2,
    },
    {
      title: "Space CSS Animation",
      src1: cp2,
      src2: "",
    },
    {
      title: "Holy Grail Flexbox Layout",
      src1: cp3,
      src2: "",
    },
    {
      title: "CSS Clock Animation",
      src1: cp4,
      src2: "",
    },
    {
      title: "JS Tooltip Effect",
      src1: cp5,
      src2: "",
    },
    {
      title: "CSS Shadow Animation",
      src1: cp6,
      src2: "",
    },
  ];
  return (
    <div className="expandableContainer h-auto">
      <div className="gallery">
        {pens &&
          pens.map(({ title, src1, src2 }) => {
            return (
              <div
                className="card"
                onMouseEnter={() => setIsHovering(true)}
                onMouseOut={() => setIsHovering(false)}
              >
                <img src={isHovering ? src2 : src1} alt={title} />
                <div className="info">
                  <h4 className="title">{title}</h4>
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default ExpandableCards;
