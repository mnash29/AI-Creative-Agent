import getTemporaryAccessToken from "@/actions/get-temporary-access-token";
import SchematicEmbedComponent from "./schematic-embed";

async function SchematicComponent({ componentId }: { componentId: string }) {
  if (!componentId) return null;
  
    // Get access token
  const accessToken = await getTemporaryAccessToken();

  if (!accessToken) {
    throw new Error("Failed to retrieve access token");
    
  }

  return <SchematicEmbedComponent accessToken={accessToken} componentId={componentId} />;
}
export default SchematicComponent;
