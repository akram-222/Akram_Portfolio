import cat from "../assests/cat.png";
const UserBioCard = ({ userInfo }) => {
  return (
    <>
      <div className="flex relative w-full flex-wrap dark:bg-card p-8 rounded-lg">
        <img className="absolute -top-[60px] right-10 w-14" src={cat} />
        <h1 className="flex w-full mb-5 gap-2 justify-center md:justify-start items-center text-center text-3xl text-white font-bold">
          Welcome to Akram's profile!
          <img
            src="https://media.giphy.com/media/hvRJCLFzcasrR4ia7z/giphy.gif"
            width={28}
            alt="wavy hand"
            className="hidden sm:block"
          />
        </h1>

        <div className="flex flex-col md:flex-row justify-between">
          {/*Previous font: Silkscreen*/}
          <div className="md:w-[30%]">
            <img
              className="m-auto h-48 w-48 dark:mix-blend-difference	dark:border dark:border-[#353535] rounded-full shadow"
              src={userInfo.avatar_url}
              alt=""
            />
            {/* Typing SVG by DenverCoder1 - https://github.com/DenverCoder1/readme-typing-svg */}
            <img
              className="m-auto mt-2"
              src="https://readme-typing-svg.herokuapp.com?font=Fira+code&size=22&duration=2000&pause=1000&color=DDE43F&background=2A2E3424&center=true&vCenter=true&width=435&lines=Front-End+Web+Developer;Blogger+%26+Content+Writer;Always+learning+new+things"
              alt="auto-typing"
            />

            {/* Social icons section */}
          </div>
          <div className="md:w-[50%] mt-3">
            <div className="flex flex-col gap-2">
              <h2 className="text-xl w-full border-b border-gray-600/30">
                Statistics
              </h2>
              <div className="flex justify-evenly">
                <div className="font-semibold text-center mx-4">
                  <p className="dark:text-blue-400 font-bold">
                    {userInfo.public_repos}
                  </p>
                  <span className="text-gray-400">Repos</span>
                </div>
                <div className="font-semibold text-center mx-4">
                  <p className="dark:text-blue-400 font-bold">
                    {userInfo.followers}
                  </p>
                  <span className="text-gray-400">Followers</span>
                </div>
                <div className="font-semibold text-center mx-4">
                  <p className="dark:text-blue-400 font-bold">
                    {userInfo.following}
                  </p>
                  <span className="text-gray-400">Folowing</span>
                </div>
              </div>
            </div>
            {/* LinkedIn */}

            <div>
              <h2 className="text-xl border-b my-4 border-gray-600/30">
                Contact with me
              </h2>
              <div className="socials text-center flex items-center flex-wrap self-start gap-2">
                <a href="https://www.linkedin.com/in/ak-ram/">
                  <img
                    className=""
                    alt="Linkedin"
                    title="Linkedin"
                    src="https://img.shields.io/badge/LinkedIn-0077B5?logo=linkedin&logoColor=white"
                  />
                </a>
                {/* Leetcode */}
                <a href="https://www.leetcode.com/Ak-ram">
                  <img
                    className=""
                    alt="Leetcode"
                    title="Blog"
                    src="https://img.shields.io/badge/-LeetCode-FFA116?logo=LeetCode&logoColor=black"
                  />
                </a>
                {/* Whats' app */}
                {/*   <a href='https://wa.me/1XXXXXXXXXX?text=I'm%20interested%20in%20your%20car%20for%20sale'> */}
                <a href="https://wa.me/00201158541832?text=Hi Akram 👋, I'm Interest to work with you">
                  <img
                    alt="Whats' app"
                    title="Msg me"
                    src="https://img.shields.io/badge/WhatsApp-25D366?logo=whatsapp&logoColor=white"
                  />
                </a>
                {/* Medium */}
                <a href="https://dev.to/akram_ak">
                  <img
                    className=""
                    alt="Dev.to"
                    title="Blog"
                    src="https://img.shields.io/badge/dev.to-0A0A0A?logo=devdotto&logoColor=white"
                  />
                </a>
                {/* Stackoverflow */}
                <a href="https://stackoverflow.com/users/14151211/akram-ashraf">
                  <img
                    className=""
                    alt="Stackover flow"
                    title="Stackover flow"
                    src="https://aleen42.github.io/badges/src/stackoverflow.svg"
                  />
                </a>
                {/* Gmail */}
                <a href="mailto:ashrfakrm64@gmail.com">
                  <img
                    className=""
                    alt="Gmail"
                    title="Mail me"
                    src="https://img.shields.io/badge/Gmail-D14836?logo=gmail&logoColor=white"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default UserBioCard;
