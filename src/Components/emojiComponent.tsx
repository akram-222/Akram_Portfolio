import { useEffect, useRef, useState } from "react";

const SearchComponent = ({ list }) => {
  const [filteredList, setFilteredList] = useState(list);
  const inputFeild = useRef<HTMLInputElement | null>(null);
  useEffect(() => {}, []);

  const filtering = (event: React.SyntheticEvent) => {
    let input =
      (event.currentTarget as HTMLInputElement)!.value.toLocaleLowerCase();
    let res = list.filter((item) =>
      item.name.toLocaleLowerCase().includes(input)
    );
    setFilteredList(res);
  };

  return (
    <div className="relative">
      <input
        type={"search"}
        onInput={(e) => filtering(e)}
        className="cursor-text h-9 flex items-center block mr-4 px-2 py-1 overflow-hidden dark:text-white font-semibold w-[220px] border border-gray-300 rounded bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-transparent dark:border-gray-800 dark:focus:ring-blue-500 dark:focus:border-blue-500"
        placeholder="Search..."
        ref={inputFeild}
      />
      <ul className="absolute">
        {filteredList?.map((item) => (
          <li>{item.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default SearchComponent;
