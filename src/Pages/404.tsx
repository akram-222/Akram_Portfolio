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
            // <MenuItem key={i.id} item={i} onClick={setSelected} />
            <div className="p-4 rounded-lg cursor-pointer dark:border dark:border-blue-400">
              <div className="flex justify-center items-center p-2 mx-auto mb-2 max-w-[48px] bg-gray-200 dark:bg-gray-500 rounded-full w-18 h-18">
                <svg
                  className="inline w-8 h-8 text-gray-500 dark:text-gray-400"
                  aria-hidden="true"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z"></path>
                  <path d="M12 2.252A8.014 8.014 0 0117.748 8H12V2.252z"></path>
                </svg>
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
