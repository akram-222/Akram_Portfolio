import {useState} from 'react'
import ToggleBox from "./toggleBox"
const SearchPreferenceInput = ()=>{
    const [isOn,setIsOn] = useState(false)
    return(
         <div className="flex justify-between pt-4 px-4 py-3">
            <div>
                        <p className="  leading-none ">
                          Referrals
                        </p>
         </div>
                <div>
                  
<ToggleBox />

              </div>
        </div>
    )
}

export default SearchPreferenceInput