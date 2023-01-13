const Goals = () => {
  return (
    <div className="flex p-2">
      <div>
        <h2 className="text-white text-2xl font-bold my-2">2023 Goals</h2>
        <form className="flex flex-col items-start">
          <label htmlFor="goalInput">Add new goal</label>
          <input id="goalInput" type="text" />
          <button>Add </button>
        </form>
      </div>
      <div className="text-white mx-4 text-xl">Goals List</div>
    </div>
  );
};

export default Goals;
