function IconButton({ onClick = () => {}, icon = "options", className }) {
  return (
    <button onClick={onClick} type="button" className={`${className} w-4 h-4`}>
      <img
        src={`https://assets.codepen.io/3685267/${icon}.svg`}
        alt=""
        className="w-full h-full"
      />
    </button>
  );
}

export default IconButton;
