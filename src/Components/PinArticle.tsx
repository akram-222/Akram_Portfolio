const PinArticle = ({ className, title, createdAt, user }) => {
  return (
    <a
      className={`${className} rounded-xl h-32 mb-4 md:mb-0 w-full relative inline-block`}
      href="#d"
    >
      <div
        className="rounded-xl bg-gradient-to-tr from-[#101010] absolute left-0 bottom-0 w-full h-full z-10"
        style={{}}
      ></div>
      <div className="p-4 absolute bottom-0 left-0 w-full z-20">
        <h2 className=" xs:text-[3.5vw] md:text-[2.6vw] lg:text-[1.5vw] font-semibold text-gray-100 leading-tight">
          {title}
        </h2>
        <div className="flex mt-3">
          <img
            alt=""
            src={user.profile_image_90}
            className="w-9 rounded-full mr-2 object-cover"
          />
          <div>
            <p className="font-semibold text-gray-200 text-sm">{user.name}</p>
            <p className="font-semibold text-gray-400 text-xs">
              {" "}
              {new Date(createdAt).toLocaleDateString("en-US", {
                day: "2-digit",
                month: "short",
                year: "numeric",
              })}{" "}
            </p>
          </div>
          <span className="self-center justify-self-center px-4 py-1 font-bold text-sm dark:bg-[#161b22] dark:text-white dark:border-[#353535] border rounded ml-auto">
            Tech
          </span>
        </div>
      </div>
    </a>
  );
};
export default PinArticle;
