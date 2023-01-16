window.addEventListener("mouseover", () => {
  let hint = document.querySelector(".hint") as HTMLElement,
    ele = document.querySelectorAll<HTMLElement>(".showHint");
  for (let i = 0; i < ele.length; i++) {
    ele[i].onmousemove = (e) => {
      hint.classList.remove("hidden");
      hint.style.left = `${e.pageX - 50}px`;
      hint.style.top = `${
        e.pageY - hint.getBoundingClientRect().height - 10
      }px`;
      let target = e.currentTarget as HTMLElement;
      hint.innerHTML = target!.getAttribute("data-hint")!;
    };
    ele[i].onmouseleave = () => {
      hint.classList.add("hidden");
    };
  }
});

const Tooltip = () => {
  return (
    <div className="hint before:content-[' '] before:bottom-[-4px] before:w-[10px] before:h-[10px] before:absolute dark:before:bg-gray-100 transition-all hidden dark:bg-gray-100 text-black rounded cursor-help text-sm px-3 py-1 w-fit absolute text-white z-[9999]"></div>
  );
};

export default Tooltip;
