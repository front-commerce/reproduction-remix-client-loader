import { useLoaderData } from "@remix-run/react";
import { json } from "@remix-run/node";
import Demo from "~/components/Demo";

export async function loader() {
  console.log("Loader called for path: /example-2");
  return json({ path: "/example-2" });
}

export async function clientLoader() {
  console.log("Client loader called for path: /example-2");
  return { path: "/example-2 (client)" };
}

export default function Example2() {
  const data = useLoaderData<typeof loader>();
  return (
    <Demo
      title="Example with Client Loader"
      path={data.path}
      hasClientLoader={true}
    />
  );
}
