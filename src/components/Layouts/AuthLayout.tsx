"use client";
import React from "react";

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {

  window.document.documentElement.classList.add("dark")

  return (
    <>
      <div className="flex h-screen overflow-hidden w-full justify-center items-center">
        {/* <div className="relative flex flex-1 flex-col overflow-y-auto overflow-x-hidden"> */}
          <main>
            <div className="mx-auto max-w-screen-xl w-screen p-4 md:p-6 2xl:p-10">
              {children}
            </div>
          </main>
        {/* </div> */}
      </div>
    </>
  );
}
