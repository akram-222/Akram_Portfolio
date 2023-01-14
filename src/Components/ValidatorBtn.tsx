import { useCallback } from "react";
const ValidatorBtn = ({
  newGoal,
  goalsList,
  setGoalsList,
  goalsCompletedList,
}) => {
  const onClick = useCallback(() => {
    let uniqueGoals = new Set([...goalsList, newGoal.trim()]);
    setGoalsList([...uniqueGoals]);
  }, [newGoal]);
  return (
    <>
      {newGoal.length < 3 ? (
        <span className="text-red-400 mt-2">Enter at least 3 characters</span>
      ) : goalsList.indexOf(newGoal) !== -1 ||
        goalsCompletedList.indexOf(newGoal) !== -1 ? (
        <span className="text-red-400 mt-2">Duplicated goal</span>
      ) : /^[A-Za-z\s]+$/.test(newGoal) === false ? (
        <span className="text-red-400 mt-2">
          "{newGoal.substr(newGoal.length - 1, newGoal.length - 2)}" input, not
          allowed
        </span>
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
