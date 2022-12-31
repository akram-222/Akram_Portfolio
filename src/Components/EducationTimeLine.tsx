import { FaGraduationCap } from "react-icons/fa";
import { educationData } from "../Utils/localeData/educationData";
const EducationTimeLine = () => {
  return (
    <>
      <ol className="relative border-l border-gray-200 dark:border-gray-700">
        {educationData?.map(({ university, department, gpa, note }, index) => (
          <li key={index} className="mb-10 ml-6">
            <span className="flex absolute -left-3 justify-center items-center w-6 h-6 bg-blue-200 rounded-full ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
              <FaGraduationCap />
            </span>
            <h3 className="flex items-center mb-1 ml-1 text-lg font-semibold text-gray-900 dark:text-white">
              {university}
              <span className="bg-blue-100 text-blue-800 text-sm font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ml-3">
                Latest
              </span>
            </h3>
            <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
              {department} - Grade: {gpa}
            </time>
            <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">
              {note}
            </p>
            <a
              href="#d"
              className="inline-flex items-center py-2 px-4 text-sm font-medium text-gray-900 bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:outline-none focus:ring-gray-200 focus:text-blue-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-gray-700"
            >
              <svg
                className="mr-2 w-4 h-4"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M6 2a2 2 0 00-2 2v12a2 2 0 002 2h8a2 2 0 002-2V7.414A2 2 0 0015.414 6L12 2.586A2 2 0 0010.586 2H6zm5 6a1 1 0 10-2 0v3.586l-1.293-1.293a1 1 0 10-1.414 1.414l3 3a1 1 0 001.414 0l3-3a1 1 0 00-1.414-1.414L11 11.586V8z"
                  clipRule="evenodd"
                ></path>
              </svg>{" "}
              Certificate
            </a>
          </li>
        ))}
      </ol>
    </>
  );
};

export default EducationTimeLine;
