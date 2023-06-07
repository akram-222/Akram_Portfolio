import logo from "../assests/a.gif";
const SplashScreen = () => {
  return (
    <>
      <div
        style={{
          zIndex: 23,
          width: "100%",
          height: "100%",
          position: "fixed",
          top: 0,
          left: 0,
          display: "flex",
          alignItems: "center",
          justifyItems: "center",
          background: "#232323",
        }}
      >
        <div
          style={{
            backgroundImage: `url(${logo})`,
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            width: "100%",
            height: "100%",
          }}
        ></div>
      </div>
    </>
  );
};
export default SplashScreen;
