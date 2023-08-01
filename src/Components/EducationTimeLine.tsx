import { BsDownload } from "react-icons/bs";
import { educationData } from "../Utils/localeData/educationData";
const EducationTimeLine = () => {
  return (
    <div className="flex flex-col">
      <h3 className="mb-5 border-gray-600/30 border font-bold bg-indigo-200 text-black dark:bg-card p-2 rounded-t-lg dark:text-gray-100">
        <span className="text-gray-400/30">#4</span> Education
      </h3>
      <ol className="relative border-l ml-4 lg:ml-0 border-gray-200 dark:border-gray-700">
        {educationData?.map(
          (
            {
              university,
              icon,
              department,
              grade,
              note,
              isLatest,
              hasCertificate,
              certificateUrl,
            },
            index
          ) => (
            <li key={index} className="mb-10 ml-6">
              <span className="flex absolute -left-3 justify-center items-center w-6 h-6 bg-blue-200 rounded-full ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
                {icon}
              </span>
              <h3 className="flex items-center mb-1 ml-1 text-lg font-semibold text-gray-900 dark:text-white">
                {university}
                {isLatest ? (
                  <span className="text-blue-800 text-sm mr-2 px-2.5 py-0.5 rounded dark:bg-[#171717] dark:text-blue-400 border dark:border-gray-600/30 ml-3">
                    Latest
                  </span>
                ) : null}
              </h3>
              <span>{department}</span>
              <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                Grade: {grade}
              </time>
              <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">
                {note}
              </p>
              {hasCertificate ? (
                <a
                  href={certificateUrl}
                  className="inline-flex  py-2 px-3 text-sm font-semibold text-gray-900 bg-white rounded-lg border dark:bg-[#171717] dark:border-gray-600/30 hover:bg-gray-100 hover:text-blue-700  dark:text-gray-400  dark:hover:text-white dark:hover:bg-gray-700"
                >
                  <BsDownload className="mr-2" />
                  Certificate
                </a>
              ) : null}
            </li>
          )
        )}
      </ol>
    </div>
  );
};

export default EducationTimeLine;
