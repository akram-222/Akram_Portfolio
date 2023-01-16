import { ref, update } from "firebase/database";

const ValidatorBtn = ({
  newGoal,
  setNewGoal,
  uid,
  set,
  reference,
  db,
  isEdit,
  tempUUID,
  // handleSubmitChange,
}) => {
  const writeGoalToDatabase = () => {
    const uuid = uid();
    set(reference(db, `/${uuid}`), {
      content: newGoal,
      uuid,
      isCompleted: false,
      isExpanded: false,
      created_at: new Date().toISOString(),
    });
    setNewGoal("");
  };
  const { testInput, lengthLimit, notallowed, updateBtn, addBtn } = {
    testInput: /^[a-zA-z]\w+( \w+)*$/.test(newGoal),
    lengthLimit: (
      <span className="text-red-400 mt-2">Enter at least 3 characters</span>
    ),
    notallowed: <span className="text-red-400 mt-2">not allowed input</span>,
    updateBtn: (
      <button
        type="button"
        onClick={() => {
          update(ref(db, `/${tempUUID}`), {
            content: newGoal,
            uuid: tempUUID,
          });
          setNewGoal("");
          // setIsEdit(false);
        }}
        className="text-sm px-3 py-1 bg-teal-700 text-white rounded"
      >
        Update
      </button>
    ),
    addBtn: (
      <button
        type="button"
        onClick={writeGoalToDatabase}
        className="text-sm px-3 py-1 bg-blue-600 text-white rounded"
      >
        Add
      </button>
    ),
  };

  return (
    <>
      {newGoal.length < 3
        ? lengthLimit
        : testInput === false
        ? notallowed
        : isEdit
        ? updateBtn
        : addBtn}
    </>
  );
};

export default ValidatorBtn;
