import {BsMoon,BsSun} from "react-icons/bs"
import {useState,useEffect} from "react"
const ThemeSwitcherBtn=()=>{
    const [isDark,setMode] = useState(true);
    const changeMode = ()=>{
        if (localStorage.getItem('color-theme') === 'dark' || (!('color-theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
    localStorage.setItem('color-theme',"light");
    document.documentElement.classList.add('dark');
    setMode(false)
} else {
   localStorage.setItem('color-theme',"dark")
           document.documentElement.classList.remove('dark');

   setMode(true)
} 
    }
    useEffect(()=>{
       if (localStorage.getItem('color-theme') === 'dark' || (!('color-theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
    setMode(true)
} else {
   setMode(false)
} 
    },[])
    return(
    <button onClick={()=> changeMode()} type="button" className={`text-gray-500 dark:text-gray-400 rounded-lg text-sm p-2.5`}>
         {isDark ?  <BsSun size={30}/>:<BsMoon size={30}/> }
    </button>
    )
}

export default ThemeSwitcherBtn