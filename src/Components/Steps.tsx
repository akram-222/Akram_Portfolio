const Steps = ({ numberOfSteps, isCurrentStep }) => {
  return (
    <div className={`space-y-2 mb-3 dark:text-gray-100`}>
      <h3 className="text-xs font-semibold">Step 3: Fill in order details</h3>
      <div className="flex max-w-xs space-x-1">
        {new Array(numberOfSteps).fill("").map((step: string, i: number) => (
          <span
            className={`w-8 h-1 ${
              +isCurrentStep === i + 1
                ? "dark:bg-gray-100"
                : isCurrentStep > i
                ? "dark:bg-violet-400"
                : isCurrentStep === "Done"
                ? "dark:bg-violet-400"
                : "dark:bg-gray-600"
            }`}
          ></span>
        ))}
      </div>
    </div>
  );
};

export default Steps;
