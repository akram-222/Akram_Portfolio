import Badge from "./Badge";

const PinArticle = ({ className, title, coverImage, createdAt, user }) => {
  return (
    <a
      className={`${className} inspiration__geometry--pattern h-60 mb-4 md:mb-0 w-full relative inline-block`}
      href="#d"
    >
      <div
        className="bg-gradient-to-l from-[#101010] absolute left-0 bottom-0 w-full h-full z-10"
        style={{
        }}
      ></div>
      {/* <img
        alt=""
        src={coverImage}
        className="absolute left-0 top-0  h-full z-0 object-cover"
      /> */}
      <div className="p-4 absolute bottom-0 left-0 z-20">
        <span className="px-4 py-1 bg-black text-gray-200 inline-flex items-center justify-center mb-2">
          Tech
        </span>
        <h2 className=" xs:text-[3.5vw] md:text-[2.6vw] lg:text-[1.5vw] font-semibold text-gray-100 leading-tight">
          {title}
        </h2>
        <div className="flex mt-3">
          <img
            alt=""
            src={user.profile_image_90}
            className="h-10 w-10 rounded-full mr-2 object-cover"
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
        </div>
      </div>
    </a>
  );
};
export default PinArticle;
