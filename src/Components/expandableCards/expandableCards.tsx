import "expandableCards.css";
const ExpandableCards = () => {
  return (
    <div className="container">
      <div className="gallery">
        <div className="card">
          <img src="https://source.unsplash.com/4hMET7vYTAQ/" alt="" />
          <div className="info">
            <h4 className="title">Machu Picchu, Peru</h4>
          </div>
        </div>
        <div className="card">
          <img src="https://source.unsplash.com/_8EFj6ISA08/" alt="" />
          <div className="info">
            <h4 className="title">The Great Wall of China</h4>
          </div>
        </div>
        <div className="card">
          <img src="https://source.unsplash.com/qay3lNDSHzc/" alt="" />
          <div className="info">
            <h4 className="title">Sundarbans, Bangladesh</h4>
          </div>
        </div>
        <div className="card">
          <img src="https://source.unsplash.com/eU4pipU_8HA/" alt="" />
          <div className="info">
            <h4 className="title">Taj Mahal, India</h4>
          </div>
        </div>
        <div className="card">
          <img src="https://source.unsplash.com/aqZ3UAjs_M4/" alt="" />
          <div className="info">
            <h4 className="title">Kumano Nachi Taisha Shrine, Japan</h4>
          </div>
        </div>
        <div className="card">
          <img src="https://source.unsplash.com/Mkh6SOuL-Z0/" alt="" />
          <div className="info">
            <h4 className="title">Pyramid of Giza, Egypt</h4>
          </div>
        </div>
        <div className="card">
          <img src="https://source.unsplash.com/fd1cQ3mmBTE/" alt="" />
          <div className="info">
            <h4 className="title">Kauai, Hawaii</h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExpandableCards;
