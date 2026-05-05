import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const Input = ({
  label = '',
  icon,
  type = 'text',
  placeholder = '',
  value,
  onChange,
  color = 'primary',
  size = '',
  name,
  id,
  required = false,
  className = '',
  labelClass = '',
  groupClass = '',
  ...rest
}) => {
  const [showPassword, setShowPassword] = useState(false);

  const sizeClass = size ? `form-control-${size}` : '';
  const borderClass = `border-${color}`;
  const defaultInputClass = 'form-control';

  const inputType =
    type === 'password' ? (showPassword ? 'text' : 'password') : type;

  return (
    <div className={`mb-3 ${groupClass}`}>
      {label && (
        <label htmlFor={id || name} className={`form-label ${labelClass}`}>
          {label} {required && <span className="text-danger">*</span>}
        </label>
      )}

      <div className="position-relative">
        {icon && (
          <span className={`input-group-text bg-${color} text-white`}>
            {icon}
          </span>
        )}

        <input
          type={inputType}
          className={`${defaultInputClass} ${sizeClass} ${borderClass} ${className} ${type === 'password' ? 'pe-5' : ''}`}  
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          name={name}
          id={id || name}
          required={required}
          {...rest}
        />

        {/* 👁 Eye icon only if type=password */}
        {type === 'password' && (
          <i
            className={`bi ${showPassword ? 'bi-eye' : 'bi-eye-slash'} position-absolute top-50 end-0 translate-middle-y me-3`}
            style={{ cursor: 'pointer' }}
            onClick={() => setShowPassword((prev) => !prev)}
          ></i>
        )}
      </div>
    </div>
  );
};

export default Input;
