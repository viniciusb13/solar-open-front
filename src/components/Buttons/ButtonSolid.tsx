interface ButtonPropTypes {
  label: string;
  onClick: () => void;
  customClasses?: string;
  children?: React.ReactNode;
}

const ButtonSolid = ({
  label,
  customClasses = "",
  children,
  onClick
}: ButtonPropTypes) => {

  return (
    <button onClick={onClick} className={`inline-flex items-center justify-center gap-2.5 text-center font-medium hover:bg-opacity-90 bg-[#FFD159] text-gray-dark rounded-[5px] px-10 py-3.5 lg:px-8 xl:px-10 ${customClasses}`}>
        {children}
        {label}
    </button>
  );
};

export default ButtonSolid;