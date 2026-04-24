import { useEffect, useRef, useState, type ChangeEvent } from "react";
import { createFileRoute } from "@tanstack/react-router";
import {
  Settings as SettingsIcon,
  Save,
  User,
  Building2,
  SlidersHorizontal,
  Camera,
  Trash2,
  RefreshCw,
  Eye,
  EyeOff,
  Lock,
  Search,
  Loader2,
  Bell,
  Palette,
  MessageCircle,
  ImageIcon,
  Upload,
  CheckCircle2,
  XCircle,
} from "lucide-react";
import { toast } from "sonner";

import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/dashboard/AppSidebar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Switch } from "@/components/ui/switch";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";
import { useAdminName } from "@/hooks/use-admin-name";
import { useAdminAvatar } from "@/hooks/use-admin-avatar";
import {
  maskCpfCnpj,
  maskTelefone,
  maskCep,
  maskTaxa,
} from "@/lib/masks";
import { lookupCep, BRAZIL_UFS } from "@/lib/cep";
import { useBusinessName, useBusinessLogo } from "@/hooks/use-business-info";
import { useDarkMode } from "@/hooks/use-dark-mode";

export const Route = createFileRoute("/configuracoes")({
  head: () => ({
    meta: [{ title: "Configurações — JuroPro" }],
  }),
  component: ConfiguracoesPage,
});

// ---------------------------------------------------------------------------
// Helpers
// ---------------------------------------------------------------------------

const maskCpf = (v: string) =>
  v
    .replace(/\D/g, "")
    .slice(0, 11)
    .replace(/^(\d{3})(\d)/, "$1.$2")
    .replace(/^(\d{3})\.(\d{3})(\d)/, "$1.$2.$3")
    .replace(/\.(\d{3})(\d)/, ".$1-$2");

type SenhaForca = {
  pct: number;
  label: string;
  className: string;
};

function avaliarSenha(s: string): SenhaForca {
  if (!s) return { pct: 0, label: "", className: "bg-muted" };
  let pts = 0;
  if (s.length >= 8) pts++;
  if (/[A-Z]/.test(s)) pts++;
  if (/[0-9]/.test(s)) pts++;
  if (/[^A-Za-z0-9]/.test(s)) pts++;
  const map: SenhaForca[] = [
    { pct: 0, label: "", className: "bg-muted" },
    { pct: 25, label: "Fraca", className: "bg-destructive" },
    { pct: 50, label: "Regular", className: "bg-warning" },
    { pct: 75, label: "Boa", className: "bg-primary/70" },
    { pct: 100, label: "Forte", className: "bg-success" },
  ];
  return map[pts];
}

const VARIAVEIS = [
  { var: "{{cliente}}", desc: "Nome do cliente" },
  { var: "{{parcela}}", desc: "Nº da parcela" },
  { var: "{{contrato}}", desc: "ID do contrato" },
  { var: "{{valor}}", desc: "Valor da parcela" },
  { var: "{{vencimento}}", desc: "Data de vencimento" },
  { var: "{{negocio}}", desc: "Nome do negócio" },
];

const MSG_PADRAO = `Olá {{cliente}}, tudo bem? 😊

Passando para lembrar que sua parcela *{{parcela}}* do contrato *{{contrato}}* no valor de *{{valor}}* vence em *{{vencimento}}*.

Qualquer dúvida, estamos à disposição! 🙏

_{{negocio}} - Gestão de Empréstimos_`;

// Reusable "section" header inside cards
function SectionHeader({
  icon,
  title,
  description,
  iconBg = "bg-primary/10 text-primary",
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
  iconBg?: string;
}) {
  return (
    <div className="flex items-start gap-3">
      <div
        className={cn(
          "flex h-10 w-10 shrink-0 items-center justify-center rounded-lg",
          iconBg,
        )}
      >
        {icon}
      </div>
      <div className="min-w-0">
        <h3 className="text-sm font-semibold text-foreground sm:text-base">
          {title}
        </h3>
        <p className="text-xs text-muted-foreground sm:text-sm">{description}</p>
      </div>
    </div>
  );
}

