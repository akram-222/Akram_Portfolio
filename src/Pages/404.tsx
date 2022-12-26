import { Link } from "react-router-dom";
import sidebarItems from "../Components/SidebarItems";
const NotFoundRoute = () => {
  return (
    <div className="h-screen w-screen bg-gray-100">
      {/* <!-- drawer component --> */}
      <div className="flex flex-col justify-center w-full h-full overflow-y-auto bg-white dark:bg-card p-10">
        <div className="text-5xl text-center font-dark font-bold">404</div>
        <p className="text-2xl text-center md:text-3xl font-light leading-normal">
          Sorry we couldn't find this page.{" "}
        </p>
        <p className="mb-8 text-center">
          But dont worry, you can find plenty of other things on our{" "}
          <Link to="/dashboard" className="hover:underline text-blue-600">
            dashboard
          </Link>
          .
        </p>

        <p className="mb-4 text-center">
          Aslo you can search about what is in your mind from{" "}
          <Link to="/search" className="hover:underline text-blue-600">
            here
          </Link>
        </p>
        <div className="grid grid-cols-3 gap-4 p-4 lg:grid-cols-4">
          {[...sidebarItems[0], ...sidebarItems[1]].map((item, i) => (
            <div
              key={i}
              className="p-4 rounded-lg cursor-pointer dark:border dark:bg-[#161b22] dark:border-gray-700"
            >
              <div
                className={`p-2 mx-auto mb-2 max-w-[48px] ${item.color1} rounded-full w-18 h-18`}
              >
                {item.icon}
               
              </div>
              <div className="font-medium text-center text-gray-500 dark:text-gray-400">
                {item.title}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
export default NotFoundRoute;
