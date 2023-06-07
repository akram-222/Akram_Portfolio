const SplashScreen = () => {
  return (
    <>
    <div style={{
         
          zIndex: 23,
          width: "100%",
          height: "100%",
          position: "fixed",
          top: 0,
          left: 0,
          display: 'flex',
          alignItems: 'center',
          justifyItems: 'center'
        }}
    }}>
      <div
        style={{
          backgroundImage: `url(
            "https://3.bp.blogspot.com/-MhzzFnYwhHI/XIB1bSRwRMI/AAAAAAAAKts/QGTDomEywCAG9f8Y8xvN1es7u28ye5E2QCLcBGAs/s1600/5a6eb8fd904e30566fdffa448d7c8e52.gif"
          )`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          
        }}
      ></div>
      </div>
    </>
  );
};
export default SplashScreen;
