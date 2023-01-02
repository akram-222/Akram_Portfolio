import Calendar from "../Components/Calendar";
import CalendarEvents from "../Components/CalendarEvents";
import EmojiComponent from "../Components/emojiComponent";
import ThemeSwitcherBtn from "../Components/themeSwitcherBtn";
const Settings = () => {
  return (
    <div className="flex">
      <aside>
        <CalendarEvents />
      </aside>
      <Calendar />
    </div>
  );
};

export default Settings;