function PasswordField({
  id,
  label,
  value,
  onChange,
}: {
  id: string;
  label: string;
  value: string;
  onChange: (v: string) => void;
}) {
  const [show, setShow] = useState(false);
  return (
    <div className="space-y-2">
      <Label htmlFor={id}>{label}</Label>
      <div className="relative">
        <Input
          id={id}
          type={show ? "text" : "password"}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder="••••••••"
          className="pr-10"
        />
        <button
          type="button"
          onClick={() => setShow((s) => !s)}
          className="absolute right-2 top-1/2 -translate-y-1/2 rounded p-1 text-muted-foreground hover:text-foreground"
          aria-label={show ? "Ocultar senha" : "Mostrar senha"}
        >
          {show ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
        </button>
      </div>
    </div>
  );
}

// ---------------------------------------------------------------------------
// Tab: Perfil
// ---------------------------------------------------------------------------

function TabPerfil() {
  const { name, setName, defaultName } = useAdminName();
  const { avatar, setAvatar } = useAdminAvatar();

  const [form, setForm] = useState({
    nome: "",
    email: "fsgilvan@gmail.com",
    telefone: "(73) 99141-1427",
    cpf: "021.985.555-22",
    cargo: "Administrador",
    cidade: "Itabuna",
    uf: "BA",
  });
  const [saving, setSaving] = useState(false);
  const [senhaAtual, setSenhaAtual] = useState("");
  const [novaSenha, setNovaSenha] = useState("");
  const [confSenha, setConfSenha] = useState("");
  const fileRef = useRef<HTMLInputElement | null>(null);

  // Hidrata "nome" a partir do hook quando ele estiver disponível
  useEffect(() => {
    setForm((p) => ({
      ...p,
      nome: name === defaultName ? "Gilvan Ferreira Santos" : name,
    }));
  }, [name, defaultName]);

  const set =
    (field: keyof typeof form) => (e: ChangeEvent<HTMLInputElement>) =>
      setForm((p) => ({ ...p, [field]: e.target.value }));

  const onPickFile = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    if (file.size > 2 * 1024 * 1024) {
      toast.error("Arquivo maior que 2MB");
      return;
    }
    const reader = new FileReader();
    reader.onload = (ev) => setAvatar(String(ev.target?.result ?? ""));
    reader.readAsDataURL(file);
    e.target.value = "";
  };

  const forca = avaliarSenha(novaSenha);
  const senhasOk = novaSenha.length > 0 && novaSenha === confSenha;
  const iniciais = (form.nome || "GF")
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((n) => n[0]?.toUpperCase())
    .join("");

  const salvar = async () => {
    setSaving(true);
    await new Promise((r) => setTimeout(r, 700));
    setName(form.nome.trim());
    setSaving(false);
    toast.success("Perfil atualizado com sucesso!");
  };

  return (
    <div className="space-y-4 md:space-y-6">
      {/* Avatar */}
      <section className="rounded-xl border bg-card p-4 shadow-sm md:p-6">
        <SectionHeader
          icon={<User className="h-5 w-5" />}
          title="Foto de Perfil"
          description="Aparece no rodapé da sidebar e nos documentos"
          iconBg="bg-primary/10 text-primary"
        />
        <Separator className="my-4" />
        <div className="flex flex-col items-center gap-4 sm:flex-row sm:items-center">
          {avatar ? (
            <img
              src={avatar}
              alt="Foto do perfil"
              className="h-20 w-20 shrink-0 rounded-full border-2 border-primary object-cover"
            />
          ) : (
            <div className="flex h-20 w-20 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-primary to-primary/60 text-2xl font-bold text-primary-foreground">
              {iniciais || "GF"}
            </div>
          )}
          <div className="flex-1 space-y-2 text-center sm:text-left">
            <input
              ref={fileRef}
              type="file"
              accept="image/*"
              className="hidden"
              onChange={onPickFile}
            />
            <div className="flex flex-wrap justify-center gap-2 sm:justify-start">
              <Button
                variant="outline"
                size="sm"
                onClick={() => fileRef.current?.click()}
                className="gap-2"
              >
                <Camera className="h-4 w-4" />
                Alterar foto
              </Button>
              {avatar && (
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => setAvatar(null)}
                  className="gap-2 text-destructive hover:text-destructive"
                >
                  <Trash2 className="h-4 w-4" />
                  Remover
                </Button>
              )}
            </div>
            <p className="text-xs text-muted-foreground">
              JPG, PNG • Máx. 2MB • Crop circular automático
            </p>
          </div>
        </div>
      </section>

      {/* Dados pessoais */}
      <section className="rounded-xl border bg-card p-4 shadow-sm md:p-6">
        <SectionHeader
          icon={<User className="h-5 w-5" />}
          title="Dados Pessoais"
          description="Suas informações de acesso ao sistema"
          iconBg="bg-info/10 text-info"
        />
        <Separator className="my-4" />
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          <div className="space-y-2">
            <Label htmlFor="perfil-nome">
              Nome Completo <span className="text-destructive">*</span>
            </Label>
            <Input id="perfil-nome" value={form.nome} onChange={set("nome")} />
          </div>
          <div className="space-y-2">
            <Label htmlFor="perfil-cpf">CPF</Label>
            <Input
              id="perfil-cpf"
              value={form.cpf}
              onChange={(e) =>
                setForm((p) => ({ ...p, cpf: maskCpf(e.target.value) }))
              }
              placeholder="000.000.000-00"
              maxLength={14}
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="perfil-email">
              E-mail <span className="text-destructive">*</span>
            </Label>
            <Input
              id="perfil-email"
              type="email"
              value={form.email}
              onChange={set("email")}
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="perfil-tel">Telefone</Label>
            <Input
              id="perfil-tel"
              value={form.telefone}
              onChange={(e) =>
                setForm((p) => ({
                  ...p,
                  telefone: maskTelefone(e.target.value),
                }))
              }
              placeholder="(00) 00000-0000"
              maxLength={15}
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="perfil-cargo">Cargo / Função</Label>
            <Input id="perfil-cargo" value={form.cargo} disabled />
          </div>
          <div className="grid grid-cols-[1fr_80px] gap-2">
            <div className="space-y-2">
              <Label htmlFor="perfil-cidade">Cidade</Label>
              <Input
                id="perfil-cidade"
                value={form.cidade}
                onChange={set("cidade")}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="perfil-uf">UF</Label>
              <Select
                value={form.uf}
                onValueChange={(v) => setForm((p) => ({ ...p, uf: v }))}
              >
                <SelectTrigger id="perfil-uf">
                  <SelectValue />
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
      </section>

      {/* Segurança */}
      <section className="rounded-xl border bg-card p-4 shadow-sm md:p-6">
        <SectionHeader
          icon={<Lock className="h-5 w-5" />}
          title="Segurança"
          description="Altere sua senha de acesso"
          iconBg="bg-warning/10 text-warning"
        />
        <Separator className="my-4" />
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          <PasswordField
            id="senha-atual"
            label="Senha Atual"
            value={senhaAtual}
            onChange={setSenhaAtual}
          />
          <div className="hidden md:block" />
          <div className="space-y-2">
            <PasswordField
              id="senha-nova"
              label="Nova Senha"
              value={novaSenha}
              onChange={setNovaSenha}
            />
            {novaSenha && (
              <div className="space-y-1">
                <div className="h-1 w-full rounded bg-muted">
                  <div
                    className={cn(
                      "h-full rounded transition-all",
                      forca.className,
                    )}
                    style={{ width: `${forca.pct}%` }}
                  />
                </div>
                <p className="text-xs font-medium text-muted-foreground">
                  {forca.label}
                </p>
              </div>
            )}
          </div>
          <div className="space-y-2">
            <PasswordField
              id="senha-conf"
              label="Confirmar Nova Senha"
              value={confSenha}
              onChange={setConfSenha}
            />
            {confSenha && (
              <p
                className={cn(
                  "flex items-center gap-1 text-xs font-medium",
                  senhasOk ? "text-success" : "text-destructive",
                )}
              >
                {senhasOk ? (
                  <>
                    <CheckCircle2 className="h-3.5 w-3.5" />
                    Senhas coincidem
                  </>
                ) : (
                  <>
                    <XCircle className="h-3.5 w-3.5" />
                    Senhas não coincidem
                  </>
                )}
              </p>
            )}
          </div>
        </div>
        <div className="mt-4 rounded-lg bg-muted/60 p-3">
          <p className="text-xs text-muted-foreground">
            🔐 Requisitos: mínimo 8 caracteres, letras maiúsculas, números e
            caracteres especiais.
          </p>
        </div>
      </section>

      <div className="flex justify-end">
        <Button onClick={salvar} disabled={saving} className="gap-2">
          {saving ? (
            <Loader2 className="h-4 w-4 animate-spin" />
          ) : (
            <Save className="h-4 w-4" />
          )}
          Salvar Perfil
        </Button>
      </div>
    </div>
  );
}

