import ProjectItem from "./projectItem";

const Skelton = ({ className, number }) => {
  return (
    <>
  
      {new Array(number).fill("").map((item, index) => (
        <div
          key={index}
          role="status"
          className={`${className} h-32 p-3 max-w-sm rounded border border-gray-200 shadow animate-pulse dark:border-gray-700`}
        >
          {/* <div className="flex justify-center items-center h-40 bg-gray-300 rounded dark:bg-gray-700"> */}
          <div className="my-3 flex items-center space-x-2 w-full">
            <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-32"></div>
            <div className="h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-24"></div>
            <div className="h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-full"></div>

            {/* </div> */}
          </div>
          <div className="my-3 flex items-center space-x-2 w-full">
            <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-32"></div>
            <div className="h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-24"></div>
            <div className="h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-full"></div>
          </div>
          <div className="my-3 flex items-center space-x-2 w-full">
            <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-32"></div>
            <div className="h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-24"></div>
            <div className="h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-full"></div>
          </div>
          <div className="my-3 flex items-center space-x-2 w-full">
            <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-32"></div>
            <div className="h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-24"></div>
            <div className="h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-full"></div>
          </div>
        </div>
      ))}
    </>
  );
};

export default Skelton;
