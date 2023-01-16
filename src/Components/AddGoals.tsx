import ValidatorBtn from "./ValidatorBtn";
import { uid } from "uid";
import { db } from "../firebase";

import { set, ref } from "firebase/database";
import { BiListCheck } from "react-icons/bi";
import GoalSnakeItem from "./goalSnakeItem";
import { useState } from "react";
const AddGoals = ({
  newGoal,
  goalInputRef,
  handleAddingNewGoal,
  setNewGoal,
  isEdit,
  completedGoals,
  handleSubmitChange,
  handleGoalExpandation,
  handleGoalCompletion,
  handleUndoGoalCompletion,
  // handleGoalDeletion,
  handleGoalEdition,
}) => {
  const goalSnakeItemVar = (i: number, goalObj) => (
    <GoalSnakeItem
      i={i}
      key={i}
      goalObj={goalObj}
      handleGoalExpandation={handleGoalExpandation}
      handleGoalCompletion={handleGoalCompletion}
      // handleGoalDeletion={handleGoalDeletion}
      handleGoalEdition={handleGoalEdition}
      handleUndoGoalCompletion={handleUndoGoalCompletion}
    />
  );
  return (
    <>
      <h2 className="text-white text-2xl font-bold my-2 text-center">
        {new Date().getFullYear()} Goals
      </h2>
      <form className="flex flex-col items-start">
        <label htmlFor="goalInput">Add new goal :</label>
        <input
          className="mt-1 mb-2 placeholder:text-gray-500 placeholder:text-sm  dark:bg-gray-700/20 h-8 rounded px-2"
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
      <div className="border-t mt-3 pt-2 flex flex-col flex-grow border-t-gray-600/30 mt-2 ">
        <div className="text-gray-400/50 animate-scaleUpCenter">
          {completedGoals.length ? (
            <>
              Completed Goals
              <ol className="flex flex-col flex-grow list-decimal	list-inside text-base mt-3">
                {completedGoals.map((goalObj, i) =>
                  goalSnakeItemVar(i, goalObj)
                )}
              </ol>
            </>
          ) : (
            <div className="text-gray-400/50 flex animate-scaleUpCenter flex-col gap-3 flex-grow items-center justify-center">
              <BiListCheck size={40} />
              Completed goals goes here
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default AddGoals;
