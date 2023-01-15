const ValidatorBtn = ({
  newGoal,
  setNewGoal,
  uid,
  set,
  reference,
  db,
  isEdit,
  handleSubmitChange,
}) => {
  const writeGoalToDatabase = () => {
    const uuid = uid();
    set(reference(db, `/${uuid}`), {
      goal: newGoal,
      uuid,
      isCompleted: false,
      created_at: new Date().toISOString(),
      completed_at: "",
    });
    setNewGoal("");
  };
  return (
    <>
      {newGoal.length < 3 ? (
        <span className="text-red-400 mt-2">Enter at least 3 characters</span>
      ) : /^[a-zA-z]\w+( \w+)*$/.test(newGoal) === false ? (
        <span className="text-red-400 mt-2">not allowed input</span>
      ) : isEdit ? (
        <button
          type="button"
          onClick={() => handleSubmitChange()}
          className="text-sm px-3 py-1 bg-teal-700 text-white rounded"
        >
          Update
        </button>
      ) : (
        <button
          type="button"
          onClick={writeGoalToDatabase}
          className="text-sm px-3 py-1 bg-blue-600 text-white rounded"
        >
          Add
        </button>
      )}
    </>
  );
};

export default ValidatorBtn;
