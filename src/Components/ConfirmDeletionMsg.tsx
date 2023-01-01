const ConfirmDeletionMsg = ({children,isRepoDeleted})=>{
    return(<div
        data-popover
        id="popover-hover"
        role="tooltip"
        className={`${
          isRepoDeleted ? "invisible opacity-0" : ""
        } left-0 invisible absolute z-10 inline-block w-64 text-sm font-light text-gray-500 transition-opacity duration-300 bg-white border border-gray-200 rounded-lg shadow-sm dark:text-gray-400 dark:border-gray-600 dark:bg-gray-800`}
      >
        <div className="px-3 py-2 bg-gray-100 border-b border-gray-200 rounded-t-lg dark:border-gray-600 dark:bg-gray-700">
          <h3 className="font-semibold dark:text-red-500 dark:text-white">
            Confirm Deletion
          </h3>
        </div>
        <div className="px-3 py-2 flex flex-col">
          <p>This Repo will permenantly delete</p>
          {children}
        </div>
        <div data-popper-arrow></div>
      </div>)
}

export default ConfirmDeletionMsg