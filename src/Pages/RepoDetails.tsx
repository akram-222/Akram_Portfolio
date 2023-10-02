const RepoDetails = ({repoToViewIndex,setViewer,repos}) => {
const {name} = repos[repoToViewIndex];
  return (
    <>
      <h1 onClick={()=>{setViewer(false)}}>close {name}</h1>
    </>
  );
};

export default RepoDetails;
