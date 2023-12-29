"use client";

import type { Metadata } from "next";
import { Inter, Montserrat } from "next/font/google";
import "./globals.css";
import { Provider } from "react-redux";
import store from "@/store/store";

const inter = Montserrat({ subsets: ["latin"] });

const metadata: { title: string; description: string } = {
  title: "Shoppy",
  description: "Your one stop shopping experience",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <title>{metadata.title}</title>
      <body className={inter.className}>
        <Provider store={store}>{children}</Provider>
      </body>
    </html>
  );
}
