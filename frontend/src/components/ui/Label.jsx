import React from "react";

export default function Label({ htmlFor, children, className = "" }) {
  return (
    <label htmlFor={htmlFor} className={`label-funky ${className}`}>
      {children}
    </label>
  );
}
