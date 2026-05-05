
const Checkbox = ({ 
    lable='',
    name,
    checked=false,
    onChange,
    required=false,
    className='',
    lableClass='',
    gropClass='',
     ...rest
    }) => {
        const defaultClass='form-check-input';
    return(
        <div className={`${defaultClass} ${className}`}>
            <input
                className={`${defaultClass} ${className}`}
                type="checkbox"
                id={name}
                name={name}
                checked={checked}
                onChange={onChange}
                required={required}
                {...rest}
            />
            <label className={`form-check-label ${lableClass}`} htmlFor={name}>
                {lable} {required && <span className="text-danger">*</span>}
                
            </label>

        </div>
    )
}
export default Checkbox;



// import React from 'react';

// function CheckboxGroup({ label, options, selectedOptions, onChange }) {
//   // A helper function to handle the change of a single checkbox
//   const handleCheckboxChange = (event) => {
//     const { value, checked } = event.target;
//     if (checked) {
//       // Add the value to the selectedOptions array if it was checked
//       onChange([...selectedOptions, value]);
//     } else {
//       // Remove the value from the selectedOptions array if it was unchecked
//       onChange(selectedOptions.filter((option) => option !== value));
//     }
//   };

//   return (
//     <div>
//       <p>{label}</p>
//       {options.map((option) => (
//         <div key={option.value}>
//           <input
//             type="checkbox"
//             id={option.value}
//             name="checkbox-group"
//             value={option.value}
//             checked={selectedOptions.includes(option.value)}
//             onChange={handleCheckboxChange}
//           />
//           <label htmlFor={option.value}>{option.label}</label>
//           <br />
//         </div>
//       ))}
//     </div>
//   );
// }

// export default CheckboxGroup;