import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@/styles/globals.css"
import Providers from "./provider";
import NextTopLoader from 'nextjs-toploader';

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  
  return (
    <html lang="en" className="">
      
      <body className="bg-[#282828]">
      <Providers>
      <NextTopLoader
      color="#2cac5c"
      />
      {children}
        </Providers>
        </body>
    </html>
  );
}