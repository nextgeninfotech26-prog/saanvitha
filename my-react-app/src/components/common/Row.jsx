
const Row = ({ children, className = '', ...rest }) => {
  const defaultClass = 'row'; 
  return (
    <div className={`${defaultClass} ${className}`} {...rest}>
      {children}
    </div>
  );
};

export default Row;




// const Row = ({ children, cols = {}, className = "", ...rest }) => {
//   const colsClass = Object.entries(cols)
//     .map(([bp, num]) => `row-cols-${bp}-${num}`)
//     .join(" ");
//   return (
//     <div className={`row ${colsClass} ${className}`} {...rest}>
//       {children}
//     </div>
//   );
// };

// export default Row;