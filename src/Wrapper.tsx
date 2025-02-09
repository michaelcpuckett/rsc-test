"use client";

import { Suspense } from "react";

export default function Wrapper({ children }: React.PropsWithChildren<{}>) {
  return <Suspense fallback={<div>Loading...</div>}>{children}</Suspense>;
}
