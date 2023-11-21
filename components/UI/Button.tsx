import React from "react";

interface ButtonProps {
  type: "button" | "submit";
  title: string;
  icon?: string;
  variant?: string;
}

const Button = ({ type, title, icon, variant }: ButtonProps) => {
  return (
    <button
      className={`flexCenter hidden group relative overflow-hidden uppercase no-underline  cursor-pointer transition-all border-none  ${variant}`}
      type={type}
    >
      <div className="absolute inset-0 w-0 bg-black-50 transition-all duration-500 ease-out  group-hover:w-full"></div>
      <label className="medium-14 cursor-pointer whitespace-nowrap relative text-black group-hover:text-white">
        {title}
      </label>
    </button>
  );
};

export default Button;
