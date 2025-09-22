import BlogCard from "@/components/modules/Blogs/BlogCard";
import { IPost } from "@/types";

const AllBlogsPage = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/post`,{
    cache:"no-store"
  })
    const { data:blogs }: { data: IPost[] } = await res.json();
 
  return (
    <div className="py-30 px-4 max-w-7xl mx-auto">
      <h2 className="text-center text-4xl">All Blogs</h2>
      <div className="grid grid-cols-3 max-w-6xl justify-center gap-5 my-5">
        {
          blogs.map((post:IPost)=>{
            return <BlogCard key={post.id} post={post}/>
          })
        }
      </div>
    </div>
  );
};

export default AllBlogsPage;
