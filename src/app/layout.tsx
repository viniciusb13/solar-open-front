"use client";
import React, { useEffect, useState } from "react";
import { Inter } from 'next/font/google'
 
// If loading a variable font, you don't need to specify the font weight
const inter = Inter({ subsets: ['latin'] })

import Loader from "@/components/common/Loader";

import "@/css/style.css";
// import "@/css/satoshi.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    setTimeout(() => setLoading(false), 1000);
  }, []);

  return (
    <html lang="pt-BR">
      <body suppressHydrationWarning={true} className={inter.className}>
        {loading ? <Loader /> : children}
      </body>
    </html>
  );
}
