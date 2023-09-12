import Navbar from "@/components/Navbar/navbar";
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import ReactQuery from "@/components/reactQery";
import ReduxProvider from "@/components/reduxProvider";
import { ToastContainer } from "react-toastify";

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
      <head>
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className={inter.className}>
        <ReduxProvider>
          <ReactQuery>
            <ToastContainer
              position="top-right"
              autoClose={5000}
              hideProgressBar
              newestOnTop
              closeOnClick
            />
            <Navbar />
            {children}
          </ReactQuery>
        </ReduxProvider>
      </body>
    </html>
  );
}
