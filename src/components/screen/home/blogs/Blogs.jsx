import { blogs } from "../../../../data"
import BlogsItem from "./blogsitem/BlogsItem";

export default function Blogs (){
  return(
  <ul className="blogs__list">
    {blogs.map((blogs) => (
    <BlogsItem key={blogs.id} {...blogs}/>

    ))}

    
  </ul>
  );
}