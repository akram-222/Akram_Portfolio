import {BsMoon,BsSun} from "react-icons/bs"
import {useState} from "react"
const ThemeSwitcherBtn=()=>{
    const [isDark,setMode] = useState(true)
    return(
     <button onClick={()=> setMode(!isDark)} type="button" className="text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-2.5">
{isDark ?   <BsMoon size={30}/>:   <BsSun size={30}/>}


</button>
    )
}

export default ThemeSwitcherBtn