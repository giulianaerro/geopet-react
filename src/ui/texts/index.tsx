import React from "react";

export function TextTitle({ children }) {
  return <h1>{children}</h1>;
}

export function Text({ className, children }) {
  return <h3 className={className}>{children}</h3>;
}

export function TextSubtitle({ className, children }) {
  return <h2 className={className}>{children}</h2>;
}
