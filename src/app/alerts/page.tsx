import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";
import { Metadata } from "next";
import DefaultLayout from "@/components/Layouts/DefaultLayout";
import AlertError from "@/components/Alerts/AlertError";
import AlertSuccess from "@/components/Alerts/AlertSuccess";
import AlertWarning from "@/components/Alerts/AlertWarning";


export const metadata: Metadata = {
  title: "Alertas | Solar Open",
  description: "Solar Open",
};

const Alerts = () => {
  return (
    <DefaultLayout>
      <div className="mx-auto w-full max-w-[970px]">
        <Breadcrumb pageName="Alertas" />

        {/* <AlertError />
        <AlertSuccess />
        <AlertWarning /> */}

      </div>
    </DefaultLayout>
  );
};

export default Alerts;
