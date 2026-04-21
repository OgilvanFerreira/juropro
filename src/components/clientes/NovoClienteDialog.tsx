import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Loader2, Search } from "lucide-react";
import { toast } from "sonner";
import { useMutation, useQueryClient } from "@tanstack/react-query";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Separator } from "@/components/ui/separator";
import { useServerFn } from "@tanstack/react-start";

import { createCliente } from "@/integrations/external-supabase/clientes.functions";
import { BRAZIL_UFS, lookupCep } from "@/lib/cep";
import {
  isValidCep,
  isValidCpfCnpj,
  isValidTelefone,
  maskCep,
  maskCpfCnpj,
  maskTelefone,
} from "@/lib/masks";

const formSchema = z.object({
  nome: z.string().trim().min(1, "Informe o nome"),
  email: z
    .string()
    .trim()
    .email("E-mail inválido")
    .or(z.literal(""))
    .optional(),
  telefone: z
    .string()
    .trim()
    .min(1, "Informe o celular")
    .refine(isValidTelefone, "Celular inválido"),
  data_nascimento: z.string().trim().optional(),
  cpf_cnpj: z
    .string()
    .trim()
    .refine((v) => !v || isValidCpfCnpj(v), "CPF/CNPJ inválido")
    .optional(),
  rg: z.string().trim().optional(),
  cep: z
    .string()
    .trim()
    .refine((v) => !v || isValidCep(v), "CEP inválido")
    .optional(),
  endereco: z.string().trim().optional(),
  numero: z.string().trim().optional(),
  complemento: z.string().trim().optional(),
  bairro: z.string().trim().optional(),
  cidade: z.string().trim().optional(),
  uf: z.string().trim().max(2).optional(),
});

type FormValues = z.infer<typeof formSchema>;

