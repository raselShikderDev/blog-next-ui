"use server";

import { authOptions } from "@/helpers/authOptions";
import { getServerSession } from "next-auth";
import { revalidatePath, revalidateTag } from "next/cache";
import { redirect } from "next/navigation";

interface ICreatePost {
  title: string;
  content: string;
  isFeatured: boolean;
  tags: string[];
  thumbnail?: string;
  authorId: number;
}

export const createBlog = async (data: FormData) => {
  console.log("data: ", data);
  const session = await getServerSession(authOptions);
  if (!session?.user && !session?.user.id) {
    console.error("User not valid or found");
    return null;
  }
  const newData = Object.fromEntries(data.entries());
  const modifiedData: ICreatePost = {
    title: newData.title as string,
    content: newData.content as string,
    thumbnail: newData.thumbnail as string,
    authorId: Number(session?.user.id),
    tags: newData.tags
      .toString()
      .split(",")
      .map((tag) => tag.trim()),
    isFeatured: Boolean(newData.isFeatured),
  };
  console.log("modifiedData: ", modifiedData);

  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/post`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(modifiedData),
  });
  const result = await res.json();
  console.log("result in frontend: ", result);

  if (result?.id) {
    revalidateTag("BLOGS");
    revalidatePath("/");
    redirect("/blogs");
  }
  return result;
};
