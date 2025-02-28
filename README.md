# Remix Client Loader Prefetch Issue Reproduction

This repository demonstrates an issue with Remix's client loader behavior when using `prefetch="intent"`. The issue shows that when a client loader is present, neither the server loader nor the client loader are called during prefetch.

## The Issue

When using `prefetch="intent"` on a `<Link>` component:

- Routes with only server loaders work as expected (the server loader is called on prefetch)
- Routes with a client loader present do not trigger ANY loaders during prefetch (neither server nor client loaders are called)

## Reproduction Steps

### Installation

```bash
pnpm install
```

### Running the App

```bash
pnpm dev
```

This will start the development server at http://localhost:3000

### Steps to Reproduce

1. Open your browser's developer console (F12 or right-click -> Inspect -> Console)
2. Visit the home page at http://localhost:3000
3. Hover over the links (this triggers `prefetch="intent"`)
4. Observe the console logs in both terminal and browser:
   - Example 1 (without client loader): The server loader logs on hover as expected
   - Example 2 (with client loader): No loader calls occur on hover - neither server nor client loader is triggered

### Expected Behavior

When hovering over a link with `prefetch="intent"`:

- Routes with only server loaders: Server loader should be called
- Routes with both loaders: At least one of the server or client loaders should be called

### Actual Behavior

When hovering over a link with `prefetch="intent"`:

- Routes with only server loaders: Works as expected (server loader is called)
- Routes with both loaders: Neither loader is called at all

## Project Structure

```
app/
├── routes/
│   ├── _index.tsx      # Home page with navigation
│   ├── example-1.tsx   # Example without client loader
│   └── example-2.tsx   # Example with client loader
└── components/
    └── Demo.tsx        # Shared component for examples
```

## Technical Details

- Both examples use `prefetch="intent"` on their links
- Example 1 only has a server loader (works as expected)
- Example 2 has both server and client loaders (neither loader is called during prefetch)
- The reproduction uses minimal dependencies and styling to focus on the core issue

## Environment

- Remix version: 2.16.0
- Node.js version: >=20.0.0
- Package Manager: pnpm
- React version: ^18.2.0
