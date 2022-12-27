import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import PageTitle from "../Components/PageTitle";
import { __getRepo } from "../Utils/github/__searchForRepo";

const RepoDetails = ({ onSidebarHide }) => {
  const params = useParams();
  const [currentRepo, setCurrentRepo] = useState<any>([]);
  const [isLoad, setLoad] = useState(true);

  useEffect(() => {
    __getRepo(params.repoName!).then((repo) => {
      setCurrentRepo(repo);
      setLoad(false);
      console.log(currentRepo);
    });
  }, []);

  return (
    <>
      {isLoad ? (
        "Loading..."
      ) : (
        <div className="flex-col items-start p-2 w-full h-full flex-wrap">
          <PageTitle
            className={"mb-10 h-fit"}
            onSidebarHide={onSidebarHide}
            title={currentRepo.name}
            subtitle={
              <>
                <span className="text-green-500 mr-2">Follow :</span>
                <a
                  className="text-sm text-blue-400 hover:underline"
                  href="https://www.github.com/ak-ram"
                >
                  GitHub Profile
                </a>
              </>
            }
            premium_star="GitHub Repos"
          />
        </div>
      )}
    </>
  );
};

export default RepoDetails;
