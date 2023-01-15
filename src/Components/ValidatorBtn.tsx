import { useCallback } from "react";
import { app } from "../base";

const ValidatorBtn = ({
  newGoal,
  goalsList,
  setGoalsList,
  goalsCompletedList,
  setNewGoal,
}) => {
  const onClick = useCallback(() => {
    let uniqueGoals = new Set([...goalsList, newGoal.trim()]);
    setGoalsList([...uniqueGoals]);
    ///////////////////
    // const storageRef = app.storage().ref();
    // let strData = JSON.stringify(goalsList);
    // const fileRef = storageRef.child(strData);
    // fileRef.put(strData).then(() => console.log("file Uploaded"));

    const storageRef = app.storage().ref();
    const fileRef = storageRef.child("[1,2,3]");

    // Write the array
    // storageRef.child(fileRef);

    ///////////
    setNewGoal("");
  }, [newGoal]);
  return (
    <>
      {newGoal.length < 3 ? (
        <span className="text-red-400 mt-2">Enter at least 3 characters</span>
      ) : goalsList.indexOf(newGoal) !== -1 ||
        goalsCompletedList.indexOf(newGoal) !== -1 ? (
        <span className="text-red-400 mt-2">Duplicated goal</span>
      ) : /^[a-zA-z]\w+( \w+)*$/.test(newGoal) === false ? (
        <span className="text-red-400 mt-2">not allowed input</span>
      ) : (
        <button
          type="button"
          onClick={onClick}
          className="text-sm px-3 py-1 mt-2 bg-blue-600 text-white rounded"
        >
          Add
        </button>
      )}
    </>
  );
};

export default ValidatorBtn;
