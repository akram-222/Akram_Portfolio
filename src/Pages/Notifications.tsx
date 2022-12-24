import { useEffect, useState } from "react";
import { FaRegDotCircle } from "react-icons/fa";
import { VscCircleFilled } from "react-icons/vsc";
import PageTitle from "../Components/PageTitle";
import Pagination from "../Components/Pagination";
import { __getNotifications } from "../Utils/github/__getNotifications";

const Notifications = ({ onSidebarHide }) => {
  const [notificationsList, setNotificationsList] = useState([]);
  const [isAllChecked, setIsAllChecked] = useState(false);
  useEffect(() => {
    __getNotifications().then((data) => {
      setNotificationsList(data);
      console.log(notificationsList);
    });
  }, []);
  const calcUpdatedNotificationDateInHours = (updatedAt: string) => {
    return new Date().getHours() - 12 - (new Date(updatedAt).getHours() - 12);
  };
  return (
    <>
      <PageTitle
        onSidebarHide={onSidebarHide}
        title={"Notifications"}
        subtitle={""}
        premium_star={"DEV.to articles"}
        className="mb-10 h-fit"
      />

      <div className="overflow-x-auto relative w-full sm:rounded-lg">
        <table className="mx-auto text-left text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-[#161b22] dark:text-gray-400">
            <tr className="border-b dark:border-b-gray-800">
              <th scope="col" className="py-5 w-[95px]">
                <div className="flex justify-center items-center">
                  <input
                    id="checkbox-all-search"
                    type="checkbox"
                    className="w-5 h-5 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-900 dark:border-gray-600"
                    onChange={() => setIsAllChecked(!isAllChecked)}
                  />
                  <label
                    htmlFor="checkbox-all-search"
                    className="mx-2 text-sm font-bold dark:text-white"
                  >
                    All
                  </label>
                </div>
              </th>
              <th></th>
              <th className="w-[15%] text-center"></th>
              <th className="w-[15%] text-center"></th>
              <th className="w-[15%] text-center"></th>
            </tr>
          </thead>
          <tbody>
            {notificationsList &&
              notificationsList?.map(
                (
                  {
                    reason,
                    unread,
                    repository: {
                      name,
                      id,
                      owner: { login },
                    },
                    subject: { title },
                    updated_at,
                  },
                  i
                ) => {
                  return (
                    <tr
                      key={i}
                      className={`${
                        unread ? "dark:bg-[#161b22]" : "dark:bg-gray-800"
                      } bg-white border-l-2 dark:border-l-transparent border-b dark:hover:border-l-[#1f6feb] dark:border-gray-800 dark:hover:bg-[#1b2c43]`}
                    >
                      <td className="py-4 px-1 flex">
                        <div className="flex justify-evenly w-full items-center gap-2">
                          {unread ? (
                            <VscCircleFilled
                              className="-mr-2 dark:text-blue-500"
                              size={25}
                            />
                          ) : (
                            ""
                          )}
                          <input
                            id="checkbox-table-search-3"
                            type="checkbox"
                            className="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                            checked={isAllChecked ? true : false}
                          />
                          <label
                            htmlFor="checkbox-table-search-3"
                            className="sr-only"
                          >
                            checkbox
                          </label>
                          <FaRegDotCircle
                            size={23}
                            className=" dark:text-green-500"
                          />
                        </div>
                      </td>
                      {/* <td className="p-1 w-4">
                        <div className="flex items-center justify-center ">
                          <FaRegDotCircle size={23} />
                        </div>
                      </td> */}
                      <th
                        scope="row"
                        className="expanded py-4  font-medium text-gray-900 whitespace-nowrap dark:text-white"
                      >
                        <div className="top_part whitespace-nowrap">
                          {login}/{name}
                          <span className="mx-2 dark:text-gray-400">#{id}</span>
                        </div>
                        <div className="bottom_part">{title}</div>
                      </th>
                      <td className="py-4 px-6 text-center">+10</td>
                      <td className="py-4 px-6 text-center">{reason}</td>
                      <td className="py-4 px-6 text-center">
                        {calcUpdatedNotificationDateInHours(updated_at)} hours
                        ago
                      </td>
                    </tr>
                  );
                }
              )}
          </tbody>
          {/* <Pagination /> */}
          {/* <nav
          className="flex justify-end gap-4 items-center pt-4"
          aria-label="Table navigation"
        >
          <span className="text-sm font-normal text-gray-500 dark:text-gray-400">
            Showing{" "}
            <span className="font-semibold text-gray-900 dark:text-white">
              1-10
            </span>{" "}
            of{" "}
            <span className="font-semibold text-gray-900 dark:text-white">
              1000
            </span>
          </span>
          <ul className="inline-flex items-center -space-x-px">
            <li>
              <a
                href="#d"
                className="block py-2 px-3 ml-0 leading-tight text-gray-500 bg-white rounded-l-lg border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
              >
                <span className="sr-only">Previous</span>
                <svg
                  className="w-5 h-5"
                  aria-hidden="true"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </a>
            </li>

            <li>
              <a
                href="#d"
                className="block py-2 px-3 leading-tight text-gray-500 bg-white rounded-r-lg border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
              >
                <span className="sr-only">Next</span>
                <svg
                  className="w-5 h-5"
                  aria-hidden="true"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </a>
            </li>
          </ul>
        </nav> */}
        </table>
      </div>
    </>
  );
};

export default Notifications;
