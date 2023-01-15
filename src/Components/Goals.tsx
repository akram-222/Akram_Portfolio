//@ts-ignore
import confetti from "https://cdn.skypack.dev/canvas-confetti@1";
import ValidatorBtn from "./ValidatorBtn";
import { useState, useEffect, useRef } from "react";
import { AiOutlineEdit } from "react-icons/ai";
import { GiStairsGoal } from "react-icons/gi";
import { HiOutlineSwitchVertical } from "react-icons/hi";
import { db } from "../firebase";
import { uid } from "uid";
import { set, ref, onValue, remove, update } from "firebase/database";
import { BsCardChecklist, BsCheck } from "react-icons/bs";
import { FiTrash2 } from "react-icons/fi";
import { BiUndo } from "react-icons/bi";
import GoalSnakeItem from "./goalSnakeItem";
const Goals = () => {
  const [isEdit, setIsEdit] = useState<boolean>(false);
  const goalInputRef = useRef<HTMLInputElement | null>(null);

  const [newGoal, setNewGoal] = useState<string>("");
  const [tempUUID, setTempUUID] = useState<string>("");
  const [goalsList, setGoalsList] = useState<any[]>([]);
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
    setNewGoal(goalObj.goal);
  };
  const handleSubmitChange = () => {
    update(ref(db, `/${tempUUID}`), {
      goal: newGoal,
      uuid: tempUUID,
    });

    setNewGoal("");
    setIsEdit(false);
  };
  const handleGoalCompletion = (goalObj) => {
    update(ref(db, `/${goalObj.uuid}`), {
      ...goalObj,
      isCompleted: true,
    });

    confetti({
      particleCount: 150,
      startVelocity: 30,
      spread: 360,
      angle: 40,
      origin: {
        x: 0.5,
        y: 0,
      },
    });
  };
  const handleUndoGoalCompletion = (goalObj) => {
    update(ref(db, `/${goalObj.uuid}`), {
      ...goalObj,
      isCompleted: false,
    });
  };
  let completedGoals = goalsList?.filter((goal) => goal.isCompleted);
  let inProgressGoals = goalsList?.filter((goal) => !goal.isCompleted);
  const goalSnakeItemVar = (i, goalObj) => (
    <GoalSnakeItem
      i={i}
      goalObj={goalObj}
      handleAddingNewGoal={handleAddingNewGoal}
      handleGoalCompletion={handleGoalCompletion}
      handleGoalDeletion={handleGoalDeletion}
      handleGoalEdition={handleGoalEdition}
      handleSubmitChange={handleSubmitChange}
      handleUndoGoalCompletion={handleUndoGoalCompletion}
    />
  );

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
              setNewGoal={setNewGoal}
              isEdit={isEdit}
              handleSubmitChange={handleSubmitChange}
            />
          </div>
        </form>
        <div className="border-t flex flex-col flex-grow border-t-gray-600/30 mt-2 ">
          <div className="text-gray-400/50 animate-scaleUpCenter gap-3 flex flex-col flex-grow justify-center items-center">
            <ol className="list-decimal	list-inside text-base mt-3">
              {completedGoals.length
                ? completedGoals.map((goalObj, i) =>
                    goalSnakeItemVar(i, goalObj)
                  )
                : "completed goals goes here"}
            </ol>
          </div>
        </div>
      </div>
      <div className="flex flex-col overflow-auto px-3 text-white text-xl flex-grow">
        {/* In Progress Goals ⌛ */}
        {inProgressGoals.length ? (
          <ol className="list-decimal	list-inside text-base mt-3">
            {inProgressGoals.map((goalObj, i) => goalSnakeItemVar(i, goalObj))}
          </ol>
        ) : (
          <div className="text-gray-400/50 flex animate-scaleUpCenter flex-col gap-3 flex-grow items-center justify-center">
            <GiStairsGoal size={100} />
            No more Goals
          </div>
        )}
      </div>
    </div>
  );
};

export default Goals;
