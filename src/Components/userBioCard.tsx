const UserBioCard = ({ userInfo }) => {
  return (
    <>
      <div className="flex flex-col gap-1 text-center items-center">
        <img
          className="h-32 w-32 dark:mix-blend-difference	dark:border dark:border-[#353535] rounded-full shadow mb-4"
          src={userInfo.avatar_url}
          alt=""
        />
        <p className="font-semibold">{userInfo.name}</p>
        <div className="text-sm leading-normal text-gray-400 flex justify-center">
          <svg
            viewBox="0 0 24 24"
            className="mr-1"
            width="16"
            height="16"
            stroke="currentColor"
            strokeWidth="2"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
            <circle cx="12" cy="10" r="3"></circle>
          </svg>
          {userInfo.location}
        </div>
      </div>
      <div className="flex justify-center items-center gap-2 my-3">
        <div className="font-semibold text-center mx-4">
          <p className="dark:text-blue-400 font-bold">
            {userInfo.public_repos}
          </p>
          <span className="text-gray-400">Repos</span>
        </div>
        <div className="font-semibold text-center mx-4">
          <p className="dark:text-blue-400 font-bold">{userInfo.followers}</p>
          <span className="text-gray-400">Followers</span>
        </div>
        <div className="font-semibold text-center mx-4">
          <p className="dark:text-blue-400 font-bold">{userInfo.following}</p>
          <span className="text-gray-400">Folowing</span>
        </div>
      </div>
    </>
  );
};

export default UserBioCard;
