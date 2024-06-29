import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";
import { Metadata } from "next";
import DefaultLayout from "@/components/Layouts/DefaultLayout";
import AlertError from "@/components/Alerts/AlertError";
import AlertSuccess from "@/components/Alerts/AlertSuccess";
import AlertWarning from "@/components/Alerts/AlertWarning";


export const metadata: Metadata = {
  title: "Next.js Alerts Page | NextAdmin - Next.js Dashboard Kit",
  description: "This is Next.js Alerts page for NextAdmin Dashboard Kit",
};

const Alerts = () => {
  return (
    <DefaultLayout>
      <div className="mx-auto w-full max-w-[970px]">
        <Breadcrumb pageName="Alertas" />

        <AlertError />
        <AlertSuccess />
        <AlertWarning />

      </div>
    </DefaultLayout>
  );
};

export default Alerts;
