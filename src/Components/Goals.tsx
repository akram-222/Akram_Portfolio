//@ts-ignore
import confetti from "https://cdn.skypack.dev/canvas-confetti@1";
import ValidatorBtn from "./ValidatorBtn";
import { useState, useEffect, useRef, useCallback } from "react";
import { AiOutlineEdit } from "react-icons/ai";
import { GiStairsGoal } from "react-icons/gi";
import { HiOutlineSwitchVertical } from "react-icons/hi";
import { db } from "../firebase";
import { uid } from "uid";
import { set, ref, onValue, remove, update } from "firebase/database";
import {
  BsCardChecklist,
  BsCheck,
  BsCheckCircleFill,
  BsXCircle,
} from "react-icons/bs";
import { FiTrash2 } from "react-icons/fi";
import { BiUndo } from "react-icons/bi";
const Goals = () => {
  const [isEdit, setIsEdit] = useState<boolean>(false);
  const goalInputRef = useRef<HTMLInputElement | null>(null);
  const [isUpdatedProcessDoneSuccessfully, setUpdatedProcessStatus] =
    useState<boolean>(false);
  const [updatedGoalInputValue, setUpdatedGoalInputValue] = useState("");
  const UpdatedGoalInputRef = useRef<HTMLInputElement | null>(null);

  const [newGoal, setNewGoal] = useState<string>("");
  const [tempUUID, setTempUUID] = useState<string>("");
  const [goalsList, setGoalsList] = useState<any[]>([]);
  const [goalsCompletedList, setGoalsCompletedList] = useState<string[]>([]);
  const handleAddingNewGoal = (e: React.SyntheticEvent) => {
    let inputGoalVal = (e.currentTarget as HTMLInputElement)!.value;
    setNewGoal(inputGoalVal);
  };
  useEffect(() => {
    onValue(ref(db), (snapshot) => {
      setGoalsList([]);
      const data = snapshot.val();
      if (data !== null) {
        Object.values(data).map((goal) => {
          return setGoalsList((oldGoals) => [...oldGoals, goal]);
        });
      }
    });
  }, []);
  const handleGoalDeletion = (goalObj) => {
    remove(ref(db, `/${goalObj.uuid}`));
  };
  const handleGoalEdition = (goalObj) => {
    setIsEdit(true);
    setTempUUID(goalObj.uuid);
  };
  const handleSubmitChange = () => {
    update(ref(db, `/${tempUUID}`), {
      newGoal,
      uuid: tempUUID,
    });
    setNewGoal("");
    setIsEdit(false);
  };
  return (
    <div className="flex p-2 text-sm w-full ">
      <div
        className={`flex flex-col relative border-r border-gray-600/20 px-2 overflow-auto `}
      >
        <h2 className="text-white text-2xl font-bold my-2 text-center">
          {new Date().getFullYear()} Goals
        </h2>
        <form className="flex flex-col items-start">
          <label htmlFor="goalInput">Add new goal :</label>
          <input
            className="mt-1 placeholder:text-gray-500 placeholder:text-sm  dark:bg-gray-700/20 h-8 rounded px-2"
            id="goalInput"
            type="text"
            placeholder="Goal..."
            onChange={(e) => handleAddingNewGoal(e)}
            value={newGoal}
            ref={goalInputRef}
          />
          <div>
            <ValidatorBtn
              db={db}
              set={set}
              reference={ref}
              uid={uid}
              newGoal={newGoal}
              goalsList={goalsList}
              setGoalsList={setGoalsList}
              goalsCompletedList={goalsCompletedList}
              setNewGoal={setNewGoal}
            />
          </div>
        </form>
        <div className="border-t flex flex-col flex-grow border-t-gray-600/30 mt-2 ">
          {goalsCompletedList.length ? (
            <>
              <span className="mt-2 text-center">Completed Goals List</span>
              <ol className="list-decimal	list-inside text-sm mt-3">
                {goalsCompletedList?.map((goal, i) => (
                  <li
                    key={i}
                    className="slide-bottom line-through flex border border-gray-600/30 mb-2 justify-between p-1 rounded-lg w-full"
                  >
                    <span className={``}>
                      {i + 1}- {goal}
                    </span>
                    <div className="actions flex gap-2 items-center">
                      <button
                        type="button"
                        // onClick={() => handleGoalUndo(goal)}
                        className="hover:bg-blue-600 text-gray-700 hover:text-white border border-gray-600/30 rounded"
                      >
                        <BiUndo size={20} />
                      </button>
                    </div>
                  </li>
                ))}
              </ol>
            </>
          ) : (
            <div className="text-gray-400/50 animate-scaleUpCenter gap-3 flex flex-col flex-grow justify-center items-center">
              {/* <img src={goalImg} /> */}
              <BsCardChecklist size={40} />
              Completed Goals goes here
            </div>
          )}
        </div>
      </div>
      <div className="flex flex-col overflow-auto px-3 text-white text-xl flex-grow">
        {goalsList.length ? (
          <>
            In Progress Goals ⌛
            <ol className="list-decimal	list-inside text-base mt-3">
              {goalsList?.map((goalObj, i) => (
                <li
                  key={i}
                  className="slide-bottom group flex border border-gray-600/30 mb-2 justify-between hover:bg-[#050708]/20 p-2 rounded-lg w-full"
                >
                  <span className={`text-gray-400 group-hover:text-white`}>
                    {i + 1}- {goalObj.goal}
                  </span>
                  <div className="actions flex gap-2 items-center">
                    <button
                      type="button"
                      onClick={() => handleGoalEdition(goalObj)}
                      className="text-gray-700/50 hover:text-white"
                    >
                      <AiOutlineEdit size={20} />
                    </button>
                    {isEdit ? (
                      <button onClick={handleSubmitChange}>Update</button>
                    ) : null}
                    <button
                      type="button"
                      // onClick={(e) => handleGoalCompletion(goal)}
                      className="hover:bg-blue-600 text-gray-700/50 hover:text-white border border-gray-600/30 rounded"
                    >
                      <BsCheck size={20} />
                    </button>
                    {/* )} */}
                    <button
                      onClick={() => handleGoalDeletion(goalObj)}
                      className="text-gray-700/50 hover:text-red-400"
                      type="button"
                    >
                      <FiTrash2 size={20} />
                    </button>
                    <button
                      className={`${
                        goalsList.length > 1 ? "" : "hidden"
                      } animate-scaleUpCenter text-gray-700/50 hover:text-white`}
                      // onClick={() => handleGoalsSwapping(i)}
                    >
                      <HiOutlineSwitchVertical size={18} />
                    </button>
                  </div>
                </li>
              ))}
            </ol>
          </>
        ) : (
          <div className="text-gray-400/50 flex animate-scaleUpCenter flex-col gap-3 flex-grow items-center justify-center">
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
