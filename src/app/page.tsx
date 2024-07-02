import React from "react";
import { Metadata } from "next";

import HomePage from "@/components/HomePage";
import DefaultLayout from "@/components/Layouts/DefaultLayout";

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
