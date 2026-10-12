import { Link, useRouterState } from "@tanstack/react-router";
import { Menu } from "lucide-react";
import { type ReactNode, useEffect, useState } from "react";
import { CommandSearch } from "@/components/command-search";
import { Logo } from "@/components/logo";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Sheet, SheetContent, SheetHeader, SheetTitle } from "@/components/ui/sheet";
import { TooltipProvider } from "@/components/ui/tooltip";
import { NAV } from "@/data/nav";
import { useHavre } from "@/lib/store";
import { cn } from "@/lib/utils";

function NavList({ onNavigate }: { onNavigate?: () => void }) {
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  return (
    <nav className="flex flex-col gap-6 pb-8">
      {NAV.map((group) => (
        <div key={group.id}>
          {group.id === "home" ? null : (
            <p className="mb-2 px-2 text-[11px] font-medium uppercase tracking-[0.16em] text-muted-foreground">
              {group.label}
            </p>
          )}
          <ul className="flex flex-col gap-0.5">
            {group.items.map((item) => {
              const active =
                item.href === "/"
                  ? pathname === "/"
                  : pathname === item.href || pathname.startsWith(item.href + "/");
              const Icon = item.icon;
              return (
                <li key={item.href}>
                  <Link
                    to={item.href}
                    onClick={onNavigate}
                    className={cn(
                      "flex min-h-10 items-center gap-2.5 rounded-lg px-2.5 text-sm transition-colors",
                      active
                        ? "bg-sidebar-accent font-medium text-primary"
                        : "text-sidebar-foreground hover:bg-muted",
                    )}
                  >
                    <Icon className="size-4 shrink-0" />
                    {item.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      ))}
    </nav>
  );
}

export function AppShell({ children }: { children: ReactNode }) {
  const [open, setOpen] = useState(false);
  const setHydrated = useHavre((s) => s.setHydrated);
  const hydrated = useHavre((s) => s.hydrated);

  useEffect(() => {
    if (!hydrated) setHydrated();
  }, [hydrated, setHydrated]);

  return (
    <TooltipProvider delayDuration={200}>
      <div className="min-h-svh">
        <aside className="fixed inset-y-0 left-0 z-30 hidden w-60 border-r border-sidebar-border bg-sidebar lg:flex lg:flex-col">
          <div className="flex h-16 items-center px-4">
            <Link to="/" className="rounded-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring">
              <Logo />
            </Link>
          </div>
          <div className="px-3 pb-3">
            <CommandSearch />
          </div>
          <ScrollArea className="flex-1 px-3">
            <NavList />
          </ScrollArea>
          <p className="border-t border-sidebar-border px-4 py-3 text-[11px] leading-relaxed text-muted-foreground">
            Almanach d’autosuffisance — France, foyer privé.
          </p>
        </aside>

        <div className="lg:pl-60">
          <header className="sticky top-0 z-20 flex h-14 items-center gap-3 border-b border-border bg-background/85 px-4 backdrop-blur-sm lg:hidden">
            <Button variant="ghost" size="icon" onClick={() => setOpen(true)} aria-label="Menu">
              <Menu className="size-5" />
            </Button>
            <Link to="/">
              <Logo />
            </Link>
          </header>
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetContent side="left" className="flex w-80 flex-col bg-sidebar p-0">
              <SheetHeader className="h-16 justify-center px-4">
                <SheetTitle className="sr-only">Navigation</SheetTitle>
                <Logo />
              </SheetHeader>
              <div className="px-3 pb-3">
                <CommandSearch />
              </div>
              <ScrollArea className="flex-1 px-3">
                <NavList onNavigate={() => setOpen(false)} />
              </ScrollArea>
            </SheetContent>
          </Sheet>
          <main className="mx-auto w-full max-w-6xl px-4 py-8 sm:px-6 lg:px-8">{children}</main>
        </div>
      </div>
    </TooltipProvider>
  );
}
