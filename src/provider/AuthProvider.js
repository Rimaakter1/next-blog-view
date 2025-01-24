import { createContext, useContext, useState } from "react";

const AuthContext = createContext();

export function AuthProvider({ children }) {
    const [user, setUser] = useState(null);

    const login = async ({ email, password }) => {
        if (email === "rima@gmail.com" && password === "password123") {
            setUser({ email, name: "Rima Akter" });
            return true;
        } else {
            throw new Error("Invalid credentials");
        }
    };

    const setProfile = async (profile) => {
        setUser((prev) => ({ ...prev, ...profile }));
        console.log("Profile updated:", profile);
    };

    const logout = () => {
        setUser(null);
    };

    return (
        <AuthContext.Provider value={{ user, login, setProfile, logout }}>
            {children}
        </AuthContext.Provider>
    );
}

export function useAuth() {
    return useContext(AuthContext);
}
