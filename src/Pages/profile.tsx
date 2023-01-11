import FollowersList from "../Components/FollowersList";
import ProfileSubSection from "../Components/profileSubSection";
import {
  extensions,
  htmlRepos,
  reactRepos,
  topContributedRepos,
} from "../Utils/localeData/repos";
import { tools } from "../Utils/localeData/tools";
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
        
{/*         
        <blockquote>
          <h3 className="ml-4 mt-5 mb-2">1. VS Code Snippets Repos</h3>
        </blockquote>
        <div className="ml-8">
          {extensions?.map((item) => (
            <a href={`https://github.com/Ak-ram/${item}`}>
              <img
                width={278}
                src={`https://denvercoder1-github-readme-stats.vercel.app/api/pin/?username=Ak-ram&repo=${item}&theme=react&bg_color=171717&title_color=F85D7F&hide_border=true&icon_color=F8D866&show_icons=true`}
                alt="github-social-media-repo"
              />
            </a>
          ))}
        </div> */}

        <blockquote>
          <h3 className="ml-4 mt-5 mb-2">2. ReactJS Repos</h3>
        </blockquote>
        <div className="ml-8 flex flex-wrap items-center justify-start gap-3">
          {reactRepos?.map((item) => (
            <a href={`https://github.com/Ak-ram/${item}`}>
              <img
                width={278}
                src={`https://denvercoder1-github-readme-stats.vercel.app/api/pin/?username=Ak-ram&repo=${item}&theme=react&bg_color=171717&title_color=F85D7F&hide_border=true&icon_color=F8D866&show_icons=true`}
                alt="github-social-media-repo"
              />
            </a>
          ))}
        </div>

        <blockquote>
          <h3 className="ml-4 mt-5 mb-2">3. HTML, CSS, &amp; JS Repos</h3>
        </blockquote>
        <div className="ml-8 flex flex-wrap items-center justify-start gap-3">
          {Object.keys(htmlRepos)?.map((item) => (
            <a href={`https://github.com/Ak-ram/${item}`}>
              <img
                width={278}
                src={`https://denvercoder1-github-readme-stats.vercel.app/api/pin/?username=Ak-ram&repo=${htmlRepos[item]}`}
                alt="github-social-media-repo"
              />
            </a>
          ))}
        </div>
        <h2 className="my-4 border border-gray-600/30 p-1.5 pt-2 text-2xl text-white">
          📕 Top projects I've contributed to
        </h2>
        {/* Small repo cards https://github.com/DenverCoder1/github-readme-stats (fork of anuraghazra/github-readme-stats) */}
        <div className="">
          <div className="ml-8 flex flex-wrap items-center justify-start gap-3">
            {Object.keys(topContributedRepos)?.map((item) => (
              <a href={`https://github.com/${item}`}>
                <img
                  width={278}
                  src={`https://denvercoder1-github-readme-stats.vercel.app/api/pin/?username=${topContributedRepos[item]}&theme=react&bg_color=171717&title_color=F85D7F&hide_border=true&icon_color=F8D866&show_icons=true`}
                  alt="github-social-media-repo"
                />
              </a>
            ))}
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
        {Object.keys(tools)?.map((key) => (
          <ProfileSubSection h3Content={key} list={tools[key]} />
        ))}
      </div>
    </>
  );
};

export default Profile;
