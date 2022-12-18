import { VscRepoForked } from "react-icons/vsc"

const AddQuickRepo=({children,isHidden,inputOfRepoName})=>{
    return(
        
        <div
          className={`${
            isHidden ? "hidden" : ""
          } right-10 z-10 p-3 add-new-repo absolute top-5 bg-[#050708] rounded-lg`}
        >
          <form>
            <label
              htmlFor="website-admin"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Repo name:
            </label>

            <div className="relative">
              <div className="absolute inset-y-0 left-0 flex items-center pl-2 pointer-events-none">
                <VscRepoForked className="text-green-500" />
              </div>
              <input
                type="text"
                id="createNewRepoInput"
                className="outline-none block w-full p-2 pl-8 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-green-500 focus:border-green-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-green-500 dark:focus:border-green-500"
                placeholder="new-repo"
                ref={inputOfRepoName}
                required
              />
              {children}
            </div>
          </form>
        </div>
    )
}

export default AddQuickRepo