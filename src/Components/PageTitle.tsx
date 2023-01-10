import IconButton from "./IconButton";
import BreadCrumb from "./BreadCrumb";
import { BsFillStarFill, BsMenuApp, BsXCircle } from "react-icons/bs";
import { AiOutlineDoubleRight } from "react-icons/ai";
const PageTitle = ({
  onSidebarHide,
  title,
  subtitle,
  premium_star,
  className,
  is_premium,
}) => {
  return (
    <>
      <div className={`${className} flex flex-col w-full justify-between`}>
        <button
          onClick={onSidebarHide}
          type="button"
          className={`block sm:hidden self-end mr-2 mt-2`}
        >
          <BsMenuApp size={20} />
        </button>

        <BreadCrumb />
        <div className="">
          <div className="flex items-center">
            <div className="text-3xl font-bold text-white">{title}</div>
            {/* <Icon path="res-react-dash-premium-star" /> */}
            {is_premium ? (
              <div className="flex items-center p-2 bg-card ml-2 rounded-xl">
                <BsFillStarFill
                  size={16}
                  className="mb-1 dark:text-yellow-500"
                />
                <div className="ml-2 font-bold text-premium-yellow">
                  {premium_star}
                </div>
              </div>
            ) : (
              ""
            )}
          </div>
          <div className="flex items-center">
            <AiOutlineDoubleRight size={16} />
            <div className="ml-2">{subtitle}</div>
          </div>
        </div>
      </div>
    </>
  );
};
export default PageTitle;
