import SearchComponent from "../Components/search comp/SearchComponent";
const FilterProjects = ({repos})=>{
    return (<>
    <div className="z-10 animate-fade-in-top transition-all absolute bg-gray-700 dark:bg-card p-5 rounded">
        <SearchComponent list={repos} />
    </div>
    </>)
}

export default FilterProjects