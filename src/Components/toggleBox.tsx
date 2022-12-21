import {useState} from "react"
const ToggleBox=()=>{
    const [isOn,setIsOn]= useState(false)
    return(
<label className="inline-flex relative items-center cursor-pointer">
  <input type="checkbox" value="" className="sr-only peer" checked />
  <div onClick={()=> setIsOn(!isOn)} className={`${isOn ? "peer-checked:bg-blue-600 peer-checked:after:translate-x-full":""} w-11 h-6 bg-gray-200 rounded-full peer  dark:bg-gray-700  peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer peer-checked:after:border-white outline-none`}></div>
</label>
)
}
export default ToggleBox