export const __getEmoji = (parent,emojiName) => {
  if (emojiName.data === ":") {
    console.log("emoji is ready");
    // let emoji = <img src={`https://github.githubassets.com/images/icons/emoji/unicode/1f170.png?v8`} />
  let img = document.createElement('img');
  img.src= "https://github.githubassets.com/images/icons/emoji/unicode/1f170.png?v8";
    parent.append(img)
  }
};
