import React from "react";

const buttonStyles = (type) => {
  switch (type) {
    case "google":
      return "bg-[#4285f4] text-white hover:bg-[#3273dc] hover:border-none";
    case "inverted":
      return "bg-white text-black border border-black hover:bg-black  hover:text-white";
    case "default":
      return "bg-black text-white border border-black hover:bg-white hover:text-black";
    default:
      return "";
  }
};

const Button = ({
  children,
  buttonType = "default",
  className = "",
  ...otherProps
}) => {
  return (
    <button
      className={`px-4 py-2 rounded transition
        duration-300 font-semibold hover:border ${buttonStyles(
          buttonType
        )} ${className}`}
      {...otherProps}
    >
      {children}
    </button>
  );
};

export default Button;
