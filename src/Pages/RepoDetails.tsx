// //@ts-ignore
// import confetti from "https://cdn.skypack.dev/canvas-confetti@1";
// import { useEffect, useState, useCallback, useRef } from "react";
// import { useParams } from "react-router-dom";
// import PageTitle from "../Components/PageTitle";
// import Spinner from "../Components/Spinner";
// import { __getRepo } from "../Utils/github/__searchForRepo";
// import { __getReadMeFile } from "../Utils/github/__getReadMeFile";
// import { octokit } from "../Utils/github/OctokitConstructor";
// import { BsDownload, BsCheck,BsEye } from "react-icons/bs";
// import { BiLoader } from "react-icons/bi";
// const RepoDetails = ({ onSidebarHide }) => {
//   type readmeFileType = { content: string; size: number };
//   const params = useParams();
//   const [currentRepo, setCurrentRepo] = useState<any>({});
//   const [readmeFile, setReadmeFile] = useState<readmeFileType>({
//     content: "",
//     size: 0,
//   });
//   const [readmeFileContent, setReadmeFileContent] = useState<string>("");
//   const [isLoad, setLoad] = useState(true);
//   const [isRun, setRunning] = useState(false);
//   const downloadBtnRef = useRef<HTMLAnchorElement | null>(null);
//   useEffect(() => {
//     __getRepo(params.repoName!)
//       .then((repo) => {
//         setCurrentRepo(repo);
//         setLoad(false);
//         return currentRepo;
//       })
//       .then((data) => console.log(data));
//     __getReadMeFile(params.repoName!)
//       .then((res) => {
//         setReadmeFile(res);
//         return res.content;
//       })
//       .then(async (content) => {
//         let { data } = await octokit.request("POST /markdown", {
//           text: atob(content), // deconding
//         });
//         setReadmeFileContent(data);
//       });
//   }, []);
//   const onClick = useCallback(() => {
//     setRunning(true);

//     setTimeout(()=>{
//       confetti({
//       particleCount: 100,
//       startVelocity: 30,
//       spread: 360,
//       angle: 40,
//       origin: {
//         x: 0.5,
//         y: 0,
//       },
//     });
//     },2000)

//     setTimeout(() => {
//       setRunning(false);
//     }, 1000);
//   }, []);

//   return (
//     <>
//       {isLoad ? (
//         <div className="flex w-full h-full items-center justify-center">
//           <Spinner className={"w-14"} />
//         </div>
//       ) : (
//         <div className="flex-col flex items-start w-full h-full flex-wrap">
//           <PageTitle
//             className={"mb-10 h-fit"}
//             onSidebarHide={onSidebarHide}
//             title={currentRepo.name}
//             subtitle={
//               <>
//                 <span className="text-green-500 mr-2">id :</span>
//                 <a
//                   className="text-sm text-blue-400 hover:underline"
//                   href={currentRepo.clone_url}
//                 >
//                   #{currentRepo.id}
//                 </a>
//               </>
//             }
//             is_premium={true}
//             premium_star="GitHub Repos"
//           />
//           {/* <div className="group flex items-center justify-center w-full flex-grow"> */}

//         <div className='flex items-center justify-center gap-2'>
//             <button
//             onClick={onClick}
//             className="m-auto transition-all h-9 group overflow-hidden flex gap-2 items-center bg-[#050708] p-2 text-sm font-bold text-white rounded"
//           >
//             <span className="mt-1">Download</span>
//            <a
//               ref={downloadBtnRef}
//               className={`${
//                 isRun ? "translate-y-4" : "-translate-y-4"
//               } flex flex-col gap-3 transition-all group-hover:animate-pulse`}
//               href={`https://github.com/Ak-ram/${currentRepo.name}/archive/refs/heads/master.zip`}
// >
//               <BsCheck size={20} />
//               <BsDownload size={20} />
//             </a>
//             {/* <span className="text-xs text-red-400 opacity-0 group-hover:opacity-100">
//               {readmeFile?.size} kb
//             </span> */}
//           </button>
//           {/* </div> */}
// <button
//             onClick={()=>window.open(currentRepo.homepage, '_blank', 'width=500,height=300,toolbar=no')}
//             className="m-auto transition-all h-9 group overflow-hidden flex gap-2 items-center bg-[#050708] p-2 text-sm font-bold text-white rounded"
//           >
//             <span className="mt-1">Preview</span>
//             <a
//               className={`transition-all`}
//             >
//               <BsEye size={20} />
//             </a>

