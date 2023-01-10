import { BsXCircle } from "react-icons/bs";
function IconButton({ onClick = () => {}, icon = "options", className }) {
  return (
    <button onClick={onClick} type="button" className={`${className}`}>
      <BsXCircle size={20} />
    </button>
  );
}

export default IconButton;
