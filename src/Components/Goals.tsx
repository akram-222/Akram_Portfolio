//@ts-ignore
import confetti from "https://cdn.skypack.dev/canvas-confetti@1";
import { useCallback, useState } from "react";
const Goals = () => {
  const [newGoal, setNewGoal] = useState<string>("");
  const [goalsList, setGoalsList] = useState<string[]>([]);
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
  const handleAddingNewGoal = (e: React.SyntheticEvent) => {
    let inputGoalVal = (e.currentTarget as HTMLInputElement)!.value;
    setNewGoal(inputGoalVal);
  };
  return (
    <div className="flex p-2">
      <div className="border-r border-gray-600/30 px-2">
        <h2 className="text-white text-2xl font-bold my-2">2023 Goals</h2>
        <form className="flex flex-col items-start">
          <label htmlFor="goalInput">Add new goal :</label>
          <input
            className="mt-1 placeholder:text-gray-500 placeholder:text-sm  dark:bg-gray-700/20 h-8 rounded px-2"
            id="goalInput"
            type="text"
            placeholder="Type Your goal here"
            onChange={(e) => handleAddingNewGoal(e)}
            value={newGoal}
          />
          {newGoal.length ? (
            <button
              type="button"
              onClick={onClick}
              className="text-sm px-3 py-1 mt-2 bg-blue-600 text-white rounded"
            >
              Add
            </button>
          ) : (
            ""
          )}
        </form>
      </div>
      <div className="text-white mx-4 text-xl">
        Goals List
        <ul>
          {goalsList?.map((goal, i) => (
            <li key={i}>{goal}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Goals;
