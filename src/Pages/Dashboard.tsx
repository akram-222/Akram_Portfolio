import AddComponent from "../Components/AddComponent";
import { employeeData } from "../Components/employeeData";
import Repos from "../Components/GitHubRepos";
import NameCard from "../Components/NameCard";
import PageTitle from "../Components/PageTitle";
import Satisfication from "../Components/Satisfication";
import Segmentation from "../Components/Segmentation";
import Goals from "../Components/Goals";
import SearchBtn from "../Components/search comp/searchBtn";

const Dashboard = ({ onSidebarHide }) => {
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
        <SearchBtn />
      </div>
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
