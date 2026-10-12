import { Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";

export function NotFound() {
  return (
    <div className="mx-auto max-w-lg py-16 text-center">
      <p className="text-xs font-medium uppercase tracking-[0.16em] text-primary">Havre</p>
      <h1 className="mt-2 font-display text-3xl font-semibold">Page introuvable</h1>
      <p className="mt-3 text-sm text-muted-foreground">Ce sentier n’existe pas dans l’almanach.</p>
      <Button asChild className="mt-6">
        <Link to="/">Retour au tableau de bord</Link>
      </Button>
    </div>
  );
}
