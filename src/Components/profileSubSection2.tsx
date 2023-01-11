type reposList = {
  h3Content: string;
  list: string[];
};
const ProfileSubSection2 = ({ h3Content, list }: reposList) => {
  return (
    <>
      <blockquote>
        <h3 className="ml-4 mt-5 mb-2">{h3Content}</h3>
      </blockquote>
      <div className="ml-8 flex flex-wrap items-center justify-start gap-3">
        {list?.map((item, i) => (
          <a href={`https://github.com/Ak-ram/${item}`}>
            <img
              width={278}
              src={`https://denvercoder1-github-readme-stats.vercel.app/api/pin/?username=Ak-ram&repo=${item}&theme=react&bg_color=171717&title_color=F85D7F&hide_border=${
                i === 0 ? false : true
              }&border_color=F85D7F&icon_color=F8D866&show_icons=true`}
              alt="github-social-media-repo"
            />
          </a>
        ))}
      </div>
    </>
  );
};

export default ProfileSubSection2;
