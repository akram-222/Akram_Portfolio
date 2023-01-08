function IconButton({ onClick = () => {}, icon = "options", className }) {
  return (
    <button
      onClick={onClick}
      type="button"
      className={`${className} self-end w-5 h-5 mt-2 mr-2`}
    >
      <img
        src={`https://assets.codepen.io/3685267/${icon}.svg`}
        alt=""
        className="w-full h-full"
      />
    </button>
  );
}

export default IconButton;
