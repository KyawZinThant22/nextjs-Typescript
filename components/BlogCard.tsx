import Link from "next/link"
type Props = {
  post: {
    id: string;
    title: string;
    author: string;
    body: string;
  };
};

const BlogCard: React.FC<Props> = ({ post }) => {
    const { id , title , author , body} = post
  return (
      <div className="w-[450px] border-red-500 border border-solid mb-4  p-3">
          <h1 className="text-3xl font-bold mb-6">{title}</h1>
          <p className="leading-7 text-lg text-green-500 tracking-tighter">{body.substring(0,200)}...</p>
          <Link href={`/blog/${id}`}>
        <button className="p-2 px-3 rounded mt-3  bg-red-600 hover:bg-red-500" aria-label="read more about the content">Read more...</button>
          </Link>
      </div>
  )
};

export default BlogCard;
