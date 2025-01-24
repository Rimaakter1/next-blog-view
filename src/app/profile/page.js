"use client";

import { useRouter } from "next/navigation";

export default function Profile() {
    const router = useRouter();

    return (
        <div className="min-h-screen bg-gray-50 flex items-center justify-center">
            <div className="bg-white p-8 rounded-xl shadow-lg w-full max-w-md">
                <div className="text-center mb-6">
                    <h1 className="text-3xl font-bold text-gray-800">Welcome</h1>
                    <p className="text-lg text-gray-500 mt-2">Your profile details are displayed below.</p>
                </div>

                <div className="space-y-6">
                    <div className="bg-blue-50 p-6 rounded-lg shadow-md">
                        <h2 className="text-2xl font-semibold text-gray-800">User Information</h2>
                        <div className="text-gray-600 mt-4">
                            <p>Name</p>
                            <p>Email</p>
                        </div>
                    </div>

                    <button
                        className="w-full bg-red-600 text-white py-3 rounded-lg hover:bg-red-700 transition mt-4"
                    >
                        Log Out
                    </button>
                </div>
            </div>
        </div>
    );
}
