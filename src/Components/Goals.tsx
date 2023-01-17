import { useState, useEffect, useRef } from "react";
import { GiStairsGoal } from "react-icons/gi";
import { db } from "../firebase";
import { ref, onValue, update } from "firebase/database";
import GoalSnakeItem from "./goalSnakeItem";
import AddGoals from "./AddGoals";
import { BsCardList, BsClockHistory } from "react-icons/bs";
const Goals = () => {
  const [isEdit, setIsEdit] = useState<boolean>(false);
  const goalInputRef = useRef<HTMLInputElement | null>(null);
  const [newGoal, setNewGoal] = useState<string>("");
  const [tempUUID, setTempUUID] = useState<string>("");
  const [goalsList, setGoalsList] = useState<any[]>([]);
  const [currentGoals, setCurrentGoals] = useState(1);
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
  const goalSnakeItemVar = (i: number, goalObj) => (
    <GoalSnakeItem
      i={i}
      key={i}
      goalObj={goalObj}
      handleGoalEdition={handleGoalEdition}
      handleUndoGoalCompletion={handleUndoGoalCompletion}
    />
  );

  const goals = {
    0: goalsList?.filter((goal) => goal.isCompleted),
    1: goalsList?.filter((goal) => !goal.isCompleted),
  };

  return (
    <div className="flex p-2 text-sm w-full ">
      {/* {currentGoals ? ( */}
      <div
        className={`${
          currentGoals
            ? "w-[30%] px-2 opacity-100"
            : "transition-all w-0 p-0 opacity-0"
        } transition-all flex flex-col relative border-r border-gray-600/20 overflow-hidden `}
      >
        <AddGoals
          newGoal={newGoal}
          goalInputRef={goalInputRef}
          handleAddingNewGoal={handleAddingNewGoal}
          setNewGoal={setNewGoal}
          isEdit={isEdit}
          handleSubmitChange={handleSubmitChange}
        />
      </div>
      {/* // ) : null} */}
      <div className="flex flex-col overflow-auto px-3 text-white text-xl flex-grow">
        <div className="flex justify-between items-center">
          <span>{!currentGoals ? "Completed" : "In Progress"} List</span>
          <button type="button" onClick={() => setCurrentGoals(+!currentGoals)}>
            {currentGoals ? (
              <BsCardList className="text-green-500" size={20} />
            ) : (
              <BsClockHistory className="text-yellow-500" size={20} />
            )}
          </button>
        </div>
        {goals[currentGoals].length ? (
          <>
            <ol className="flex flex-col flex-grow list-decimal	list-inside text-base mt-3">
              {goals[currentGoals].map((goalObj, i) =>
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
