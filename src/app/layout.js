"use client";
import Link from "next/link";
import { KindeProvider } from "@kinde-oss/kinde-auth-nextjs";
import './globals.css';
import { AuthProvider } from "@/provider/AuthProvider";
import NavBar from "@/components/Navbar";

export default function RootLayout({ children }) {

  return (
    <html lang="en">
      <body>
        <AuthProvider>
          <KindeProvider
            clientId={process.env.NEXT_PUBLIC_KIND_AUTH_CLIENT_ID}
            domain={process.env.NEXT_PUBLIC_KIND_AUTH_DOMAIN}
            redirectUri={process.env.NEXT_PUBLIC_KIND_AUTH_REDIRECT_URI}
          >

            <NavBar></NavBar>

            <main className="p-4">{children}</main>
          </KindeProvider>
        </AuthProvider>
      </body>
    </html>
  );
}
