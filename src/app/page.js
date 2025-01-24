import axios from "axios";
import Link from "next/link";

async function fetchPosts() {
  const response = await axios.get("https://jsonplaceholder.typicode.com/posts");
  return response.data;
}

export default async function Home() {
  const posts = await fetchPosts();

  return (
    <div className="bg-gray-100">
      <div className="w-10/12 mx-auto">
        <h1 className="text-4xl font-bold text-gray-800 pt-5 mb-8 text-center">Blog Viewer</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post) => (
            <div key={post.id} className="bg-white rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition-transform duration-300 flex flex-col">
              <div className="p-6 flex-1">
                <h2 className="font-semibold text-gray-800 hover:text-blue-500 transition-colors text-xl">Title: <span className="font-medium text-lg"> {post.title}</span> </h2>
                <p className="text-gray-600 mt-2 line-clamp-3"> <span className="font-bold">Description:</span>  {post.body}</p>
              </div>
              <div className="p-6 bg-gray-100 mt-auto">
                <Link
                  href={`/blog/${post.id}`}
                  className="text-blue-500 hover:underline font-medium"
                >
                  Read More...
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
