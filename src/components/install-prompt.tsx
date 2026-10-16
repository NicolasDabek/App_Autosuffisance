import { Download, Share, X } from "lucide-react";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";

type BIPEvent = Event & { prompt: () => Promise<void>; userChoice: Promise<{ outcome: string }> };

const BASE = import.meta.env.BASE_URL;
/** Version statique (GitHub Pages) : PWA autonome. Sur la plateforme, la PWA est gérée ailleurs. */
export const STANDALONE_PWA = BASE !== "/";
const DISMISS_KEY = "havre-install-dismissed";

/** Enregistre le service worker et propose l’installation (Android/Chrome) ou explique la marche à suivre (iOS). */
export function InstallPrompt() {
  const [evt, setEvt] = useState<BIPEvent | null>(null);
  const [ios, setIos] = useState(false);
  const [hidden, setHidden] = useState(true);

  useEffect(() => {
    if (!STANDALONE_PWA) return;
    if ("serviceWorker" in navigator) {
      navigator.serviceWorker.register(`${BASE}sw.js`, { scope: BASE }).catch(() => {});
    }
    const standalone =
      window.matchMedia("(display-mode: standalone)").matches ||
      (navigator as Navigator & { standalone?: boolean }).standalone === true;
    if (standalone || localStorage.getItem(DISMISS_KEY)) return;
    const ua = navigator.userAgent;
    const isIos = /iphone|ipad|ipod/i.test(ua) || (ua.includes("Macintosh") && navigator.maxTouchPoints > 1);
    if (isIos) {
      setIos(true);
      setHidden(false);
    }
    const onPrompt = (e: Event) => {
      e.preventDefault();
      setEvt(e as BIPEvent);
      setHidden(false);
    };
    const onInstalled = () => setHidden(true);
    window.addEventListener("beforeinstallprompt", onPrompt);
    window.addEventListener("appinstalled", onInstalled);
    return () => {
      window.removeEventListener("beforeinstallprompt", onPrompt);
      window.removeEventListener("appinstalled", onInstalled);
    };
  }, []);

  if (hidden || (!evt && !ios)) return null;
  const dismiss = () => {
    localStorage.setItem(DISMISS_KEY, "1");
    setHidden(true);
  };

  return (
    <div
      role="dialog"
      aria-label="Installer Havre"
      className="fixed inset-x-3 bottom-[84px] z-40 flex items-start gap-3 rounded-2xl border border-border bg-card p-3.5 shadow-lg lg:bottom-4 lg:left-auto lg:right-4 lg:w-96"
    >
      <img src={`${BASE}pwa/icon-192.png`} alt="" className="size-11 rounded-xl" />
      <div className="min-w-0 flex-1 text-sm">
        <p className="font-semibold">Installer Havre sur ce téléphone</p>
        {ios ? (
          <p className="mt-0.5 text-muted-foreground">
            Dans Safari, touchez <Share className="inline size-4 align-text-bottom" aria-label="Partager" /> puis
            « Sur l’écran d’accueil ».
          </p>
        ) : (
          <>
            <p className="mt-0.5 text-muted-foreground">Accès direct, plein écran, fonctionne hors ligne.</p>
            <Button
              size="sm"
              className="mt-2"
              onClick={async () => {
                if (!evt) return;
                await evt.prompt();
                await evt.userChoice.catch(() => null);
                setEvt(null);
                setHidden(true);
              }}
            >
              <Download /> Installer
            </Button>
          </>
        )}
      </div>
      <button type="button" onClick={dismiss} aria-label="Fermer" className="grid size-8 place-items-center rounded-lg hover:bg-muted">
        <X className="size-4" />
      </button>
    </div>
  );
}
