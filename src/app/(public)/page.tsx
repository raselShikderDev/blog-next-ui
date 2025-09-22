import BlogCard from "@/components/modules/Blogs/BlogCard";
import Hero from "@/components/modules/Home/Hero";
import { IPost } from "@/types";

export default async function HomePage() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/post`, {
    next:{
      revalidate:30, // secounds
    }
  });
  const { data:blogs }: { data: IPost[] } = await res.json();

  return (
    <div>
      <Hero />
      <h2 className="text-center my-5 text-4xl">Featured Posts</h2>
      <div className="grid grid-cols-3 gap-4 my-5 justify-center max-w-6xl mx-auto">
        {blogs.slice(0, 3).map((post:IPost) => {
          return <BlogCard key={post.id} post={post} />;
        })}
      </div>
    </div>
  );
}
