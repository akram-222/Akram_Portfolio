import {useState,useEffect} from "react"
import logo from "../assests/a.gif";
const SplashScreen = () => {
  const randomQuery = Math.random().toString(36).substring(7); // Generate a random query string -the reason mentioned below-
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
            backgroundImage: `url(${logo}?v=${randomQuery})`,
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




// If you're using a GIF image as a splash screen in your React app and it doesn't work sometimes when you refresh the page, it could be due to browser caching.

// When a browser loads a web page, it caches the resources (like images, stylesheets, and JavaScript files) used by the page to improve performance. When you refresh the page, the browser may not always download the updated resources, but instead use the cached resources. This can result in the GIF not showing up as expected.

// To prevent browser caching, you can add a unique query string to the image URL. This tells the browser that the resource is different from the cached version and forces it to download the updated resource.

// Here's an example:
// javascript

// import React from 'react';
// import splashScreen from './splash-screen.gif';

// const SplashScreen = () => {
//   const randomQuery = Math.random().toString(36).substring(7); // Generate a random query string

//   return (
//     <div>
//       <img src={`${splashScreen}?v=${randomQuery}`} alt="Splash screen" />
//     </div>
//   );
// };

// In this example, a random query string is generated using Math.random() and added to the image URL using the v parameter. This ensures that the image is always loaded from the server and not from the browser cache.

// Note that adding a query string to the image URL can also improve performance, as it allows the browser to cache multiple versions of the same resource with different query strings. This means that if the same resource is used across multiple pages or components, it can be cached and reused, reducing the number of requests to the server.