import {useState} from 'react'
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
                        <label
                          htmlFor="toggle5_search_4"
                          className="flex items-center cursor-pointer"
                        >
                          {/* toggle */}
                          <div  className={`relative -left-6`}>
                            {/* input */}
                            <input
                              type="checkbox"
                              id="toggle5_search_4"
                              className="sr-only"
                              onClick={()=>setIsOn(!isOn)}
                            />
                            {/* line */}
                            <div className={`${isOn?"bg-blue-700":""}  block bg-indigo-100 w-10 h-6 rounded-full transition`}/>
                            {/* dot */}
                            <div className={`${isOn ? "translate-x-full": ""} absolute left-1 top-1 bg-white w-4 h-4 rounded-full transition`} />
                          </div>
                        </label>
                      </div>
                    </div>
    )
}

export default SearchPreferenceInput