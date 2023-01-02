const Steps = ({ numberOfSteps, isCurrentStep }) => {
  return (
    <div className={`space-y-2 mb-3 dark:text-gray-100`}>
      <h3 className="text-xs font-semibold">
        {isCurrentStep === "Done" ? (
          <span>
            <b className="text-green-400">Congrates 🎉: </b> Your event is about
            to be added, thank you.
          </span>
        ) : (
          <>Step {isCurrentStep}: Fill in order details</>
        )}
      </h3>
      <div className="flex max-w-xs space-x-1">
        {new Array(numberOfSteps).fill("").map((step: string, i: number) => (
          <span
            className={`w-8 h-1 ${
              +isCurrentStep === i + 1
                ? "dark:bg-gray-100"
                : isCurrentStep > i
                ? "dark:bg-green-400"
                : isCurrentStep === "Done"
                ? "dark:bg-green-400"
                : "dark:bg-gray-600"
            }`}
          ></span>
        ))}
      </div>
    </div>
  );
};

export default Steps;
