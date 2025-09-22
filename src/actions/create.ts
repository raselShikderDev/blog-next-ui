"use server";

import { redirect } from "next/navigation";

export const createBlog = async (data: FormData) => {
      console.log("data: ", data);

  const newData = Object.fromEntries(data.entries());
  const modifiedData = {
    newData,
    author: 2,
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
  console.log("result: ", result);
  
  if (result?.id) {
    redirect("/blogs");
  }
  return result;
};
