export const __getEmoji = (parent,emojiName) => {
  if (emojiName.data === ":") {
    console.log("emoji is ready");
  let img = document.createElement('img');
  img.className = "ml-1 w-5 h-5"
  img.src= "https://github.githubassets.com/images/icons/emoji/unicode/1f170.png?v8";
    parent.append(img)
  }
};
