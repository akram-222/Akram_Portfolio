import PageTitle from "../Components/PageTitle";
import ProjectItem from "../Components/projectItem";

const Projects = ({ onSidebarHide }) => {
  return (
    <div className="items-end p-2 sm:flex w-full flex-wrap">
      <PageTitle
        className={"mb-10"}
        onSidebarHide={onSidebarHide}
        title="Projects"
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
     <div className="flex">
          <div className="projects-list w-full lg:w-2/3 flex flex-wrap gap-2">
        <ProjectItem />
        <ProjectItem />
        <ProjectItem />
        <ProjectItem />
        <ProjectItem />
      </div>
      <div className="filters w-1/3 dark:bg-[#171717] rounded-lg px-4 py-4">Filters</div>
     </div>
    </div>
  );
};

export default Projects;
