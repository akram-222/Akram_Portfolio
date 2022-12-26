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
    <div className={`${className} flex w-full my-5 space-x-2 justify-end`}>
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
      {[1, 2, 3, 4].map((item, index) => {
        return (
          <button
            key={index}
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
  );
};

export default Pagination;
