import {useState} from 'react'
import {IoIosClose,IoIosArrowDown} from "react-icons/io"
const Combobox = ()=>{
    const [isCollapsed,setCollapsing]=useState(true)
    return(
        <div className="">
  <div className="max-w-md mx-auto">
    <label htmlFor="select" className="font-semibold block py-2">Select Language:</label>

    <div className="relative">
      <div className="h-10 bg-white flex border border-gray-200 rounded items-center">
        <input value="Javascript" name="select" id="select" className="px-4 appearance-none outline-none text-gray-800 w-full" checked />
        <button className="cursor-pointer outline-none focus:outline-none transition-all text-gray-300 hover:text-gray-600">
          <IoIosClose size={25} />
        </button>
        <label onClick={()=> setCollapsing(!isCollapsed)} htmlFor="show_more" className="cursor-pointer outline-none focus:outline-none border-l border-gray-200 transition-all text-gray-300 hover:text-gray-600 mr-2">
          <IoIosArrowDown size={18}/>
        </label>
      </div>

      <input type="checkbox" name="show_more" id="show_more" className="hidden peer" checked />
      <div className={`${isCollapsed?"peer-checked:flex" :""} absolute rounded shadow bg-white overflow-hidden hidden flex-col w-full mt-1 border border-gray-200`}>
        <div className="cursor-pointer group">
          <a className="block p-2 border-transparent border-l-4 group-hover:border-blue-600 group-hover:bg-gray-100">Python</a>
        </div>
        <div className="cursor-pointer group border-t">
          <a className="block p-2 border-transparent border-l-4 group-hover:border-blue-600 border-blue-600 group-hover:bg-gray-100">Javascript</a>
        </div>
        <div className="cursor-pointer group border-t">
          <a className="block p-2 border-transparent border-l-4 group-hover:border-blue-600 group-hover:bg-gray-100">Node</a>
        </div>
        <div className="cursor-pointer group border-t">
          <a className="block p-2 border-transparent border-l-4 group-hover:border-blue-600 group-hover:bg-gray-100">PHP</a>
        </div>
      </div>
    </div>
  </div>
</div>

    )
}

export default Combobox