"use client";

import dynamic from "next/dynamic";
import React from "react";

const NoSSRCountdown = dynamic(() => import("@/components/Countdown"), {
  ssr: false,
});

function Page() {
  return (
    <>
      <NoSSRCountdown />
    </>
  );
}

export default Page;
