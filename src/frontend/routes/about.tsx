import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/about")({
  component: About,
});

function About() {
  return (
    <div className="flex flex-col bg-[#29ace2] p-10 rounded-xl items-center text-xl text-white gap-5">
      <div>
        This template provides a batteries included setup for an ICP/React
        application with the latest versions of Vite, TypeScript, Tailwind CSS,
        SWC, Eslint, Tanstack Query and Tanstack Router.
      </div>
    </div>
  );
}
