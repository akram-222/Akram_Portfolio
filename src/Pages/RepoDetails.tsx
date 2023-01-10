import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import PageTitle from "../Components/PageTitle";
import Spinner from "../Components/Spinner";
import { __getRepo } from "../Utils/github/__searchForRepo";

const RepoDetails = ({ onSidebarHide }) => {
  const params = useParams();
  const [currentRepo, setCurrentRepo] = useState<any>({});
  const [isLoad, setLoad] = useState(true);

  useEffect(() => {
    __getRepo(params.repoName!)
      .then((repo) => {
        setCurrentRepo(repo);
        setLoad(false);
        return currentRepo;
      })
      .then((data) => console.log(data));
  }, []);

  return (
    <>
      {isLoad ? (
        <div className="flex w-full h-full items-center justify-center">
          <Spinner className={"w-14"} />
        </div>
      ) : (
        <div className="flex-col items-start p-2 w-full h-full flex-wrap">
          <PageTitle
            className={"mb-10 h-fit"}
            onSidebarHide={onSidebarHide}
            title={currentRepo.name}
            subtitle={
              <>
                <span className="text-green-500 mr-2">id :</span>
                <a
                  className="text-sm text-blue-400 hover:underline"
                  href={currentRepo.clone_url}
                >
                  #{currentRepo.id}
                </a>
              </>
            }
            is_premium={true}
            premium_star="GitHub Repos"
          />
        </div>
      )}
    </>
  );
};

export default RepoDetails;
