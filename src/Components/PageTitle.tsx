import BreadCrumb from "./BreadCrumb";
import { BsFillStarFill } from "react-icons/bs";
import { AiOutlineDoubleRight } from "react-icons/ai";
import { CgMenuLeft } from "react-icons/cg";
const PageTitle = ({
  
  title,
  subtitle,
  premium_star,
  className,
  is_premium,
}) => {
  return (
    <>
      <div className={`${className} p-2 flex flex-col w-full justify-between`}>
        <BreadCrumb />
        <div className="">
          <div className="flex items-center">
            <div className="text-2xl flex items-center sm:text-3xl font-bold dark:text-white">{title}</div>
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
          <div className="flex items-center text-xs lg:text-sm">
            <AiOutlineDoubleRight size={16} />
            <div className="ml-2">{subtitle}</div>
          </div>
        </div>
      </div>
    </>
  );
};
export default PageTitle;
