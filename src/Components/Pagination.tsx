import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const Pagination = ({
  className,
  isLoad,
  setLoad,
  setRepoConfig,
  repoConfig,
  repos,
}) => {
  return (
    <div className="flex w-full mt-5 space-x-2 justify-end">
      <button
        onClick={() => {
          setLoad(true);
          setRepoConfig({
            ...repoConfig,
            page: repoConfig.page === 1 ? 1 : repoConfig.page - 1,
          });
        }}
        className="inline-flex items-center h-8 w-8 justify-center text-gray-400 rounded-md shadow border border-gray-200 dark:border-gray-800 leading-none"
      >
        <FaChevronLeft size={12} />
      </button>
      {[1, 2, 3, 4].map((item) => {
        return (
          <button
            onClick={() => {
              setLoad(true);
              setRepoConfig({
                ...repoConfig,
                page: item,
              });
            }}
            className="inline-flex items-center h-8 w-8 justify-center text-gray-500 rounded-md shadow border border-gray-200 dark:border-gray-800 leading-none"
          >
            {item}
          </button>
        );
      })}
      <button
        onClick={() => {
          setLoad(true);
          setRepoConfig({
            ...repoConfig,
            page: repoConfig.page === 4 ? 4 : repoConfig.page + 1,
          });
        }}
        className="inline-flex items-center h-8 w-8 justify-center text-gray-400 rounded-md shadow border border-gray-200 dark:border-gray-800 leading-none"
      >
        <FaChevronRight size={12} />
      </button>
    </div>
    // <nav aria-label="Page navigation" className={`${className} mt-8 flex`}>
    //   <ul className="inline-flex -space-x-px w-fit mx-auto ">
    //     <li>
    //       <a
    //         href="#d"
    //         className="px-3 py-2 ml-0 leading-tight text-gray-500 bg-white border border-gray-300 rounded-l-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-[#171717] dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
    //         onClick={() => {
    //           setLoad(true);
    //           setRepoConfig({
    //             ...repoConfig,
    //             page: repoConfig.page === 1 ? 1 : repoConfig.page - 1,
    //           });
    //         }}
    //       >
    //         Previous
    //       </a>
    //     </li>

    //     {[1, 2, 3, 4].map((item, i) => (
    //       <li key={i}>
    //         <a
    //           href="#d"
    //           className="inline-flex items-center h-8 w-8 justify-center text-gray-500 rounded-md shadow border border-gray-200 dark:border-gray-800 leading-none"
    //           onClick={() => {
    //             setLoad(true);
    //             setRepoConfig({
    //               ...repoConfig,
    //               page: item,
    //             });
    //           }}
    //         >
    //           {item}
    //         </a>
    //       </li>
    //     ))}

    //     <li>
    //       <a
    //         href="#d"
    //         className=" px-3 py-2 leading-tight text-gray-500 bg-white border border-gray-300 rounded-r-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-[#171717] dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
    //         onClick={() => {
    //           setLoad(true);
    //           setRepoConfig({
    //             ...repoConfig,
    //             page: repoConfig.page === 4 ? 4 : repoConfig.page + 1,
    //           });
    //         }}
    //       >
    //         Next
    //       </a>
    //     </li>
    //   </ul>
    // </nav>
  );
};

export default Pagination;
