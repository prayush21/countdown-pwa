import React, { PropsWithChildren } from "react";

const layout: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <div className=" max-w-2xl mx-auto text-center h-screen">{children}</div>
  );
};

export default layout;