interface NovoClienteDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function NovoClienteDialog({ open, onOpenChange }: NovoClienteDialogProps) {
  const queryClient = useQueryClient();
  const createClienteFn = useServerFn(createCliente);
  const [cepLoading, setCepLoading] = useState(false);

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      nome: "",
      email: "",
      telefone: "",
      data_nascimento: "",
      cpf_cnpj: "",
      rg: "",
      cep: "",
      endereco: "",
      numero: "",
      complemento: "",
      bairro: "",
      cidade: "",
      uf: "",
    },
  });

  const mutation = useMutation({
    mutationFn: (values: FormValues) => createClienteFn({ data: values }),
    onSuccess: (res) => {
      if (!res.ok) {
        if (res.code === "DUPLICATE_CPF_CNPJ") {
          form.setError("cpf_cnpj", {
            type: "manual",
            message: "CPF/CNPJ já cadastrado no sistema.",
          });
          toast.error("CPF/CNPJ já cadastrado no sistema.");
          return;
        }
        toast.error("Erro ao cadastrar cliente", {
          description: res.error ?? "Verifique os dados e tente novamente.",
        });
        return;
      }
      toast.success("Cliente cadastrado com sucesso!");
      queryClient.invalidateQueries({ queryKey: ["clientes", "list"] });
      queryClient.invalidateQueries({ queryKey: ["dashboard", "kpis"] });
      queryClient.invalidateQueries({ queryKey: ["dashboard", "charts"] });
      form.reset();
      onOpenChange(false);
    },
    onError: (err) => {
      toast.error("Erro ao cadastrar cliente", {
        description: err instanceof Error ? err.message : "Erro desconhecido",
      });
    },
  });

  const handleCepLookup = async () => {
    const cep = form.getValues("cep") ?? "";
    if (!cep || cep.replace(/\D/g, "").length !== 8) {
      toast.warning("Informe um CEP válido (8 dígitos).");
      return;
    }
    setCepLoading(true);
    const result = await lookupCep(cep);
    setCepLoading(false);
    if (!result) {
      toast.error("CEP não encontrado.");
      return;
    }
    form.setValue("endereco", result.logradouro ?? "");
    form.setValue("complemento", result.complemento ?? "");
    form.setValue("bairro", result.bairro ?? "");
    form.setValue("cidade", result.localidade ?? "");
    form.setValue("uf", result.uf ?? "");
    toast.success("Endereço preenchido automaticamente.");
  };

  const handleClose = (next: boolean) => {
    if (!next) form.reset();
    onOpenChange(next);
  };

  const onSubmit = (values: FormValues) => mutation.mutate(values);

  return (
    <Dialog open={open} onOpenChange={handleClose}>
      <DialogContent className="max-h-[90vh] overflow-y-auto sm:max-w-2xl">
        <DialogHeader>
          <DialogTitle>Novo Cliente</DialogTitle>
          <DialogDescription>
            Preencha os dados do cliente. Campos com * são obrigatórios.
          </DialogDescription>
        </DialogHeader>

        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
          {/* Dados pessoais */}
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div className="space-y-1.5 sm:col-span-2">
              <Label htmlFor="nome">Nome *</Label>
              <Input id="nome" {...form.register("nome")} />
              {form.formState.errors.nome && (
                <p className="text-xs text-destructive">
                  {form.formState.errors.nome.message}
                </p>
              )}
            </div>
            <div className="space-y-1.5">
              <Label htmlFor="email">E-mail</Label>
              <Input id="email" type="email" {...form.register("email")} />
              {form.formState.errors.email && (
                <p className="text-xs text-destructive">
                  {form.formState.errors.email.message}
                </p>
              )}
            </div>
            <div className="space-y-1.5">
              <Label htmlFor="telefone">Telefone *</Label>
              <Input
                id="telefone"
                placeholder="(00) 00000-0000"
                inputMode="tel"
                value={form.watch("telefone") ?? ""}
                onChange={(e) =>
                  form.setValue("telefone", maskTelefone(e.target.value), {
                    shouldValidate: true,
                  })
                }
              />
              {form.formState.errors.telefone && (
                <p className="text-xs text-destructive">
                  {form.formState.errors.telefone.message}
                </p>
              )}
            </div>
            <div className="space-y-1.5">
              <Label htmlFor="data_nascimento">Data de nascimento</Label>
              <Input
                id="data_nascimento"
                type="date"
                {...form.register("data_nascimento")}
              />
            </div>
            <div className="space-y-1.5">
              <Label htmlFor="cpf_cnpj">CPF / CNPJ *</Label>
              <Input
                id="cpf_cnpj"
                placeholder="000.000.000-00"
                inputMode="numeric"
                value={form.watch("cpf_cnpj") ?? ""}
                onChange={(e) => {
                  form.clearErrors("cpf_cnpj");
                  form.setValue("cpf_cnpj", maskCpfCnpj(e.target.value), {
                    shouldValidate: true,
                  });
                }}
              />
              {form.formState.errors.cpf_cnpj && (
                <p className="text-xs text-destructive">
                  {form.formState.errors.cpf_cnpj.message}
                </p>
              )}
            </div>
            <div className="space-y-1.5">
              <Label htmlFor="rg">RG</Label>
              <Input id="rg" {...form.register("rg")} />
            </div>
          </div>

          <Separator />

          {/* Endereço */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold text-foreground">Endereço</h3>

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-[1fr_auto]">
              <div className="space-y-1.5">
                <Label htmlFor="cep">CEP *</Label>
                <Input
                  id="cep"
                  placeholder="00000-000"
                  inputMode="numeric"
                  value={form.watch("cep") ?? ""}
                  onChange={(e) =>
                    form.setValue("cep", maskCep(e.target.value), {
                      shouldValidate: true,
                    })
                  }
                />
                {form.formState.errors.cep && (
                  <p className="text-xs text-destructive">
                    {form.formState.errors.cep.message}
                  </p>
                )}
              </div>
              <div className="flex items-end">
                <Button
                  type="button"
                  onClick={handleCepLookup}
                  disabled={cepLoading}
                  className="bg-success text-success-foreground hover:bg-success/90"
                >
                  {cepLoading ? (
                    <Loader2 className="h-4 w-4 animate-spin" />
                  ) : (
                    <Search className="h-4 w-4" />
                  )}
                  <span>Buscar CEP</span>
                </Button>
              </div>
            </div>

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-[1fr_140px]">
              <div className="space-y-1.5">
                <Label htmlFor="endereco">Endereço *</Label>
                <Input id="endereco" {...form.register("endereco")} />
                {form.formState.errors.endereco && (
                  <p className="text-xs text-destructive">
                    {form.formState.errors.endereco.message}
                  </p>
                )}
              </div>
              <div className="space-y-1.5">
                <Label htmlFor="numero">Número</Label>
                <Input id="numero" {...form.register("numero")} />
              </div>
            </div>

            <div className="space-y-1.5">
              <Label htmlFor="complemento">Complemento</Label>
              <Input id="complemento" {...form.register("complemento")} />
            </div>

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
              <div className="space-y-1.5">
                <Label htmlFor="bairro">Bairro</Label>
                <Input id="bairro" {...form.register("bairro")} />
              </div>
              <div className="space-y-1.5">
                <Label htmlFor="cidade">Cidade</Label>
                <Input id="cidade" {...form.register("cidade")} />
              </div>
              <div className="space-y-1.5">
                <Label htmlFor="uf">UF</Label>
                <Select
                  value={form.watch("uf") ?? ""}
                  onValueChange={(v) => form.setValue("uf", v)}
                >
                  <SelectTrigger id="uf">
                    <SelectValue placeholder="UF" />
                  </SelectTrigger>
                  <SelectContent>
                    {BRAZIL_UFS.map((uf) => (
                      <SelectItem key={uf} value={uf}>
                        {uf}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>
          </div>

          <DialogFooter className="flex-row justify-between gap-2 sm:justify-between">
            <Button
              type="button"
              variant="outline"
              onClick={() => handleClose(false)}
              disabled={mutation.isPending}
            >
              Cancelar
            </Button>
            <Button
              type="submit"
              disabled={mutation.isPending}
              className="bg-success text-success-foreground hover:bg-success/90"
            >
              {mutation.isPending && (
                <Loader2 className="h-4 w-4 animate-spin" />
              )}
              Cadastrar
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
