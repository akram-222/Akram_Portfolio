import { AiOutlineEdit } from "react-icons/ai";
import { BiUndo } from "react-icons/bi";
import { BsCheck } from "react-icons/bs";
import { FiTrash2 } from "react-icons/fi";

const GoalSnakeItem = ({
  i,
  goalObj,
  handleAddingNewGoal,
  handleGoalCompletion,
  handleGoalDeletion,
  handleGoalEdition,
  handleSubmitChange,
  handleUndoGoalCompletion,
}) => {
  return (
    <li
      key={i}
      className={`slide-bottom group flex border border-gray-600/30 mb-2 justify-between hover:bg-[#050708]/20 p-2 rounded-lg w-full`}
    >
      <span
        className={`${
          goalObj.isCompleted ? "line-through" : ""
        } flex-grow text-gray-400 group-hover:text-white`}
      >
        {i + 1}- {goalObj.goal}
      </span>
      <span className="text-xs mx-2 flex items-center opacity-0 group-hover:opacity-100 text-gray-400/50">
        {new Date(goalObj.created_at).toLocaleString()}
      </span>
      <div className="actions flex gap-2 items-center">
        {goalObj.isCompleted ? (
          <button
            type="button"
            onClick={() => handleUndoGoalCompletion(goalObj)}
            className="text-gray-700/50 hover:text-white"
          >
            <BiUndo size={20} />
          </button>
        ) : (
          <>
            <button
              type="button"
              onClick={() => handleGoalEdition(goalObj)}
              className="text-gray-700/50 hover:text-white"
            >
              <AiOutlineEdit size={20} />
            </button>

            <button
              type="button"
              onClick={() => handleGoalCompletion(goalObj)}
              className="hover:bg-blue-600 text-gray-700/50 hover:text-white border border-gray-600/30 rounded"
            >
              <BsCheck size={20} />
            </button>
          </>
        )}
        <button
          onClick={() => handleGoalDeletion(goalObj)}
          className="text-gray-700/50 hover:text-red-400"
          type="button"
        >
          <FiTrash2 size={20} />
        </button>
      </div>
    </li>
  );
};

export default GoalSnakeItem;
