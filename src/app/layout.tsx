import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import NavbarPage from "./_component/Navbar";
import { Roboto } from "next/font/google";


const roboto = Roboto({
  subsets: ["latin"],
})

export const metadata: Metadata = {
  title: "Next  Website",
  description: "create next js website that contain all the topic",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={roboto.className}>
      <body className=" antialiased"
      >
        <div className="min-h-screen bg-gray-100">
          <NavbarPage />
          <main className="container mx-auto px-4 py-8">
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}
