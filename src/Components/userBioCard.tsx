const UserBioCard = ({ userInfo }) => {
  return (
    <>
      <div className="flex w-full dark:bg-card p-10 rounded-lg">
        <div className="flex flex-col gap-1 text-center items-center">
          <img
            className="h-48 w-48 dark:mix-blend-difference	dark:border dark:border-[#353535] rounded-full shadow mb-4"
            src={userInfo.avatar_url}
            alt=""
          />
        </div>
        <div>
          <h1 className="flex gap-2 justify-center items-center text-3xl text-white font-bold">
            Welcome to Akram's profile!
            <img
              src="https://media.giphy.com/media/hvRJCLFzcasrR4ia7z/giphy.gif"
              width={28}
              alt="wavy hand"
            />
          </h1>
          {/*Previous font: Silkscreen*/}
          {/* Typing SVG by DenverCoder1 - https://github.com/DenverCoder1/readme-typing-svg */}
          <p className="text-center">
            <img
              className="m-auto"
              src="https://readme-typing-svg.herokuapp.com?font=Fira+code&size=22&duration=2000&pause=1000&color=DDE43F&background=2A2E3424&center=true&vCenter=true&width=435&lines=Front-End+Web+Developer;Blogger+%26+Content+Writer;Always+learning+new+things"
              alt="auto-typing"
            />
          </p>
          {/* Social icons section */}
          <p className="text-center flex items-center justify-center gap-2">
            {/* LinkedIn */}
            <a href="https://www.linkedin.com/in/ak-ram/">
              <img
                alt="Linkedin"
                title="Linkedin"
                src="https://img.shields.io/badge/LinkedIn-0077B5?logo=linkedin&logoColor=white"
              />
            </a>
            {/* Leetcode */}
            <a href="https://www.leetcode.com/Ak-ram">
              <img
                alt="Leetcode"
                title="Blog"
                src="https://img.shields.io/badge/-LeetCode-FFA116?logo=LeetCode&logoColor=black"
              />
            </a>
            {/* Medium */}
            <a href="https://dev.to/akram_ak">
              <img
                alt="Dev.to"
                title="Blog"
                src="https://img.shields.io/badge/dev.to-0A0A0A?logo=devdotto&logoColor=white"
              />
            </a>
            {/* Stackoverflow */}
            <a href="https://stackoverflow.com/users/14151211/akram-ashraf">
              <img
                alt="Stackover flow"
                title="Stackover flow"
                src="https://aleen42.github.io/badges/src/stackoverflow.svg"
              />
            </a>
            {/* Gmail */}
            <a href="mailto:ashrfakrm64@gmail.com">
              <img
                alt="Gmail"
                title="Mail me"
                src="https://img.shields.io/badge/Gmail-D14836?logo=gmail&logoColor=white"
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
          </p>
          <p>
            <br />
          </p>
          <div className="flex justify-center items-center gap-2 my-3">
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
      </div>
    </>
  );
};

export default UserBioCard;
