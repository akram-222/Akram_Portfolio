import { useState, useEffect } from "react";
import FollowersList from "../Components/FollowersList";
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
          <div className="bg-white  flex-col justify-center dark:bg-[#171717] dark:border dark:border-[#353535] shadow rounded-lg p-10">
            {isLoad ? (
              <Spinner className={"w-7"} />
            ) : (
              <UserBioCard userInfo={userInfo} />
            )}
          </div>

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

          <div className="dark:bg-[#171717] dark:border dark:border-[#353535] grid mt-5 grid-cols-2  space-x-4 overflow-y-scroll flex justify-center items-center w-full ">
            <div
              className="relative flex flex-col justify-between   bg-white shadow-md rounded-3xl  bg-cover text-gray-800  overflow-hidden cursor-pointer w-full object-cover object-center rounded shadow-md h-64 my-2"
              style={{
                backgroundImage: `url('https://images.unsplash.com/reserve/8T8J12VQxyqCiQFGa2ct_bahamas-atlantis.jpg?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=1050&amp;q=80')`,
              }}
            >
              <div className="absolute bg-gradient-to-t from-green-400 to-blue-400  opacity-50 inset-0 z-0"></div>
              <div className="relative flex flex-row items-end  h-72 w-full ">
                <div className="absolute right-0 top-0 m-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-9 w-9 p-2 text-gray-200 hover:text-blue-400 rounded-full hover:bg-white transition ease-in duration-200 "
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
                <div className="p-6 rounded-lg  flex flex-col w-full z-10 ">
                  <h4 className="mt-1 text-white text-xl font-semibold  leading-tight truncate">
                    Loremipsum..
                  </h4>
                  <div className="flex justify-between items-center ">
                    <div className="flex flex-col">
                      <h2 className="text-sm flex items-center text-gray-300 font-normal">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-4 w-4 mr-1"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                          ></path>
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                          ></path>
                        </svg>
                        Dubai
                      </h2>
                    </div>
                  </div>
                  <div className="flex pt-4  text-sm text-gray-300">
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
                    <div className="flex items-center font-medium text-white ">
                      $1800
                      <span className="text-gray-300 text-sm font-normal">
                        {" "}
                        /wk
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="relative flex flex-col justify-between   bg-white shadow-md  rounded-3xl  bg-cover text-gray-800  overflow-hidden cursor-pointer w-full object-cover object-center rounded shadow-md h-64 my-2"
              style={{
                backgroundImage: `url('https://images.unsplash.com/photo-1571896349842-33c89424de2d?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=800&amp;q=80')`,
              }}
            >
              <div className="absolute bg-gradient-to-t from-blue-500 to-yellow-400  opacity-50 inset-0 z-0"></div>
              <div className="relative flex flex-row items-end  h-72 w-full ">
                <div className="absolute right-0 top-0 m-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-9 w-9 p-2 text-gray-200 hover:text-blue-400 rounded-full hover:bg-white transition ease-in duration-200 "
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
                <div className="p-5 rounded-lg  flex flex-col w-full z-10 ">
                  <h4 className="mt-1 text-white text-xl font-semibold  leading-tight truncate">
                    Loremipsum..
                  </h4>
                  <div className="flex justify-between items-center ">
                    <div className="flex flex-col">
                      <h2 className="text-sm flex items-center text-gray-300 font-normal">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-4 w-4 mr-1"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                          ></path>
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                          ></path>
                        </svg>
                        India
                      </h2>
                    </div>
                  </div>
                  <div className="flex pt-4  text-sm text-gray-300">
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
                    <div className="flex items-center font-medium text-white ">
                      $1800
                      <span className="text-gray-300 text-sm font-normal">
                        {" "}
                        /wk
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </aside>

        <article className="">
          <form className="bg-white dark:bg-[#171717] dark:border dark:border-[#353535] shadow rounded-lg mb-6 p-4">
            <textarea
              name="message"
              placeholder="Type something..."
              className="w-full rounded-lg p-2 text-sm dark:bg-[#171717] dark:border-[#353535] dark:text-gray-400 bg-gray-100 border appearance-none rounded-tg placeholder-gray-400"
            ></textarea>
            <footer className="flex justify-between mt-2">
              <div className="flex gap-2">
                <span className="flex items-center transition ease-out duration-300 hover:bg-blue-500 hover:text-white bg-blue-100 w-8 h-8 px-2 rounded-full text-blue-400 cursor-pointer">
                  <svg
                    viewBox="0 0 24 24"
                    width="24"
                    height="24"
                    stroke="currentColor"
                    strokeWidth="2"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="css-i6dzq1"
                  >
                    <rect
                      x="3"
                      y="3"
                      width="18"
                      height="18"
                      rx="2"
                      ry="2"
                    ></rect>
                    <circle cx="8.5" cy="8.5" r="1.5"></circle>
                    <polyline points="21 15 16 10 5 21"></polyline>
                  </svg>
                </span>
                <span className="flex items-center transition ease-out duration-300 hover:bg-blue-500 hover:text-white bg-blue-100 w-8 h-8 px-2 rounded-full text-blue-400 cursor-pointer">
                  <svg
                    viewBox="0 0 24 24"
                    width="24"
                    height="24"
                    stroke="currentColor"
                    strokeWidth="2"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="css-i6dzq1"
                  >
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                    <circle cx="12" cy="10" r="3"></circle>
                  </svg>
                </span>
                <span className="flex items-center transition ease-out duration-300 hover:bg-blue-500 hover:text-white bg-blue-100 w-8 h-8 px-2 rounded-full text-blue-400 cursor-pointer">
                  <svg
                    viewBox="0 0 24 24"
                    width="24"
                    height="24"
                    stroke="currentColor"
                    strokeWidth="2"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="css-i6dzq1"
                  >
                    <polyline points="4 17 10 11 4 5"></polyline>
                    <line x1="12" y1="19" x2="20" y2="19"></line>
                  </svg>
                </span>
              </div>
              <button className="flex items-center py-2 px-4 rounded-lg text-sm bg-blue-600 text-white shadow-lg">
                Send
                <svg
                  className="ml-1"
                  viewBox="0 0 24 24"
                  width="16"
                  height="16"
                  stroke="currentColor"
                  strokeWidth="2"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <line x1="22" y1="2" x2="11" y2="13"></line>
                  <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
                </svg>
              </button>
            </footer>
          </form>
        
          <div className="border-b border-b-[#353535]"></div>
          <div className="text-gray-400 font-medium text-sm mb-7 mt-6 mx-3 px-2">
            <div className="grid grid-cols-6 col-span-2   gap-2  ">
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
          <div className="text-gray-500 text-sm mb-6 mx-3 px-2">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500
          </div>
          
         
         
          {/* </div> */}
        </article>
      
      </div>
    </>
  );
};

export default About;
