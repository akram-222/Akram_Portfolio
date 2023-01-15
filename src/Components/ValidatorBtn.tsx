import { useCallback } from "react";
const ValidatorBtn = ({
  newGoal,
  goalsList,
  setGoalsList,
  goalsCompletedList,
  setNewGoal,
  uid,
  set,
  reference,
  db,
}) => {
  const writeGoalToDatabase = () => {
    const uuid = uid();
    set(reference(db, `/${uuid}`), {
      goal: newGoal,
      uuid,
    });
    setNewGoal("");
  };
  const onClick = useCallback(() => {
    let uniqueGoals = new Set([...goalsList, newGoal.trim()]);
    setGoalsList([...uniqueGoals]);
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
          // onClick={onClick}
          onClick={writeGoalToDatabase}
          className="text-sm px-3 py-1 mt-2 bg-blue-600 text-white rounded"
        >
          Add
        </button>
      )}
    </>
  );
};

export default ValidatorBtn;
