import { useDevBlogs } from "../Contexts/DEVAPIContext";
import PageTitle from "../Components/PageTitle";
import PinArticle from "../Components/PinArticle";
const Blog = ({ onSidebarHide }) => {
  const { devBlogs } = useDevBlogs();
  console.log(devBlogs);
  return (
    <>
      <PageTitle
        onSidebarHide={onSidebarHide}
        title={"Blog"}
        subtitle={
          <>
            <span className="">Total Articles : </span>
            <span className="text-blue-400 font-bold">{devBlogs.length}</span>
          </>
        }
        premium_star={"DEV.to articles"}
        className="mb-10 h-fit"
      />
      <div className="w-full">
        <div className="block md:flex md:space-x-2 px-2 lg:p-0">
          {devBlogs &&
            devBlogs
              ?.slice(2, 5)
              .map(({ title, created_at, user, url, tag_list }, i: number) => (
                <PinArticle
                  key={i}
                  className={`md:w-${
                    i + 1
                  }/3 h-44 pinArticleWall pinArticleWall-${
                    i + 1
                  } tilt-in-right-1 lg:w-1/3 md:h-56 md:[&:nth-child(1)]:hidden lg:[&:nth-child(1)]:block`}
                  title={title}
                  createdAt={created_at}
                  user={user}
                  url={url}
                  tagList={tag_list}
                />
              ))}
        </div>
        <div className="block lg:flex lg:space-x-2 px-2 lg:p-0 mt-10 mb-10">
          <div className="w-full lg:w-2/3">
            {devBlogs &&
              devBlogs?.map(
                ({ title, created_at, user, url, tag_list }, i: number) => (
                  <PinArticle
                    key={i}
                    className={`w-full inspiration__geometry--pattern tilt-in-left-1`}
                    title={title}
                    createdAt={created_at}
                    user={user}
                    url={url}
                    tagList={tag_list}
                  />
                )
              )}
          </div>
          <div className="w-full lg:w-1/3 px-3 tilt-in-right-1">
            <div className="w-full dark:bg-[#171717] p-4 mt-4 mb-4">
              <h5 className="mx-auto xs:w-fit sm:w-full mb-4 font-bold relative text-lg text-gray-100 after:content-[' '] after:left-[0px] after:bottom-[-4px] after:w-[80px] after:h-[2px] after:absolute dark:after:bg-gray-400">
                Subscribe
              </h5>
              <p className="mx-auto xs:w-fit sm:w-full text-gray-400 text-xs sm:text-sm">
                Subscribe to our newsletter. We deliver the best health related
                articles to your inbox
              </p>
              <form className="mt-3 text-xs sm:text-sm">
                <div className="flex-wrap xs:justify-center sm:justify-start items-center flex">
                  <input
                    className="mb-2 border-b placeholder:italic placeholder:text-slate-500 dark:border-[#353535] appearance-none bg-transparent dark:text-gray-100 mr-3 py-1 px-2 leading-tight focus:outline-none"
                    type="text"
                    placeholder="ashrfakrm64@gmail.com"
                    aria-label="Full name"
                  />
                  <div className="controls flex gap-1">
                    <button
                      className="flex-shrink-0 dark:bg-card border-gray-700 border sm:border-2 dark:hover:bg-gray-700 text-white py-1 px-1 sm:px-2 rounded"
                      type="button"
                    >
                      Sign Up
                    </button>
                    <button
                      className="flex-shrink-0 border-transparent border-4 text-rose-400 hover:text-rose-700 py-1 px-2 rounded"
                      type="button"
                    >
                      Cancel
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Blog;
