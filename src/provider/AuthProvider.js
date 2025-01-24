import { createContext, useContext, useState, useEffect } from "react";
import { KindeProvider, useKindeAuth } from "@kinde-oss/kinde-auth-nextjs";
import axios from "axios";

export const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
    const [loading, setLoading] = useState(true);
    const { isAuthenticated, user, login, logout, signup } = useKindeAuth();

    useEffect(() => {
        const handleAuthStateChange = async () => {
            setLoading(true);

            if (isAuthenticated) {
                console.log("User logged in:", user);
            } else {
                console.log("User logged out");
            }

            setLoading(false);
        };

        handleAuthStateChange();
    }, [isAuthenticated, user]);

    const authInfo = {
        user,
        loading,
        login,
        signup, // Redirects user to Kinde signup page
        logout, // Logs the user out from Kinde
    };

    return (
        <AuthContext.Provider value={authInfo}>
            {loading ? <p>Loading...</p> : children}
        </AuthContext.Provider>
    );
};



// Hook to Use Auth
export const useAuth = () => useContext(AuthContext);
