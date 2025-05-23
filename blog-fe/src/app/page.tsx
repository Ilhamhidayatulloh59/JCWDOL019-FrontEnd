import BlogCard from "@/components/blog/card";
import Wrapper from "@/components/wrapper";
import axios from "@/lib/axios";
import { IBlog } from "@/types/blog";

export default async function Home() {
  const res = await axios.get("/blogs");
  const data: IBlog[] = res.data?.blogs;

  return (
    <Wrapper>
      <div className="py-4 sm:py-8">
        <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-gray-300 md:my-2 text-shadow">
          Artikel <span className="text-green-700">Terkini</span>
        </h2>
        <div className="grid w-full sm:py-4 sm:gap-2 md:gap-10 grid-cols-1 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-2">
          {data.map((blog, idx) => {
            return <BlogCard blog={blog} key={idx} />;
          })}
        </div>
      </div>
    </Wrapper>
  );
}
