import { useEffect, useState } from "react";
import { __getEmojiList } from "../Utils/github/__gitEmojiList";
const EmojiComponent = () => {
  const [emojis, setEmojis] = useState({});
  useEffect(() => {
    __getEmojiList().then((mojis) => setEmojis(mojis));
  }, []);
  return (
    <div className="flex flex-wrap w-[300px] h-[300px] overflow-auto">
      {Object.keys(emojis)?.map((emojiKey) => (
        <img className="w-4 h-4" src={emojis[emojiKey]} alt="emoji" />
      ))}
    </div>
  );
};

export default EmojiComponent;
