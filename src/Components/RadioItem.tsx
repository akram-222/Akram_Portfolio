const RadioItem = ({language,hint})=>{
    return(
        
<div className="flex items-center pl-3">
    <input id="bordered-radio-1" type="radio" value="" name="bordered-radio" className=" text-blue-600 bg-gray-100 border-gray-300 dark:bg-gray-700 dark:border-gray-600" />
    <label htmlFor="bordered-radio-1" className="py-1 ml-2 w-full text-sm font-medium text-gray-900 dark:text-gray-300">{language} <span className="text:xs text-xs text-premium-yellow ml-2">{hint}</span></label>
</div>
    )
}

export default RadioItem