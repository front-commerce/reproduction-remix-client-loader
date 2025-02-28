import { ClientLoaderFunctionArgs, useLoaderData } from "@remix-run/react";
import { json } from "@remix-run/node";
import Demo from "~/components/Demo";

export async function loader() {
  console.log("Loader called for path: /example-3");
  return json({ path: "/example-3" });
}

export async function clientLoader({ serverLoader }: ClientLoaderFunctionArgs) {
  const serverData = await serverLoader<typeof loader>();

  console.log("Client loader called for path: /example-3", { serverData });
  return { ...serverData, path: "/example-3 (client)" };
}

clientLoader.hydrate = true;

export default function Example3() {
  const data = useLoaderData<typeof loader>();
  return (
    <Demo
      title="Example with Client Loader and Hydration"
      path={data.path}
      hasClientLoader={true}
    />
  );
}

export function HydrateFallback() {
  return <div>Hydrating...</div>;
}
