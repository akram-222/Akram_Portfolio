import { BsXCircle } from "react-icons/bs";
import { VscRepoForked } from "react-icons/vsc";

const AddQuickRepo = ({ children, isHidden, setIsHidden, inputOfRepoName }) => {
  return (
    <div
      className={`${
        isHidden ? "hidden" : ""
      } z-10  w-full add-new-repo fixed flex flex-col backdrop-blur-sm bg-card shadow-md top-0 w-full left-0 items-center justify-center  h-screen overflow-hidden rounded-lg`}
    >
      <form className="w-[80%] tilt-in-right-1 md:w-[50%] border flex flex-col border-gray-600/20 rounded p-8">
        <button
          onClick={() => setIsHidden(true)}
          className="-mt-2 mb-4 self-end text-red-400 "
        >
          <BsXCircle size={25} />
        </button>
        <label
          htmlFor="website-admin"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
          Create New Repo :
        </label>

        <div className="relative">
          <div className="absolute inset-y-0 left-0 flex items-center pl-2 pointer-events-none">
            <VscRepoForked className="text-green-500" />
          </div>
          <input
            type="text"
            id="createNewRepoInput"
            className="outline-none block w-full p-2 pl-8 text-sm text-gray-900 border border-gray-300 rounded bg-details dark:border-gray-600/30 focus:ring-green-500 focus:border-green-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-green-500 dark:focus:border-green-500"
            placeholder="new-repo"
            ref={inputOfRepoName}
            required
          />
        </div>
        {children}
      </form>
    </div>
  );
};

export default AddQuickRepo;
