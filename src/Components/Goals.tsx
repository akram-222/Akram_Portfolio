//@ts-ignore
import confetti from "https://cdn.skypack.dev/canvas-confetti@1";
import { useState, useEffect, useRef } from "react";
import { GiStairsGoal } from "react-icons/gi";
import { db } from "../firebase";
import { ref, onValue, update } from "firebase/database";
import GoalSnakeItem from "./goalSnakeItem";
import AddGoals from "./AddGoals";
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
  const handleGoalEdition = (goalObj) => {
    setIsEdit(true);
    setTempUUID(goalObj.uuid);
    setNewGoal(goalObj.content);
  };
  const handleSubmitChange = () => {
    update(ref(db, `/${tempUUID}`), {
      content: newGoal,
      uuid: tempUUID,
    });
    setNewGoal("");
    setIsEdit(false);
  };

  const handleUndoGoalCompletion = (goalObj) => {
    update(ref(db, `/${goalObj.uuid}`), {
      ...goalObj,
      isCompleted: false,
    });
  };
  let completedGoals = goalsList?.filter((goal) => goal.isCompleted);
  let inProgressGoals = goalsList?.filter((goal) => !goal.isCompleted);
  const goalSnakeItemVar = (i: number, goalObj) => (
    <GoalSnakeItem
      i={i}
      key={i}
      goalObj={goalObj}
      // handleGoalCompletion={handleGoalCompletion}
      handleGoalEdition={handleGoalEdition}
      handleUndoGoalCompletion={handleUndoGoalCompletion}
    />
  );

  return (
    <div className="flex p-2 text-sm w-full ">
      <div
        className={`flex flex-col relative border-r border-gray-600/20 px-2 overflow-auto `}
      >
        <AddGoals
          newGoal={newGoal}
          goalInputRef={goalInputRef}
          handleAddingNewGoal={handleAddingNewGoal}
          setNewGoal={setNewGoal}
          isEdit={isEdit}
          completedGoals={completedGoals}
          handleSubmitChange={handleSubmitChange}
          handleUndoGoalCompletion={handleUndoGoalCompletion}
          handleGoalEdition={handleGoalEdition}
        />
      </div>
      <div className="flex flex-col overflow-auto px-3 text-white text-xl flex-grow">
        {inProgressGoals.length ? (
          <>
            In Progress Goals ⌛
            <ol className="flex flex-col flex-grow list-decimal	list-inside text-base mt-3">
              {inProgressGoals.map((goalObj, i) =>
                goalSnakeItemVar(i, goalObj)
              )}
            </ol>
          </>
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
