interface ButtonPropTypes {
  label: string;
  customClasses?: string;
  children?: React.ReactNode;
}

const ButtonRounded = ({
  label,
  children,
}: ButtonPropTypes) => {

  return (
    <button className={`inline-flex items-center justify-center gap-2.5 text-center font-medium hover:bg-opacity-90 bg-[#FFD159] text-gray-dark rounded-[5px] px-10`}>
        {children}
        {label}
    </button>
  );
};

export default ButtonRounded;