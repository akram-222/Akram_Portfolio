import FollowersList from "../Components/FollowersList";
import ProfileSubSection from "../Components/profileSubSection";
import ProfileSubSection2 from "../Components/profileSubSection2";
import ExpandableCards from "../Components/expandableCards/expandableCards";
import EducationTimeLine from "../Components/EducationTimeLine";
import Skills from "../Components/Skills";
import { allRepos, topContributedRepos } from "../Utils/localeData/repos";
import { tools } from "../Utils/localeData/tools";
const Profile = () => {
  return (
    <>
      <div className="w-full mb-4">
        <div className="bg-white dark:bg-[#171717] mt-4 shadow rounded-lg px-6 py-4">
          <h2 className="my-4 border border-gray-600/30 p-1.5 pt-2 text-2xl text-white">
            ⚡ Followers list
          </h2>
          <FollowersList />
        </div>
        <div className="flex gap-2 mt-3">
          <Skills />
          <EducationTimeLine />
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
        {Object.keys(allRepos)?.map((item) => (
          <ProfileSubSection2 h3Content={item} list={allRepos[item]} />
        ))}
        <h2 className="my-4 border border-gray-600/30 p-1.5 pt-2 text-2xl text-white">
          📕 Top projects I've contributed to
        </h2>
        {/* Small repo cards https://github.com/DenverCoder1/github-readme-stats (fork of anuraghazra/github-readme-stats) */}
        <div className="">
          <div className="ml-8 flex flex-wrap items-center justify-start gap-3">
            {Object.keys(topContributedRepos)?.map((item) => (
              <a
                href={`https://github.com/${item}`}
                className="w-full xs:w-[48%] md:w-[30%]"
              >
                <img
                  className="w-full"
                  src={`https://denvercoder1-github-readme-stats.vercel.app/api/pin/?username=${topContributedRepos[item]}&theme=react&bg_color=171717&title_color=F85D7F&hide_border=true&icon_color=F8D866&show_icons=true`}
                  alt="github-social-media-repo"
                />
              </a>
            ))}
          </div>
          <h2 className="w-full my-4 border border-gray-600/30 p-1.5 pt-2 text-2xl text-white">
            🚀 Some of my Pens
          </h2>

          <ExpandableCards />
        </div>

        <h2 className="w-full my-4 border border-gray-600/30 p-1.5 pt-2 text-2xl text-white">
          🛠️ My favorite tools
        </h2>
        {Object.keys(tools)?.map((key, i) => (
          <ProfileSubSection key={i} h3Content={key} list={tools[key]} />
        ))}
      </div>
    </>
  );
};

export default Profile;
