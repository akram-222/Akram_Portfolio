import { useGitHubRepos } from "../Contexts/GitHubAPIContext";
import { Countrydata } from "./CountryData";
import Icon from "./Icon";
import Image from "./Image";

export default function Repos() {
    const { gitHubRepos } = useGitHubRepos();
    return (
        <div className="flex p-4 flex-col h-full overflow-y-auto">
            <div className="flex justify-between items-center">
                <div className="text-white font-bold">GitHub Repos</div>
                <Icon path="res-react-dash-plus" className="w-5 h-5" />
            </div>
            <div className="">favourites</div>
            {gitHubRepos.map(({ name, has_issues, svn_url },index:number) => (
                <div className="flex items-center mt-3" key={index}>
                    <div className="">{index+1}</div>

                    <Image path={`res-react-dash-flag-${index+1}`} className="ml-2 w-6 h-6" />
                    <div className="ml-2 whitespace-nowrap text-ellipsis">{name}</div>
                    <div className="flex-grow" />
                    <div className="">
                        <a className="font-medium text-blue-600 dark:text-blue-500 hover:underline" href={svn_url}>Visit</a>
                    </div>
                    <Icon
                        path={
                            has_issues ? 'res-react-dash-country-up' : 'res-react-dash-country-down'
                        }
                        className="w-4 h-4 mx-3"
                    />
                    <Icon path="res-react-dash-options" className="w-2 h-2" />
                </div>
            ))}
            <div className="flex-grow" />
            <div className="flex justify-center">
                <div className="">Check All</div>
            </div>
        </div>
    );
}
