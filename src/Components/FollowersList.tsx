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
    });
  }, []);
  return (
    <>
     {isLoad ? (
        <Spinner className="w-7 m-auto" />
      ) : (
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
      )}
    </>
  );
};

export default FollowersList;
