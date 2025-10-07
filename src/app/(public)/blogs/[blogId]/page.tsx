import BlogDetailsCard from "@/components/modules/Blogs/BlogDetailsCard";
import { IPost } from "@/types";


export async function generateStaticParams() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/post/}`);
  const blogs: IPost[] = await res.json();
  return blogs.slice(0, 2).map((blog) => ({
    blogId: String(blog.id),
  }));
}


const BlogDetailsPage = async ({
  params,
}: {
  params: Promise<{ blogId: string }>;
}) => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/post/${(await params).blogId}`
  );
  const blog: IPost = await res.json();
  return (
    <div className="py-30 max-w-7xl mx-auto justify-center">
      <BlogDetailsCard blog={blog} />
    </div>
  );
};

export default BlogDetailsPage;
