import { useState } from "react";
import { Download, Check, Share, Plus, Smartphone } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { usePwaInstall } from "@/hooks/use-pwa-install";
import { cn } from "@/lib/utils";

interface InstallAppButtonProps {
  className?: string;
  /** Se true, sempre mostra o botão (mesmo sem prompt nativo) para mostrar instruções */
  alwaysShow?: boolean;
}

export function InstallAppButton({ className, alwaysShow = true }: InstallAppButtonProps) {
  const { canInstall, isInstalled, platform, install, hasNativePrompt } = usePwaInstall();
  const [iosOpen, setIosOpen] = useState(false);

  if (isInstalled) {
    return (
      <Button
        variant="outline"
        size="sm"
        disabled
        className={cn("gap-1.5 cursor-default opacity-100", className)}
        aria-label="Aplicativo já instalado"
      >
        <Check className="h-4 w-4 text-success" />
        <span className="hidden sm:inline">App Instalado</span>
      </Button>
    );
  }

  if (!canInstall && !alwaysShow) return null;

  const handleClick = async () => {
    if (hasNativePrompt) {
      await install();
      return;
    }
    // iOS ou navegador sem prompt nativo → instruções
    setIosOpen(true);
  };

  return (
    <>
      <Button
        variant="outline"
        size="sm"
        onClick={handleClick}
        className={cn("gap-1.5", className)}
        aria-label="Instalar aplicativo"
      >
        <Smartphone className="h-4 w-4" />
        <span className="hidden sm:inline">Instalar App</span>
      </Button>

      <Dialog open={iosOpen} onOpenChange={setIosOpen}>
        <DialogContent className="max-w-md">
          <DialogHeader>
            <DialogTitle>Instalar JuroPro</DialogTitle>
            <DialogDescription>
              {platform === "ios"
                ? "Adicione o JuroPro à sua tela inicial em poucos passos."
                : "Para instalar, use o menu do seu navegador."}
            </DialogDescription>
          </DialogHeader>

          {platform === "ios" ? (
            <ol className="space-y-3 text-sm text-foreground">
              <li className="flex gap-3">
                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary text-xs font-semibold text-primary-foreground">
                  1
                </span>
                <span className="flex items-center gap-1.5">
                  Toque no botão <Share className="inline h-4 w-4" /> <strong>Compartilhar</strong>
                  na barra do Safari.
                </span>
              </li>
              <li className="flex gap-3">
                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary text-xs font-semibold text-primary-foreground">
                  2
                </span>
                <span className="flex items-center gap-1.5">
                  Role e selecione <Plus className="inline h-4 w-4" />{" "}
                  <strong>Adicionar à Tela de Início</strong>.
                </span>
              </li>
              <li className="flex gap-3">
                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary text-xs font-semibold text-primary-foreground">
                  3
                </span>
                <span>
                  Confirme em <strong>Adicionar</strong>. Pronto! O ícone do JuroPro aparecerá na
                  sua tela inicial.
                </span>
              </li>
            </ol>
          ) : (
            <div className="space-y-3 text-sm text-muted-foreground">
              <p>
                No Chrome/Edge: clique no ícone <Download className="inline h-4 w-4" /> na barra de
                endereço, ou abra o menu (⋮) e selecione <strong>"Instalar JuroPro"</strong>.
              </p>
              <p>
                No Firefox/Android: abra o menu e selecione{" "}
                <strong>"Adicionar à tela inicial"</strong>.
              </p>
              <p className="text-xs">
                Caso a opção não apareça, tente recarregar a página ou verifique se já está
                instalado.
              </p>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </>
  );
}
