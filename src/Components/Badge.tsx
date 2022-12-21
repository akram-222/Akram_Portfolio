import { BsPatchCheck, BsPatchMinus } from "react-icons/bs";


const Badge = ({ visibility }) => {
  return (
    <span
      className={`${
        visibility === "public" ? "dark:text-green-400" : "dark:text-rose-400"
      } font-bold inline-flex items-center rounded-full text-sm text-white`}
    >
      {visibility === "private" ? (
        <BsPatchMinus size={22} className="font-bold" />
      ) : (
        <BsPatchCheck size={22} className="font-bold" />
      )}

    </span>
  );
};

export default Badge;
