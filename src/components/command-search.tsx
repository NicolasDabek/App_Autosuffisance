import { useRouter } from "@tanstack/react-router";
import { Search } from "lucide-react";
import { useEffect, useMemo, useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { ANIMALS } from "@/data/animals";
import { CHAINS } from "@/data/chains";
import { CONSERVE } from "@/data/conservation";
import { CROPS } from "@/data/crops";
import { DIY } from "@/data/diy";
import { FORAGE } from "@/data/forage";
import { LEGAL } from "@/data/legal";
import { ALL_NAV_ITEMS } from "@/data/nav";
import { AMENDMENTS, AUXILIARIES, COVER_CROPS, PESTS, SOIL_TYPES } from "@/data/soil";
import { RECIPES } from "@/data/recipes";
import { SEED_LIFE, STOCKS } from "@/data/stocks";
import { TREES } from "@/data/trees";

type Hit = { href: string; title: string; group: string };

function buildIndex(): Hit[] {
  const hits: Hit[] = ALL_NAV_ITEMS.map((i) => ({ href: i.href, title: i.label, group: "Pages" }));
  ANIMALS.forEach((a) => hits.push({ href: `/elevage/${a.id}`, title: a.name, group: "Élevage" }));
  CHAINS.forEach((c) => hits.push({ href: `/chaines?id=${c.id}`, title: c.name, group: "Chaînes" }));
  CROPS.forEach((c) => hits.push({ href: `/potager#${c.id}`, title: c.name, group: "Potager" }));
  TREES.forEach((t) => hits.push({ href: `/verger#${t.id}`, title: t.name, group: "Verger" }));
  FORAGE.forEach((f) => hits.push({ href: `/cueillette/${f.id}`, title: f.name, group: "Cueillette" }));
  DIY.forEach((d) => hits.push({ href: `/bricolage/${d.id}`, title: d.name, group: "Bricolage" }));
  CONSERVE.forEach((c) => hits.push({ href: `/conservation#${c.id}`, title: c.name, group: "Conservation" }));
  LEGAL.forEach((l) => hits.push({ href: `/legal#${l.id}`, title: l.title, group: "Légal" }));
  SOIL_TYPES.forEach((s) => hits.push({ href: `/sol#${s.id}`, title: s.name, group: "Sol" }));
  AMENDMENTS.forEach((a) => hits.push({ href: `/sol#${a.id}`, title: a.name, group: "Sol" }));
  COVER_CROPS.forEach((c) => hits.push({ href: `/sol#${c.id}`, title: c.name, group: "Engrais verts" }));
  PESTS.forEach((p) => hits.push({ href: `/sol#${p.id}`, title: p.name, group: "Ravageurs" }));
  AUXILIARIES.forEach((a) => hits.push({ href: `/sol#${a.id}`, title: a.name, group: "Auxiliaires" }));
  STOCKS.forEach((s) => hits.push({ href: `/garde#${s.id}`, title: s.name, group: "Garde-manger" }));
  SEED_LIFE.forEach((s) => hits.push({ href: `/garde#${s.id}`, title: s.name, group: "Semences" }));
  RECIPES.forEach((r) => hits.push({ href: `/atelier#${r.id}`, title: r.name, group: "Atelier" }));
  return hits;
}

export function CommandSearch({ compact = false }: { compact?: boolean }) {
  const [open, setOpen] = useState(false);
  const [q, setQ] = useState("");
  const router = useRouter();
  const index = useMemo(buildIndex, []);

  useEffect(() => {
    // Une seule instance (la non compacte) écoute ⌘K, pour ne pas ouvrir deux dialogues.
    if (compact) return;
    const onKey = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        setOpen((v) => !v);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [compact]);

  const results = useMemo(() => {
    const s = q.trim().toLowerCase();
    if (!s) return index.slice(0, 12);
    return index
      .filter((h) => h.title.toLowerCase().includes(s) || h.group.toLowerCase().includes(s))
      .slice(0, 16);
  }, [q, index]);

  return (
    <>
      {compact ? (
        <button
          type="button"
          onClick={() => setOpen(true)}
          aria-label="Rechercher"
          className="grid size-10 place-items-center rounded-xl border border-border bg-card text-foreground transition-colors hover:bg-muted"
        >
          <Search className="size-[18px]" />
        </button>
      ) : (
      <button
        type="button"
        onClick={() => setOpen(true)}
        className="flex h-10 w-full items-center gap-2 rounded-lg border border-border bg-card px-3 text-sm text-muted-foreground transition-colors hover:bg-muted"
      >
        <Search className="size-4" />
        <span className="flex-1 text-left">Rechercher</span>
        <kbd className="hidden rounded-md border border-border bg-muted px-1.5 py-0.5 text-[10px] font-medium sm:inline">
          ⌘K
        </kbd>
      </button>
      )}
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="gap-3 p-4">
          <DialogHeader>
            <DialogTitle className="sr-only">Recherche</DialogTitle>
          </DialogHeader>
          <Input
            autoFocus
            placeholder="Animal, plante, chaîne, guide…"
            value={q}
            onChange={(e) => setQ(e.target.value)}
          />
          <ul className="max-h-80 overflow-y-auto">
            {results.length === 0 ? (
              <li className="px-2 py-6 text-center text-sm text-muted-foreground">Aucun résultat</li>
            ) : (
              results.map((h) => (
                <li key={h.href + h.title}>
                  <button
                    type="button"
                    className="flex w-full items-center justify-between rounded-md px-2 py-2.5 text-left text-sm hover:bg-muted"
                    onClick={() => {
                      setOpen(false);
                      setQ("");
                      router.history.push(h.href);
                    }}
                  >
                    <span>{h.title}</span>
                    <span className="text-xs text-muted-foreground">{h.group}</span>
                  </button>
                </li>
              ))
            )}
          </ul>
        </DialogContent>
      </Dialog>
    </>
  );
}
