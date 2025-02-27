/* eslint-disable react/prop-types */

import classNames from "classnames";

export default function Button({
  title,
  type = "button",
  onClick,
  isLoading,
  size = "medium",
  radius = "small",
  color = "yellow",
  isBorder = false,
}) {
  const sizeStyles = {
    small: "px-4 py-2 text-sm",
    medium: "px-7 py-3 text-base",
    large: "px-10 py-3 text-lg",
  };

  const radiusStyles = {
    small: "rounded-md",
    medium: "rounded-lg",
    large: "rounded-xl",
    full: "rounded-full",
  };

  const colorStyles = {
    // red: "bg-red-light text-white hover:bg-red-600",
    green: "bg-green-dark text-white hover:bg-green-light",
    yellow: "bg-[#B88E2F] text-white hover:bg-yellow-600",
    blue: "bg-blue-500 text-white hover:bg-blue-600",
    gray: "bg-gray-300 text-gray-800 hover:bg-gray-400",
    black: "bg-black text-white hover:bg-black-200",
    red: isBorder
      ? "border border-red-600 text-red-600 hover:text-red-500 hover:border-red-500"
      : "bg-red-600 text-white hover:bg-red-light",
  };

  const baseStyles = "transition-all duration-200";

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={isLoading}
      className={classNames(
        baseStyles,
        sizeStyles[size],
        colorStyles[color],
        radiusStyles[radius],
        "flex items-center justify-center gap-2 text-center"
      )}
    >
      {isLoading ? "Loading..." : title}
    </button>
  );
}
