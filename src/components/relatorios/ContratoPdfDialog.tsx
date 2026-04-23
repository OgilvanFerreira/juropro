import { useMemo } from "react";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Printer, X } from "lucide-react";
import type { EmprestimoListItem } from "@/integrations/external-supabase/emprestimos.functions";
import type { ParcelaListItem } from "@/integrations/external-supabase/parcelas.functions";
import { useAdminName } from "@/hooks/use-admin-name";

interface ContratoPdfDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  contrato: EmprestimoListItem | null;
  contratoCodigo: string;
  parcelas: ParcelaListItem[];
  cliente?: {
    cpf_cnpj?: string | null;
    telefone?: string | null;
    cidade?: string | null;
    uf?: string | null;
  } | null;
}

const fmtBRL = (v: number) =>
  Number(v || 0).toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
  });

const fmtDate = (iso: string | null | undefined) => {
  if (!iso) return "—";
  const d = new Date(iso.length <= 10 ? iso + "T00:00:00" : iso);
  if (Number.isNaN(d.getTime())) return "—";
  return d.toLocaleDateString("pt-BR");
};

const fmtTel = (tel?: string | null) => {
  if (!tel) return "—";
  const digits = tel.replace(/\D/g, "");
  if (digits.length === 11)
    return `(${digits.slice(0, 2)}) ${digits.slice(2, 7)}-${digits.slice(7)}`;
  if (digits.length === 10)
    return `(${digits.slice(0, 2)}) ${digits.slice(2, 6)}-${digits.slice(6)}`;
  return tel;
};

const tipoJurosLabel = (t: string | null) => {
  switch ((t ?? "").toLowerCase()) {
    case "simples":
      return "Simples";
    case "composto":
      return "Composto";
    case "so_juros":
      return "Só Juros";
    default:
      return t ?? "—";
  }
};

