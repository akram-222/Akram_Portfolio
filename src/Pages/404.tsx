
import { useEffect, useState, useCallback, useMemo } from "react";
import { Link, useNavigate } from "react-router-dom";
import Navigations from "./navigations";

const NotFoundRoute = () => {
  const navigate = useNavigate();
  const [timeLeft, setTimeLeft] = useState(5);


  // useEffect(() => {
  //   if (timeLeft === 0) {
  //     console.log("TIME LEFT IS 0");
  //     setTimeLeft(0);
  //     navigate("/dashboard");
  //     return;
  //   }

  //   const intervalId = setInterval(() => {
  //     setTimeLeft((prevTimeLeft) => prevTimeLeft - 1);
  //   }, 1000);

  //   return () => clearInterval(intervalId);
  // }, [timeLeft, navigate]);

 

  return (
    <div className="animate-fade-in w-full">
      <div className="w-10 transition-all h-10 animate-pulse-zoomout rounded-full bg-white absolute left-5 top-5 bg-gray-800 flex items-center justify-center ">
        <span className="text-white font-bold">{timeLeft}</span>
      </div>
      {/* <!-- drawer component --> */}
      <div className="flex justify-center flex-col min-h-full w-full py-10 px-4">
        <div
          // onClick={handleClick}
          className="text-5xl mb-7 text-center text-blue-600 font-dark font-bold"
        >
          404
        </div>
        <p className="text-2xl text-center md:text-3xl font-light leading-normal">
          Sorry we couldn't find this page.{" "}
        </p>
        <p className="mb-8 text-center">
          But dont worry, you can find plenty of other things on our{" "}
          <Link to="/dashboard" className="hover:underline text-blue-600">
            dashboard
          </Link>
          .
        </p>

        <p className="mb-4 text-center">
          Aslo you can search about what is in your mind from{" "}
          <Link to="/search" className="hover:underline text-blue-600">
            here
          </Link>
        </p>
        <div className="relative inline-flex justify-center items-center w-full">
          <span className="absolute  px-3 font-medium text-gray-900 bg-white  dark:text-white dark:bg-[#171717]">
            OR
          </span>
          <hr className="flex-grow my-8 h-px bg-gray-200 border-0 dark:bg-gray-700" />
        </div>
       
        <div className="flex flex-wrap gap-3 item-center justify-center mt-3">
         <Navigations/>
        </div>
      </div>
    </div>
  );
};

export default NotFoundRoute;
