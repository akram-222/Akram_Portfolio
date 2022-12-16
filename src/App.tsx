import "./App.css";

import { useState } from "react";
import Sidebar from "./Components/Sidebar";
import Content from "./Components/Content";
import { OctokitRes } from "./Contexts/api";
const App = () => {
  const [showSidebar, onSetShowSidebar] = useState(false);
// console.log(OctokitRes())
  return (
    <div className="flex">
      <Sidebar
        onSidebarHide={() => {
          onSetShowSidebar(false);
        }}
        showSidebar={showSidebar}
      />
      <Content
        onSidebarHide={() => {
          onSetShowSidebar(true);
        }}
      />
    </div>
  );
};

export default App;
