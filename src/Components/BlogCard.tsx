const BlogCard = ({ title, coverImage, createdAt, description, user }) => {
  return (
    <div className="rounded w-full lg:flex mb-10">
      <div
        className="h-48 lg:w-48 flex-none bg-cover text-center overflow-hidden opacity-75"
        style={{
          backgroundImage: `url(${coverImage})`,
        }}
        title="deit is very important"
      ></div>
      <div className="bg-white rounded px-4 flex flex-col justify-between leading-normal">
        <div>
          <div className="mt-3 md:mt-0 text-gray-700 font-bold text-2xl mb-2">
            {title}
          </div>
          <p className="text-gray-700 text-base">{description}</p>
        </div>
        <div className="flex mt-3">
          <img
            alt=""
            src={user.profile_image_90}
            className="h-10 w-10 rounded-full mr-2 object-cover"
          />
          <div>
            <p className="font-semibold text-gray-700 text-sm capitalize">
              {user.name}
            </p>
            <p className="text-gray-600 text-xs">
              {" "}
              {new Date(createdAt).toLocaleDateString("en-US", {
                day: "2-digit",
                month: "short",
                year: "numeric",
              })}{" "}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default BlogCard;
