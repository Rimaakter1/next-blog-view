import axios from "axios";

// Fetch blog post data
async function fetchPost(id) {
    try {
        const response = await axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`);
        return response.data;
    } catch (error) {
        throw new Error("Failed to fetch post");
    }
}

// Dynamic blog details page
export default async function BlogDetails({ params }) {
    const { id } = params; // Extracting id from dynamic route
    const post = await fetchPost(id);

    return (
        <div className="max-w-3xl mx-auto px-4 py-6">
            <h1 className="text-4xl font-bold mb-4">{post.title}</h1>
            <p className="text-lg text-gray-600 mb-8">
                Written by User {post.userId}
            </p>
            <p className="text-gray-800 text-base">{post.body}</p>
        </div>
    );
}
