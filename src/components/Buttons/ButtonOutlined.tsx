interface ButtonPropTypes {
  label: string;
  customClasses?: string;
  children?: React.ReactNode;
}

const ButtonOutlined = ({
  label,
  customClasses,
  children,
}: ButtonPropTypes) => {

  return (
    <button className={`inline-flex items-center justify-center gap-2.5 text-center font-medium hover:bg-opacity-90 border border-[#FFD159] text-[#FFD159] rounded-[5px] px-10 py-3.5 lg:px-8 xl:px-10`}>
        {children}
        {label}
    </button>
  );
};

export default ButtonOutlined;