// ---------------------------------------------------------------------------
// Tab: Negócio
// ---------------------------------------------------------------------------

function TabNegocio() {
  const { name: businessName, setName: setBusinessName } = useBusinessName();
  const { logo, setLogo } = useBusinessLogo();

  const [form, setForm] = useState({
    nome: businessName,
    cnpj: "",
    telefone: "(73) 99141-1427",
    email: "contato@juropro.com.br",
    cep: "45608-818",
    endereco: "Rua Edelvito Lavinsky",
    numero: "55",
    complemento: "",
    bairro: "Jardim Primavera",
    cidade: "Itabuna",
    uf: "BA",
    taxaPadrao: "5,00",
    tipoJurosPadrao: "simples",
    multaAtraso: "2,00",
  });
  const [drag, setDrag] = useState(false);
  const [saving, setSaving] = useState(false);
  const [cepLoading, setCepLoading] = useState(false);
  const [cepOk, setCepOk] = useState(false);
  const [cepErro, setCepErro] = useState("");
  const fileRef = useRef<HTMLInputElement | null>(null);

  // Hidrata "nome" sempre que o hook trouxer um valor diferente
  useEffect(() => {
    setForm((p) => (p.nome === businessName ? p : { ...p, nome: businessName }));
  }, [businessName]);

  const set =
    (field: keyof typeof form) => (e: ChangeEvent<HTMLInputElement>) =>
      setForm((p) => ({ ...p, [field]: e.target.value }));

  const handleLogo = (file?: File) => {
    if (!file || !file.type.startsWith("image/")) return;
    if (file.size > 2 * 1024 * 1024) {
      toast.error("Arquivo maior que 2MB");
      return;
    }
    const reader = new FileReader();
    reader.onload = (ev) => setLogo(String(ev.target?.result ?? ""));
    reader.readAsDataURL(file);
  };

  const buscarCEP = async () => {
    const cepDigits = form.cep.replace(/\D/g, "");
    if (cepDigits.length !== 8) {
      setCepErro("CEP deve ter 8 dígitos");
      setCepOk(false);
      return;
    }
    setCepLoading(true);
    setCepErro("");
    setCepOk(false);
    const data = await lookupCep(cepDigits);
    setCepLoading(false);
    if (!data) {
      setCepErro("CEP não encontrado");
      return;
    }
    setForm((p) => ({
      ...p,
      endereco: data.logradouro || p.endereco,
      bairro: data.bairro || p.bairro,
      cidade: data.localidade || p.cidade,
      uf: data.uf || p.uf,
    }));
    setCepOk(true);
  };

  const salvar = async () => {
    setSaving(true);
    await new Promise((r) => setTimeout(r, 700));
    setBusinessName(form.nome.trim());
    setSaving(false);
    toast.success("Dados do negócio salvos com sucesso!");
  };

  return (
    <div className="space-y-4 md:space-y-6">
      {/* Logo */}
      <section className="rounded-xl border bg-card p-4 shadow-sm md:p-6">
        <SectionHeader
          icon={<Building2 className="h-5 w-5" />}
          title="Logomarca"
          description="Aparece no cabeçalho dos contratos e documentos"
          iconBg="bg-primary/10 text-primary"
        />
        <Separator className="my-4" />
        <div className="flex flex-col items-stretch gap-4 sm:flex-row sm:items-center">
          <div
            role="button"
            tabIndex={0}
            onClick={() => fileRef.current?.click()}
            onDragOver={(e) => {
              e.preventDefault();
              setDrag(true);
            }}
            onDragLeave={() => setDrag(false)}
            onDrop={(e) => {
              e.preventDefault();
              setDrag(false);
              handleLogo(e.dataTransfer.files[0]);
            }}
            className={cn(
              "flex flex-1 cursor-pointer flex-col items-center justify-center rounded-lg border-2 border-dashed bg-muted/30 px-4 py-6 text-center transition-colors hover:border-primary hover:bg-primary/5",
              drag && "border-primary bg-primary/5",
            )}
          >
            <input
              ref={fileRef}
              type="file"
              accept="image/*"
              className="hidden"
              onChange={(e) => handleLogo(e.target.files?.[0])}
            />
            {logo ? (
              <img
                src={logo}
                alt="Logo"
                className="max-h-20 max-w-full rounded"
              />
            ) : (
              <>
                <ImageIcon className="mb-2 h-8 w-8 text-muted-foreground" />
                <p className="text-sm font-semibold text-foreground">
                  Clique ou arraste sua logo aqui
                </p>
                <p className="mt-1 text-xs text-muted-foreground">
                  PNG, JPG ou SVG • Recomendado 200×60px
                </p>
              </>
            )}
          </div>
          {logo && (
            <div className="flex flex-row justify-center gap-2 sm:flex-col">
              <Button
                variant="outline"
                size="sm"
                onClick={() => fileRef.current?.click()}
                className="gap-2"
              >
                <Upload className="h-4 w-4" />
                Trocar
              </Button>
              <Button
                variant="outline"
                size="sm"
                onClick={() => setLogo(null)}
                className="gap-2 text-destructive hover:text-destructive"
              >
                <Trash2 className="h-4 w-4" />
                Remover
              </Button>
            </div>
          )}
        </div>
      </section>

      {/* Empresa */}
      <section className="rounded-xl border bg-card p-4 shadow-sm md:p-6">
        <SectionHeader
          icon={<Building2 className="h-5 w-5" />}
          title="Informações da Empresa"
          description="Dados que aparecem nos contratos e documentos"
          iconBg="bg-info/10 text-info"
        />
        <Separator className="my-4" />
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          <div className="space-y-2">
            <Label htmlFor="neg-nome">
              Nome do Negócio <span className="text-destructive">*</span>
            </Label>
            <Input id="neg-nome" value={form.nome} onChange={set("nome")} />
          </div>
          <div className="space-y-2">
            <Label htmlFor="neg-cnpj">CNPJ / CPF</Label>
            <Input
              id="neg-cnpj"
              value={form.cnpj}
              onChange={(e) =>
                setForm((p) => ({ ...p, cnpj: maskCpfCnpj(e.target.value) }))
              }
              placeholder="00.000.000/0001-00 ou 000.000.000-00"
              maxLength={18}
            />
            <p className="text-xs text-muted-foreground">
              Máscara automática — CPF ou CNPJ
            </p>
          </div>
          <div className="space-y-2">
            <Label htmlFor="neg-tel">Telefone</Label>
            <Input
              id="neg-tel"
              value={form.telefone}
              onChange={(e) =>
                setForm((p) => ({
                  ...p,
                  telefone: maskTelefone(e.target.value),
                }))
              }
              placeholder="(00) 00000-0000"
              maxLength={15}
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="neg-email">E-mail</Label>
            <Input
              id="neg-email"
              type="email"
              value={form.email}
              onChange={set("email")}
            />
          </div>
        </div>

        <p className="mb-3 mt-6 text-sm font-semibold text-foreground">
          📍 Endereço
        </p>
        <div className="space-y-2">
          <Label htmlFor="neg-cep">CEP</Label>
          <div className="flex gap-2">
            <Input
              id="neg-cep"
              value={form.cep}
              onChange={(e) => {
                setForm((p) => ({ ...p, cep: maskCep(e.target.value) }));
                setCepOk(false);
                setCepErro("");
              }}
              placeholder="00000-000"
              maxLength={9}
              className={cn(cepOk && "border-success focus-visible:ring-success")}
              onKeyDown={(e) => e.key === "Enter" && buscarCEP()}
            />
            <Button
              type="button"
              onClick={buscarCEP}
              disabled={cepLoading}
              className="shrink-0 gap-2"
            >
              {cepLoading ? (
                <Loader2 className="h-4 w-4 animate-spin" />
              ) : (
                <Search className="h-4 w-4" />
              )}
              <span className="hidden sm:inline">Buscar CEP</span>
            </Button>
          </div>
          {cepOk && (
            <p className="flex items-center gap-1 text-xs font-medium text-success">
              <CheckCircle2 className="h-3.5 w-3.5" /> Endereço preenchido
              automaticamente!
            </p>
          )}
          {cepErro && (
            <p className="flex items-center gap-1 text-xs text-destructive">
              <XCircle className="h-3.5 w-3.5" /> {cepErro}
            </p>
          )}
        </div>

        <div className="mt-4 grid grid-cols-1 gap-4 md:grid-cols-2">
          <div className="space-y-2">
            <Label htmlFor="neg-end">Endereço</Label>
            <Input
              id="neg-end"
              value={form.endereco}
              onChange={set("endereco")}
            />
          </div>
          <div className="grid grid-cols-[90px_1fr] gap-2">
            <div className="space-y-2">
              <Label htmlFor="neg-num">Nº</Label>
              <Input
                id="neg-num"
                value={form.numero}
                onChange={set("numero")}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="neg-comp">Complemento</Label>
              <Input
                id="neg-comp"
                placeholder="Apto, Sala..."
                value={form.complemento}
                onChange={set("complemento")}
              />
            </div>
          </div>
          <div className="space-y-2">
            <Label htmlFor="neg-bairro">Bairro</Label>
            <Input
              id="neg-bairro"
              value={form.bairro}
              onChange={set("bairro")}
            />
          </div>
          <div className="grid grid-cols-[1fr_80px] gap-2">
            <div className="space-y-2">
              <Label htmlFor="neg-cid">Cidade</Label>
              <Input
                id="neg-cid"
                value={form.cidade}
                onChange={set("cidade")}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="neg-uf">UF</Label>
              <Select
                value={form.uf}
                onValueChange={(v) => setForm((p) => ({ ...p, uf: v }))}
              >
                <SelectTrigger id="neg-uf">
                  <SelectValue />
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
      </section>

      {/* Padrões */}
      <section className="rounded-xl border bg-card p-4 shadow-sm md:p-6">
        <SectionHeader
          icon={<SlidersHorizontal className="h-5 w-5" />}
          title="Padrões Financeiros"
          description="Valores padrão ao criar novos empréstimos"
          iconBg="bg-warning/10 text-warning"
        />
        <Separator className="my-4" />
        <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
          <div className="space-y-2">
            <Label htmlFor="neg-taxa">Taxa de Juros Padrão (%)</Label>
            <Input
              id="neg-taxa"
              inputMode="decimal"
              value={form.taxaPadrao}
              onChange={(e) =>
                setForm((p) => ({ ...p, taxaPadrao: maskTaxa(e.target.value) }))
              }
              placeholder="0,00"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="neg-tipo">Tipo de Juros Padrão</Label>
            <Select
              value={form.tipoJurosPadrao}
              onValueChange={(v) =>
                setForm((p) => ({ ...p, tipoJurosPadrao: v }))
              }
            >
              <SelectTrigger id="neg-tipo">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="simples">Juros Simples</SelectItem>
                <SelectItem value="composto">Juros Compostos</SelectItem>
                <SelectItem value="sojuros">Só Juros</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="space-y-2">
            <Label htmlFor="neg-multa">Multa por Atraso (%)</Label>
            <Input
              id="neg-multa"
              type="number"
              step="0.01"
              value={form.multaAtraso}
              onChange={set("multaAtraso")}
            />
            <p className="text-xs text-muted-foreground">
              Aplicada sobre o valor da parcela em atraso
            </p>
          </div>
        </div>
      </section>

      <div className="flex justify-end">
        <Button onClick={salvar} disabled={saving} className="gap-2">
          {saving ? (
            <Loader2 className="h-4 w-4 animate-spin" />
          ) : (
            <Save className="h-4 w-4" />
          )}
          Salvar Dados do Negócio
        </Button>
      </div>
    </div>
  );
}

