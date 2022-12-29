import Spinner from "./Spinner";

const FetchMoreReposBtn = ({
  isLoad,
  setLoad,
  setRepoConfig,
  repoConfig,
  repos,
}) => {
  return (
    <div className="flex justify-center mt-4 relative">
      <button
        type="button"
        onClick={() => {
          setLoad(true);
          setRepoConfig({ ...repoConfig, per_page: repoConfig.per_page + 5 });
        }}
        className="text-white bg-[#050708] hover:bg-[#050708]/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:hover:bg-[#050708]/40 mr-2 mb-2"
      >
        Total Repos:
        <span className="ml-1 w-10 text-sm text-premium-yellow">
          {" "}
          {isLoad ? <Spinner className={"w-5"} /> : repos?.length}
        </span>
      </button>
    </div>
  );
};

export default FetchMoreReposBtn;
