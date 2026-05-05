
const Radiobutton = ({
  label = '',
  name,
  value,
  onChange,
  options = [],
  required = false,
  className = '',
  labelClass = '',
  groupClass = '',
  ...rest
}) => {
  return (
    <div className={`mb-3 ${groupClass}`}>
      {label && (
        <label className={`form-label ${labelClass}`}>
          {label} {required && <span className="text-danger">*</span>}
        </label>
      )}
      <div className={`d-flex gap-3 flex-wrap ${className}`}>
        {options.map((option) => (
          <div className="form-check" key={option.value}>
            <input
              className="form-check-input"
              type="radio"
              id={`${name}_${option.value}`}
              name={name}
              value={option.value}
              checked={value === option.value}
              onChange={onChange}
              required={required}
              {...rest}
            />
            <label className="form-check-label" htmlFor={`${name}_${option.value}`}>
              {option.label}
            </label>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Radiobutton;
