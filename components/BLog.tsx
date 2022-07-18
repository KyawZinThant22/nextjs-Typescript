import { Property } from "pages";
import BlogCard from "./BlogCard";

interface Props {
  posts: Property[];
}

const Blog: React.FC<Props> = ({ posts }) => {
  return (
    <div className="container mx-auto mt-12 flex gap-6  justify-evenly flex-wrap">
      {posts.map((post) => (
     
          <BlogCard post={post} key={post.id}/>
       
      ))}
    </div>
  );
};

export default Blog;
