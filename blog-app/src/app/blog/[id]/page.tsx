import { IBlog } from "@/types/blog";
import Image from "next/image";

export default async function Page({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const id = (await params).id;
  const res = await fetch(
    `https://saucysmile-us.backendless.app/api/data/Blogs/${id}?loadRelations=author`
  );
  const blog: IBlog = await res.json();
  return (
    <div>
      <h1>{blog.title}</h1>
      <Image src={blog.thumbnail} alt={blog.title} width={500} height={500} />
      <p>{blog.content}</p>
    </div>
  );
}
