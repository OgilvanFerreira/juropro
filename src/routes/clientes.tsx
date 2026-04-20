import { useEffect, useState } from "react";
import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { queryOptions, useSuspenseQuery } from "@tanstack/react-query";
import { UserPlus, Users as UsersIcon } from "lucide-react";

import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/dashboard/AppSidebar";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Card } from "@/components/ui/card";
import { NovoClienteDialog } from "@/components/clientes/NovoClienteDialog";
import { listClientes } from "@/integrations/external-supabase/clientes.functions";

const clientesQuery = () =>
  queryOptions({
    queryKey: ["clientes", "list"],
    queryFn: () => listClientes(),
  });

export const Route = createFileRoute("/clientes")({
  validateSearch: (search: Record<string, unknown>) => ({
    novo: search.novo === true || search.novo === "true" ? true : undefined,
  }),
  head: () => ({
    meta: [
      { title: "Clientes — JuroPro" },
      {
        name: "description",
        content:
          "Gestão completa da carteira de clientes — cadastro, listagem e busca.",
      },
    ],
  }),
  loader: ({ context: { queryClient } }) => {
    queryClient.ensureQueryData(clientesQuery());
  },
  component: ClientesPage,
});

function formatDate(value: string | null) {
  if (!value) return "—";
  try {
    return new Intl.DateTimeFormat("pt-BR", {
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
    }).format(new Date(value));
  } catch {
    return "—";
  }
}

function ClientesPage() {
  const { data } = useSuspenseQuery(clientesQuery());
  const { novo } = Route.useSearch();
  const navigate = useNavigate({ from: "/clientes" });
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (novo) {
      setOpen(true);
      navigate({ search: { novo: undefined }, replace: true });
    }
  }, [novo, navigate]);

  const clientes = data.data;
  const hasError = !!data.error;

  return (
    <SidebarProvider>
      <div className="flex min-h-screen w-full bg-secondary">
        <AppSidebar />

        <div className="flex flex-1 flex-col">
          <header className="sticky top-0 z-30 flex h-16 items-center justify-between gap-3 border-b bg-background/90 px-4 backdrop-blur md:px-6">
            <div className="flex items-center gap-3">
              <SidebarTrigger className="text-foreground" />
              <h2 className="text-sm font-medium text-muted-foreground">
                Clientes
              </h2>
            </div>
            <Button
              onClick={() => setOpen(true)}
              className="bg-success text-success-foreground shadow-sm hover:bg-success/90"
            >
              <UserPlus className="h-4 w-4" />
              <span className="hidden sm:inline">Novo Cliente</span>
            </Button>
          </header>

          <main className="flex-1 space-y-6 p-4 md:p-6 lg:p-8">
            <div className="flex flex-col gap-1">
              <h1 className="text-2xl font-semibold tracking-tight text-foreground">
                Clientes
              </h1>
              <p className="text-sm text-muted-foreground">
                {clientes.length}{" "}
                {clientes.length === 1 ? "cliente cadastrado" : "clientes cadastrados"}
              </p>
            </div>

            <Card className="overflow-hidden">
              {hasError ? (
                <div className="p-8 text-center text-sm text-destructive">
                  Erro ao carregar clientes: {data.error}
                </div>
              ) : clientes.length === 0 ? (
                <div className="flex flex-col items-center justify-center gap-3 p-12 text-center">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-muted">
                    <UsersIcon className="h-6 w-6 text-muted-foreground" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-foreground">
                      Nenhum cliente cadastrado
                    </p>
                    <p className="text-xs text-muted-foreground">
                      Clique em &quot;Novo Cliente&quot; para começar.
                    </p>
                  </div>
                  <Button
                    onClick={() => setOpen(true)}
                    className="mt-2 bg-success text-success-foreground hover:bg-success/90"
                  >
                    <UserPlus className="h-4 w-4" />
                    Novo Cliente
                  </Button>
                </div>
              ) : (
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Nome</TableHead>
                      <TableHead>E-mail</TableHead>
                      <TableHead>Telefone</TableHead>
                      <TableHead>CPF/CNPJ</TableHead>
                      <TableHead>Cidade/UF</TableHead>
                      <TableHead>Cadastrado em</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {clientes.map((c) => (
                      <TableRow key={String(c.id)}>
                        <TableCell className="font-medium text-foreground">
                          {c.nome ?? "—"}
                        </TableCell>
                        <TableCell className="text-muted-foreground">
                          {c.email ?? "—"}
                        </TableCell>
                        <TableCell className="text-muted-foreground">
                          {c.telefone ?? "—"}
                        </TableCell>
                        <TableCell className="text-muted-foreground">
                          {c.cpf_cnpj ?? "—"}
                        </TableCell>
                        <TableCell className="text-muted-foreground">
                          {c.cidade && c.uf
                            ? `${c.cidade}/${c.uf}`
                            : c.cidade ?? c.uf ?? "—"}
                        </TableCell>
                        <TableCell className="text-muted-foreground">
                          {formatDate(c.created_at)}
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              )}
            </Card>
          </main>
        </div>

        <NovoClienteDialog open={open} onOpenChange={setOpen} />
      </div>
    </SidebarProvider>
  );
}
