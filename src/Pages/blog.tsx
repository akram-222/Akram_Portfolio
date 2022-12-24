//     <div classNameName="flex flex-wrap gap-2">
//       <PageTitle  onSidebarHide={onSidebarHide}
//   title={"Blog"}
//   subtitle={""}
//   premium_star={"DEV.to articles"}
//   classNameName="mb-10 h-fit"/>
//   {devBlogs && devBlogs?.map(({title},i)=>{
//       return(<div key={i} classNameName="w-[32%] dark:bg-card h-[100px] blog-item">
//           <h3>{title}</h3>
//       </div>

import { useDevBlogs } from "../Contexts/DEVAPIContext";
import PageTitle from "../Components/PageTitle";
import BlogCard from "../Components/BlogCard";
import BlogTopicItem from "../Components/BlogTopicItem";
import PinArticle from "../Components/PinArticle";
const Blog = ({ onSidebarHide }) => {
  const { devBlogs } = useDevBlogs();
  console.log(devBlogs);
  return (
    <>
      <PageTitle
        onSidebarHide={onSidebarHide}
        title={"Blog"}
        subtitle={""}
        premium_star={"DEV.to articles"}
        className="mb-10 h-fit"
      />
      <div className="w-full">
        <div className="block md:flex md:space-x-2 px-2 lg:p-0">
          {devBlogs &&
            devBlogs
              ?.slice(2, 5)
              .map(({ title, created_at, user }, i: number) => (
                <PinArticle
                  key={i}
                  className={`md:w-${
                    i + 1
                  }/3 lg:w-1/3 xs:[&:nth-child(1)]:hidden lg:[&:nth-child(1)]:block`}
                  title={title}
                  createdAt={created_at}
                  user={user}
                />
              ))}
        </div>
        <div className="block lg:flex lg:space-x-2 px-2 lg:p-0 mt-10 mb-10">
          <div className="w-full lg:w-2/3">
            {devBlogs &&
              devBlogs?.map(
                (
                  { title, cover_image, created_at, description, user },
                  i: number
                ) => (
                  <BlogCard
                    key={i}
                    title={title}
                    coverImage={cover_image}
                    createdAt={created_at}
                    description={description}
                    user={user}
                  />
                )
              )}
          </div>

          <div className="w-full lg:w-1/3 px-3">
            <div className="mb-4">
              <h5 className="font-bold text-lg uppercase text-gray-700 px-1 mb-2">
                Popular Topics
              </h5>
              <ul>
                <BlogTopicItem
                  topic={"SCSS"}
                  numberOfArticles={devBlogs?.length}
                />
              </ul>
            </div>
            {/* <div className="p-1 mt-4 mb-4">
            <h5 className="font-bold text-lg uppercase text-gray-700 mb-2">
              {" "}
              Subscribe{" "}
            </h5>
            <p className="text-gray-600">
              Subscribe to our newsletter. We deliver the best health related
              articles to your inbox
            </p>
            <input
              placeholder="your email address"
              className="text-gray-700 bg-gray-100 rounded-t hover:outline-none p-2 w-full mt-4 border"
            />
            <button className="px-4 py-2 bg-indigo-600 text-gray-200 rounded-b w-full capitalize tracking-wide">
              Subscribe
            </button>
          </div> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default Blog;
