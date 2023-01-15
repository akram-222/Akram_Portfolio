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
        <button onClick={() => handleSubmitChange()}>Update</button>
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
