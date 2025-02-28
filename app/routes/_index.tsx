import type { MetaFunction } from "@remix-run/node";
import { Link } from "@remix-run/react";

export const meta: MetaFunction = () => {
  return [
    { title: "Remix Client Loader Reproduction" },
    {
      name: "description",
      content: "A minimal reproduction of client loader behavior with prefetch",
    },
  ];
};

export default function Index() {
  return (
    <div className="bg-white dark:bg-gray-900 min-h-screen">
      <div className="mx-auto p-8 max-w-2xl">
        <div className="mb-12 text-center">
          <h1 className="mb-4 font-bold text-3xl">
            Remix Client Loader Reproduction
          </h1>
          <p className="text-gray-600 dark:text-gray-400">
            This is a minimal reproduction to demonstrate client loader behavior
            with prefetch. Open your console to observe when loaders are called.
          </p>
        </div>

        <div className="gap-6 grid">
          {examples.map((example) => (
            <Link
              key={example.path}
              to={example.path}
              prefetch="intent"
              className="group bg-gray-50 dark:bg-gray-800 p-6 border border-gray-200 dark:border-gray-700 hover:border-blue-500 dark:hover:border-blue-500 rounded-lg transition-colors"
            >
              <div className="flex justify-between items-center mb-2">
                <h2 className="group-hover:text-blue-500 font-semibold text-xl">
                  {example.title}
                </h2>
                <span
                  className={
                    example.hasClientLoader ? "text-red-500" : "text-green-500"
                  }
                >
                  {example.hasClientLoader
                    ? "Client Loader ✗"
                    : "No Client Loader ✓"}
                </span>
              </div>
              <p className="mb-4 text-gray-600 dark:text-gray-400 text-sm">
                {example.description}
              </p>
              <p className="text-gray-600 dark:text-gray-400">
                → {example.issue}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

const examples = [
  {
    path: "/example-1",
    title: "Example without Client Loader",
    description: "This example only uses loader",
    issue: "The loader logs on prefetch.",
    hasClientLoader: false,
  },
  {
    path: "/example-2",
    title: "Example with Client Loader",
    description: "This example uses both loader and client loader",
    issue: "Neither the client loader nor the server loader logs on prefetch.",
    hasClientLoader: true,
  },
];
