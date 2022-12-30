import {BiChevronRight} from "react-icons/bi"
const HeroSection = () => {
  return (
    <>
      <section className="bg-white dark:bg-[#171717] mb-5">
        <div className=" pb-1 px-4 mx-auto max-w-screen-xl text-center lg:py-8 lg:px-8">
          
          <h1 className="mb-4 text-4xl dark:text-white font-extrabold tracking-tight leading-none md:text-5xl lg:text-6xl">
            We invest in the <span className="font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 ">world’s potential</span> 
          </h1>
          <p className="mb-8 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400">
We concentrate on frontend technology issues across a variety of technologies here at Our Blog.          </p>
          <div className="flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-4">
          <a
            href="#d"
            className=" inline-flex justify-between items-center py-1 px-1 pr-4 mb-7 text-sm text-gray-700 bg-gray-100 rounded-full dark:bg-gray-800 dark:text-white "
            role="alert"
          >
            <span className="text-xs bg-blue-600 rounded-full text-white px-4 py-1.5 mr-3">
              New
            </span>{" "}
            <a href="https://dev.to/ak_ram" className="group flex items-center dark:text-blue-400 dark:hover:underline text-sm font-medium">
              Interested ? See what's new
            <BiChevronRight className={'text-white transition group-hover:translate-x-1'} size={20}/>
            </a>
          </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default HeroSection;
