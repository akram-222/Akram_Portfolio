const PinArticle = ({i,
            title
                    ,coverImage
                    ,createdAt
                    ,description
                    ,user}) => {
  return (
    <a
      className="mb-4 md:mb-0 w-full md:w-2/3 relative rounded inline-block"
      style={{ height: "24em" }}
      href="./blog.html"
    >
      <div
        className="absolute left-0 bottom-0 w-full h-full z-10"
        style={{
          backgroundImage: "linear-gradient(180deg,transparent,rgba(0,0,0,.7))",
        }}
      ></div>
      <img
        alt=""
        src={coverImage}
        className="absolute left-0 top-0 w-full h-full rounded z-0 object-cover"
      />
      <div className="p-4 absolute bottom-0 left-0 z-20">
        <span className="px-4 py-1 bg-black text-gray-200 inline-flex items-center justify-center mb-2">
          Nutrition
        </span>
        <h2 className="text-4xl font-semibold text-gray-100 leading-tight">
          {title}
        </h2>
        <div className="flex mt-3">
          <img
            alt=""
        src={user.profile_image_90}
            className="h-10 w-10 rounded-full mr-2 object-cover"
          />
          <div>
            <p className="font-semibold text-gray-200 text-sm">
              {user.name}
            </p>
            <p className="font-semibold text-gray-400 text-xs"> {new Date(createdAt).toLocaleDateString("en-US", {
                day: "2-digit",
                month: "short",
                year: "numeric",
              })} </p>
          </div>
        </div>
      </div>
    </a>
  );
};
export default PinArticle;
