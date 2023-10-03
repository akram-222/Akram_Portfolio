import "./expandableCards.css";
import { useState } from "react";
import cp1 from "../../assests/cp1.png";
import cp2 from "../../assests/cp2.png";
import cp3 from "../../assests/cp3.png";
import cp4 from "../../assests/cp4.png";
import cp5 from "../../assests/cp5.png";
import cp6 from "../../assests/cp6.png";
const ExpandableCards = () => {
  const [hoveredItem, setHoveredItem] = useState<number | null>(null);
  const pens = [
    {
      title: "JS Arrow Animation",
      src1: cp1,
      src2: "https://user-images.githubusercontent.com/69124951/197331108-aff1dcef-1b6a-4c1a-96b7-ea95b00ec482.gif",
      href: "https://codepen.io/Akr-am/pen/gOXKemZ",
    },
    {
      title: "Space CSS Animation",
      src1: cp2,
      src2: "https://user-images.githubusercontent.com/69124951/197331573-90233082-d163-4d5c-bdeb-981ed62acf72.gif",
      href: "https://codepen.io/Akr-am/pen/jOVvJGV",
    },
    {
      title: "Holy Grail Flexbox Layout",
      src1: cp3,
      src2: "https://user-images.githubusercontent.com/69124951/197389695-6c30e4a0-e19a-44e1-b2b6-89f0116455c6.gif",
      href: "https://codepen.io/Akr-am/pen/ZEBYWyX",
    },
    {
      title: "CSS Clock Animation",
      src1: cp4,
      src2: "https://user-images.githubusercontent.com/69124951/197332571-059ad37c-d4a5-4c5f-a214-c6da19f1f8f2.gif",
      href: "https://codepen.io/Akr-am/pen/abBMwBb",
    },
    {
      title: "JS Tooltip Effect",
      src1: cp5,
      src2: "https://user-images.githubusercontent.com/69124951/197332978-1246b10e-0f0f-4dc4-9c3a-e9f3837efac0.gif",
      href: "https://codepen.io/Akr-am/pen/QWKyQZx",
    },
    {
      title: "CSS Shadow Animation",
      src1: cp6,
      src2: "https://user-images.githubusercontent.com/69124951/197283827-24c8ffa8-c3ca-4bf6-ad7e-14449fac5cf7.gif",
      href: "https://codepen.io/Akr-am/pen/JjvedzJ",
    },
  ];
  return (
    <div className="expandableContainer h-auto">
      <div className="gallery">
        {pens &&
          pens.map(({ title, src1, src2, href }, index) => {
            return (
              <a
              key={`${title}_${index}`}
                className="card block"
                onMouseOver={() => setHoveredItem(index)}
                onMouseOut={() => setHoveredItem(null)}
                href={href}
              >
                <img src={hoveredItem === index ? src2 : src1} alt={title} />
                <div className="info">
                  <h4 className="title">{title}</h4>
                </div>
              </a>
            );
          })}
      </div>
    </div>
  );
};

export default ExpandableCards;
