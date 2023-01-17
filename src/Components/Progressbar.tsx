const Progressbar = ({ value }) => {
  return (
    <div className={`${value > 0 ? "" : "hidden"} absolute bottom-5`}>
      <span className="text-xs text-white">{Math.round(value)}%</span>
      <div
        className={`w-20 h-1 w-full bg-gray-200 rounded-full dark:bg-gray-700`}
      >
        <div
          className="h-full w-20 bg-red-600 text-xs font-medium text-blue-100 text-center leading-none rounded-full"
          style={{ width: `${value}%` }}
        ></div>
      </div>
    </div>
  );
};

export default Progressbar;
