"use client";

import { ClerkProvider } from "@clerk/nextjs";
import Header from "./header";

export default function ClientWrapper({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <Header />
      {children}
    </ClerkProvider>
  );
}
