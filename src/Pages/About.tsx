import { useState, useEffect } from "react";
import FollowersList from "../Components/FollowersList";
import Skills from "../Components/Skills";
import Spinner from "../Components/Spinner";
import UserBioCard from "../Components/userBioCard";
import { __getUserInfo } from "../Utils/github/__getUserInfo";

const About = () => {
  const [userInfo, setUserInfo] = useState<any>({});
  const [isLoad, setLoading] = useState(true);
  useEffect(() => {
    __getUserInfo().then((data) => {
      setUserInfo(data);
      setLoading(false);
    });
  }, []);
  return (
    <>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 my-5 w-2xl container px-2 mx-auto">
        <aside className="">
          <h3 className="border-gray-600/30 border font-bold bg-card p-2 rounded-t-lg mb-1 text-gray-100">
            <span className="text-gray-400/30">#1</span> Personal Card
          </h3>
          <div className="bg-white mb-4 flex-col justify-center dark:bg-[#171717] dark:border-gray-600/30 border shadow rounded-b-lg p-10">
            {isLoad ? (
              <Spinner className={"w-7"} />
            ) : (
              <UserBioCard userInfo={userInfo} />
            )}
          </div>
         <h3 className="border-gray-600/30 border font-bold bg-card p-2 rounded-t-lg mb-1 text-gray-100">
            <span className="text-gray-400/30">#2</span> Followers
          </h3>
          <FollowersList />

          <div className="flex bg-white dark:bg-[#171717] dark:border dark:border-[#353535] shadow mt-6  rounded-lg p-2">
            <img
              src="https://images.unsplash.com/photo-1439130490301-25e322d88054?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=1189&amp;q=80"
              alt="Just a flower"
              className=" w-16  object-cover  h-16 rounded-xl"
            />
            <div className="flex flex-col justify-center w-full px-2 py-1">
              <div className="flex justify-between items-center ">
                <div className="flex flex-col">
                  <h2 className="text-sm font-medium">Massive Dynamic</h2>
                </div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-gray-500 hover:text-blue-400 cursor-pointer"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z"
                  ></path>
                </svg>
              </div>
              <div className="flex pt-2  text-sm text-gray-400">
                <div className="flex items-center mr-auto">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-yellow-500 mr-1"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                  </svg>
                  <p className="font-normal">4.5</p>
                </div>
                <div className="flex items-center font-medium text-yellow-500 ">
                  $1800
                  <span className=" ml-1 text-gray-400 text-sm font-normal">
                    {" "}
                    / wk
                  </span>
                </div>
              </div>
            </div>
          </div>
        </aside>

        <article className="">
          <Skills />

          <div className="text-gray-400 mb-7 mt-6 ">
            <h3 className="border-gray-600/30 border font-bold bg-card p-2 rounded-t-lg mb-1 text-gray-100">
              <span className="text-gray-400/30">#1</span> Personal Card
            </h3>
            <div className="grid grid-cols-6 col-span-2 gap-2">
              <div className=" overflow-hidden col-span-3 max-h-[14rem]">
                <img
                  className="dark:brightness-50 dark:hover:brightness-100 transition cursor-pointer cursor-pointer cursor-pointer cursor-pointer cursor-pointer cursor-pointer cursor-pointer cursor-pointer cursor-pointer cursor-pointer h-full w-full object-cover "
                  src="https://images.unsplash.com/photo-1517487881594-2787fef5ebf7?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=735&amp;q=80"
                  alt=""
                />
              </div>
              <div className=" overflow-hidden col-span-3 max-h-[14rem]">
                <img
                  className="dark:brightness-50 dark:hover:brightness-100 transition cursor-pointer cursor-pointer cursor-pointer cursor-pointer cursor-pointer cursor-pointer cursor-pointer cursor-pointer cursor-pointer cursor-pointer h-full w-full object-cover  "
                  src="https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=1399&amp;q=80"
                  alt=""
                />
              </div>
              <div className=" overflow-hidden  col-span-2 max-h-[10rem]">
                <img
                  className="dark:brightness-50 dark:hover:brightness-100 transition cursor-pointer cursor-pointer cursor-pointer cursor-pointer cursor-pointer cursor-pointer cursor-pointer cursor-pointer cursor-pointer cursor-pointer h-full w-full object-cover "
                  src="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=1470&amp;q=80"
                  alt=""
                />
              </div>
              <div className=" overflow-hidden  col-span-2 max-h-[10rem]">
                <img
                  className="dark:brightness-50 dark:hover:brightness-100 transition cursor-pointer cursor-pointer cursor-pointer cursor-pointer cursor-pointer cursor-pointer cursor-pointer cursor-pointer cursor-pointer cursor-pointer h-full w-full object-cover "
                  src="https://images.unsplash.com/photo-1503602642458-232111445657?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=687&amp;q=80"
                  alt=""
                />
              </div>
              <div className="relative overflow-hidden  col-span-2 max-h-[10rem]">
                <div className="text-white text-xl absolute inset-0  bg-slate-900/80 flex justify-center items-center">
                  + 23
                </div>
                <img
                  className="dark:brightness-50 dark:hover:brightness-100 transition cursor-pointer cursor-pointer cursor-pointer cursor-pointer cursor-pointer cursor-pointer cursor-pointer cursor-pointer cursor-pointer cursor-pointer h-full w-full object-cover "
                  src="https://images.unsplash.com/photo-1560393464-5c69a73c5770?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=765&amp;q=80"
                  alt=""
                />
              </div>
            </div>
          </div>

          {/* </div> */}
        </article>
      </div>
    </>
  );
};

export default About;
