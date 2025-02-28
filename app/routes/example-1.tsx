import { useLoaderData } from "@remix-run/react";
import { json } from "@remix-run/node";
import Demo from "~/components/Demo";

export async function loader() {
  console.log("Loader called for path: /example-1");
  return json({ path: "/example-1" });
}

// export async function clientLoader() {
//   console.log("Client loader called for path: /other");
//   return { path: "/other?client" };
// }

export default function Example1() {
  const data = useLoaderData<typeof loader>();
  return (
    <Demo
      title="Example without Client Loader"
      path={data.path}
      hasClientLoader={false}
    />
  );
}
