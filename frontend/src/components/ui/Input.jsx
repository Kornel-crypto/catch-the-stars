import React from "react";

export default function Input({
  type = "text",
  name,
  placeholder = "",
  value,
  onchange,
  className = "",
  required = false,
}) {
  return (
    <input
      type={type}
      name={name}
      placeholder={placeholder}
      value={value}
      onChange={onchange}
      className={`input-style ${className}`}
      required={required}
    />
  );
}
