// import { useEffect, useState } from "react";

import { SyntheticEvent } from "react";

// const Tooltip = ({ isHidden }) => {
//   const [coords, setCoords] = useState({ x: 0, y: 0 });
//   useEffect(() => {
//     document.addEventListener("mousemove", (e) => {
//       setCoords({ x: e.clientX, y: e.clientY });
//     });
//   }, []);
//   return (
//     <>
//       <div
//         role="tooltip"
//         style={{
//           top: `${coords.y - 36}px`,
//           left: `${coords.x - 60}px`,
//         }}
//         className={`${
//           isHidden ? "hidden" : ""
//         } inline-block absolute z-[9999] py-2 px-3 text-sm font-medium text-white bg-gray-900 rounded-lg shadow-sm tooltip dark:bg-gray-700`}
//       >
//         Tooltip content
//         <div className="tooltip-arrow" data-popper-arrow></div>
//       </div>
//     </>
//   );
// };

// export default Tooltip;

window.addEventListener("mouseover", () => {
  let hint = document.querySelector(".hint") as HTMLElement,
    ele = document.querySelectorAll<HTMLElement>(".showHint");
  for (let i = 0; i < ele.length; i++) {
    ele[i].onmousemove = (e) => {
      hint.classList.remove("hidden");
      hint.style.left = `${e.pageX + 5}px`;
      hint.style.top = `${
        e.clientY - hint.getBoundingClientRect().height + 50
      }px`;
      let target = e.currentTarget as HTMLElement;
      hint.textContent = target!.getAttribute("data-hint");
    };
    ele[i].onmouseleave = () => {
      hint.classList.add("hidden");
    };
  }
});

const Tooltip = () => {
  return (
    <div className="hint hidden dark:bg-rose-400 cursor-default text-sm py-1 w-fit absolute text-white z-[9999]"></div>
  );
};

export default Tooltip;
