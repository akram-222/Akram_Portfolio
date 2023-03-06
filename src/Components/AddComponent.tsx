import { useState } from "react";
import { BsPlus } from "react-icons/bs";
import { MdUnfoldMore } from "react-icons/md";

import { __getNotifications } from "../Utils/github/__getNotifications";
export default function AddComponent() {
  const [isVisible, setIsVisible] = useState(true);

  const [notifications, setNotifications] = useState([]);
  const getNotifications = async () => {
    __getNotifications().then((data) => {
      setNotifications(data);
    });
  };

  return (
    <div
      className={`${isVisible ? "h-80" : ""} rounded-lg bg-card overflow-auto`}
    >
      <div>
        <div className="w-full p-4 add-component-head">
          <div className="flex justify-between items-center">
            <div className="text-white font-bold">New</div>
            <span
              className="cursor-pointer"
              onClick={() => setIsVisible(!isVisible)}
            >
              <MdUnfoldMore />
            </span>
          </div>
        </div>

        <div
          className={`${isVisible ? "" : "hidden"} flex flex-col items-center`}
        >
          <div
            className=""
            style={{
              background: "#414455",
              width: "80px",
              height: "80px",
              borderRadius: "999px",
              transform: "translate(0, -40px)",
            }}
          >
            <img
              src="https://assets.codepen.io/3685267/res-react-dash-rocket.svg"
              alt=""
              className="w-full h-full"
            />
          </div>
          <div className="text-white font-bold mt-3">
            No Components Created Yet
          </div>
          <div className="mt-2">Simply create your first component</div>
          <div className="mt-1">Just click on the button</div>
          <div
            className="flex items-center p-3 mt-3"
            style={{
              background: "#2f49d1",
              borderRadius: "15px",
              padding: "8px 16px",
              justifyContent: "center",
              color: "white",
            }}
          >
            <BsPlus size={25} />
            <div
              className="ml-2"
              onClick={() => {
                getNotifications();
                console.log(notifications);
              }}
            >
              Add Component
            </div>
            <div
              className="ml-2"
              style={{
                background: "#4964ed",
                borderRadius: "15px",
                padding: "4px 8px 4px 8px",
              }}
            >
              129
            </div>
          </div>
        </div>
        {/* <div className="notifications-container">
        {notifications &&
          notifications.map(({id}) => {
            return (
              <NameCard
                key={id}
                id={1}
                name={"name"}
                position={"position"}
                transactionAmount={id}
                rise={true}
                tasksCompleted={3}
                imgId={2}
                className="w-full border-b border-gray-700"
              />
            );
          })}
      </div> */}
      </div>
    </div>
  );
}
