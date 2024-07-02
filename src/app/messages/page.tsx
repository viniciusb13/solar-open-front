import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";
import { Metadata } from "next";
import DefaultLayout from "@/components/Layouts/DefaultLayout";


export const metadata: Metadata = {
  title: "Mensagens | Solar Open",
  description: "Solar Open",
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