// ---------------------------------------------------------------------------
// Tab: Preferências
// ---------------------------------------------------------------------------

type Prefs = {
  notifVencimento: boolean;
  notifAtraso: boolean;
  notifPagamento: boolean;
  whatsappAuto: boolean;
  darkMode: boolean;
  compactView: boolean;
  itensPorPagina: string;
  moeda: string;
};

function TabPreferencias() {
  const [msg, setMsg] = useState(MSG_PADRAO);
  const [preview, setPreview] = useState(false);
  const [saving, setSaving] = useState(false);
  const [prefs, setPrefs] = useState<Prefs>({
    notifVencimento: true,
    notifAtraso: true,
    notifPagamento: false,
    whatsappAuto: false,
    darkMode: false,
    compactView: false,
    itensPorPagina: "10",
    moeda: "BRL",
  });

  const setP =
    <K extends keyof Prefs>(field: K) =>
    (v: Prefs[K]) =>
      setPrefs((p) => ({ ...p, [field]: v }));

  const previewMsg = msg
    .replace(/\{\{cliente\}\}/g, "João da Silva")
    .replace(/\{\{parcela\}\}/g, "2/6")
    .replace(/\{\{contrato\}\}/g, "#004")
    .replace(/\{\{valor\}\}/g, "R$ 620,00")
    .replace(/\{\{vencimento\}\}/g, "23/04/2026")
    .replace(/\{\{negocio\}\}/g, "JuroPro");

  const salvar = async () => {
    setSaving(true);
    await new Promise((r) => setTimeout(r, 700));
    setSaving(false);
    toast.success("Preferências salvas com sucesso!");
  };

  const notificacoes = [
    {
      key: "notifVencimento" as const,
      label: "Vencimentos do dia",
      sub: "Alerta quando há parcelas vencendo hoje",
    },
    {
      key: "notifAtraso" as const,
      label: "Parcelas em atraso",
      sub: "Alerta diário de inadimplência",
    },
    {
      key: "notifPagamento" as const,
      label: "Confirmação de baixa",
      sub: "Notifica ao registrar um recebimento",
    },
    {
      key: "whatsappAuto" as const,
      label: "Cobrança automática",
      sub: "Envia WhatsApp automaticamente no vencimento",
    },
  ];

  const interfaceItems = [
    {
      key: "darkMode" as const,
      label: "Modo Escuro",
      sub: "Ativar tema escuro no sistema",
    },
    {
      key: "compactView" as const,
      label: "Visualização compacta",
      sub: "Reduz o espaçamento das tabelas",
    },
  ];

  return (
    <div className="space-y-4 md:space-y-6">
      {/* Mensagem WhatsApp */}
      <section className="rounded-xl border bg-card p-4 shadow-sm md:p-6">
        <SectionHeader
          icon={<MessageCircle className="h-5 w-5" />}
          title="Mensagem de Cobrança (WhatsApp)"
          description="Personalize o texto enviado automaticamente"
          iconBg="bg-success/15 text-success"
        />
        <Separator className="my-4" />
        <p className="mb-2 text-sm font-medium text-foreground">
          Variáveis disponíveis — clique para inserir:
        </p>
        <div className="mb-4 flex flex-wrap gap-2">
          {VARIAVEIS.map((v) => (
            <button
              key={v.var}
              type="button"
              onClick={() => setMsg((m) => m + v.var)}
              className="group inline-flex items-center gap-1 rounded-full border border-success/30 bg-success/10 px-2.5 py-1 text-xs font-semibold text-success transition-colors hover:bg-success/20"
              title={v.desc}
            >
              {v.var}
              <span className="hidden text-[10px] font-normal text-success/70 sm:inline">
                · {v.desc}
              </span>
            </button>
          ))}
        </div>
        <Textarea
          rows={9}
          value={msg}
          onChange={(e) => setMsg(e.target.value)}
          placeholder="Digite a mensagem..."
          className="font-mono text-sm leading-relaxed"
        />
        <div className="mt-3 flex flex-wrap gap-2">
          <Button
            variant="outline"
            size="sm"
            onClick={() => setPreview((p) => !p)}
            className="gap-2"
          >
            {preview ? (
              <EyeOff className="h-4 w-4" />
            ) : (
              <Eye className="h-4 w-4" />
            )}
            {preview ? "Ocultar Preview" : "Ver Preview"}
          </Button>
          <Button
            variant="outline"
            size="sm"
            onClick={() => setMsg(MSG_PADRAO)}
            className="gap-2"
          >
            <RefreshCw className="h-4 w-4" />
            Restaurar padrão
          </Button>
        </div>
        {preview && (
          <div className="mt-4">
            <p className="mb-2 text-sm font-medium text-foreground">
              📱 Preview com dados reais:
            </p>
            <div className="whitespace-pre-wrap break-words rounded-lg border-l-4 border-success bg-success/10 p-4 text-sm leading-relaxed text-foreground">
              {previewMsg}
            </div>
          </div>
        )}
      </section>

      {/* Notificações */}
      <section className="rounded-xl border bg-card p-4 shadow-sm md:p-6">
        <SectionHeader
          icon={<Bell className="h-5 w-5" />}
          title="Notificações"
          description="Controle quais alertas você deseja receber"
          iconBg="bg-info/10 text-info"
        />
        <Separator className="my-4" />
        <div className="divide-y">
          {notificacoes.map((t) => (
            <div
              key={t.key}
              className="flex items-center justify-between gap-4 py-3"
            >
              <div className="min-w-0">
                <p className="text-sm font-semibold text-foreground">
                  {t.label}
                </p>
                <p className="text-xs text-muted-foreground">{t.sub}</p>
              </div>
              <Switch
                checked={prefs[t.key]}
                onCheckedChange={setP(t.key)}
              />
            </div>
          ))}
        </div>
      </section>

      {/* Interface */}
      <section className="rounded-xl border bg-card p-4 shadow-sm md:p-6">
        <SectionHeader
          icon={<Palette className="h-5 w-5" />}
          title="Interface"
          description="Personalização visual do sistema"
          iconBg="bg-accent text-accent-foreground"
        />
        <Separator className="my-4" />
        <div className="divide-y">
          {interfaceItems.map((t) => (
            <div
              key={t.key}
              className="flex items-center justify-between gap-4 py-3"
            >
              <div className="min-w-0">
                <p className="text-sm font-semibold text-foreground">
                  {t.label}
                </p>
                <p className="text-xs text-muted-foreground">{t.sub}</p>
              </div>
              <Switch
                checked={prefs[t.key]}
                onCheckedChange={setP(t.key)}
              />
            </div>
          ))}
        </div>
        <Separator className="my-4" />
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          <div className="space-y-2">
            <Label htmlFor="pref-itens">Itens por página (padrão)</Label>
            <Select
              value={prefs.itensPorPagina}
              onValueChange={setP("itensPorPagina")}
            >
              <SelectTrigger id="pref-itens">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                {["5", "10", "25", "50", "100"].map((n) => (
                  <SelectItem key={n} value={n}>
                    {n} itens
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          <div className="space-y-2">
            <Label htmlFor="pref-moeda">Moeda</Label>
            <Select value={prefs.moeda} onValueChange={setP("moeda")}>
              <SelectTrigger id="pref-moeda">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="BRL">BRL — Real Brasileiro</SelectItem>
                <SelectItem value="USD">USD — Dólar Americano</SelectItem>
                <SelectItem value="EUR">EUR — Euro</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
      </section>

      <div className="flex justify-end">
        <Button onClick={salvar} disabled={saving} className="gap-2">
          {saving ? (
            <Loader2 className="h-4 w-4 animate-spin" />
          ) : (
            <Save className="h-4 w-4" />
          )}
          Salvar Preferências
        </Button>
      </div>
    </div>
  );
}

// ---------------------------------------------------------------------------
// Page
// ---------------------------------------------------------------------------

function ConfiguracoesPage() {
  return (
    <SidebarProvider>
      <div className="flex min-h-screen w-full bg-secondary">
        <AppSidebar />
        <div className="flex min-w-0 flex-1 flex-col">
          <header className="sticky top-0 z-30 flex h-16 items-center gap-3 border-b bg-background/90 px-4 backdrop-blur md:px-6">
            <SidebarTrigger className="text-foreground" />
            <div className="flex items-center gap-2">
              <SettingsIcon className="h-5 w-5 text-primary" />
              <h2 className="text-sm font-medium text-muted-foreground">
                Configurações
              </h2>
            </div>
          </header>

          <main className="flex-1 space-y-6 p-4 md:p-6 lg:p-8">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary text-primary-foreground shadow-sm md:h-11 md:w-11">
                <SettingsIcon className="h-5 w-5" />
              </div>
              <div className="min-w-0">
                <h1 className="text-xl font-semibold tracking-tight text-foreground md:text-2xl">
                  Configurações
                </h1>
                <p className="text-xs text-muted-foreground sm:text-sm">
                  Gerencie seu perfil, negócio e preferências.
                </p>
              </div>
            </div>

            <div className="mx-auto w-full max-w-4xl">
              <Tabs defaultValue="perfil" className="w-full">
                <TabsList className="grid h-auto w-full grid-cols-3 gap-1 bg-muted p-1">
                  <TabsTrigger
                    value="perfil"
                    className="flex items-center gap-2 py-2 text-xs sm:text-sm"
                  >
                    <User className="h-4 w-4" />
                    <span className="hidden sm:inline">Meu Perfil</span>
                    <span className="sm:hidden">Perfil</span>
                  </TabsTrigger>
                  <TabsTrigger
                    value="negocio"
                    className="flex items-center gap-2 py-2 text-xs sm:text-sm"
                  >
                    <Building2 className="h-4 w-4" />
                    <span className="hidden sm:inline">Dados do Negócio</span>
                    <span className="sm:hidden">Negócio</span>
                  </TabsTrigger>
                  <TabsTrigger
                    value="preferencias"
                    className="flex items-center gap-2 py-2 text-xs sm:text-sm"
                  >
                    <SlidersHorizontal className="h-4 w-4" />
                    <span className="hidden sm:inline">Preferências</span>
                    <span className="sm:hidden">Prefs</span>
                  </TabsTrigger>
                </TabsList>

                <TabsContent value="perfil" className="mt-4 md:mt-6">
                  <TabPerfil />
                </TabsContent>
                <TabsContent value="negocio" className="mt-4 md:mt-6">
                  <TabNegocio />
                </TabsContent>
                <TabsContent value="preferencias" className="mt-4 md:mt-6">
                  <TabPreferencias />
                </TabsContent>
              </Tabs>
            </div>
          </main>
        </div>
      </div>
    </SidebarProvider>
  );
}
