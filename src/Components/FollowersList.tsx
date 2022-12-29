import { useEffect, useState } from "react";
import { __getFollowersList } from "../Utils/github/__getFollowersList";
import Spinner from "./Spinner";

const FollowersList = () => {
  const [followersList, setFollowersList] = useState<any>([]);
  const [isLoad, setLoading] = useState(true);

  useEffect(() => {
    __getFollowersList().then((data) => {
      setFollowersList(data);
      setLoading(false);
    });
  }, []);
  return (
    <>
      {isLoad ? (
        <Spinner className="w-7" />
      ) : (
        <div className="bg-white dark:bg-[#171717] dark:border dark:border-[#353535] shadow mt-6  rounded-lg p-6">
          <h3 className="text-gray-600 text-sm font-semibold mb-4">
            Following
          </h3>
          <ul className="flex items-center justify-center space-x-2">
            {/* <!-- Story #1 --> */}
            {followersList &&
              followersList?.map(
                ({ html_url, avatar_url, login, id }, i: number) => {
                  return (
                    <li
                      key={id + i}
                      className="flex flex-col items-center space-y-2"
                    >
                      {/* <!-- Ring --> */}
                      <a
                        className="block bg-white p-1 rounded-full"
                        href={html_url}
                      >
                        <img
                          className="w-16 rounded-full"
                          src={avatar_url}
                          alt={login}
                        />
                      </a>
                      {/* <!-- Username --> */}
                      <span className="text-xs text-gray-500">{login}</span>
                    </li>
                  );
                }
              )}
          </ul>
        </div>
      )}
    </>
  );
};

export default FollowersList;
