import React from "react";

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div>
      <div>
        <div className="m-12">{children}</div>
      </div>
    </div>
  );
}
