import { createFileRoute, Outlet } from "@tanstack/react-router";
import { AppShell } from "@/components/layout/app-shell";
import { NotFound } from "@/components/not-found";

export const Route = createFileRoute("/_app")({
  component: AppLayout,
  notFoundComponent: NotFound,
});

function AppLayout() {
  return (
    <AppShell>
      <Outlet />
    </AppShell>
  );
}
