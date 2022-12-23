import { useEffect, useState } from "react";
import { __getEmojiList } from "../Utils/github/__gitEmojiList";
const EmojiComponent = ({ isEmojiComponentHidden }) => {
  const [emojis, setEmojis] = useState({});
  useEffect(() => {
    __getEmojiList().then((mojis) => setEmojis(mojis));
  }, []);
  return (
    <div
      className={`${
        isEmojiComponentHidden ? "hidden" : ""
      } border dark:border-gray-700 absolute top-[120%] z-10 flex-col dark:bg-[#161b22] rounded min-w-[230px]`}
    >
      {Object.keys(emojis)
        ?.slice(0, 5)
        .map((emojiKey, i) => (
          <div
            key={`${emojiKey}__${i}`}
            className="flex items-center border-b dark:border-gray-700 gap-2 px-3 py-2 dark:hover:bg-[#1f6feb] cursor-pointer"
          >
            <img className="w-5 h-5" src={emojis[emojiKey]} alt="emoji" />
            <span className="font-bold text-lg text-white">{emojiKey}</span>
          </div>
        ))}
    </div>
  );
};

export default EmojiComponent;
