import Steps from "./Steps";
import { useState } from "react";
import { BsArrowRightShort } from "react-icons/bs";
const AddNewEvent = () => {
  const [isCurrentStep, setCurrentStep] = useState<number | "Done">(1);
  const numberOfSteps: number = 3;
  const handleCurrentStep = () => {
    if (+isCurrentStep < numberOfSteps) setCurrentStep(+isCurrentStep + 1);
    if (+isCurrentStep === numberOfSteps) setCurrentStep("Done");
    if (isCurrentStep === "Done") return;
  };
  return (
    <div className="absolute z-20 flex items-center justify-center absolute top-0 w-full h-full dark:bg-[#171717]">
      <form className="flex flex-col border w-1/2 p-4  dark:border-gray-600/30 rounded-lg">
        <Steps numberOfSteps={numberOfSteps} isCurrentStep={isCurrentStep} />
        <div className="flex border-t dark:border-gray-600/30 flex-col items-start mb-6">
          <div className="w-full mt-8">
            <label
              htmlFor="first_name"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Event title:
            </label>
            <input
              type="text"
              id="first_name"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm block w-full p-2.5 dark:bg-transparent dark:border-gray-600/30 dark:placeholder-gray-400 dark:text-white"
              placeholder="Type your event here..."
              required
            />
          </div>
        </div>
        <button
          type="button"
          onClick={() => handleCurrentStep()}
          className="ml-auto inline-flex items-center gap-2 text-blue-400 text-sm sm:w-auto px-3 py-1.5 text-center border dark:border-gray-600/30"
        >
          {isCurrentStep !== "Done" ? (
            <>
              Next <BsArrowRightShort size={20} />
            </>
          ) : (
            "Finish"
          )}
        </button>
      </form>
    </div>
  );
};

export default AddNewEvent;
