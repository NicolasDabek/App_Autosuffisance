import { createFileRoute } from "@tanstack/react-router";
import { Disclaimer } from "@/components/disclaimer";
import { PageHeader } from "@/components/page-header";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { LEGAL } from "@/data/legal";

export const Route = createFileRoute("/_app/legal")({ component: LegalPage });

function LegalPage() {
  return (
    <div>
      <PageHeader
        kicker="Savoir"
        title="Cadre légal France"
        description="Synthèse pour l’autoconsommation. Les textes bougent (influenza, aides, air). Les liens officiels priment sur cette page."
      />
      <Accordion type="single" collapsible className="rounded-xl bg-card px-5 shadow-[var(--shadow-border)]">
        {LEGAL.map((t) => (
          <AccordionItem key={t.id} value={t.id} id={t.id}>
            <AccordionTrigger className="text-base">{t.title}</AccordionTrigger>
            <AccordionContent>
              <p className="mb-2 text-foreground">{t.summary}</p>
              <ul className="list-disc space-y-1 pl-4">
                {t.bullets.map((b) => (
                  <li key={b}>{b}</li>
                ))}
              </ul>
              <ul className="mt-3 list-disc pl-4">
                {t.sources.map((s) => (
                  <li key={s.href}>
                    <a href={s.href} className="text-primary underline-offset-2 hover:underline" target="_blank" rel="noreferrer">
                      {s.label}
                    </a>
                  </li>
                ))}
              </ul>
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
      <Disclaimer />
    </div>
  );
}
