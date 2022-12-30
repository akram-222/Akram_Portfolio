const Popover = ({ follower: { html_url, avatar_url, login, id, type } }) => {
  return (
    <div
      className={`-bottom-[-107%] opacity-0 invisible group-hover:visible group-hover:opacity-100 absolute z-max inline-block w-64 text-sm font-light text-gray-500 transition-opacity duration-300 bg-white border border-gray-200 rounded-lg shadow-sm  dark:text-gray-400 dark:bg-[#171717] dark:border-dashed dark:border-gray-500  after:content-[''] after:border-b after:border-r after:z-10 dark:after:border-gray-400 dark:after:bg-[#171717] after:absolute after:translate-y-1/2 after:-translate-x-1/2 after:rotate-45 after:left-2/4 after:bottom-0 after:h-4 after:w-4 after:bg-red-600`}
    >
      <div className="p-3">
        <div className="flex items-center justify-between mb-2">
          <a href="#d">
            <img
              className="w-10 h-10 rounded-full"
              src={avatar_url}
              alt="Jese Leos"
            />
          </a>
          <div>
            <button
              type="button"
              className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-xs px-3 py-1.5 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
            >
              Follow
            </button>
          </div>
        </div>
        <p className="flex items-start gap-1 text-base font-semibold leading-none text-gray-900 dark:text-white">
          {login.toUpperCase()}{" "}
          <span className="text-xs hover:underline text-yellow-500">
            {" "}
            #{id}
          </span>
        </p>
        <p className="mb-3 text-sm font-normal">
          <a href={html_url} className="hover:underline">
            /{login}
          </a>
        </p>
        <p className="mb-4 text-sm font-light">
          Open-source contributor. Follow{" "}
          <a
            href={html_url}
            className="text-blue-600 dark:text-blue-500 hover:underline"
          >
            flowbite.com
          </a>
          .
        </p>
        <span className="mt-2 font-bold dark:text-gray-300">{type}</span>
      </div>
      <div data-popper-arrow></div>
    </div>
  );
};

export default Popover;
