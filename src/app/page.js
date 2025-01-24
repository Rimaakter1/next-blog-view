import axios from "axios";
import Link from "next/link";

// Fetch posts
async function fetchPosts() {
  const response = await axios.get("https://jsonplaceholder.typicode.com/posts");
  return response.data;
}

export default async function Home() {
  const posts = await fetchPosts();

  return (
    <div className="p-4">
      <h1 className="text-4xl font-bold mb-6 text-center">Blog Viewer</h1>
      <ul className="flex flex-col items-center space-y-4">
        {posts.map((post) => (
          <li key={post.id} className="bg-white rounded-lg shadow-md p-4 w-11/12 md:w-8/12">
            <Link href={`/blog/${post.id}`} className="text-blue-500 hover:underline">
              {post.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
