const switcher = (
  e: React.SyntheticEvent,
  classValue: string,
  siblingsSelector: string
) => {
  let targetedElement = e.currentTarget as HTMLElement;
  let siblings =
    targetedElement.parentElement!.querySelectorAll(siblingsSelector);
  [...siblings]?.map((sibling) => sibling.classList.remove(classValue));
  targetedElement.classList.add(classValue);
};
export default switcher;
