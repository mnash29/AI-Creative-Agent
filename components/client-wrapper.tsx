"use client";

import { ClerkProvider } from "@clerk/nextjs";
import { SchematicProvider } from "@schematichq/schematic-react";
import SchematicWrapper from "./schematic-wrapper";

export default function ClientWrapper({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const schematicKey = process.env.NEXT_PUBLIC_SCHEMATIC_PUBLISHABLE_KEY;

  if (!schematicKey) {
    throw new Error("Schematic publishable key not found.");
  }

  return (
    <ClerkProvider>
      <SchematicProvider publishableKey={schematicKey}>
        <SchematicWrapper>{children}</SchematicWrapper>
      </SchematicProvider>
    </ClerkProvider>
  );
}
