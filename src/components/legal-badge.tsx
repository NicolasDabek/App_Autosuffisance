import { Badge } from "@/components/ui/badge";
import { LEGAL_LABEL } from "@/data/animals";
import type { LegalLevel } from "@/data/types";

export function LegalBadge({ level }: { level: LegalLevel }) {
  const variant = level === "simple" ? "ok" : level === "complexe" ? "warn" : "secondary";
  return <Badge variant={variant}>{LEGAL_LABEL[level]}</Badge>;
}
