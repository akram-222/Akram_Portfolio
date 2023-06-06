import { useState } from "react";
import Field from "./field";
import { Text, MultiText, UserText } from "./text";
const Terminal = ({ theme, setTheme }) => {
  const [maximized, setMaximized] = useState(false);
  const [title, setTitle] = useState("Akram Portfolio");
  const handleClose = () => {
    window.open("about:blank", "_self");
    window.close();
  };
  const handleMinMax = () => {
    setMaximized(!maximized);
    document.querySelector("#field").focus();
  };

  return (
    <div
      id="terminal"
      style={
        maximized
          ? { height: "100%", width: "100%", maxWidth: "100%" }
          : theme.terminal
      }
    >
      <div id="window" style={theme.window}>
        <button className="btn red" onClick={handleClose} />
        <button id="useless-btn" className="btn yellow" />
        <button className="btn green" onClick={handleMinMax} />
        <span id="title" style={{ color: theme.window.color }}>
          {title}
        </span>
      </div>
      <Field theme={theme} setTheme={setTheme} setTitle={setTitle} />
    </div>
  );
};
export default Terminal;
