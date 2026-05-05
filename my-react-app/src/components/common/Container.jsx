const Container = ({
  children,
  fluid = false,
  breakpoint = "",
  className = "",
  height,
  width,
  backgroundImage,
  style = {},
  ...rest
}) => {
  const fluidClass = fluid
    ? breakpoint
      ? `container-${breakpoint}`
      : "container-fluid"
    : "container";

  return (
    <div
      className={`${fluidClass} ${className}`}
      style={{
        height,
        width,
        backgroundImage: backgroundImage ? `url(${backgroundImage})` : undefined,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        ...style,
      }}
      {...rest}
    >
      {children}
    </div>
  );
};

export default Container;
