import { Link } from "@remix-run/react";

interface DemoProps {
  title: string;
  path: string;
  hasClientLoader?: boolean;
}

export default function Demo({
  title,
  path,
  hasClientLoader = false,
}: DemoProps) {
  return (
    <div className="space-y-6 mx-auto p-8 max-w-2xl">
      <div className="flex justify-between items-center">
        <h1 className="font-bold text-2xl">{title}</h1>
        <div className="flex items-center gap-2">
          <span className="font-medium text-sm">Client Loader:</span>
          {hasClientLoader ? (
            <span className="text-green-500">Enabled ✓</span>
          ) : (
            <span className="text-red-500">Disabled ✗</span>
          )}
        </div>
      </div>

      <div className="bg-gray-50 dark:bg-gray-800 p-6 border border-gray-200 dark:border-gray-700 rounded-lg">
        <p className="mb-4 text-lg">
          Current path:{" "}
          <code className="bg-gray-200 dark:bg-gray-700 px-2 py-1 rounded">
            {path}
          </code>
        </p>
        <p className="mb-4 text-gray-600 dark:text-gray-400 text-sm">
          Check the console to see when loaders are called during navigation
        </p>
      </div>

      <div className="flex gap-4">
        <Link
          to="/"
          className="bg-blue-500 hover:bg-blue-600 px-4 py-2 rounded text-white transition-colors"
          prefetch="intent"
        >
          ← Back Home
        </Link>
        <Link
          to={hasClientLoader ? "/example-1" : "/example-2"}
          className="hover:bg-gray-50 dark:hover:bg-gray-800 px-4 py-2 border border-gray-300 dark:border-gray-600 rounded transition-colors"
          prefetch="intent"
        >
          Try {hasClientLoader ? "without" : "with"} Client Loader
        </Link>
      </div>
    </div>
  );
}
