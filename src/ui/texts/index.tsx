import React from "react";

export function TextTitle({ className = null, children }) {
  return <h1 className={className}>{children}</h1>;
}

export function Text({ className = null, children }) {
  return <h3 className={className}>{children}</h3>;
}

export function TextSubtitle({ className = null, children }) {
  return <h2 className={className}>{children}</h2>;
}
