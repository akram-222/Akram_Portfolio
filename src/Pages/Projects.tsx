import PageTitle from "../Components/PageTitle";
import ProjectItem from "../Components/projectItem";

const Projects = ({ onSidebarHide }) => {
  return (
    <div className="items-end p-2 sm:flex w-full flex-wrap">
      <PageTitle
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
      <ProjectItem />
    </div>
  );
};

export default Projects;
