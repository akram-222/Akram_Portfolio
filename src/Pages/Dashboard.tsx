import AddComponent from "../Components/AddComponent";
import { employeeData } from "../Components/employeeData";
import Repos from "../Components/GitHubRepos";
import Graph from "../Components/Graph";
import Icon from "../Components/Icon";
import NameCard from "../Components/NameCard";
import PageTitle from "../Components/PageTitle";
import Satisfication from "../Components/Satisfication";
import Segmentation from "../Components/Segmentation";

const Dashboard = ({ onSidebarHide }) => {
  return (
    <>
      <div className="w-full sm:flex p-2 items-end">
        <PageTitle
        className={""}
          onSidebarHide={onSidebarHide}
          title="Dashboard"
          subtitle={
            <>
              {" "}
              <span className="text-green-500 mr-2">Status :</span>
              <span className="text-gray-500">Performs military service</span>
            </>
          }
          premium_star="Front-end"
        />
        <div className="w-full sm:w-56 mt-4 sm:mt-0 relative">
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
        </div>
      </div>
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
            className="w-full p-2 lg:w-1/3"
          />
        )
      )}

      <div className="w-full p-2 lg:w-2/3">
        <div className="rounded-lg bg-card sm:h-80 h-60">
          <Graph />
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
