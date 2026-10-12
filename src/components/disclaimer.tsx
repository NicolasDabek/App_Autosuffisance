import type { ReactNode } from "react";

export function Disclaimer({ children }: { children?: ReactNode }) {
  return (
    <p className="mt-10 max-w-3xl text-xs leading-relaxed text-muted-foreground">
      {children ??
        "Havre propose une information générale pour l’autoconsommation en France. Ce n’est ni un conseil juridique, ni un diagnostic énergétique, ni une ordonnance agricole. Vérifiez les arrêtés préfectoraux, le PLU, la DDPP et les textes en vigueur avant d’agir."}
    </p>
  );
}
