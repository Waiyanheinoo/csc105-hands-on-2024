const Button = ({
  text,
  onClick,
  type = "button",
  variant = "primary",
  className = "",
}) => {
  const baseStyles =
    "px-4 py-1 font-semibold rounded-xl transition-all duration-200 shadow-md cursor-pointer text-center";

  const variants = {
    primary: "bg-green-900 text-white hover:bg-teal-600",
    secondary: "shadow-none text-black hover:bg-[#F6FBE9]",
  };

  return (
    <button
      type={type}
      onClick={onClick}
      className={`${baseStyles} ${variants[variant]} ${className}`}
    >
      {text}
    </button>
  );
};

export default Button;
