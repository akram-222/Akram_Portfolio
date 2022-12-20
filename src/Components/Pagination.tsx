const Pagination = ({
  className,
  isLoad,
  setLoad,
  setRepoConfig,
  repoConfig,
  repos,
}) => {
  return (
    <nav aria-label="Page navigation" className={`${className} mt-8 flex`}>
      current page: {repoConfig.page}
      <ul className="inline-flex -space-x-px w-fit mx-auto ">
        <li>
          <a
            href="#"
            className="px-3 py-2 ml-0 leading-tight text-gray-500 bg-white border border-gray-300 rounded-l-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-[#171717] dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
            onClick={() => {
              setLoad(true);
              setRepoConfig({
                ...repoConfig,
                page: repoConfig.page === 1 ? 1 : repoConfig.page - 1,
              });
            }}
          >
            Previous
          </a>
        </li>

        <li>
          <a
            href="#"
            className="px-3 py-2 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-[#171717] dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
            onClick={() => {
              setLoad(true);
              setRepoConfig({
                ...repoConfig,
                page: 1,
              });
            }}
          >
            1
          </a>
        </li>
        <li>
          <a
            href="#"
            className="px-3 py-2 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-[#171717] dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
            onClick={() => {
              setLoad(true);
              setRepoConfig({
                ...repoConfig,
                page: 2,
              });
            }}
          >
            2
          </a>
        </li>
        <li>
          <a
            href="#"
            aria-current="page"
            className="px-3 py-2 text-blue-600 border border-gray-300 bg-blue-50 hover:bg-blue-100 hover:text-blue-700 dark:border-gray-700 dark:bg-gray-700 dark:text-white"
            onClick={() => {
              setLoad(true);
              setRepoConfig({
                ...repoConfig,
                page: 3,
              });
            }}
          >
            3
          </a>
        </li>
        <li>
          <a
            href="#"
            className="px-3 py-2 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-[#171717] dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
            onClick={() => {
              setLoad(true);
              setRepoConfig({
                ...repoConfig,
                page: 4,
              });
            }}
          >
            4
          </a>
        </li>

        <li>
          <a
            href="#"
            className="px-3 py-2 leading-tight text-gray-500 bg-white border border-gray-300 rounded-r-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-[#171717] dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
            onClick={() => {
              setLoad(true);
              setRepoConfig({
                ...repoConfig,
                page: repoConfig.page === 4 ? 4 : repoConfig.page + 1,
              });
            }}
          >
            Next
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Pagination;
