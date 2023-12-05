import React from "react";
export default function TabButton({ children, onSlected, ...props }) {
  return (
    <li>
      <button className={onSlected ? 'active': undefined} {...props}>{children}</button>
    </li>
  );
}
