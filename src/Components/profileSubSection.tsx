const ProfileSubSection = ({ h3Content, list }) => {
  return (
    <>
      <h3 className="group my-4 text-lg text-white border-b inline-block border-gray-600/30">
        {h3Content}
        <em className="opacity-0 group-hover:opacity-100 text-yellow-500">
          #2
        </em>
      </h3>
      <div className="ml-5 flex gap-2 flex-wrap ml-8">
        {list?.map((item) => (
          <img
            alt="frameworks and libraries"
            src={`https://img.shields.io/badge/${item}`}
          />
        ))}
      </div>
    </>
  );
};

export default ProfileSubSection;
