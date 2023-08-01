import "./expandableCards.css";
const ExpandableCards = () => {
  return (
    <div className="expandableContainer h-auto">
      <div className="gallery">
        <div className="card">
          <img
            src="https://user-images.githubusercontent.com/69124951/197331108-aff1dcef-1b6a-4c1a-96b7-ea95b00ec482.gif"
            alt=""
          />
          <div className="info">
            <h4 className="title">JS Arrow Animation</h4>
          </div>
        </div>
        <div className="card">
          <img
            src="https://user-images.githubusercontent.com/69124951/197331573-90233082-d163-4d5c-bdeb-981ed62acf72.gif"
            alt=""
          />
          <div className="info">
            <h4 className="title">Space CSS Animation</h4>
          </div>
        </div>
        <div className="card">
          <img
            src="https://user-images.githubusercontent.com/69124951/197389695-6c30e4a0-e19a-44e1-b2b6-89f0116455c6.gif"
            alt="Holy Grail Flexbox Layout"
          />
          <div className="info">
            <h4 className="title">Holy Grail Flexbox Layout</h4>
          </div>
        </div>
        <div className="card">
          <img
            src="https://user-images.githubusercontent.com/69124951/197332571-059ad37c-d4a5-4c5f-a214-c6da19f1f8f2.gif"
            alt="CSS Clock Animation"
          />
          <div className="info">
            <h4 className="title">CSS Clock Animation</h4>
          </div>
        </div>
        <div className="card">
          <img
            src="https://user-images.githubusercontent.com/69124951/197332978-1246b10e-0f0f-4dc4-9c3a-e9f3837efac0.gif"
            alt="JS Tooltip Effect"
          />
          <div className="info">
            <h4 className="title">JS Tooltip Effect</h4>
          </div>
        </div>
        <div className="card">
          <img
            src="https://user-images.githubusercontent.com/69124951/197283827-24c8ffa8-c3ca-4bf6-ad7e-14449fac5cf7.gif"
            alt="css shadow animation"
          />
          <div className="info">
            <h4 className="title">CSS Shadow Animation</h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExpandableCards;
