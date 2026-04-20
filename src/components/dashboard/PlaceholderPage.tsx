import { Construction } from "lucide-react";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/dashboard/AppSidebar";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";

interface PlaceholderPageProps {
  title: string;
  description: string;
}

export function PlaceholderPage({ title, description }: PlaceholderPageProps) {
  return (
    <SidebarProvider>
      <div className="flex min-h-screen w-full bg-secondary">
        <AppSidebar />

        <div className="flex flex-1 flex-col">
          <header className="sticky top-0 z-30 flex h-16 items-center justify-between gap-3 border-b bg-background/90 px-4 backdrop-blur md:px-6">
            <div className="flex items-center gap-3">
              <SidebarTrigger className="text-foreground" />
              <h2 className="text-sm font-medium text-muted-foreground">
                {title}
              </h2>
            </div>
            <Button className="bg-success text-success-foreground shadow-sm hover:bg-success/90">
              <Plus className="h-4 w-4" />
              Novo Empréstimo
            </Button>
          </header>

          <main className="flex flex-1 items-center justify-center p-6">
            <div className="flex max-w-md flex-col items-center gap-4 rounded-lg border bg-card p-10 text-center shadow-sm">
              <div className="flex h-14 w-14 items-center justify-center rounded-full bg-warning/15 text-warning">
                <Construction className="h-7 w-7" />
              </div>
              <div className="space-y-1">
                <h1 className="text-xl font-semibold tracking-tight text-foreground">
                  {title}
                </h1>
                <p className="text-sm text-muted-foreground">{description}</p>
              </div>
              <p className="text-xs uppercase tracking-wider text-muted-foreground">
                Página em construção
              </p>
            </div>
          </main>
        </div>
      </div>
    </SidebarProvider>
  );
}
