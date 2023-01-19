import ValidatorBtn from "./ValidatorBtn";
import { uid } from "uid";
import { db } from "../firebase";
import { set, ref } from "firebase/database";
const AddGoals = ({
  newGoal,
  goalInputRef,
  handleAddingNewGoal,
  setNewGoal,
  isEdit,
  handleSubmitChange,
}) => {
  return (
    <div>
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
    </div>
  );
};

export default AddGoals;
