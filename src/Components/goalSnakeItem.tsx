import { useState } from "react";
import { AiOutlineEdit } from "react-icons/ai";
import { BiUndo } from "react-icons/bi";
import {
  BsCardImage,
  BsCheck,
  BsTextareaT,
  BsCheckCircle,
  BsXCircle,
} from "react-icons/bs";
import { CgTrash } from "react-icons/cg";
import { FiTrash2 } from "react-icons/fi";
import { TbMaximize, TbMinimize } from "react-icons/tb";
import { ref, remove, update } from "firebase/database";
import { db } from "../firebase";
import { useRef } from "react";
import { handleGoalCompletion } from "./goals/operations/goalCompletion";
import { deleteFileFromFirebaseStorage } from "../firebase/storage/deleteFile";
import { uploadFileToFirebaseStorage } from "../firebase/storage/uploadFile";
const GoalSnakeItem = ({
  i,
  goalObj,
  handleGoalEdition,
  handleUndoGoalCompletion,
}) => {
  const uploadGoalImageInputRef = useRef<HTMLInputElement | null>(null);
  const [uploadProgress, setUploadProgress] = useState(0);
  const [summaryVal, setSummaryVal] = useState("Add Summary");
  const [isOpen, setOpen] = useState(false);
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
    uploadFileToFirebaseStorage(file, goalObj, setUploadProgress);
  };
  const handleAddingGoalSummary = (goalObj) => {
    update(ref(db, `/${goalObj.uuid}`), {
      ...goalObj,
      summary: summaryVal,
    });
    setOpen(false);
  };
  const handleGoalSummaryDeletion = (goalObj) => {
    update(ref(db, `/${goalObj.uuid}`), {
      ...goalObj,
      summary: null,
    });
    setOpen(false);
  };
  const handleRemovingGoal = (goalObj) => {
    remove(ref(db, `/${goalObj.uuid}`));
    deleteFileFromFirebaseStorage(goalObj);
  };
  return (
    <li
      key={i}
      className={`${
        goalObj.isCompleted
          ? "text-xs p-1"
          : "text-sm hover:bg-[#050708]/20 p-2"
      } ${
        goalObj.isExpanded && !goalObj.isCompleted
          ? "h-full p-2.5 flex-col"
          : ""
      } 
      
      transition-all duration-600 slide-bottom group flex border border-gray-600/30 mb-2 justify-between  rounded-lg w-full`}
    >
      <div
        data-hint={timeTooltip}
        className={`${
          goalObj.isCompleted
            ? "line-through showHint cursor-help w-[100px]"
            : "group-hover:text-white w-[160px]"
        } ${
          goalObj.isExpanded
            ? "flex flex-col justify-between flex-grow  rounded !w-full p-2"
            : ""
        }  ${
          !goalObj.isCompleted && goalObj.isExpanded ? "bg-details" : ""
        } text-gray-400 whitespace-nowrap overflow-hidden text-ellipsis`}
      >
        <h3 className="flex gap-2">
          {i + 1}- {goalObj.content}
          <button
            type="button"
            onClick={() => handleGoalEdition(goalObj)}
            className={`${
              goalObj.isCompleted || !goalObj.isExpanded ? "hidden" : ""
            } text-gray-700/50 hover:text-white`}
          >
            <AiOutlineEdit size={20} />
          </button>
        </h3>
        <div
          className={`${
            goalObj.isCompleted || !goalObj.isExpanded ? "hidden" : ""
          } goal_content flex-grow py-3 h-28 flex gap-2`}
        >
          {goalObj.summary && goalObj.isExpanded && !goalObj.isCompleted ? (
            <div className="w-1/3 flex flex-grow bg-card rounded p-2 relative">
              <div
                className="break-all whitespace-pre-line"
                style={{ inlineSize: "230px" }}
              >
                {goalObj.summary}
              </div>
              <button
                onClick={() => handleGoalSummaryDeletion(goalObj)}
                className="p-0.5 bg-red-600/20 rounded absolute right-2 text-rose-400"
              >
                <CgTrash size={17} />
              </button>
            </div>
          ) : (
            <>
              <button
                onClick={() => setOpen(true)}
                className={`${
                  !isOpen ? "" : "hidden"
                } flex-grow bg-card hover:bg-[#050708]/80 rounded flex flex-col items-center justify-center gap-2`}
              >
                <BsTextareaT size={30} />
                No Summary, Click to add
              </button>
              <div
                className={`${
                  isOpen ? "" : "hidden"
                } relative gap-2 flex flex-col flex-grow`}
              >
                <div className="flex gap-2 justify-end items-center">
                  <button
                    onClick={() => setOpen(false)}
                    className="hover:text-red-500 text-red-400"
                  >
                    <BsXCircle size={20} />
                  </button>
                  <button
                    onClick={() => handleAddingGoalSummary(goalObj)}
                    className="hover:text-green-500 text-green-400"
                  >
                    <BsCheckCircle size={20} />
                  </button>
                </div>
                <textarea
                  value={summaryVal}
                  onChange={(e) => setSummaryVal(e.target!.value)}
                  placeholder="content"
                  className={`p-2 text-white resize-none h-full w-full bg-card rounded`}
                ></textarea>
              </div>
            </>
          )}
          {goalObj.goalImgUrl ? (
            <img
              className="bg-card self-center h-full w-28 rounded-lg"
              src={goalObj.goalImgUrl}
              alt="goal_memory"
            />
          ) : (
            <div
              // onClick={(e) => handleUploadGoalImage(e, goalObj)}
              className="items-center relative hover:bg-[#050708]/80 flex-col gap-2 justify-center flex bg-card self-center h-full w-28 rounded-lg"
            >
              <BsCardImage className="absolute" size={30} />
              <input
                ref={uploadGoalImageInputRef}
                onChange={(e) => handleUploadGoalImage(e, goalObj)}
                type="file"
                className="h-full cursor-pointer z-10 w-full text-[0px] file:text-blue-400 file:font-bold file:text-xs file:border-0 file:bg-transparent"
                id="file"
                name="file"
                accept="image/*"
                disabled={uploadProgress > 0 ? true : false}
              />
              {/* Progress */}
              <div
                className={`${
                  uploadProgress > 0 ? "" : "hidden"
                } absolute bottom-5`}
              >
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
          goalObj.isExpanded ? "my-2 opacity-100" : ""
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
              onClick={() => handleGoalCompletion(goalObj)}
              className="hover:bg-blue-600 text-gray-700/50 hover:text-white border border-gray-600/30 rounded"
            >
              <BsCheck size={18} />
            </button>
            <button
              onClick={() =>
                update(ref(db, `/${goalObj.uuid}`), {
                  ...goalObj,
                  isExpanded: !goalObj.isExpanded,
                })
              }
              className={`text-gray-700/50 hover:text-orange-400`}
              type="button"
            >
              {goalObj.isExpanded ? (
                <TbMinimize size={18} />
              ) : (
                <TbMaximize size={18} />
              )}
            </button>
          </>
        )}
        <button
          onClick={() => handleRemovingGoal(goalObj)}
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
