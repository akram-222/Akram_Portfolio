// import Icon from "./Icon";
// // import Image from "./Image";
// import UserRepos from "../Utils/github/repos";
// export default function Repos() {
//   let currentRepos = UserRepos({
//     // since: "2022-12-16T00:14:27Z",
//     page: 1,
//     per_page: 25,
//     sort: "updated",
//     direction: "asc",
//     visibility: "public",
//   });
//   console.log(currentRepos);
//   return (
//     <div className="flex p-4 flex-col h-full overflow-y-auto">
//       <div className="flex justify-between items-center">
//         <div className="text-white font-bold">GitHub Repos</div>
//         <Icon path="res-react-dash-plus" className="w-5 h-5" />
//       </div>
//       <div className="">
//         Result:{" "}
//         <span className="text-sm text-premium-yellow">
//           {currentRepos.length ? currentRepos?.length : "wait..."}
//         </span>
//       </div>

//       {currentRepos?.map(({ name, has_issues, svn_url }, index: number) => (
//         <div className="flex items-center mt-3 relative" key={index}>
//           <div className="">{index + 1}</div>

//           {/* <Image path={`res-react-dash-flag-${index+1}`} className="ml-2 w-6 h-6" /> */}
//           <div className="ml-2 whitespace-nowrap text-ellipsis mr-3">
//             {name}
//           </div>
//           <div className="flex-grow" />
//           <div className="">
//             <a
//               className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
//               href={svn_url}
//             >
//               Visit
//             </a>
//           </div>
//           <Icon
//             path={
//               has_issues
//                 ? "res-react-dash-country-up"
//                 : "res-react-dash-country-down"
//             }
//             className="w-4 h-4 mx-3"
//           />
//           <Icon path="res-react-dash-options" className="w-2 h-2" />
//         </div>
//       ))}

//       {/* <div className="flex-grow" /> */}
//       <div className="flex justify-center mt-4">
//         <button
//           type="button"
//           className="text-white bg-[#050708] hover:bg-[#050708]/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:hover:bg-[#050708]/40 mr-2 mb-2"
//         >
//           Fetch 5 more
//         </button>
//       </div>
//     </div>
//   );
// }





///////////////////////////////////


import { Octokit } from "@octokit/core";
import { useEffect, useState } from "react";
import Icon from "./Icon";
// import Image from "./Image";
export default function Repos() {
  const octokit = new Octokit({
    auth: process.env.REACT_APP_GITHUB_ACCESS_TOKEN,
  });

  const [repos, setRepos] = useState([]);
  const [per_page, setPer_page] = useState(0)

  useEffect(() => {
    async function getRepos() {
      const { data } = await octokit.request(
        `GET /user/repos?per_page=${per_page}`,
        {}
      );
      setRepos(data);
      console.log(repos);
    }
    getRepos();
  }, [per_page]);



  return (
    <div className="flex p-4 flex-col h-full overflow-y-auto">
      <div className="flex justify-between items-center">
        <div className="text-white font-bold">GitHub Repos</div>
        <Icon path="res-react-dash-plus" className="w-5 h-5" />
      </div>
      <div className="">
        Result:{" "}
        <span className="text-sm text-premium-yellow">
          {repos.length ? repos?.length : "wait..."}
        </span>
      </div>

      {repos?.map(({ name, has_issues, svn_url }, index: number) => (
        <div className="flex items-center mt-3 relative" key={index}>
          <div className="">{index + 1}</div>

          {/* <Image path={`res-react-dash-flag-${index+1}`} className="ml-2 w-6 h-6" /> */}
          <div className="ml-2 whitespace-nowrap text-ellipsis mr-3">
            {name}
          </div>
          <div className="flex-grow" />
          <div className="">
            <a
              className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
              href={svn_url}
            >
              Visit
            </a>
          </div>
          <Icon
            path={
              has_issues
                ? "res-react-dash-country-up"
                : "res-react-dash-country-down"
            }
            className="w-4 h-4 mx-3"
          />
          <Icon path="res-react-dash-options" className="w-2 h-2" />
        </div>
      ))} 

      {/* <div className="flex-grow" /> */}
      <div className="flex justify-center mt-4">
        <button
          type="button"
          onClick={()=> setPer_page(per_page+5)}
          className="text-white bg-[#050708] hover:bg-[#050708]/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:hover:bg-[#050708]/40 mr-2 mb-2"
        >
          Fetch
        </button>
      </div>
    </div>
  );
}