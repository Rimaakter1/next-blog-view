import axios from "axios";
import Link from "next/link";

async function fetchPost(id) {
    const response = await axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`);
    return response.data;
}

export default async function BlogDetails({ params }) {
    const { id } = params;
    const post = await fetchPost(id);

    return (
        <div className="bg-gray-50 min-h-screen">
            <div className="max-w-4xl mx-auto p-6">
                <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                    <div className="bg-blue-950 text-white p-6">
                        <h1 className="text-4xl font-bold">{post.title}</h1>
                        <p className="text-lg text-gray-200 mt-2">Written by User {post.userId}</p>
                    </div>

                    <div className="p-6 space-y-4">
                        <div className="bg-gray-100 p-4 rounded-md shadow-sm">
                            <h2 className="text-xl font-semibold text-gray-800 mb-4">Post Details</h2>
                            <p className="text-gray-700 text-lg">{post.body}</p>
                        </div>

                        <div className="flex justify-between items-center text-gray-700">
                            <p className="text-sm">Published on: <span className="font-medium">2025-01-24</span></p>
                            <p className="text-sm">Category: <span className="font-medium">General</span></p>
                        </div>

                        <div className="mt-6 bg-gray-200 p-6 rounded-md">
                            <h3 className="text-lg font-semibold text-gray-800">Comments (0)</h3>
                            <p className="text-gray-600">Be the first to comment!</p>
                        </div>
                    </div>

                    <div className="bg-gray-200 p-6 mt-6 rounded-b-lg">
                        <div className="flex justify-between items-center">
                            <Link href='/' className="bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700">
                                Back to Home
                            </Link>
                            <button className="bg-gray-500 text-white py-2 px-4 rounded-md hover:bg-gray-600">
                                Share Post
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
