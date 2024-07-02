import React from "react";
import Link from "next/link";

interface ButtonPropTypes {
  label: string;
  link?: string;
  customClasses?: string;
  children?: React.ReactNode;
}

const ButtonDefault = ({
  label,
  link,
  customClasses,
  children,
}: ButtonPropTypes) => {
  return (
    <>
      {/* <Link
        className={`inline-flex items-center justify-center gap-2.5 text-center font-medium hover:bg-opacity-90 ${customClasses}`}
        href={link}
      > */}
        
      <button className={`inline-flex items-center justify-center gap-2.5 text-center font-medium hover:bg-opacity-90 ${customClasses}`}>
        {children}
        {label}
      </button>
      {/* </Link> */}
    </>
  );
};

export default ButtonDefault;
