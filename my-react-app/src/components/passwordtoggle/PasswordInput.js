import React, { useState } from "react";

const PasswordInput = ({ value, onChange, placeholder = "Enter password" }) => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="mb-3 position-relative">
      <input
        type={showPassword ? "text" : "password"}
        className="form-control"
        id="password"
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        required
      />
      <i
        className={`bi ${showPassword ? "bi-eye" : "bi-eye-slash"} position-absolute top-50 end-0 translate-middle-y pe-3`}
        style={{ cursor: "pointer" }}
        onClick={() => setShowPassword((prev) => !prev)}
      ></i>
    </div>
  );
};

export default PasswordInput;
