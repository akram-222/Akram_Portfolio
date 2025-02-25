import { useState } from "react";
import { BiChevronRight } from "react-icons/bi";
const HeroSection = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
    const mouseX = event.clientX;
    const mouseY = event.clientY;

    setMousePosition({ x: -mouseX / 10, y: -mouseY / 10 });
    console.log(mousePosition);
  };

  return (
    <>
      <section className="relative mb-8 sm:mb-5">
        <div
          onMouseMove={handleMouseMove}
          className="w-full h-full shadow-xl absolute grayscale dark:opacity-20"
          style={{
            backgroundImage: `url("https://www.transparenttextures.com/patterns/food.png")`,
            backgroundPosition: `${mousePosition.y}px ${mousePosition.y}px`,
          }}
        ></div>
        <div className="pb-1 px-4 mx-auto max-w-screen-xl text-center lg:py-8 lg:px-8">
          <h1 className="flex whitespace-nowrap flex-col justify-center gap-x-2 items-center sm:flex-row mb-4 pt-3 dark:text-white font-extrabold tracking-tight leading-none ">
            <span className="text-4xl lg:text-6xl">We invest in the{" "}</span>
            <span className="text-2xl whitespace-nowrap font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 ">
              world’s potential
            </span>
          </h1>
          <p className="text-xs mb-8 sm:text-lg font-normal text-gray-500 lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400">
           At Our Blog, we cover a wide range of frontend technology issues.{" "}
          </p>
          <div className="flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-4">
            <a
              href="#d"
              className="z-10 w-fit m-auto inline-flex justify-between items-center py-1 px-1 pr-4 mb-7 text-xs sm:text-sm text-gray-700 bg-gray-100 rounded-full dark:bg-gray-800 dark:text-white "
              role="alert"
            >
              <span className="bg-blue-600 rounded-full text-white px-4 py-1.5 mr-3">
                New
              </span>{" "}
              <a
                href="https://dev.to/ak_ram"
                className="cursor-pointer group flex items-center dark:text-blue-400 dark:hover:underline font-medium"
              >
               Check out <span className="ml-1 hidden sm:inline-block">{" "}our latest posts.</span>
                <BiChevronRight
                  className={"text-white transition group-hover:translate-x-1"}
                  size={20}
                />
              </a>
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default HeroSection;
