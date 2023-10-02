import { useDevBlogs } from "../Contexts/DEVAPIContext";
import { useEffect, useState } from "react";
import { BsStars } from 'react-icons/bs';
import PageTitle from "../Components/PageTitle";
import PinArticle from "../Components/PinArticle";
import HeroSection from "../Components/HeroSection";
import "./blog.css";


const Blog = () => {
  const { devBlogs } = useDevBlogs();
  const pinnedBlogs = devBlogs?.slice(0, 3) ?? [];
  const remainingBlogs = devBlogs?.slice(5) ?? [];
  const [tagList, setTagList] = useState<string[]>([]);
  const [filteredTag, setFilteredTag] = useState<string>('');

  useEffect(() => {
    const updatedTagList = remainingBlogs.reduce(
      (tags, { tag_list }) => [...tags, ...tag_list],
      tagList
    );
    const uniqueTagList = [...new Set(updatedTagList)];

    setTagList(uniqueTagList);
  }, [remainingBlogs, tagList]);

  const handleTagButtonClick = (tag: string) => {
    setFilteredTag(tag);
  };

  const handleAllButtonClick = () => {
    setFilteredTag('');
  };
  const filterRes = devBlogs && devBlogs?.filter(({ tag_list }) => tag_list.includes(filteredTag) || filteredTag === '');
  return (
    <div className="animate-fade-in flex-grow">
      <PageTitle
        title={<><BsStars className="text-premium-yellow" size="30" /> Blog</>}
        subtitle={
          <>
            <span className="font-bold text-xs sm:text-sm">Total Articles: </span>
            <span className="text-blue-400 font-bold">
              {devBlogs?.length ?? 0}
            </span>
          </>
        }
        is_premium={false}
        premium_star=""
        className="h-fit"
      />

      <div className="w-full">
        <HeroSection />

        <div className="flex items-center justify-center py-4 md:py-8 flex-wrap gap-4">
          <button
            type="button"
            className={`text-base py-2 px-4 rounded dark:hover:text-white dark:bg-card border-gray-600/30 ${filteredTag === '' ? 'text-white' : ''}`}
            onClick={handleAllButtonClick}
          >
            All Topics
            <span className={`${filteredTag ===  '' ?"" : 'hidden'} ml-2 text-sm text-yellow-400 underline underline-offset-4`}>{filterRes.length}</span>

          </button>
          {tagList?.map(tag =>
            <button
              key={tag}
              type="button"
              className={`text-base py-2 px-4 rounded dark:hover:text-white dark:bg-card border-gray-600/30 ${filteredTag === tag ? 'text-white' : ''}`}
              onClick={() => handleTagButtonClick(tag)}
            >
              {tag.charAt(0).toUpperCase() + tag.slice(1)}
              <span className={`${filteredTag === tag ? '' : 'hidden'} ml-2 text-sm text-yellow-400 underline underline-offset-4`}>{filterRes.length}</span>
            </button>
          )}
        </div>
        <div className="block lg:flex lg:space-x-2 px-2 lg:p-0 mt-5">
          <div className="flex items-center justify-center gap-4 h-[600px] overflow-auto flex-wrap w-full">
            {filterRes.map(({ id, title, created_at, user, url, tag_list, social_image, i }) => (
              <PinArticle
                key={`pinned-${i}`}
                className={`div${i + 1} flex w-full sm:w-[330px] h-[250px] justify-center items-center shrink-0 mb-2 sm:shrink-1 slide-bottom`}
                title={title}
                createdAt={created_at}
                user={user}
                url={url}
                social_image={social_image}
                tagList={tag_list}
                index={i + 4}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;