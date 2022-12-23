import { useDevBlogs } from "../Contexts/DEVAPIContext";
import PageTitle from "../Components/PageTitle"
const Blog = ({onSidebarHide}) => {
    const { devBlogs } = useDevBlogs();
    return (<div className="flex flex-wrap gap-2">
      <PageTitle  onSidebarHide={onSidebarHide}
  title={"Blog"}
  subtitle={""}
  premium_star={"DEV.to articles"}
  className="mb-10 h-fit"/>
  {devBlogs && devBlogs?.map(({title})=>{
      return(<div className="w-[32%] dark:bg-card h-[100px] blog-item">
          <h3>{title}</h3>
      </div>)
  })}
  </div>);
};

export default Blog;
