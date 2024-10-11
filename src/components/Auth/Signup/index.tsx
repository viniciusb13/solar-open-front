"use client";
import Link from "next/link";
import React from "react";
import GoogleSigninButton from "../GoogleSigninButton";
import SignupWithPassword from "../SignupWithPassword";

export default function Signup() {
  return (
    <>
      <GoogleSigninButton text="Criar conta" />

      <div className="my-6 flex items-center justify-center">
        <span className="block h-px w-full bg-stroke dark:bg-dark-3"></span>
        <div className="block w-full min-w-fit bg-white px-3 text-center font-medium dark:bg-gray-dark">
          Ou crie uma conta usando seu email
        </div>
        <span className="block h-px w-full bg-stroke dark:bg-dark-3"></span>
      </div>

      <div>
        <SignupWithPassword />
      </div>

      <div className="mt-6 text-center">
        <p>
          Já possui uma conta?{" "}
          <Link href="/auth/signin" className="text-primary">
            Entrar
          </Link>
        </p>
      </div>
    </>
  );
}
