//@ts-ignore
import confetti from "https://cdn.skypack.dev/canvas-confetti@1";
import ValidatorBtn from "./ValidatorBtn";
import { useState, useRef, useEffect, useCallback } from "react";
import { AiOutlineDelete, AiOutlineEdit } from "react-icons/ai";
import { GiStairsGoal } from "react-icons/gi";
import { BsCardChecklist, BsCheck } from "react-icons/bs";
import { FiTrash2 } from "react-icons/fi";
import goalImg from "../assests/goalImg.webp";
import { BiUndo } from "react-icons/bi";
const Goals = () => {
  const goalInputRef = useRef<HTMLInputElement | null>(null);
  const [newGoal, setNewGoal] = useState<string>("");
  const [goalsList, setGoalsList] = useState<string[]>([]);
  const [goalsCompletedList, setGoalsCompletedList] = useState<string[]>([]);
  const [isCompletedGoal, setIsCompletedGoal] = useState<boolean>(false);
  const handleAddingNewGoal = (e: React.SyntheticEvent) => {
    let inputGoalVal = (e.currentTarget as HTMLInputElement)!.value;
    setNewGoal(inputGoalVal);
  };
  useEffect(() => {
    goalInputRef.current!.value = "";
  }, [goalsList]);
  const deleteGoal = (goal) => {
    let newlist = goalsList.filter((item) => item !== goal);
    setGoalsList(newlist);
  };
  const completedGoal = (goal: string, goalLIItem, i: number) => {
    // setGoalsList([
    //   ...goalsList.filter((a) => a !== goal),
    //   goal.includes(`🎉`) ? goal : goal.concat(` 🎉`),
    // ]);
    setGoalsList([...goalsList.filter((a) => a !== goal)]);
    setGoalsCompletedList([...goalsCompletedList, goal]);
    setIsCompletedGoal(true);
    // goalLIItem.closest("li").classList.add("line-through");
    // console.log(i === goalsList.indexOf(goal));
  };
  const handleGoalDeletion = useCallback(
    (goal: string) => {
      if (goalsList.indexOf(goal) > -1) deleteGoal(goal);
    },
    [goalsList]
  );
  const handleGoalCompletion = useCallback(
    (e: React.SyntheticEvent, goal: string, i: number) => {
      let goalLIItem = (e.currentTarget as HTMLOListElement)!;
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
      completedGoal(goal, goalLIItem, i);
    },
    [goalsList]
  );
  return (
    <div className="flex p-2 text-sm w-full">
      <div className="flex flex-col border-r border-gray-600/30 px-2">
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
        {goalsCompletedList.length ? (
          <>
            Completed Goals List
            <ol className="overflow-auto p-2 list-decimal	list-inside text-base mt-3">
              {goalsCompletedList?.map((goal, i) => (
                <li
                  key={i}
                  className="group flex border border-gray-600/30 mb-2 justify-between hover:bg-[#050708]/20 p-2 rounded-lg w-full"
                >
                  <span className={`text-gray-400 group-hover:text-white`}>
                    {i + 1}- {goal}
                  </span>
                  <div className="actions flex gap-2 items-center">
                    <button
                      type="button"
                      // onClick={(e) => handleGoalCompletion(e, goal)}
                      className="hover:bg-blue-600 text-gray-700 hover:text-white border border-gray-600/30 rounded"
                    >
                      <BiUndo size={20} />
                    </button>
                    <button
                      onClick={() => handleGoalDeletion(goal)}
                      className="text-gray-700 hover:text-red-400"
                      type="button"
                    >
                      <FiTrash2 size={20} />
                    </button>
                  </div>
                </li>
              ))}
            </ol>
          </>
        ) : (
          <div className="border-t border-t-gray-600/30 mt-2 text-gray-400/50 flex flex-col gap-3 flex-grow items-center justify-center">
            {/* <img src={goalImg} /> */}
            <BsCardChecklist size={40} />
            Completed Goals goes here
          </div>
        )}
      </div>
      <div className="flex flex-col overflow-auto px-3 text-white text-xl flex-grow">
        {goalsList.length ? (
          <>
            Goals List
            <ol className="list-decimal	list-inside text-base mt-3">
              {goalsList?.map((goal, i) => (
                <li
                  key={i}
                  className="group flex border border-gray-600/30 mb-2 justify-between hover:bg-[#050708]/20 p-2 rounded-lg w-full"
                >
                  <span className={`text-gray-400 group-hover:text-white`}>
                    {i + 1}- {goal}
                  </span>
                  <div className="actions flex gap-2 items-center">
                    <button
                      type="button"
                      className="text-gray-700 hover:text-white"
                    >
                      <AiOutlineEdit size={20} />
                    </button>
                    {/* {i === goalsList.length - 1 ? (
                      <button
                        type="button"
                        // onClick={(e) => handleGoalCompletion(e, goal)}
                        className="hover:bg-blue-600 text-gray-700 hover:text-white border border-gray-600/30 rounded"
                      >
                        <BiUndo size={20} />
                      </button>
                    ) : ( */}
                    <button
                      type="button"
                      onClick={(e) => handleGoalCompletion(e, goal, i)}
                      className="hover:bg-blue-600 text-gray-700 hover:text-white border border-gray-600/30 rounded"
                    >
                      <BsCheck size={20} />
                    </button>
                    {/* )} */}
                    <button
                      onClick={() => handleGoalDeletion(goal)}
                      className="text-gray-700 hover:text-red-400"
                      type="button"
                    >
                      <FiTrash2 size={20} />
                    </button>
                  </div>
                </li>
              ))}
            </ol>
          </>
        ) : (
          <div className="text-gray-400/50 flex flex-col gap-3 flex-grow items-center justify-center">
            {/* <img src={goalImg} /> */}
            <GiStairsGoal size={100} />
            No more Goals
          </div>
        )}
      </div>
    </div>
  );
};

export default Goals;
