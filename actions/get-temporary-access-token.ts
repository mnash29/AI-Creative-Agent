"use server";

import { currentUser } from "@clerk/nextjs/server";
import { SchematicClient } from "@schematichq/schematic-typescript-node";

// Initialize Schematic SDK
const apiKey = process.env.SCHEMATIC_API_KEY;

if (!apiKey) {
  throw new Error("SCHEMATIC_API_KEY is not found.");
}

const client = new SchematicClient({ apiKey });

export async function getTemporaryAccessToken() {
  const user = await currentUser();

  if (!user) return null;

  // Get a temporary access token
  const resp = await client.accesstokens.issueTemporaryAccessToken({
    resourceType: "company",
    lookup: { id: user.id }, // The lookup will vary depending on how you have configured your company keys
  });

  return resp.data.token;
}

export default getTemporaryAccessToken;
