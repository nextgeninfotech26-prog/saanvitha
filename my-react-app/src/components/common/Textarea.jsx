const Textarea = ({
  label = '',
  placeholder = '',
  value,
  onChange,
  name,
  id,
  rows = 4,
  required = false,
  className = '',
  labelClass = '',
  groupClass = '',
  ...rest
}) => {
  const defaultClass = 'form-control';

  return (
    <div className={`mb-3 ${groupClass}`}>
      {label && (
        <label htmlFor={id || name} className={`form-label ${labelClass}`}>
          {label} {required && <span className="text-danger">*</span>}
        </label>
      )}
      <textarea
        className={`${defaultClass} ${className}`}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        name={name}
        id={id || name}
        rows={rows}
        required={required}
        {...rest}
      />
    </div>
  );
};

export default Textarea;
