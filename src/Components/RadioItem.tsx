// ISSUE: Multiple radio button groups in one form
// https://stackoverflow.com/questions/28543752/multiple-radio-button-groups-in-one-form
const RadioItem = ({ option, name,className }) => {
  return (
    <div className={`flex items-center ${className}`}>
      <input id={option} type="radio" name={name} className="hidden" />
      <label htmlFor={option} className="flex items-center cursor-pointer">
        <span className="w-4 h-4 inline-block mr-2 border dark:border-[#353535]"></span>
        {option}
      </label>
    </div>
  );
};

export default RadioItem;
