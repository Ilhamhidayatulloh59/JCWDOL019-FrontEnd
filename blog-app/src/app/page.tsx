import { IBlog } from "@/types/blog";
import Image from "next/image";
import Link from "next/link";

export default async function Home() {
  const res = await fetch(
    "https://saucysmile-us.backendless.app/api/data/Blogs?loadRelations=author"
  );
  const data: IBlog[] = await res.json();
  // console.log(data);

  return (
    <div className="grid w-full py-4 px-28 max-sm:px-5 gap-2 grid-cols-1 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2">
      {data.map((blog, idx) => {
        return (
          <div key={idx}>
            <div className="h-[200px] w-full relative overflow-hidden">
              <Image
                src={blog.thumbnail}
                alt={blog.title}
                fill
                priority
                className="object-fill hover:scale-110"
              />
            </div>
            <div className="p-4">
              <h2 className="text-md font-bold line-clamp-2 text-gray-900">
                {blog.title}
              </h2>
              <div className="flex gap-2 mt-4">
                <div className="w-10 h-10 relative">
                  <Image
                    className="rounded-full object-cover"
                    src={
                      "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png"
                    }
                    alt={blog.author.name}
                    fill
                    priority
                  />
                </div>
                <div className="flex-1 text-sm">
                  <p>{blog.author.name}</p>
                  <p>{blog.author.email}</p>
                </div>
              </div>
              <Link
                href={`/blog/${blog.objectId}`}
                className="inline-flex items-center px-3 py-2 text-sm text-white bg-teal-700 rounded-lg mt-4"
              >
                Read More
              </Link>
            </div>
          </div>
        );
      })}
    </div>
  );
}
