import Navbar from "@/components/Navbar/navbar";
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import ReactQuery from "@/components/reactQery";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Pokemon App",
  description: "This website pokemondex from Deo",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <ReactQuery>
        <body className={inter.className}>
          <Navbar />
          {children}
        </body>
      </ReactQuery>
    </html>
  );
}
