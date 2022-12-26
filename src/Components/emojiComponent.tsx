import { useEffect, useState, useRef } from "react";
import { __getEmojiList } from "../Utils/github/__gitEmojiList";
const EmojiComponent = ({
  isEmojiComponentHidden,
  setIsEmojiComponentHidden,
}) => {
  const [emojis, setEmojis] = useState({});
  const inputFeild = useRef<HTMLDivElement | null>(null);
  useEffect(() => {
    __getEmojiList().then((mojis) => setEmojis(mojis));
  }, []);
  const showEmojiList = (event: React.SyntheticEvent) => {
    let divTextContent = event.currentTarget as HTMLInputElement;
    if (
      divTextContent.textContent!.length === 1 &&
      divTextContent.textContent!.charAt(0) === ":"
    ) {
      setIsEmojiComponentHidden(false);
    } else {
      setIsEmojiComponentHidden(true);
    }
  };
  const appendEmoji = (emojiValue: string) => {
    let img = document.createElement("img");
    img.className = "mx-1 w-5 h-5";
    img.src = `${emojiValue}`;
    inputFeild.current!.append(img);
    setIsEmojiComponentHidden(true);
    let divTextContent = inputFeild.current as HTMLInputElement;
    if ((divTextContent.childNodes[0] as Text).data === ":") {
      divTextContent.childNodes[0].remove();
    }
  };
  return (
    <>
      <div
        onInput={(e) => showEmojiList(e)}
        contentEditable={true}
        className="cursor-text h-9 flex items-center block mr-4 px-2 py-1 overflow-hidden dark:text-white font-semibold w-[220px] border border-gray-300 rounded bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-transparent dark:border-gray-800 dark:focus:ring-blue-500 dark:focus:border-blue-500"
        placeholder="⭐️ Type : to add emojis"
        ref={inputFeild}
      ></div>
      <div
        className={`${
          isEmojiComponentHidden ? "hidden" : ""
        } border dark:border-gray-700 absolute top-[120%] z-10 flex-col dark:bg-[#161b22] rounded min-w-[230px]`}
      >
        {Object.keys(emojis)
          ?.slice(0, 5)
          .map((emojiKey, i) => (
            <div
              onClick={() => appendEmoji(emojis[emojiKey])}
              key={`${emojiKey}__${i}`}
              className="flex items-center border-b dark:border-gray-700 gap-2 px-3 py-2 dark:hover:bg-[#1f6feb] cursor-pointer"
            >
              <img className="w-5 h-5" src={emojis[emojiKey]} alt="emoji" />
              <span className="font-bold text-lg text-white">{emojiKey}</span>
            </div>
          ))}
      </div>
    </>
  );
};

export default EmojiComponent;
