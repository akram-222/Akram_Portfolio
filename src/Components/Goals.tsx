import ValidatorBtn from "./ValidatorBtn";
import { useState } from "react";
import { AiFillDelete } from "react-icons/ai";
const Goals = () => {
  const [newGoal, setNewGoal] = useState<string>("");
  const [goalsList, setGoalsList] = useState<string[]>([]);
  const handleAddingNewGoal = (e: React.SyntheticEvent) => {
    let inputGoalVal = (e.currentTarget as HTMLInputElement)!.value;
    setNewGoal(inputGoalVal);
  };
  return (
    <div className="flex p-2 text-sm w-full">
      <div className="border-r border-gray-600/30 px-2">
        <h2 className="text-white text-2xl font-bold my-2">2023 Goals</h2>
        <form className="flex flex-col items-start">
          <label htmlFor="goalInput">Add new goal :</label>
          <input
            className="mt-1 placeholder:text-gray-500 placeholder:text-sm  dark:bg-gray-700/20 h-8 rounded px-2"
            id="goalInput"
            type="text"
            placeholder="3 or more"
            onChange={(e) => handleAddingNewGoal(e)}
            value={newGoal}
          />
          <ValidatorBtn
            newGoal={newGoal}
            goalsList={goalsList}
            setGoalsList={setGoalsList}
          />
        </form>
      </div>
      <div className="text-white mx-4 text-xl flex-grow">
        Goals List
        <ol className="list-decimal	list-inside text-base mt-2">
          {goalsList?.map((goal, i) => (
            <li
              key={i}
              className="group flex justify-between hover:bg-[#050708]/20 p-2 rounded-lg w-full"
            >
              <span className="text-gray-400 group-hover:text-white">
                {goal}
              </span>
              <button type="button">
                <AiFillDelete className="group-hover:text-red-400" size={20} />
              </button>
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
};

export default Goals;
