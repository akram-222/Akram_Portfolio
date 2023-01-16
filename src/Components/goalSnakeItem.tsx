import { useState } from "react";
import { AiOutlineEdit } from "react-icons/ai";
import { BiExpand, BiUndo } from "react-icons/bi";
import { BsCardImage, BsCheck } from "react-icons/bs";
import { FiTrash2 } from "react-icons/fi";
import { TbMaximize, TbMinimize } from "react-icons/tb";
import { ref, update } from "firebase/database";
import { db, app } from "../firebase";

import { useRef } from "react";
const GoalSnakeItem = ({
  i,
  goalObj,
  handleGoalCompletion,
  handleGoalDeletion,
  handleGoalEdition,
  handleUndoGoalCompletion,
  handleGoalExpandation,
}) => {
  const uploadGoalImageInputRef = useRef<HTMLInputElement | null>(null);
  const [uploadProgress, setUploadProgress] = useState(0);
  const timeTooltip = `<div className=''>
      <p><b>Creation time</b> :${new Date(
        goalObj.created_at
      ).toLocaleString()}</p>
      <p><b>Completed time</b> :${new Date(
        goalObj.completed_at
      ).toLocaleString()}</p>
      </div>`;

  const handleUploadGoalImage = (e: React.SyntheticEvent, goalObj) => {
    let file = (e.target as HTMLInputElement)!.files![0];
    const storageRef = app.storage().ref(file.name);
    storageRef.put(file).on(
      "state_changed",
      (snap) => {
        let percentage = (snap.bytesTransferred / snap.totalBytes) * 100;
        setUploadProgress(percentage);
      },
      (err) => console.log(err),
      async () => {
        const url = await storageRef.getDownloadURL();
        await update(ref(db, `/${goalObj.uuid}`), {
          ...goalObj,
          goalImgUrl: url,
        });
        setUploadProgress(0);
      }
    );
  };

  return (
    <li
      key={i}
      className={`${
        goalObj.isCompleted
          ? "text-xs p-1"
          : "text-sm hover:bg-[#050708]/20 p-2"
      } ${
        goalObj.isExpanded ? "h-full p-2.5 flex-col" : "h-10"
      } transition-all duration-600 slide-bottom group flex border border-gray-600/30 mb-2 justify-between  rounded-lg w-full`}
    >
      <div
        data-hint={timeTooltip}
        className={`${
          goalObj.isCompleted
            ? "line-through showHint cursor-help w-[100px]"
            : "group-hover:text-white w-[160px]"
        } ${
          goalObj.isExpanded
            ? "flex flex-col justify-between flex-grow bg-details rounded !w-full p-2"
            : ""
        } text-gray-400 whitespace-nowrap overflow-hidden text-ellipsis`}
      >
        <h3>
          {i + 1}- {goalObj.content}
        </h3>
        <div className="goal_content flex-grow p-3 flex gap-3">
          <div className="flex-grow bg-card rounded">content</div>
          {goalObj.goalImgUrl ? (
            <img
              className="bg-card self-center h-28 w-28 rounded-lg"
              src={goalObj.goalImgUrl}
              alt="goal_memory"
            />
          ) : (
            <div
              // onClick={(e) => handleUploadGoalImage(e, goalObj)}
              className="items-center hover:bg-[#050708]/80 flex-col gap-2 justify-center flex bg-card self-center h-full w-28 rounded-lg"
            >
              <BsCardImage size={30} />
              <input
                ref={uploadGoalImageInputRef}
                onChange={(e) => handleUploadGoalImage(e, goalObj)}
                type="file"
                className="text-[0px] file:text-blue-400 file:font-bold file:text-xs file:border-0 file:bg-transparent"
                id="file"
                name="file"
              />
              {/* Progress */}
              <div className={`${uploadProgress > 0 ? "" : "hidden"}`}>
                <span className="text-xs text-white">
                  {Math.round(uploadProgress)}%
                </span>
                <div
                  className={`w-20 h-1 w-full bg-gray-200 rounded-full dark:bg-gray-700`}
                >
                  <div
                    className="h-full w-20 bg-red-600 text-xs font-medium text-blue-100 text-center leading-none rounded-full"
                    style={{ width: `${uploadProgress}%` }}
                  ></div>
                </div>
              </div>
              {/* Progress */}
            </div>
          )}
        </div>
      </div>
      <span
        className={`${
          goalObj.isCompleted ? "hidden" : "opacity-0 group-hover:opacity-100"
        } ${
          goalObj.isExpanded ? "my-2" : ""
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
            <button
              onClick={() => handleGoalExpandation(goalObj)}
              className={`text-gray-700/50 hover:text-orange-400`}
              type="button"
            >
              {goalObj.isExpanded ? (
                <TbMaximize size={18} />
              ) : (
                <TbMinimize size={18} />
              )}
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
      </div>
    </li>
  );
};

export default GoalSnakeItem;
