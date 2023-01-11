import FollowersList from "../Components/FollowersList";
import { frameworksAndLibraries } from "../Utils/localeData/frameworksAndLibraries";
const Profile = () => {
  return (
    <>
      <div className="w-full mb-4">
        <div className="bg-white dark:bg-[#171717] mt-4 shadow rounded-lg px-6 py-4">
          <FollowersList />
        </div>
        <h2 className="my-4 border border-gray-600/30 p-1.5 pt-2 text-2xl text-white">
          ⚡ Recent GitHub Activity
        </h2>
        <ol className="ml-4 text-gray-400">
          <li>
            1. 🎉 Contribute in{" "}
            <a
              className="text-blue-400 hover:underline"
              href="https://github.com/Ak-ram/Frontend-Interview-Questions"
            >
              Frontend-Interview-Questions
            </a>{" "}
            from here{" "}
            <a
              className="text-blue-400 hover:underline"
              href="https://github.com/Ak-ram/Frontend-Interview-Questions/issues/3"
            >
              #3
            </a>
          </li>
          <li>
            <p>
              2. ⌛ Build my Portfolio with{" "}
              <a
                className="text-blue-400 hover:underline"
                href="https://github.com/Ak-ram/Akram_Portfolio"
              >
                React/Typescript
              </a>
            </p>
            {/*END_SECTION:activity*/}
          </li>
        </ol>
        <h2 className="my-4 border border-gray-600/30 p-1.5 pt-2 text-2xl text-white">
          🧡 Follow me
        </h2>
        <div className="text-center flex items-center justify-center">
          <a
            href="https://www.linkedin.com/in/ak-ram"
            title="Akram A. Abdelbasir linkedin profile"
          >
            {/*   <img alt='linkedin-profile' src='https://linkedin-github.herokuapp.com/api/render/Akram%20A.%20Abdelbasir/Front-End%20Developer/ReactJS/Bachelors%20degree/dark/https%3A%2F%2Favatars.githubusercontent.com%2Fu%2F69124951%3Fv%3D4'/> */}
            <img
              alt="linkedin-profile"
              src="https://user-images.githubusercontent.com/69124951/193275227-c210b164-440c-4d61-94a5-592249e9533b.png"
            />
          </a>
          <a
            href="https://github.com/Ak-ram"
            title="Akram A. Abdelbasir GitHub profile"
          >
            <img
              width={220}
              src="https://user-images.githubusercontent.com/69124951/189626469-5ff7080a-1429-4d8d-a218-8a3617b6ab18.png"
            />
          </a>
        </div>
        <h2 className="my-4 border border-gray-600/30 p-1.5 pt-2 text-2xl text-white">
          📘 My top open source projects
        </h2>
        <blockquote>
          <h3 className="ml-4 mt-5 mb-2">1. VS Code Snippets Repos</h3>
        </blockquote>
        <div className="ml-8">
          <a href="https://github.com/Ak-ram/scss-helpers">
            <img
              width={278}
              src="https://denvercoder1-github-readme-stats.vercel.app/api/pin/?username=Ak-ram&repo=scss-helpers&theme=react&bg_color=171717&title_color=F85D7F&hide_border=true&icon_color=F8D866&show_icons=true"
              alt="github-scss-helpers-repo"
            />
          </a>
        </div>

        <blockquote>
          <h3 className="ml-4 mt-5 mb-2">2. ReactJS Repos</h3>
        </blockquote>
        <div className="ml-8 flex flex-wrap items-center justify-start gap-3">
          <a href="https://github.com/Ak-ram/dropit">
            <img
              width={278}
              src="https://denvercoder1-github-readme-stats.vercel.app/api/pin/?username=Ak-ram&repo=dropit&theme=react&bg_color=171717&title_color=F85D7F&hide_border=false&border_color=F85D7F&icon_color=F8D866&show_icons=true"
              alt="github-dropit-webapp"
            />
          </a>
          <a href="https://github.com/Ak-ram/Moviideck">
            <img
              width={278}
              src="https://denvercoder1-github-readme-stats.vercel.app/api/pin/?username=Ak-ram&repo=Moviideck&theme=react&bg_color=171717&title_color=F85D7F&hide_border=true&icon_color=F8D866&show_icons=true"
              alt="github-Moviideck-repo"
            />
          </a>
          <a href="https://github.com/Ak-ram/quran-player">
            <img
              width={278}
              src="https://denvercoder1-github-readme-stats.vercel.app/api/pin/?username=Ak-ram&repo=quran-player&theme=react&bg_color=171717&title_color=F85D7F&hide_border=true&icon_color=F8D866&show_icons=true"
              alt="github-quran-player-repo"
            />
          </a>
          <a href="https://github.com/Ak-ram/todoist">
            <img
              width={278}
              src="https://denvercoder1-github-readme-stats.vercel.app/api/pin/?username=Ak-ram&repo=todoist&theme=react&bg_color=171717&title_color=F85D7F&hide_border=true&icon_color=F8D866&show_icons=true"
              alt="github-todoist-repo"
            />
          </a>
          <a href="https://github.com/Ak-ram/flexbox-playground">
            <img
              width={278}
              src="https://denvercoder1-github-readme-stats.vercel.app/api/pin/?username=Ak-ram&repo=flexbox-playground&theme=react&bg_color=171717&title_color=F85D7F&hide_border=true&icon_color=F8D866&show_icons=true"
              alt="github-flexbox-playground-repo"
            />
          </a>
        </div>

        <blockquote>
          <h3 className="ml-4 mt-5 mb-2">3. HTML, CSS, &amp; JS Repos</h3>
        </blockquote>
        <div className="ml-8 flex flex-wrap items-center justify-start gap-3">
          <a href="https://github.com/Ak-ram/Portfolio">
            <img
              width={278}
              src="https://denvercoder1-github-readme-stats.vercel.app/api/pin/?username=Ak-ram&repo=Portfolio&theme=react&bg_color=171717&title_color=F85D7F&hide_border=false&border_color=F85D7F&icon_color=F8D866&show_icons=true"
              alt="github-Portfolio-repo"
            />
          </a>
          <a href="https://github.com/Ak-ram/social-media">
            <img
              width={278}
              src="https://denvercoder1-github-readme-stats.vercel.app/api/pin/?username=Ak-ram&repo=social-media&theme=react&bg_color=171717&title_color=F85D7F&hide_border=true&icon_color=F8D866&show_icons=true"
              alt="github-social-media-repo"
            />
          </a>
          <a href="https://github.com/Ak-ram/zoom-image-when-hovering">
            <img
              width={278}
              src="https://denvercoder1-github-readme-stats.vercel.app/api/pin/?username=Ak-ram&repo=zoom-image-when-hovering&theme=react&bg_color=171717&title_color=F85D7F&hide_border=true&icon_color=F8D866&show_icons=true"
              alt="github-zoom-image-when-hovering-repo"
            />
          </a>
          <a href="https://github.com/Ak-ram/Arrow-Propagation">
            <img
              width={278}
              src="https://denvercoder1-github-readme-stats.vercel.app/api/pin/?username=Ak-ram&repo=Arrow-Propagation&theme=react&bg_color=171717&title_color=F85D7F&hide_border=true&icon_color=F8D866&show_icons=true"
              alt="github-Arrow-Propagation-repo"
            />
          </a>
          <a href="https://github.com/Ak-ram/bookbia">
            <img
              width={278}
              src="https://denvercoder1-github-readme-stats.vercel.app/api/pin/?username=Ak-ram&repo=bookbia&theme=react&bg_color=171717&title_color=F85D7F&hide_border=true&icon_color=F8D866&show_icons=true"
              alt="github-bookbia-repo"
            />
          </a>
          <a href="https://github.com/Ak-ram/Ctyptex">
            <img
              width={278}
              src="https://denvercoder1-github-readme-stats.vercel.app/api/pin/?username=Ak-ram&repo=Ctyptex&theme=react&bg_color=171717&title_color=F85D7F&hide_border=true&icon_color=F8D866&show_icons=true"
              alt="github-Ctyptex-repo"
            />
          </a>
        </div>
        <h2 className="my-4 border border-gray-600/30 p-1.5 pt-2 text-2xl text-white">
          📕 Top projects I've contributed to
        </h2>
        {/* Small repo cards https://github.com/DenverCoder1/github-readme-stats (fork of anuraghazra/github-readme-stats) */}
        <div className="">
          <div className="ml-8 flex flex-wrap items-center justify-start gap-3">
            <a
              href="https://github.com/opensourcedesign
/opensourcedesign.github.io"
            >
              <img
                width={278}
                src="https://denvercoder1-github-readme-stats.vercel.app/api/pin/?username=opensourcedesign&repo=opensourcedesign.github.io&theme=react&bg_color=171717&title_color=F85D7F&hide_border=true&icon_color=F8D866&show_icons=true"
                alt="github-readme-stats"
              />
            </a>
            <a href="https://github.com/firstcontributions/first-contributions">
              <img
                width={278}
                src="https://denvercoder1-github-readme-stats.vercel.app/api/pin/?username=firstcontributions&repo=first-contributions&theme=react&bg_color=171717&title_color=F85D7F&hide_border=true&icon_color=F8D866&show_icons=true"
                alt="shields"
              />
            </a>
          </div>
          <h2 className="w-full my-4 border border-gray-600/30 p-1.5 pt-2 text-2xl text-white">
            🚀 Some of my Pens
          </h2>
          {/* CSS Shadow Animation */}
          <div className="flex px-8 gap-2 items-center justify-center flex-wrap">
            <a
              href="https://codepen.io/Akr-am/pen/JjvedzJ"
              title="CSS Shadow Animation"
              className="w-[32%] h-48"
            >
              <img
                src="https://user-images.githubusercontent.com/69124951/197283827-24c8ffa8-c3ca-4bf6-ad7e-14449fac5cf7.gif"
                alt="css shadow animation"
                className="w-full h-full"
              />
            </a>
            {/* JS Arrow Animation */}
            <a
              href="https://codepen.io/Akr-am/pen/gOXKemZ"
              title="JS Arrow Animation"
              className="w-[32%] h-48"
            >
              <img
                src="https://user-images.githubusercontent.com/69124951/197331108-aff1dcef-1b6a-4c1a-96b7-ea95b00ec482.gif"
                alt="JS Arrow Animation"
                className="w-full h-full"
              />
            </a>
            {/* Space CSS Animation*/}
            <a
              href="https://codepen.io/Akr-am/full/jOVvJGV"
              title="Space CSS Animation"
              className="w-[32%] h-48"
            >
              <img
                src="https://user-images.githubusercontent.com/69124951/197331573-90233082-d163-4d5c-bdeb-981ed62acf72.gif"
                alt="Space CSS Animation"
                className="w-full h-full"
              />
            </a>
            {/* Holy Grail Flexbox Layout */}
            <a
              href="https://codepen.io/Akr-am/pen/ZEBYWyX"
              title="Holy Grail Flexbox Layout"
              className="w-[32%] h-48"
            >
              <img
                src="https://user-images.githubusercontent.com/69124951/197389695-6c30e4a0-e19a-44e1-b2b6-89f0116455c6.gif"
                alt="Space CSS Animation"
                className="w-full h-full"
              />
            </a>
            {/* CSS Clock Animation*/}
            <a
              href="https://codepen.io/Akr-am/pen/abBMwBb"
              title="CSS Clock Animation"
              className="min-w-[32%] h-48"
            >
              <img
                src="https://user-images.githubusercontent.com/69124951/197332571-059ad37c-d4a5-4c5f-a214-c6da19f1f8f2.gif"
                alt="CSS Clock Animation"
                className="w-full h-full"
              />
            </a>
            {/* JS Tooltip Effect*/}
            <a
              href="https://codepen.io/Akr-am/full/QWKyQZx"
              title="JS Tooltip Effect"
              className=" h-48"
            >
              <img
                src="https://user-images.githubusercontent.com/69124951/197332978-1246b10e-0f0f-4dc4-9c3a-e9f3837efac0.gif"
                alt="CSS Clock Animation"
                className="w-full h-full"
              />
            </a>
          </div>
        </div>
        <h2 className="w-full my-4 border border-gray-600/30 p-1.5 pt-2 text-2xl text-white">
          🛠️ My favorite tools
        </h2>
        <h3 className="group my-4 text-lg text-white border-b inline-block border-gray-600/30">
          👨‍💻 Programming and markup languages{" "}
          <em className="opacity-0 group-hover:opacity-100 text-yellow-500">
            #1
          </em>
        </h3>
        <div className="flex gap-2 flex-wrap ml-8">
          <a href="#">
            <img
              alt="CSS"
              src="https://img.shields.io/badge/CSS-1572B6.svg?logo=css3&logoColor=white"
            />
          </a>
          <a href="#">
            <img
              alt="HTML"
              src="https://img.shields.io/badge/HTML-E34F26.svg?logo=html5&logoColor=white"
            />
          </a>
          <a href="#">
            <img
              alt="JavaScript"
              src="https://img.shields.io/badge/JavaScript-F7DF1E.svg?logo=javascript&logoColor=black"
            />
          </a>
          <a href="#">
            <img
              alt="Python"
              src="https://img.shields.io/badge/Python-14354C.svg?logo=python&logoColor=white"
            />
          </a>
          <a href="#">
            <img
              alt="SASS"
              src="https://img.shields.io/badge/Sass-hotpink.svg?logo=SASS&logoColor=white"
            />
          </a>
          <a href="#">
            <img
              alt="SVG+XML"
              src="https://img.shields.io/badge/SVG%2BXML-e0982c.svg?logo=svg&logoColor=white"
            />
          </a>
          <a href="#">
            <img
              alt="Bash"
              src="https://img.shields.io/badge/Bash-121011.svg?logo=gnu-bash&logoColor=white"
            />
          </a>
          <a href="#">
            <img
              alt="Markdown"
              src="https://img.shields.io/badge/Markdown-000000.svg?logo=markdown&logoColor=white"
            />
          </a>
        </div>
        <h3 className="group my-4 text-lg text-white border-b inline-block border-gray-600/30">
          🧰 Frameworks and libraries
          <em className="opacity-0 group-hover:opacity-100 text-yellow-500">
            #2
          </em>
        </h3>
        <div className="ml-5 flex gap-2 flex-wrap ml-8">
          {frameworksAndLibraries?.map((item) => (
            <img alt="Material Design" src={item} />
          ))}
        </div>

        <h3 className="group my-4 text-lg text-white border-b inline-block border-gray-600/30">
          🗄️ Databases and cloud hosting
          <em className="opacity-0 group-hover:opacity-100 text-yellow-500">
            #3
          </em>
        </h3>
        <div className="ml-5 flex flex-wrap gap-2">
          <a href="#">
            <img
              alt="Microsoft_Access"
              src="https://img.shields.io/badge/Microsoft_Access-A4373A?logo=microsoft-access&logoColor=white"
            />
          </a>
          <a href="#">
            <img
              alt="GitHub Pages"
              src="https://img.shields.io/badge/GitHub%20Pages-327FC7.svg?logo=github&logoColor=white"
            />
          </a>
          <a href="#">
            <img
              alt="Notion"
              src="https://img.shields.io/badge/Notion-010101.svg?logo=notion&logoColor=white"
            />
          </a>
          <a href="#">
            <img
              alt="Firebase"
              src="https://img.shields.io/badge/Firbase-010101.svg?logo=firebase&logoColor=yellow"
            />
          </a>
          <a href="#">
            <img
              alt="netlify"
              src="https://img.shields.io/badge/Netlify-010101.svg?logo=netlify&logoColor=blue"
            />
          </a>
        </div>

        <h3 className="group my-4 text-lg text-white border-b inline-block border-gray-600/30">
          💻 Software and tools
          <em className="opacity-0 group-hover:opacity-100 text-yellow-500">
            #4
          </em>
        </h3>
        <div className="ml-5 flex flex-wrap gap-2">
          <a href="#">
            <img
              alt="Postman"
              src="https://img.shields.io/badge/Postman-FF6C37?logo=postman&logoColor=white"
            />
          </a>
          <a href="#">
            <img
              alt="Codepen"
              src="https://img.shields.io/badge/Codepen-000000.svg?logo=codepen&logoColor=white"
            />
          </a>
          <a href="#">
            <img
              alt="Discord"
              src="https://img.shields.io/badge/-Discord-5865F2.svg?logo=discord&logoColor=white"
            />
          </a>
          <a href="#">
            <img
              alt="Git"
              src="https://img.shields.io/badge/Git-F05033.svg?logo=git&logoColor=white"
            />
          </a>
          <a href="#">
            <img
              alt="GitHub Desktop"
              src="https://img.shields.io/badge/GitHub%20Desktop-8034A9.svg?logo=github&logoColor=white"
            />
          </a>
          <a href="#">
            <img
              alt="Google Sheets"
              src="https://img.shields.io/badge/Google%20Sheets-34A853.svg?logo=google%20sheets&logoColor=white"
            />
          </a>
          <a href="#">
            <img
              alt="Stack Overflow"
              src="https://img.shields.io/badge/-Stack%20Overflow-FE7A16?logo=stack-overflow&logoColor=white"
            />
          </a>
          <a href="#">
            <img
              alt="Visual Studio Code"
              src="https://img.shields.io/badge/Visual%20Studio%20Code-0078d7.svg?logo=visual-studio-code&logoColor=white"
            />
          </a>
          <a href="#">
            <img
              alt="WebStorm"
              src="https://img.shields.io/badge/WebStorm-000000?logo=WebStorm&logoColor=white"
            />
          </a>
        </div>
      </div>
    </>
  );
};

export default Profile;
