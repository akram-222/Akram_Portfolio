import PageTitle from "../Components/PageTitle";

const Projects = ({ onSidebarHide }) => {
  return (
    <div className="items-end p-2 sm:flex w-full">
      <PageTitle
        onSidebarHide={onSidebarHide}
        title="Projects"
        subtitle={
          <span>
            Reach me at:{" "}
            <a
              className="text-sm text-blue-400 hover:underline"
              href="https://www.github.com/ak-ram"
            >
              GitHub Profile
            </a>
          </span>
        }
        premium_star="GitHub Repos"
      />
    </div>
  );
};

export default Projects;
