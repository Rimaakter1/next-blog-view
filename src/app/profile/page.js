"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "@/provider/AuthProvider";

export default function Profile() {
    const { user, logout } = useAuth();
    const router = useRouter();

    useEffect(() => {
        if (!user) {
            router.push("/api/auth/login");
        }
    }, [user, router]);

    if (!user) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-gray-100">
                <p className="text-gray-600 text-lg">Loading your profile...</p>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gray-50 flex items-center justify-center">
            <div className="bg-white p-8 rounded-xl shadow-lg w-full max-w-md">
                <div className="text-center mb-6">
                    <h1 className="text-3xl font-bold text-gray-800">Welcome, {user.name}!</h1>
                    <p className="text-lg text-gray-500 mt-2">Your profile details are displayed below.</p>
                </div>

                <div className="space-y-6">
                    <div className="bg-blue-50 p-6 rounded-lg shadow-md">
                        <h2 className="text-2xl font-semibold text-gray-800">User Information</h2>
                        <div className="text-gray-600 mt-4">
                            <p><strong>Name:</strong> {user.name}</p>
                            <p><strong>Email:</strong> {user.email}</p>
                        </div>
                    </div>

                    <button
                        onClick={() => {
                            logout();
                            router.push("/login");
                        }}
                        className="w-full bg-red-600 text-white py-3 rounded-lg hover:bg-red-700 transition mt-4"
                    >
                        Log Out
                    </button>
                </div>
            </div>
        </div>
    );
}
