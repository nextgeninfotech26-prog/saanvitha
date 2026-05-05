import React from "react";

const Button = ({
  text,
  icon,
  children,
  color = "primary",
  type = "submit",
  onClick,
  align = "left",
  width,
  height,
}) => {
  // Determine flex container class
  let wrapperClass = "";
  let buttonClass = "";

  if (align === "center") {
    wrapperClass = "d-flex justify-content-center";
    buttonClass = "mx-auto";
  }
  if (align === "right") {
    wrapperClass = "d-flex justify-content-end";
    buttonClass = "ms-auto";
  }

  const style = {};
  if (width) style.width = width;
  if (height) style.height = height;

  // If width is set, center the content inside button
  const contentClass = width ? "d-flex justify-content-center align-items-center" : "d-flex align-items-center gap-2";

  return (
    <div className={wrapperClass}>
      <button
        type={type}
        className={`btn btn-${color} ${contentClass} ${buttonClass}`}
        onClick={onClick}
        style={style}
      >
        {icon && <span>{icon}</span>}
        {text ? <span>{text}</span> : children}
      </button>
    </div>
  );
};

export default Button;
