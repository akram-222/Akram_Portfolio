const PinArticle = ({
  className,
  title,
  createdAt,
  user,
  url,
  tagList,
  social_image,
  index,
}) => {
  return (
    <a
      className={`${className} dark:bg-card border border-gray-600/30 rounded text-white overflow-hidden group min-h-[100px] relative inline-block`}
   
      href={url}
    >
      <div
        style={{
          backgroundImage: `url(https://${social_image.split("/https://")[1]})`,
          backgroundSize: "contain",
          backgroundAttachment: "fixed",
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center'
        }}
        className={`text-gray-400 text-5xl font-bold flex items-center justify-center bg-gradient-to-tr from-[#101010] w-full h-full z-10 transition duration-200`}
      >
      
      </div>
      <div className="p-4 absolute transition ease-in opacity-90 duration-200 translate-y-full group-hover:translate-y-0 bottom-0 left-0 w-full bg-gray-700 dark:bg-card z-20 flex flex-col justify-end">
        <h2 className="overflow-hidden whitespace-nowrap overflow-ellipsis font-semibold text-sm md:text-lg text-gray-100 leading-tight w-[90%]">
          {title}
        </h2>
        <div className="flex mt-3">
          <img
            alt=""
            src={user.profile_image_90}
            className="w-7 h-7 rounded-full mr-2 object-cover"
          />
          <div className="text-xs">
            <p className="font-semibold text-gray-200">{user.name}</p>
            <p className="font-semibold text-gray-400">
              {" "}
              {new Date(createdAt).toLocaleDateString("en-US", {
                day: "2-digit",
                month: "short",
                year: "numeric",
              })}{" "}
            </p>
          </div>
          <span className="text-xs self-center justify-self-center px-2 py-1 font-bold dark:bg-[#161b22] dark:text-white dark:border-[#353535] border rounded ml-auto">
            {tagList[0]}
          </span>
        </div>
      </div>
    </a>
  );
};
export default PinArticle;
