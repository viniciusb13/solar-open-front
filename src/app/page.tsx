import HomePage from "@/components/Dashboard/HomePage";
import { Metadata } from "next";
import DefaultLayout from "@/components/Layouts/DefaultLayout";
import React from "react";

export const metadata: Metadata = {
  title:
    "Solar Open",
  description: "Solar Open",
};

export default function Home() {
  return (
    <>
      <DefaultLayout>
        <HomePage />
      </DefaultLayout>
    </>
  );
}
