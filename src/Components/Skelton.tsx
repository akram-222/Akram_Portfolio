import ProjectItem from "./projectItem";

const Skelton = ({ className, number }) => {
  return (
    <>
      {new Array(number).fill("").map((item, index) => (
        <div
          key={index}
          role="status"
          className={`${className} flex flex-col space-y-2 h-[130.43px] p-3 max-w-sm rounded border border-gray-200 shadow animate-pulse dark:border-gray-700`}
        >
          <div className="my-2 flex items-center space-x-2 w-full ">
            <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-full"></div>
            <div className="flex">
              <span className="bg-gray-200 dark:bg-gray-700 w-8 bg-rose-400 h-8 rounded-full">
              </span>
            </div>
          </div>
          <div className="flex items-center space-x-2 w-full">
            <div className="h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-[45%]"></div>
          </div>
          <div className="flex items-center space-x-2 w-full">
            <div className="h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-2/3"></div>
          </div>
        </div>
      ))}
    </>
  );
};

export default Skelton;
