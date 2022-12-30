import { Link, useNavigate } from "react-router-dom";
import sidebarItems from "../Components/SidebarItems";
const NotFoundRoute = () => {
  const navigate = useNavigate();
  return (
    <div className="h-screen w-screen bg-gray-100">
      {/* <!-- drawer component --> */}
      <div className="flex justify-center flex-col w-full h-full overflow-y-auto bg-white dark:bg-card p-10">
        <div className="text-5xl mb-7 text-center dark:text-blue-600 font-dark font-bold">
          404
        </div>
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
<div className="inline-flex justify-center items-center w-full">
    <hr className="flex-grow my-8 h-px bg-gray-200 border-0 dark:bg-gray-700" />
    <span className="absolute  px-3 font-medium text-gray-900 bg-white  dark:text-white dark:bg-[#171717]">OR</span>
</div>
          <h2 className="text-center text-gray-500 font-semibold">Browse one of our Components</h2>
        <div className="flex flex-wrap gap-3 item-center justify-center mt-3">
          {[...sidebarItems[0], ...sidebarItems[1]].map((item, i) => (
            <div
              key={i}
              onClick={() => navigate(`/${item.title.toLocaleLowerCase()}`)}
              className="dark:hover:bg-gray-700 w-1/4 p-4 rounded-lg cursor-pointer dark:border dark:bg-gray-800 dark:border-gray-700"
            >
              <div
                className={`p-2 mx-auto mb-2 max-w-[48px] ${item.color} rounded-full w-18 h-18`}
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