//           </button>
//         </div>

//           {/* {/* {/* {/* <div
//           className="readme"
//             dangerouslySetInnerHTML={{
//               __html: readmeFileContent,
//             }}
//           ></div> */}
//         </div>
//       )}
//     </>
//   );
// };

// export default RepoDetails;
//@ts-ignore
import confetti from "https://cdn.skypack.dev/canvas-confetti@1";
import { useEffect, useState, useCallback, useRef } from "react";
import { useParams } from "react-router-dom";
import PageTitle from "../Components/PageTitle";
import Spinner from "../Components/Spinner";
import { __getRepo } from "../Utils/github/__searchForRepo";
import { __getReadMeFile } from "../Utils/github/__getReadMeFile";
import { octokit } from "../Utils/github/OctokitConstructor";
import { BsDownload, BsCheck, BsEye } from "react-icons/bs";
import { BiLoader } from "react-icons/bi";

const RepoDetails = ({ onSidebarHide }) => {
  const params = useParams();
  const downloadBtnRef = useRef<HTMLAnchorElement | null>(null);
  const [currentRepo, setCurrentRepo] = useState<any>(null);
  const [readmeFile, setReadmeFile] = useState<any>({
    content: "",
    size: 0,
  });
  const [readmeFileContent, setReadmeFileContent] = useState<string>("");
  const [isLoad, setLoad] = useState(true);
  const [isRun, setRunning] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      const fetchedRepo = await __getRepo(params.repoName!);
      setCurrentRepo(fetchedRepo);
      setLoad(false);

      const fetchedReadme = await __getReadMeFile(params.repoName!);
      setReadmeFile(fetchedReadme);

      const decodedContent = atob(fetchedReadme.content);
      const markdownResponse = await octokit.request("POST /markdown", {
        text: decodedContent,
      });

      setReadmeFileContent(markdownResponse.data);
    };

    fetchData();
  }, []);

  const onClick = useCallback(() => {
    setRunning(true);

    setTimeout(() => {
      confetti({
        particleCount: 100,
        startVelocity: 30,
        spread: 360,
        angle: 40,
        origin: {
          x: 0.5,
          y: 0,
        },
      });
    }, 2000);

    setTimeout(() => {
      setRunning(false);
    }, 1000);
  }, []);

  return (
    <>
      {isLoad ? (
        <div className="flex w-full h-full items-center justify-center">
          <Spinner className={"w-14"} />
        </div>
      ) : (
        <div className="flex-col flex items-start w-full h-full flex-wrap">
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

          <div className="flex items-center justify-center gap-2">
            <button
              onClick={onClick}
              className="m-auto transition-all h-9 group overflow-hidden flex gap-2 items-center bg-[#050708] p-2 text-sm font-bold text-white rounded"
            >
              <span className="mt-1">Download</span>
              <a
                ref={downloadBtnRef}
                className={`${
                  isRun ? "translate-y-4" : "-translate-y-4"
                } flex flex-col gap-3 transition-all group-hover:animate-pulse`}
                href={`https://github.com/Ak-ram/${currentRepo.name}/archive/refs/heads/master.zip`}
              >
                <BsCheck size={20} />
                <BsDownload size={20} />
              </a>
            </button>

            <button
              onClick={() =>
                window.open(
                  currentRepo.homepage,
                  "_blank",
                  "width=500,height=300,toolbar=no"
                )
              }
              className="m-auto transition-all h-9 group overflow-hidden flex gap-2 items-center bg-[#050708] p-2 text-sm font-bold text-white rounded"
            >
              <span className="mt-1">Preview</span>
              <a className={`transition-all`}>
                <BsEye size={20} />
              </a>
            </button>
          </div>

          {/* <div
            className="readme"
            dangerouslySetInnerHTML={{
              __html: readmeFileContent,
            }}
          ></div> */}
        </div>
      )}
    </>
  );
};

export default RepoDetails;
