import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const Image = ({
  label = '',
  src,
  alt = '',
  width,
  height,
  rounded = false,
  fluid = false,
  border = '',
  className = '',
  labelClass = '',
  groupClass = '',
  ...rest
}) => {
  const borderClass = border ? `border border-${border}` : '';
  const roundedClass = rounded ? 'rounded' : '';
  const fluidClass = fluid ? 'img-fluid' : '';

  return (
    <div className={`mb-3 ${groupClass}`}>
      {label && <label className={`form-label ${labelClass}`}>{label}</label>}
      <img
        src={src}
        alt={alt}
        width={width}
        height={height}
        className={`${roundedClass} ${fluidClass} ${borderClass} ${className}`}
        {...rest}
      />
    </div>
  );
};

export default Image;
