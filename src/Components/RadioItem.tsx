const RadioItem = ({ option }) => {
  return (
    <div className="flex items-center ">
      <input id={option} type="radio" name="radio" className="hidden" checked />
      <label htmlFor={option} className="flex items-center cursor-pointer">
        <span className="w-4 h-4 inline-block mr-2 border dark:border-[#353535]"></span>
        {option}
      </label>
    </div>
  );
};

export default RadioItem;
