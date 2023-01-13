//@ts-ignore
import confetti from "https://cdn.skypack.dev/canvas-confetti@1";
import { useCallback, useState } from "react";
const ValidatorBtn = ({ newGoal, goalsList, setGoalsList }) => {
  const onClick = useCallback(() => {
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
    let uniqueGoals = new Set([...goalsList, newGoal.trim()]);
    setGoalsList([...uniqueGoals]);
  }, [newGoal]);
  return (
    <>
      {newGoal.length < 3 ? (
        <span className="text-red-400">3 or more chars are required</span>
      ) : goalsList.indexOf(newGoal) !== -1 ? (
        <span className="text-red-400">Duplicated goal</span>
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
