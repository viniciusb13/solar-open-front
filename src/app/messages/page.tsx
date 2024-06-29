import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";
import { Metadata } from "next";
import DefaultLayout from "@/components/Layouts/DefaultLayout";


export const metadata: Metadata = {
  title: "Next.js Messages Page | NextAdmin - Next.js Dashboard Kit",
  description: "This is Next.js Messages page for NextAdmin Dashboard Kit",
};

const Messages = () => {
  return (
    <DefaultLayout>
      <div className="mx-auto w-full max-w-[970px]">
        <Breadcrumb pageName="Mensagens" />

      </div>
    </DefaultLayout>
  );
};

export default Messages;
