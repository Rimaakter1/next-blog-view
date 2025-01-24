"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "@/provider/AuthProvider";

export default function Login() {
    const router = useRouter();
    const { login } = useAuth();
    const [error, setError] = useState(null);

    const handleLogin = async (e) => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;

        try {
            await login({ email, password });
            setError(null);
            router.push("/profile");
        } catch (err) {
            setError(err.message || "Failed to log in. Please try again.");
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
            <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-md text-black">
                <h1 className="text-2xl  font-bold text-center mb-6">Log In</h1>

                <form onSubmit={handleLogin} className="space-y-6">
                    <div>
                        <label className="block text-lg font-medium">Email</label>
                        <input
                            type="email"
                            name="email"
                            required
                            className="mt-2 w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>

                    <div>
                        <label className="block text-lg font-medium">Password</label>
                        <input
                            type="password"
                            name="password"
                            required
                            className="mt-2 w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>

                    {error && <p className="text-red-500">{error}</p>}

                    <button
                        type="submit"
                        className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition"
                    >
                        Log In
                    </button>
                </form>

            </div>
        </div>
    );
}
