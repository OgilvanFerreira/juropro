import { useEffect, useState, useCallback } from "react";

interface BeforeInstallPromptEvent extends Event {
  readonly platforms: string[];
  readonly userChoice: Promise<{ outcome: "accepted" | "dismissed"; platform: string }>;
  prompt(): Promise<void>;
}

type Platform = "ios" | "android" | "desktop" | "other";

function detectPlatform(): Platform {
  if (typeof navigator === "undefined") return "other";
  const ua = navigator.userAgent.toLowerCase();
  if (/iphone|ipad|ipod/.test(ua) || (ua.includes("mac") && "ontouchend" in document)) return "ios";
  if (/android/.test(ua)) return "android";
  if (/windows|macintosh|linux/.test(ua)) return "desktop";
  return "other";
}

function checkInstalled(): boolean {
  if (typeof window === "undefined") return false;
  // standalone display mode (installed PWA)
  if (window.matchMedia?.("(display-mode: standalone)").matches) return true;
  // iOS Safari
  // @ts-expect-error - non-standard but used by iOS
  if (window.navigator.standalone === true) return true;
  return false;
}

export function usePwaInstall() {
  const [deferredPrompt, setDeferredPrompt] = useState<BeforeInstallPromptEvent | null>(null);
  const [isInstalled, setIsInstalled] = useState<boolean>(false);
  const [platform, setPlatform] = useState<Platform>("other");

  useEffect(() => {
    setIsInstalled(checkInstalled());
    setPlatform(detectPlatform());

    const onBeforeInstall = (e: Event) => {
      e.preventDefault();
      setDeferredPrompt(e as BeforeInstallPromptEvent);
    };

    const onInstalled = () => {
      setIsInstalled(true);
      setDeferredPrompt(null);
    };

    window.addEventListener("beforeinstallprompt", onBeforeInstall);
    window.addEventListener("appinstalled", onInstalled);

    const mql = window.matchMedia?.("(display-mode: standalone)");
    const onChange = () => setIsInstalled(checkInstalled());
    mql?.addEventListener?.("change", onChange);

    return () => {
      window.removeEventListener("beforeinstallprompt", onBeforeInstall);
      window.removeEventListener("appinstalled", onInstalled);
      mql?.removeEventListener?.("change", onChange);
    };
  }, []);

  const install = useCallback(async () => {
    if (!deferredPrompt) return { outcome: "unavailable" as const };
    await deferredPrompt.prompt();
    const choice = await deferredPrompt.userChoice;
    if (choice.outcome === "accepted") setDeferredPrompt(null);
    return { outcome: choice.outcome };
  }, [deferredPrompt]);

  // canInstall: tem prompt nativo OU é iOS (instrução manual)
  const canInstall = !isInstalled && (!!deferredPrompt || platform === "ios");

  return { canInstall, isInstalled, platform, install, hasNativePrompt: !!deferredPrompt };
}
