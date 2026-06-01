import { createFileRoute, Link } from "@tanstack/react-router";
import { ShieldCheck } from "lucide-react";

export const Route = createFileRoute("/privacidade")({
  head: () => ({
    meta: [
      { title: "Política de Privacidade - JuroPro" },
      {
        name: "description",
        content:
          "Política de Privacidade do JuroPro, sistema de gestão de empréstimos.",
      },
    ],
  }),
  component: PrivacidadePage,
});

const updatedAt = "1 de junho de 2026";

const sections = [
  {
    title: "1. Quem somos",
    body: [
      "O JuroPro é uma plataforma de gestão de empréstimos, clientes, contratos, vencimentos, cobranças e relatórios financeiros. Esta política explica como tratamos os dados pessoais usados na plataforma.",
    ],
  },
  {
    title: "2. Dados que podemos coletar",
    body: [
      "Dados de conta, como nome, e-mail, telefone, empresa e informações de acesso.",
      "Dados cadastrados pelo usuário na operação, como clientes, contatos, contratos, parcelas, valores, datas de vencimento, status de pagamento e observações inseridas na plataforma.",
      "Dados técnicos necessários para funcionamento e segurança, como identificadores de sessão, registros de acesso, navegador, dispositivo, endereço IP e informações de uso do sistema.",
      "Dados de suporte, quando o usuário entra em contato por e-mail, WhatsApp ou outros canais informados pela JuroPro.",
    ],
  },
  {
    title: "3. Como usamos os dados",
    body: [
      "Usamos os dados para autenticar usuários, manter a conta ativa, exibir informações operacionais, gerar relatórios, organizar cobranças, melhorar a segurança e prestar suporte.",
      "Também podemos usar dados técnicos e métricas de uso para corrigir erros, melhorar desempenho, prevenir abuso e aperfeiçoar a experiência do usuário.",
    ],
  },
  {
    title: "4. Base e responsabilidade do usuário",
    body: [
      "O usuário é responsável pelos dados de clientes, contratos e cobranças que cadastra no JuroPro, devendo possuir autorização ou base legal adequada para tratar essas informações.",
      "A JuroPro atua para fornecer a tecnologia, armazenamento, segurança e ferramentas necessárias ao uso da plataforma.",
    ],
  },
  {
    title: "5. Compartilhamento de dados",
    body: [
      "Não vendemos dados pessoais. Podemos compartilhar dados apenas quando necessário para operar a plataforma, cumprir obrigações legais, proteger direitos, investigar fraude ou utilizar fornecedores essenciais, como infraestrutura de hospedagem, banco de dados, autenticação, envio de e-mails e suporte.",
    ],
  },
  {
    title: "6. Armazenamento e segurança",
    body: [
      "Adotamos medidas técnicas e organizacionais para proteger os dados contra acesso não autorizado, perda, alteração ou divulgação indevida.",
      "Apesar dos esforços de segurança, nenhum sistema digital é absolutamente imune a riscos. Por isso, recomendamos que o usuário mantenha senhas fortes, proteja seus dispositivos e restrinja o acesso à conta.",
    ],
  },
  {
    title: "7. Retenção e exclusão",
    body: [
      "Mantemos os dados enquanto a conta estiver ativa, enquanto forem necessários para prestar o serviço ou enquanto houver obrigação legal, fiscal, contratual ou de segurança.",
      "O usuário pode solicitar correção, exportação ou exclusão dos seus dados pelo canal de contato informado nesta política. A exclusão pode ser limitada quando houver obrigação legal ou necessidade legítima de preservação.",
    ],
  },
  {
    title: "8. Cookies e tecnologias semelhantes",
    body: [
      "Podemos usar cookies, armazenamento local e tecnologias semelhantes para manter login, preferências do usuário, segurança da sessão e funcionamento do aplicativo web/PWA.",
    ],
  },
  {
    title: "9. Crianças e adolescentes",
    body: [
      "O JuroPro é destinado a uso profissional e não é direcionado a crianças. Não coletamos intencionalmente dados de crianças para uso direto da plataforma.",
    ],
  },
  {
    title: "10. Alterações nesta política",
    body: [
      "Podemos atualizar esta política para refletir mudanças no produto, requisitos legais ou práticas de segurança. A versão mais recente ficará sempre disponível nesta página.",
    ],
  },
  {
    title: "11. Contato",
    body: [
      "Para dúvidas, solicitações de privacidade ou pedidos relacionados a dados pessoais, entre em contato pelo e-mail suporte@juropro.com.br ou pelo WhatsApp (73) 98144-4091.",
    ],
  },
];

function PrivacidadePage() {
  return (
    <main className="min-h-screen bg-secondary px-4 py-8 text-foreground sm:px-6 lg:px-8">
      <div className="mx-auto max-w-4xl">
        <header className="mb-8 rounded-lg border bg-background p-6 shadow-sm">
          <div className="mb-4 flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-primary text-primary-foreground">
              <ShieldCheck className="h-5 w-5" />
            </div>
            <div>
              <p className="text-sm font-medium text-muted-foreground">JuroPro</p>
              <h1 className="text-2xl font-bold tracking-tight sm:text-3xl">
                Política de Privacidade
              </h1>
            </div>
          </div>
          <p className="max-w-3xl text-sm leading-6 text-muted-foreground sm:text-base">
            Esta página descreve como o JuroPro coleta, usa, armazena e protege dados pessoais
            relacionados ao uso da plataforma.
          </p>
          <p className="mt-4 text-xs font-medium uppercase text-muted-foreground">
            Última atualização: {updatedAt}
          </p>
        </header>

        <div className="space-y-4">
          {sections.map((section) => (
            <section key={section.title} className="rounded-lg border bg-background p-5 shadow-sm">
              <h2 className="mb-3 text-lg font-semibold">{section.title}</h2>
              <div className="space-y-3 text-sm leading-6 text-muted-foreground sm:text-base">
                {section.body.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
            </section>
          ))}
        </div>

        <footer className="mt-8 flex flex-col gap-3 rounded-lg border bg-background p-5 text-sm text-muted-foreground shadow-sm sm:flex-row sm:items-center sm:justify-between">
          <span>JuroPro - Sistema profissional de gestão de empréstimos</span>
          <Link to="/login" className="font-semibold text-primary hover:underline">
            Voltar para o login
          </Link>
        </footer>
      </div>
    </main>
  );
}
