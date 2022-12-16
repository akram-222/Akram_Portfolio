// import './App.css';

// import { useEffect, useState } from 'react';
// import Sidebar from './Components/Sidebar';
// import Content from './Components/Content';
// import { githubAPI } from './Contexts/api';
// const App = () => {
//   const [showSidebar, onSetShowSidebar] = useState(false);
//   const [repos, setRepos] = useState<any>()
//   return (
//     <div className="flex">
//       <Sidebar
//         onSidebarHide={() => {
//           onSetShowSidebar(false);
//         }}
//         showSidebar={showSidebar}
//       />
//       <Content
//         onSidebarHide={() => {
//           onSetShowSidebar(true);
//         }}
//       />
//     </div>
//   );
// }



import React, { useEffect, useState } from 'react';

import { githubAPI } from './Contexts/api';


const App = () => {
  const [repos, setRepos] = useState<any>()




  useEffect(() => {

    /*if the request is sent for the first time*/
    githubAPI.getReposByName('ak-ram', 5, 1).then(res => {
      setRepos(res)
      console.log(repos)


      console.log(repos)
    }).catch((reason) => {

    });

  }, [repos])

  return (
    <div className="app">
      <header>
        <h1 className="app-title">App that search repos in Github by name</h1>
      </header>

    </div>
  )
}

export default App

