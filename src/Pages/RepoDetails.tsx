import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import PageTitle from "../Components/PageTitle";
import Spinner from "../Components/Spinner";
import { __getRepo } from "../Utils/github/__searchForRepo";
import { __getReadMeFile } from "../Utils/github/__getReadMeFile";
import { octokit } from "../Utils/github/OctokitConstructor";
import { BsFileZip } from "react-icons/bs";

const RepoDetails = ({ onSidebarHide }) => {
  type readmeFileType = { content: string; size: number };
  const params = useParams();
  const [currentRepo, setCurrentRepo] = useState<any>({});
  const [readmeFile, setReadmeFile] = useState<readmeFileType>({
    content: "",
    size: 0,
  });
  const [readmeFileContent, setReadmeFileContent] = useState<string>("");
  const [isLoad, setLoad] = useState(true);

  useEffect(() => {
    __getRepo(params.repoName!)
      .then((repo) => {
        setCurrentRepo(repo);
        setLoad(false);
        return currentRepo;
      })
      .then((data) => console.log(data));
    __getReadMeFile(params.repoName!)
      .then((res) => {
        setReadmeFile(res);
        return res.content;
      })
      .then(async (content) => {
        let { data } = await octokit.request("POST /markdown", {
          text: atob(content), // deconding
        });
        setReadmeFileContent(data);
      });
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
          <div className="group inline-block">
            <button className="flex gap-1 items-center bg-[#050708] p-2 rounded-lg text-sm font-bold ">
              <BsFileZip size={18} />
              <a
                href={`https://github.com/Ak-ram/${currentRepo.name}/archive/refs/heads/master.zip`}
                rel="noreferrer"
              >
                Download ZIP
              </a>
            </button>
            <span className="text-xs text-red-400 opacity-0 group-hover:opacity-100">
              {readmeFile?.size} kb
            </span>
          </div>
          {/* <div
            dangerouslySetInnerHTML={{
              __html: readmeFileContent,
            }}
          ></div>{" "} */}
        </div>
      )}
    </>
  );
};

export default RepoDetails;