export function ContratoPdfDialog({
  open,
  onOpenChange,
  contrato,
  contratoCodigo,
  parcelas,
  cliente,
}: ContratoPdfDialogProps) {
  const { name: adminName } = useAdminName();

  const parcelasContrato = useMemo(
    () =>
      contrato
        ? parcelas
            .filter((p) => String(p.emprestimo_id) === String(contrato.id))
            .sort((a, b) => a.numero_parcela - b.numero_parcela)
        : [],
    [parcelas, contrato],
  );

  const valorTotal = useMemo(() => {
    if (!contrato) return 0;
    if (parcelasContrato.length > 0)
      return parcelasContrato.reduce((s, p) => s + p.valor_parcela, 0);
    return (
      contrato.valor_principal *
      (1 + (contrato.taxa_juros / 100) * contrato.numero_parcelas)
    );
  }, [contrato, parcelasContrato]);

  const handlePrint = () => {
    const conteudo = document.getElementById("contrato-print-area")?.innerHTML;
    if (!conteudo) return;
    const win = window.open("", "_blank", "width=900,height=900");
    if (!win) return;
    win.document.write(`<!doctype html><html><head><title>Contrato ${contratoCodigo} - JuroPro</title>
      <meta charset="utf-8" />
      <style>
        @page { size: A4; margin: 16mm; }
        body { font-family: Georgia, 'Times New Roman', serif; font-size: 12pt; color: #1e293b; line-height: 1.6; margin:0; padding:0; }
        h1 { font-size: 22pt; text-align:center; color:#0f766e; margin: 0 0 4px; letter-spacing: 1px; }
        .sub { text-align:center; font-size: 10pt; color:#64748b; margin-bottom: 24px; }
        .header-box { text-align:center; margin-bottom: 18px; padding: 10px; background:#f0fdf4; border-radius:6px; border:1px solid #bbf7d0; }
        .header-box strong { font-size: 13pt; color:#0f766e; }
        .section-title { font-size: 11pt; font-weight: bold; color: #1d4ed8; border-bottom: 2px solid #1d4ed8; padding-bottom: 3px; margin: 18px 0 10px; text-transform: uppercase; letter-spacing: 0.5px; }
        .grid2 { display:grid; grid-template-columns: 1fr 1fr; gap: 4px 20px; }
        .field { margin: 0 0 4px; }
        .field span { font-weight: bold; }
        table { width: 100%; border-collapse: collapse; font-size: 10pt; margin-top: 6px; }
        th { background: #f0fdf4; color: #0f766e; padding: 7px 10px; font-weight: bold; border: 1px solid #d1fae5; text-align:left; }
        td { padding: 6px 10px; border: 1px solid #e5e7eb; }
        tr:nth-child(even) td { background: #f9fafb; }
        .clausula { margin-bottom: 8px; text-align: justify; }
        .clausula b { color:#1d4ed8; }
        .assinaturas { display:grid; grid-template-columns: 1fr 1fr; gap: 40px; margin-top: 60px; }
        .assin-line { border-top: 1px solid #374151; padding-top: 6px; font-size: 10pt; text-align:center; }
      </style>
    </head><body>${conteudo}</body></html>`);
    win.document.close();
    win.focus();
    setTimeout(() => {
      win.print();
      win.close();
    }, 400);
  };

  if (!contrato) return null;

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-4xl w-[calc(100vw-1rem)] sm:w-full max-h-[95vh] sm:max-h-[92vh] overflow-hidden p-0 gap-0 flex flex-col">
        <div className="sticky top-0 z-10 flex items-center justify-between gap-2 border-b bg-background px-3 sm:px-4 py-2.5 sm:py-3 shrink-0">
          <div className="text-xs sm:text-sm font-semibold truncate">
            📄 Contrato {contratoCodigo}
          </div>
          <div className="flex items-center gap-1.5 sm:gap-2 shrink-0">
            <Button
              size="sm"
              onClick={handlePrint}
              className="bg-success hover:bg-success/90 text-success-foreground h-8 sm:h-9 px-2 sm:px-3"
            >
              <Printer className="h-4 w-4" />
              <span className="hidden sm:inline">Gerar PDF / Imprimir</span>
              <span className="sm:hidden text-xs">PDF</span>
            </Button>
            <Button
              size="icon"
              variant="ghost"
              onClick={() => onOpenChange(false)}
              className="h-8 w-8"
            >
              <X className="h-4 w-4" />
            </Button>
          </div>
        </div>

        <div className="bg-muted/30 p-2 sm:p-6 overflow-y-auto overflow-x-hidden flex-1">
          <div
            id="contrato-print-area"
            className="mx-auto max-w-3xl bg-white p-4 sm:p-8 md:p-12 shadow-lg text-[#1e293b] text-[11px] sm:text-base"
            style={{ fontFamily: "Georgia, 'Times New Roman', serif", lineHeight: 1.6 }}
          >
            <h1
              style={{
                fontSize: "22pt",
                textAlign: "center",
                color: "#0f766e",
                margin: "0 0 4px",
                letterSpacing: 1,
              }}
            >
              💰 JUROP<span style={{ color: "#1d4ed8" }}>RO</span>
            </h1>
            <p
              className="sub"
              style={{
                textAlign: "center",
                fontSize: "10pt",
                color: "#64748b",
                marginBottom: 24,
              }}
            >
              Gestão Profissional de Empréstimos
              <br />
              CNPJ: 00.000.000/0001-00 • Itabuna, Bahia
            </p>

            <div
              className="header-box"
              style={{
                textAlign: "center",
                marginBottom: 18,
                padding: 10,
                background: "#f0fdf4",
                borderRadius: 6,
                border: "1px solid #bbf7d0",
              }}
            >
              <strong style={{ fontSize: "13pt", color: "#0f766e" }}>
                CONTRATO DE EMPRÉSTIMO PESSOAL{" "}
                {contratoCodigo}
              </strong>
              <br />
              <span style={{ fontSize: "10pt", color: "#64748b" }}>
                Data de emissão: {fmtDate(new Date().toISOString().slice(0, 10))}
              </span>
            </div>

            <p
              className="section-title"
              style={{
                fontSize: "11pt",
                fontWeight: "bold",
                color: "#1d4ed8",
                borderBottom: "2px solid #1d4ed8",
                paddingBottom: 3,
                margin: "18px 0 10px",
                textTransform: "uppercase",
                letterSpacing: "0.5px",
              }}
            >
              I — Dados do Credor (Locador)
            </p>
            <div
              className="grid2"
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: "4px 20px",
              }}
            >
              {[
                ["Nome Completo", adminName],
                ["CPF", "021.985.555-22"],
                ["Endereço", "Rua Edelvito Lavinsky, 55 — Jardim Primavera"],
                ["Cidade/UF", "Itabuna / BA"],
                ["Telefone", "(73) 99141-1427"],
                ["E-mail", "fsgilvan@gmail.com"],
              ].map(([k, v]) => (
                <p key={k} className="field" style={{ margin: "0 0 4px" }}>
                  <span style={{ fontWeight: "bold" }}>{k}:</span> {v}
                </p>
              ))}
            </div>

            <p
              className="section-title"
              style={{
                fontSize: "11pt",
                fontWeight: "bold",
                color: "#1d4ed8",
                borderBottom: "2px solid #1d4ed8",
                paddingBottom: 3,
                margin: "18px 0 10px",
                textTransform: "uppercase",
              }}
            >
              II — Dados do Devedor (Tomador)
            </p>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: "4px 20px",
              }}
            >
              {[
                ["Nome Completo", contrato.cliente_nome ?? "—"],
                ["CPF/CNPJ", cliente?.cpf_cnpj ?? "—"],
                ["Telefone", fmtTel(cliente?.telefone)],
                [
                  "Cidade/UF",
                  cliente?.cidade
                    ? `${cliente.cidade}${cliente.uf ? ` / ${cliente.uf}` : ""}`
                    : "—",
                ],
              ].map(([k, v]) => (
                <p key={k} style={{ margin: "0 0 4px" }}>
                  <span style={{ fontWeight: "bold" }}>{k}:</span> {v}
                </p>
              ))}
            </div>

            <p
              className="section-title"
              style={{
                fontSize: "11pt",
                fontWeight: "bold",
                color: "#1d4ed8",
                borderBottom: "2px solid #1d4ed8",
                paddingBottom: 3,
                margin: "18px 0 10px",
                textTransform: "uppercase",
              }}
            >
              III — Condições do Empréstimo
            </p>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: "4px 20px",
              }}
            >
              {[
                ["Valor Principal", fmtBRL(contrato.valor_principal)],
                [
                  "Taxa de Juros",
                  `${contrato.taxa_juros}% ao mês (${tipoJurosLabel(contrato.tipo_juros)})`,
                ],
                ["Nº de Parcelas", `${contrato.numero_parcelas}x`],
                ["Periodicidade", "Mensal"],
                ["Data do Contrato", fmtDate(contrato.data_inicio)],
                ["Valor Total", fmtBRL(valorTotal)],
              ].map(([k, v]) => (
                <p key={k} style={{ margin: "0 0 4px" }}>
                  <span style={{ fontWeight: "bold" }}>{k}:</span> {v}
                </p>
              ))}
            </div>

            <p
              className="section-title"
              style={{
                fontSize: "11pt",
                fontWeight: "bold",
                color: "#1d4ed8",
                borderBottom: "2px solid #1d4ed8",
                paddingBottom: 3,
                margin: "18px 0 10px",
                textTransform: "uppercase",
              }}
            >
              IV — Cláusulas e Condições
            </p>
            {[
              [
                "CLÁUSULA 1ª – DO OBJETO",
                "O CREDOR concede ao DEVEDOR empréstimo no valor e condições acima, que o DEVEDOR declara receber neste ato em moeda corrente nacional.",
              ],
              [
                "CLÁUSULA 2ª – DOS JUROS",
                `Incidirão juros de ${contrato.taxa_juros}% ao mês na modalidade ${tipoJurosLabel(contrato.tipo_juros)} sobre o saldo devedor. Em caso de atraso, será acrescida multa de 2% sobre o valor da parcela e juros de mora de 1% ao mês.`,
              ],
              [
                "CLÁUSULA 3ª – DO PAGAMENTO",
                "O DEVEDOR obriga-se a pagar as parcelas nas datas estipuladas no quadro a seguir. O não pagamento na data de vencimento sujeitará o DEVEDOR à mora automática, independentemente de notificação.",
              ],
              [
                "CLÁUSULA 4ª – DO FORO",
                "As partes elegem o foro da Comarca de Itabuna/BA para dirimir quaisquer questões oriundas deste contrato, com renúncia expressa a qualquer outro, por mais privilegiado que seja.",
              ],
            ].map(([t, c]) => (
              <p
                key={t}
                className="clausula"
                style={{ marginBottom: 8, textAlign: "justify" }}
              >
                <b style={{ color: "#1d4ed8" }}>{t}:</b> {c}
              </p>
            ))}

            <p
              className="section-title"
              style={{
                fontSize: "11pt",
                fontWeight: "bold",
                color: "#1d4ed8",
                borderBottom: "2px solid #1d4ed8",
                paddingBottom: 3,
                margin: "18px 0 10px",
                textTransform: "uppercase",
              }}
            >
              V — Tabela de Parcelas
            </p>
            <div style={{ overflowX: "auto", WebkitOverflowScrolling: "touch" }}>
            <table
              style={{
                width: "100%",
                borderCollapse: "collapse",
                fontSize: "10pt",
                marginTop: 6,
                minWidth: 420,
              }}
            >
              <thead>
                <tr>
                  <th
                    style={{
                      background: "#f0fdf4",
                      color: "#0f766e",
                      padding: "7px 10px",
                      fontWeight: "bold",
                      border: "1px solid #d1fae5",
                      textAlign: "left",
                    }}
                  >
                    Nº
                  </th>
                  <th
                    style={{
                      background: "#f0fdf4",
                      color: "#0f766e",
                      padding: "7px 10px",
                      fontWeight: "bold",
                      border: "1px solid #d1fae5",
                      textAlign: "left",
                    }}
                  >
                    Vencimento
                  </th>
                  <th
                    style={{
                      background: "#f0fdf4",
                      color: "#0f766e",
                      padding: "7px 10px",
                      fontWeight: "bold",
                      border: "1px solid #d1fae5",
                      textAlign: "left",
                    }}
                  >
                    Valor
                  </th>
                  <th
                    style={{
                      background: "#f0fdf4",
                      color: "#0f766e",
                      padding: "7px 10px",
                      fontWeight: "bold",
                      border: "1px solid #d1fae5",
                      textAlign: "left",
                    }}
                  >
                    Status
                  </th>
                </tr>
              </thead>
              <tbody>
                {parcelasContrato.map((p, i) => (
                  <tr key={String(p.id)}>
                    <td
                      style={{
                        padding: "6px 10px",
                        border: "1px solid #e5e7eb",
                        background: i % 2 ? "#f9fafb" : "white",
                      }}
                    >
                      #{String(p.numero_parcela).padStart(2, "0")}
                    </td>
                    <td
                      style={{
                        padding: "6px 10px",
                        border: "1px solid #e5e7eb",
                        background: i % 2 ? "#f9fafb" : "white",
                      }}
                    >
                      {fmtDate(p.data_vencimento)}
                    </td>
                    <td
                      style={{
                        padding: "6px 10px",
                        border: "1px solid #e5e7eb",
                        background: i % 2 ? "#f9fafb" : "white",
                      }}
                    >
                      {fmtBRL(p.valor_parcela)}
                    </td>
                    <td
                      style={{
                        padding: "6px 10px",
                        border: "1px solid #e5e7eb",
                        background: i % 2 ? "#f9fafb" : "white",
                        color: p.status === "pago" ? "#0f766e" : "#dc2626",
                        fontWeight: 600,
                      }}
                    >
                      {p.status === "pago" ? "✅ Pago" : "⏳ Pendente"}
                    </td>
                  </tr>
                ))}
                <tr style={{ fontWeight: "bold", background: "#f0fdf4" }}>
                  <td
                    colSpan={2}
                    style={{
                      padding: "6px 10px",
                      border: "1px solid #d1fae5",
                      textAlign: "right",
                    }}
                  >
                    TOTAL
                  </td>
                  <td
                    style={{
                      padding: "6px 10px",
                      border: "1px solid #d1fae5",
                    }}
                  >
                    {fmtBRL(
                      parcelasContrato.reduce((s, p) => s + p.valor_parcela, 0),
                    )}
                  </td>
                  <td
                    style={{ padding: "6px 10px", border: "1px solid #d1fae5" }}
                  ></td>
                </tr>
              </tbody>
            </table>
            </div>

            <div
              className="assinaturas"
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: 40,
                marginTop: 60,
              }}
            >
              <div style={{ textAlign: "center" }}>
                <p style={{ margin: "0 0 32px", fontSize: "10pt" }}>
                  Itabuna, {fmtDate(new Date().toISOString().slice(0, 10))}
                </p>
                <div
                  style={{
                    borderTop: "1px solid #374151",
                    paddingTop: 6,
                    fontSize: "10pt",
                  }}
                >
                  <b>{adminName}</b>
                  <br />
                  CPF: 021.985.555-22 (Credor)
                </div>
              </div>
              <div style={{ textAlign: "center" }}>
                <p style={{ margin: "0 0 32px", fontSize: "10pt" }}>
                  Assinatura do Devedor
                </p>
                <div
                  style={{
                    borderTop: "1px solid #374151",
                    paddingTop: 6,
                    fontSize: "10pt",
                  }}
                >
                  <b>{contrato.cliente_nome ?? "—"}</b>
                  <br />
                  CPF: {cliente?.cpf_cnpj ?? "—"} (Devedor)
                </div>
              </div>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
