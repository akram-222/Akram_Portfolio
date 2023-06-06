const Text = ({ input, isCommand, isError, hasBuffer }) => (
  <>
    <div>
      {isCommand && <div id="query">C:\Users\Guest></div>}
      <span className={!isCommand && isError ? "error" : ""}>{input}</span>
    </div>
    {hasBuffer && <div></div>}
  </>
);
const MultiText = ({ input, isError, hasBuffer }) => (
  <>
    {input.map((s) => (
      <Text input={s} isError={isError} />
    ))}
    {hasBuffer && <div></div>}
  </>
);
const UserText = ({ input, theme }) => (
  <div>
    <div id="query">C:\Users\Guest></div>
    <span>{input}</span>
    <div id="cursor" style={theme}></div>
  </div>
);

export { Text, MultiText, UserText };
