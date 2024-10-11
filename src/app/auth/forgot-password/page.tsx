import React from "react";
import Link from "next/link";
import { Metadata } from "next";
import RedefinePassword from "@/components/Auth/RedefinePassword";
import AuthLayout from "@/components/Layouts/AuthLayout";


export const metadata: Metadata = {
  title: "Esqueci minha senha | Solar Open",
  description: "Solar Open",
};

const ForgotPassword: React.FC = () => {
  return (
    <AuthLayout>
        <div className="w-full h-screen flex justify-center items-center">
            <div className="xl:w-1/2 rounded-[10px] bg-white shadow-1 dark:bg-gray-dark dark:shadow-card">
                <div className="flex flex-wrap items-center">
                    <div className="w-full p-4 sm:p-12.5 xl:p-15">
                        <RedefinePassword />
                    </div>
                </div>
            </div>
        </div>
    </AuthLayout>
  );
};

export default ForgotPassword;
