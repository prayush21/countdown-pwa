import React from "react";

type Props = { children };

export default function layout({ children }: Props) {
  return (
    <div className=" max-w-2xl mx-auto text-center h-screen">{children}</div>
  );
}
