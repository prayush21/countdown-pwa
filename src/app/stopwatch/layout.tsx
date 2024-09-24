import React from "react";

export default function layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className=" max-w-2xl mx-auto text-center h-screen">{children}</div>
  );
}
