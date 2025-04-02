import reactLogo from "../assets/react.svg";
import viteLogo from "../assets/vite.svg";
import icLogo from "../assets/ic.svg";
import { createRootRoute, Link, Outlet } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/react-router-devtools";

export const Route = createRootRoute({
  component: () => (
    <main className="dark">
      <div className="flex flex-col gap-14 items-center w-[400px]">
        <div className="flex gap-10">
          <a
            href="https://internetcomputer.org"
            target="_blank"
            rel="noreferrer"
          >
            <img src={icLogo} alt="ICP logo" className="h-20" />
          </a>
          <a href="https://vite.dev" target="_blank" rel="noreferrer">
            <img src={viteLogo} alt="Vite logo" className="h-20" />
          </a>
          <a href="https://react.dev" target="_blank" rel="noreferrer">
            <img src={reactLogo} alt="React logo" className="h-20" />
          </a>
        </div>
        <h1>ICP Starter</h1>
        <h2 className="text-center">
          React + TypeScript + Vite + Tailwind + Shadcn/UI + Tanstack
          Query/Router
        </h2>
        <div className="flex gap-5 text-white underline">
          <Link to="/">/index</Link>
          <Link to="/about">/about</Link>
        </div>
        <Outlet />
        <TanStackRouterDevtools />
      </div>
    </main>
  ),
});
