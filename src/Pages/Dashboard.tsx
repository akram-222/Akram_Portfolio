import AddComponent from "../Components/AddComponent";
import { Link } from "react-router-dom";
import { employeeData } from "../Components/employeeData";
import Repos from "../Components/GitHubRepos";
import NameCard from "../Components/NameCard";
import PageTitle from "../Components/PageTitle";
import Satisfication from "../Components/Satisfication";
import Segmentation from "../Components/Segmentation";
import Goals from "../Components/Goals";
import { app } from "../firebase";

const Dashboard = ({ onSidebarHide }) => {
  // const onChange = (e: React.SyntheticEvent) => {
  //   let file = (e.target as HTMLInputElement)!.files![0];
  //   const storageRef = app.storage().ref();
  //   const fileRef = storageRef.child(file.name);
  //   fileRef.put(file).then(() => console.log("file Uploaded"));
  // };
  return (
    <>
      <PageTitle
        className={""}
        onSidebarHide={onSidebarHide}
        title="Dashboard"
        subtitle={
          <>
            <span className="text-green-500 mr-2">Status :</span>
            <span className="text-gray-500">Performs military service</span>
          </>
        }
        is_premium={true}
        premium_star="Front-end"
      />
      <div className="flex w-full justify-end">
        <Link
          to={"/search"}
          className="whitespace-nowrap mt-4 sm:mt-0 relative inline-flex justify-center items-center px-4 py-2.5 text-base font-medium text-gray-500 bg-gray-50 hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:bg-card dark:hover:bg-[#050708]/40 dark:hover:text-blue-400"
        >
          <svg
            aria-hidden="true"
            className="mr-3 w-5 h-5"
            viewBox="0 0 22 31"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clipPath="url(#clip0_4151_63004)">
              <path
                d="M5.50085 30.1242C8.53625 30.1242 10.9998 27.8749 10.9998 25.1035V20.0828H5.50085C2.46546 20.0828 0.00195312 22.332 0.00195312 25.1035C0.00195312 27.8749 2.46546 30.1242 5.50085 30.1242Z"
                fill="#0ACF83"
              />
              <path
                d="M0.00195312 15.062C0.00195312 12.2905 2.46546 10.0413 5.50085 10.0413H10.9998V20.0827H5.50085C2.46546 20.0827 0.00195312 17.8334 0.00195312 15.062Z"
                fill="#A259FF"
              />
              <path
                d="M0.00195312 5.02048C0.00195312 2.24904 2.46546 -0.000244141 5.50085 -0.000244141H10.9998V10.0412H5.50085C2.46546 10.0412 0.00195312 7.79193 0.00195312 5.02048Z"
                fill="#F24E1E"
              />
              <path
                d="M11 -0.000244141H16.4989C19.5343 -0.000244141 21.9978 2.24904 21.9978 5.02048C21.9978 7.79193 19.5343 10.0412 16.4989 10.0412H11V-0.000244141Z"
                fill="#FF7262"
              />
              <path
                d="M21.9978 15.062C21.9978 17.8334 19.5343 20.0827 16.4989 20.0827C13.4635 20.0827 11 17.8334 11 15.062C11 12.2905 13.4635 10.0413 16.4989 10.0413C19.5343 10.0413 21.9978 12.2905 21.9978 15.062Z"
                fill="#1ABCFE"
              />
            </g>
            <defs>
              <clipPath id="clip0_4151_63004">
                <rect
                  width="22"
                  height="30.1244"
                  fill="white"
                  transform="translate(0 -0.000244141)"
                />
              </clipPath>
            </defs>
          </svg>
          <span className="w-full sm:hidden md:block">
            Discover our Search Component
          </span>
          <span className="w-full hidden sm:block md:hidden">Search</span>
          <svg
            aria-hidden="true"
            className="ml-3 w-6 h-6"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
              clipRule="evenodd"
            ></path>
          </svg>
        </Link>
      </div>
      {/* <div className="w-full sm:w-56 mt-4 sm:mt-0 relative">
          <Icon
            path="res-react-dash-search"
            className="w-5 h-5 search-icon left-3 absolute"
          />
          <form action="#" method="POST">
            <input
              type="text"
              name="company_website"
              id="company_website"
              className="pl-12 py-2 pr-2 block w-full rounded-lg border-gray-300 bg-card"
              placeholder="search"
            />
          </form>
        </div> */}
      {/* </div> */}
      {employeeData.map(
        ({ id, name, position, transactions, rise, tasksCompleted, imgId }) => (
          <NameCard
            key={id}
            id={id}
            name={name}
            position={position}
            transactionAmount={transactions}
            rise={rise}
            tasksCompleted={tasksCompleted}
            imgId={imgId}
            className="Low-full p-2 w-full lg:w-1/3"
          />
        )
      )}

      <div className="w-full p-2 lg:w-2/3">
        <div className="flex rounded-lg bg-card sm:h-80 h-60">
          {/* <Graph /> */}
          {/* <Chart /> */}
          {/* <input type="file" onChange={(e) => onChange(e)} /> */}
          <Goals />
        </div>
      </div>
      <div className="w-full p-2 lg:w-1/3">
        <div className="rounded-lg bg-card h-80">
          <Repos />
        </div>
      </div>

      <div className="w-full p-2 lg:w-1/3">
        <div className="rounded-lg bg-card h-80">
          <Segmentation />
        </div>
      </div>
      <div className="w-full p-2 lg:w-1/3">
        <div className="rounded-lg bg-card h-80">
          <Satisfication />
        </div>
      </div>
      <div className="w-full p-2 lg:w-1/3">
        <div className="rounded-lg bg-card overflow-auto h-80">
          <AddComponent />
        </div>
      </div>
    </>
  );
};

export default Dashboard;
