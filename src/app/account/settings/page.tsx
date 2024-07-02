import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";

import { Metadata } from "next";
import DefaultLayout from "@/components/Layouts/DefaultLayout";
import UserSettingBoxes from "@/components/UserSettingBoxes";

export const metadata: Metadata = {
  title: "Configurações da Conta | Solar Open",
  description: "Solar Open",
};

const AccountSettings = () => {
  return (
    <DefaultLayout>
      <div className="mx-auto w-full max-w-[1080px]">
        <Breadcrumb pageName="Configurações da Conta" />

        <UserSettingBoxes />
      </div>
    </DefaultLayout>
  );
};

export default AccountSettings;
