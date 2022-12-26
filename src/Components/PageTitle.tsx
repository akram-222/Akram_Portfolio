import Icon from "./Icon";
import IconButton from "./IconButton";
import BreadCrumb from "./BreadCrumb"
const PageTitle = ({
  onSidebarHide,
  title,
  subtitle,
  premium_star,
  className,
}) => {
  return (
    <>
    <div className={`${className} flex flex-col w-full justify-between`}>
    <BreadCrumb />
      <div className="">
        <div className="flex items-center">
          <div className="text-3xl font-bold text-white">{title}</div>
          <div className="flex items-center p-2 bg-card ml-2 rounded-xl">
            <Icon path="res-react-dash-premium-star" />

            <div className="ml-2 font-bold text-premium-yellow">
              {premium_star}
            </div>
          </div>
        </div>
        <div className="flex items-center">
          <Icon path="res-react-dash-date-indicator" className="w-3 h-3" />
          <div className="ml-2">
            {subtitle}
          </div>
        </div>
      </div>
      <IconButton
        icon="res-react-dash-sidebar-open"
        className="block sm:hidden"
        onClick={onSidebarHide}
      />
      
    </div>
    </>
  );
};
export default PageTitle;
