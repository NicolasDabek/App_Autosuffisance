import { Link, useRouterState } from "@tanstack/react-router";
import { CircleUserRound, Flame, House, Menu, Sprout, Bird } from "lucide-react";
import { type ReactNode, useEffect, useState } from "react";
import { CommandSearch } from "@/components/command-search";
import { Logo } from "@/components/logo";
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

const TABS = [
  { id: "accueil", label: "Accueil", to: "/", icon: House },
  { id: "nourrir", label: "Nourrir", to: "/potager", icon: Sprout },
  { id: "elevage", label: "Élevage", to: "/elevage", icon: Bird },
  { id: "energie", label: "Énergie", to: "/energie", icon: Flame },
] as const;

const NOURRIR = ["/potager", "/semis", "/sol", "/verger", "/cueillette", "/conservation", "/atelier", "/garde", "/chaines"];

function activeTab(path: string) {
  if (path === "/") return "accueil";
  if (path.startsWith("/elevage")) return "elevage";
  if (path.startsWith("/energie")) return "energie";
  if (NOURRIR.some((p) => path === p || path.startsWith(p + "/"))) return "nourrir";
  return "plus";
}

/** Barre d’onglets mobile : 4 sections + « Plus » qui ouvre le menu complet. */
function BottomTabs({ onMore }: { onMore: () => void }) {
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const current = activeTab(pathname);
  const item = "flex flex-1 flex-col items-center gap-0.5 text-xs font-semibold";
  const pill = "grid h-8 w-14 place-items-center rounded-full";
  return (
    <nav
      aria-label="Navigation principale"
      className="fixed inset-x-0 bottom-0 z-30 flex border-t border-border bg-card px-1.5 pt-2 pb-[max(14px,env(safe-area-inset-bottom))] lg:hidden"
    >
      {TABS.map((t) => {
        const on = current === t.id;
        const Icon = t.icon;
        return (
          <Link
            key={t.id}
            to={t.to}
            aria-current={on ? "page" : undefined}
            className={cn(item, on ? "text-moss-dark" : "text-muted-foreground")}
          >
            <span className={cn(pill, on && "bg-moss-light")}>
              <Icon className="size-5" />
            </span>
            {t.label}
          </Link>
        );
      })}
      <button
        type="button"
        onClick={onMore}
        className={cn(item, current === "plus" ? "text-moss-dark" : "text-muted-foreground")}
      >
        <span className={cn(pill, current === "plus" && "bg-moss-light")}>
          <Menu className="size-5" />
        </span>
        Plus
      </button>
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
          <header className="sticky top-0 z-20 flex h-16 items-center gap-2.5 border-b border-border bg-background/95 px-4 backdrop-blur-sm lg:hidden">
            <Link to="/" className="rounded-md">
              <Logo />
            </Link>
            <div className="flex-1" />
            <CommandSearch compact />
            <Link
              to="/"
              hash="foyer"
              aria-label="Profil du foyer"
              className="grid size-10 place-items-center rounded-xl border border-border bg-card text-foreground hover:bg-muted"
            >
              <CircleUserRound className="size-[18px]" />
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
          <main className="mx-auto w-full max-w-6xl px-4 pb-28 pt-5 sm:px-6 lg:px-8 lg:pb-10 lg:pt-8">{children}</main>
          <BottomTabs onMore={() => setOpen(true)} />
        </div>
      </div>
    </TooltipProvider>
  );
}
