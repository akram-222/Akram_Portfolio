import "./expandableCards.css";
import cp1 from "../../assests/cp1.png";
import cp2 from "../../assests/cp2.png";
import cp3 from "../../assests/cp3.png";
import cp4 from "../../assests/cp4.png";
import cp5 from "../../assests/cp5.png";
import cp6 from "../../assests/cp6.png";
const ExpandableCards = () => {
  const pens = [
    {
      title: "JS Arrow Animation",
      src: cp1,
    },
    {
      title: "Space CSS Animation",
      src: cp2,
    },
    {
      title: "Holy Grail Flexbox Layout",
      src: cp3,
    },
    {
      title: "CSS Clock Animation",
      src: cp4,
    },
    {
      title: "JS Tooltip Effect",
      src: cp5,
    },
    {
      title: "CSS Shadow Animation",
      src: cp6,
    },
  ];
  return (
    <div className="expandableContainer h-auto">
      <div className="gallery">
        {pens &&
          pens.map(({ title, src }) => {
            return (
              <div className="card">
                <img src={src} alt={title} />
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
