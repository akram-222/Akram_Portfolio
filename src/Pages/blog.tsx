import { useDevBlogs } from "../Contexts/DEVAPIContext";
import { useState } from "react";
import PageTitle from "../Components/PageTitle";
import PinArticle from "../Components/PinArticle";
import HeroSection from "../Components/HeroSection";
import "./blog.css";
const SubscriptionForm = () => {
  return (
    <div className="w-full dark:bg-[#171717] p-4 mt-4 mb-4">
      <h5 className="mx-auto xs:w-fit sm:w-full mb-4 font-bold relative text-lg text-gray-100 after:content-[' '] after:left-[0px] after:bottom-[-4px] after:w-[80px] after:h-[2px] after:absolute dark:after:bg-gray-400">
        Subscribe
      </h5>
      <p className="mx-auto xs:w-fit sm:w-full text-gray-400 text-xs sm:text-sm">
        Subscribe to our newsletter. We deliver the best health related articles
        to your inbox
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
  );
};

const Blog = ({ onSidebarHide }) => {
  const { devBlogs } = useDevBlogs();
  const pinnedBlogs = devBlogs?.slice(0, 3) ?? [];
  const remainingBlogs = devBlogs?.slice(3) ?? [];
  return (
    <div className="animate-fade-in flex-grow">
      <PageTitle
        onSidebarHide={onSidebarHide}
        title="Blog"
        subtitle={
          <>
            <span className="">Total Articles: </span>
            <span className="text-blue-400 font-bold">
              {devBlogs?.length ?? 0}
            </span>
          </>
        }
        is_premium={true}
        premium_star="DEV.to articles"
        className="h-fit"
      />
      <div className="w-full">
        <HeroSection />
        <div className="flex flex-wrap justify-between px-2 lg:p-0">
          {pinnedBlogs.map(
            ({ title, created_at, user, url, tag_list, social_image }, i) => (
              <PinArticle
                key={`pinned-${i}`}
                className={`w-full xs:w-[50%] md:w-[32%] h-40 xl:h-48 pinArticleWall pinArticleWall-${
                  i + 1
                } shrink-0 mb-2 sm:shrink-1 tilt-in-right-1`}
                title={title}
                createdAt={created_at}
                user={user}
                url={url}
                tagList={tag_list}
                social_image={social_image}
              />
            )
          )}
        </div>
        <div className="block lg:flex lg:space-x-2 px-2 lg:p-0 mt-5">
          <div className="w-full lg:w-2/3">
            <div className="grid-container">
              {remainingBlogs.map(
                (
                  { title, created_at, user, url, tag_list, social_image },
                  i
                ) => (
                  <PinArticle
                    key={`pinned-${i}`}
                    className={`grid-item bg-card border border-gray-600/30 rounded text-white flex justify-center items-center shrink-0 mb-2 sm:shrink-1 tilt-in-right-1`}
                    title={title}
                    createdAt={created_at}
                    user={user}
                    url={url}
                    social_image={social_image}
                    tagList={tag_list}
                  />
                )
              )}
            </div>
          </div>
          <div className="w-full lg:w-1/3 px-3 tilt-in-right-1">
            <SubscriptionForm />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
