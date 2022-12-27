import {useEffect} from "react"
import {useParams} from "react-router-dom"
const RepoDetails = ()=>{
    
const params = useParams();

  useEffect(() => {
      console.log(params.repoName)
  }, []);

    return(
        <h1>Repo details</h1>
        
    )
}

export default RepoDetails