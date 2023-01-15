import { AiOutlineEdit } from "react-icons/ai";
import { BiExpand, BiUndo } from "react-icons/bi";
import { BsCheck } from "react-icons/bs";
import { FiTrash2 } from "react-icons/fi";

const GoalSnakeItem = ({
  i,
  goalObj,
  handleGoalCompletion,
  handleGoalDeletion,
  handleGoalEdition,
  handleUndoGoalCompletion,
  handleGoalExpandation,
}) => {
  const timeTooltip = `<div className=''>
      <p><b>Creation time</b> :${new Date(
        goalObj.created_at
      ).toLocaleString()}</p>
      <p><b>Completed time</b> :${new Date(
        goalObj.completed_at
      ).toLocaleString()}</p>
      </div>`;
  return (
    <li
      key={i}
      className={`${
        goalObj.isCompleted
          ? "text-xs p-1"
          : "text-sm hover:bg-[#050708]/20 p-2"
      } slide-bottom group flex border border-gray-600/30 mb-2 justify-between  rounded-lg w-full`}
    >
      <span
        data-hint={timeTooltip}
        className={`${
          goalObj.isCompleted
            ? "line-through showHint cursor-help w-[100px]"
            : "group-hover:text-white w-[190px]"
        } text-gray-400 whitespace-nowrap overflow-hidden text-ellipsis`}
      >
        {i + 1}- {goalObj.content}
      </span>
      <span
        className={`${
          goalObj.isCompleted ? "hidden" : "opacity-0 group-hover:opacity-100"
        } text-xs mx-2 flex items-center text-gray-400/50`}
      >
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
              <BsCheck size={18} />
            </button>
          </>
        )}
        <button
          onClick={() => handleGoalDeletion(goalObj)}
          className="text-gray-700/50 hover:text-red-400"
          type="button"
        >
          <FiTrash2 size={18} />
        </button>

        <button
          //   onClick={() => handleGoalDeletion(goalObj)}
          onClick={() => handleGoalExpandation(goalObj)}
          className={`${
            goalObj.isExpanded ? "expanded-goal" : ""
          } text-gray-700/50 hover:text-orange-400`}
          type="button"
        >
          <BiExpand size={18} />
        </button>
      </div>
    </li>
  );
};

export default GoalSnakeItem;
