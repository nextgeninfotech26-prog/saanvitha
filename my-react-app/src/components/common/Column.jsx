const Column = ({ children, size = {}, width = "", className = "", style = {}, ...rest }) => {
  const getBySize = () => {
    return Object.entries(size)
      .map(([breakpoint, value]) => `col-${breakpoint}-${value}`)
      .join(" ");
  };

  const colClass = getBySize() || "col";

  return (
    <div
      className={`${colClass} ${className}`}
      style={{ width: width || "auto", ...style }}  // dynamic width + extra styles
      {...rest}
    >
      {children}
    </div>
  );
};

export default Column;
