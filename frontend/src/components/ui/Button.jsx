"use client";
import React from "react";

export default function Button({
  children,
  onClick,
  type = "button",
  className = "",
  icon = null,
}) {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`button-style flex items-center justify-center gap-2 ${className}`}
    >
      {icon && <span className="w-5 h-5">{icon}</span>}
      <span>{children}</span>
    </button>
  );
}
