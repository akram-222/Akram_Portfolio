import SearchPreferenceInput from "./SearchPreferenceInput"
const SearchPreferences = ({isSearchOptionHidden,toggleSearchOptionVisibility})=>{
    return(<div
                  className={`${
                    isSearchOptionHidden ? "translate-x-full" : "translate-x-0"
                  } translate-x-full lg:min-w-[356px] md:min-w-[696px] min-w-[320px] w-full top-0 transition-all duration-300 ease-linear absolute right-[-12px] bg-white py-4"
                  id="div1_search_4`}
                >
                  <div className="flex justify-between items-center px-4">
                    <p className="text-base font-semibold leading-none border-b border-gray-100 py-5">
                      Search Preferences
                    </p>
                    <svg
                      onClick={toggleSearchOptionVisibility}
                      className="cursor-pointer"
                      xmlns="http://www.w3.org/2000/svg"
                      width={20}
                      height={20}
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="#2c3e50"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                      <line x1={18} y1={6} x2={6} y2={18} />
                      <line x1={6} y1={6} x2={18} y2={18} />
                    </svg>
                  </div>
                  <div className="border-b border-gray-100">
                   
                   <SearchPreferenceInput />
                  </div>
                  <div
                    onClick={toggleSearchOptionVisibility}
                    className="lg:flex-row flex-col flex my-5 justify-center gap-3 w-full"
                  >
                    <button className="lg:max-w-[100px] w-full rounded text-indigo-700 border border-indigo-700   hover:bg-indigo-50 duration-200 py-2">
                      Cancel
                    </button>
                    <button className="lg:max-w-[150px] w-full rounded border border-indigo-700   text-white hover:bg-indigo-600 bg-indigo-700 duration-200 py-2">
                      Save Changes
                    </button>
                  </div>
                </div>)
}

export default SearchPreferences

