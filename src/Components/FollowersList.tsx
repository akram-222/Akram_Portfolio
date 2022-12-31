import { useEffect, useState } from "react";
import { __getFollowersList } from "../Utils/github/__getFollowersList";
import Popover from "./Popover";
import Spinner from "./Spinner";

const FollowersList = () => {
  const [followersList, setFollowersList] = useState<any>([]);
  const [isLoad, setLoading] = useState(true);
  useEffect(() => {
    __getFollowersList().then((data) => {
      setFollowersList(data);
      setLoading(false);
      console.log(data);
    });
  }, []);
  return (
    <>
      {isLoad ? (
        <Spinner className="w-7" />
      ) : (
        <div className="bg-white dark:bg-[#171717] border-gray-600/30 border shadow  rounded-b-lg px-6 py-4">
          {/* <b className="block border-b dark:border-[#353535]">
            {followersList?.length} Followers
          </b> */}
          <ul className="flex items-center">
            {followersList &&
              followersList?.map((follower, i: number) => {
                return (
                  <li
                    key={follower.id + i}
                    className="hover:shadow-lg hover:mr-6 hover:transition-all ease-in-out delay-150 group border-4 border-transparent rounded-full transition-all relative flex flex-col -mr-10 items-center"
                  >
                    <img
                      className="w-16 rounded-full"
                      src={follower.avatar_url}
                      alt={follower.login}
                    />

                    <Popover follower={follower} />
                  </li>
                );
              })}
          </ul>
        </div>
      )}
    </>
    // <>
    //   {isLoad ? (
    //     <Spinner classNameName="w-7" />
    //   ) : (
    //     <div classNameName="bg-white dark:bg-[#171717] dark:border dark:border-[#353535] shadow mt-6  rounded-lg p-6">
    //       <h3 classNameName="text-gray-600 text-sm font-semibold mb-4">
    //         {followersList?.length} Followers
    //       </h3>
    //       <ul classNameName="flex items-center justify-center space-x-2">
    //         {/* <!-- Story #1 --> */}
    //         {followersList &&
    //           followersList?.map(
    //             ({ html_url, avatar_url, login, id }, i: number) => {
    //               return (
    //                 <li
    //                   key={id + i}
    //                   classNameName="flex flex-col items-center space-y-2"
    //                 >
    //                   {/* <!-- Ring --> */}
    //                   <a
    //                     classNameName="block bg-white p-1 rounded-full"
    //                     href={html_url}
    //                   >
    //                     <img
    //                       classNameName="w-16 rounded-full"
    //                       src={avatar_url}
    //                       alt={login}
    //                     />
    //                   </a>
    //                   {/* <!-- Username --> */}
    //                   <span classNameName="text-xs text-gray-500">{login}</span>
    //                 </li>
    //               );
    //             }
    //           )}
    //       </ul>
    //     </div>
    //   )}
    // </>
  );
};

export default FollowersList;
