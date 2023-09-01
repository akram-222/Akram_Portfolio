import { useState } from "react";
import SearchInput from "../Components/SearchInput";
import SearchResultItem from "../Components/SearchResultItem";
import SearchPreferences from "../Components/SearchPreferences";
import { BsGear } from "react-icons/bs";
function Search() {
  const [isSearchOptionHidden, setSearchOptionHidden] = useState(true);
  const toggleSearchOptionVisibility = () =>
    setSearchOptionHidden(!isSearchOptionHidden);
  return (
    <>
      <div className="h-full w-full animate-fade-in">
        <div className="h-full w-full mx-auto py-7 overflow-hidden">
          <div className="flex justify-between items-center px-3 pb-5 border-b dark:border-[#353535]">
            <div className="flex w-[90%] items-center gap-2">
              <SearchInput />
            </div>
            <div className="">
              <div className="relative w-full">
                <button
                  className=" h-10"
                  onClick={toggleSearchOptionVisibility}
                >
                  <BsGear size={20} />
                </button>
                <SearchPreferences
                  isSearchOptionHidden={isSearchOptionHidden}
                  toggleSearchOptionVisibility={toggleSearchOptionVisibility}
                />
              </div>
            </div>
          </div>
          <div className="">
            <div className="px-3 pb-5 border-b dark:border-[#353535]">
              <div className="pt-6">
                <p className="text-base font-semibold leading-none text-green-400">
                  Latest Searches
                </p>
                <p className="text-gray-300 leading-none pt-4">Projects</p>
              </div>

              <SearchResultItem />
              <SearchResultItem />
            </div>
            <div className="px-3 pt-4">
              <div>
                <p className="text-base font-semibold leading-none text-green-400">
                  Users
                </p>
                <SearchResultItem />
                <SearchResultItem />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Search;
