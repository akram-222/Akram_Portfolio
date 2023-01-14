//@ts-ignore
import confetti from "https://cdn.skypack.dev/canvas-confetti@1";
import ValidatorBtn from "./ValidatorBtn";
import { useState, useRef, useEffect, useCallback } from "react";
import { AiOutlineDelete, AiOutlineEdit } from "react-icons/ai";
import { BsCheck } from "react-icons/bs";
import goalImg from "../assests/goal.jpg";
const Goals = () => {
  const goalInputRef = useRef<HTMLInputElement | null>(null);
  const [newGoal, setNewGoal] = useState<string>("");
  const [goalsList, setGoalsList] = useState<string[]>([]);
  const handleAddingNewGoal = (e: React.SyntheticEvent) => {
    let inputGoalVal = (e.currentTarget as HTMLInputElement)!.value;
    setNewGoal(inputGoalVal);
  };

  useEffect(() => {
    goalInputRef.current!.value = "";
  }, [goalsList]);

  const handleGoalDeletion = useCallback(
    (goal: string) => {
      confetti({
        particleCount: 100,
        startVelocity: 30,
        spread: 360,
        angle: 40,
        origin: {
          x: 0.5,
          y: 0,
        },
      });
      if (goalsList.indexOf(goal) > -1) {
        let newlist = goalsList.filter((item) => item !== goal);
        setGoalsList(newlist);
      }
    },
    [goalsList]
  );
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
            ref={goalInputRef}
          />
          <ValidatorBtn
            newGoal={newGoal}
            goalsList={goalsList}
            setGoalsList={setGoalsList}
          />
        </form>
      </div>
      <div className="overflow-auto px-3 text-white text-xl flex-grow">
        Goals List
        {goalsList.length ? (
          <ol className="list-decimal	list-inside text-base mt-3">
            {goalsList?.map((goal, i) => (
              <li
                key={i}
                className="group flex border border-gray-600/30 mb-2 justify-between hover:bg-[#050708]/20 p-2 rounded-lg w-full"
              >
                <span className="text-gray-400 group-hover:text-white">
                  {i + 1}- {goal}
                </span>
                <div className="actions flex gap-2 items-center">
                  <button
                    type="button"
                    className="text-gray-700 hover:text-white"
                  >
                    <AiOutlineEdit size={20} />
                  </button>
                  <button
                    type="button"
                    className="hover:bg-blue-600 text-gray-700 hover:text-white border border-gray-600/30 rounded"
                  >
                    <BsCheck
                      onClick={() => handleGoalDeletion(goal)}
                      size={20}
                    />
                  </button>
                </div>
              </li>
            ))}
          </ol>
        ) : (
          <div>
            <img src={goalImg} />
          </div>
        )}
      </div>
    </div>
  );
};

export default Goals;
