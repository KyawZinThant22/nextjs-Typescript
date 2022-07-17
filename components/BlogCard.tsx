type Props = {
  post: {
    id: Number;
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
          <p className="leading-7 text-lg text-green-500 tracking-tighter">{body}</p>

      </div>
  )
};

export default BlogCard;
