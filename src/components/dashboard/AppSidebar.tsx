import {
  LayoutDashboard,
  Users,
  FileText,
  CalendarClock,
  BarChart3,
  Settings,
  Headset,
  Wallet,
  LogOut,
} from "lucide-react";
import { Link, useLocation, useNavigate } from "@tanstack/react-router";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { useAdminName } from "@/hooks/use-admin-name";
import { useAdminAvatar } from "@/hooks/use-admin-avatar";
import { useBusinessName, useBusinessLogo } from "@/hooks/use-business-info";
import { useAuth } from "@/hooks/use-auth";
import { useProfile } from "@/hooks/use-profile";
import { toast } from "sonner";

const navItems = [
  { title: "Início", url: "/", icon: LayoutDashboard },
  { title: "Clientes", url: "/clientes", icon: Users },
  { title: "Contratos", url: "/contratos", icon: FileText },
  { title: "Vencimentos", url: "/vencimentos", icon: CalendarClock },
  { title: "Relatórios", url: "/relatorios", icon: BarChart3 },
  { title: "Suporte", url: "/suporte", icon: Headset, highlight: true },
];

const supportItems = [
  { title: "Configurações", url: "/configuracoes", icon: Settings },
];

export function AppSidebar() {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const { name, defaultName } = useAdminName();
  const { avatar } = useAdminAvatar();
  const { name: businessName } = useBusinessName();
  const { logo: businessLogo } = useBusinessLogo();
  const { signOut, user } = useAuth();
  const { profile } = useProfile();
  const isActive = (url: string) => pathname === url;

  const displayName =
    profile?.nome ||
    (name && name !== defaultName ? name : null) ||
    user?.email?.split("@")[0] ||
    "Usuário";
  const displayAvatar = profile?.avatar_url || avatar;
  const iniciais =
    displayName
      .split(" ")
      .filter(Boolean)
      .slice(0, 2)
      .map((n) => n[0]?.toUpperCase() ?? "")
      .join("") || "U";

  const handleSair = async () => {
    await signOut();
    toast.success("Você saiu da conta");
    navigate({ to: "/login" });
  };

  return (
    <Sidebar collapsible="icon" className="border-r border-sidebar-border">
      <SidebarHeader className="border-b border-sidebar-border">
        <div className="flex items-center gap-2 px-2 py-3">
          <div className="flex h-9 w-9 items-center justify-center overflow-hidden rounded-lg bg-sidebar-primary text-sidebar-primary-foreground shadow-sm">
            {businessLogo ? (
              <img
                src={businessLogo}
                alt={businessName}
                className="h-full w-full object-cover"
              />
            ) : (
              <Wallet className="h-5 w-5" />
            )}
          </div>
          <div className="group-data-[collapsible=icon]:hidden">
            <p className="text-sm font-semibold leading-tight text-sidebar-foreground">
              {businessName}
            </p>
            <p className="text-[10px] uppercase tracking-wider text-sidebar-foreground/60">
              Gestão de Empréstimos
            </p>
          </div>
        </div>
      </SidebarHeader>

      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Navegação</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {navItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild isActive={isActive(item.url)} tooltip={item.title}>
                    <Link to={item.url}>
                      <item.icon
                        className={`h-4 w-4 ${item.highlight ? "text-success" : ""}`}
                      />
                      <span className={item.highlight ? "font-medium text-success" : ""}>
                        {item.title}
                      </span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        <SidebarGroup>
          <SidebarGroupLabel>Sistema</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {supportItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild isActive={isActive(item.url)} tooltip={item.title}>
                    <Link to={item.url}>
                      <item.icon className="h-4 w-4" />
                      <span>{item.title}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>

      <SidebarFooter className="border-t border-sidebar-border">
        <div className="flex items-center gap-3 px-2 py-2">
          <Avatar className="h-9 w-9 border border-sidebar-border">
            {displayAvatar && <AvatarImage src={displayAvatar} alt={displayName} />}
            <AvatarFallback className="bg-sidebar-primary text-sidebar-primary-foreground text-xs font-semibold">
              {iniciais}
            </AvatarFallback>
          </Avatar>
          <div className="min-w-0 flex-1 group-data-[collapsible=icon]:hidden">
            <p className="truncate text-sm font-medium text-sidebar-foreground">
              {displayName}
            </p>
            <p className="truncate text-xs text-sidebar-foreground/60">
              {profile?.cargo || "Administrador"}
            </p>
          </div>
          <Button
            size="icon"
            variant="ghost"
            onClick={handleSair}
            className="h-8 w-8 shrink-0 text-sidebar-foreground/70 hover:text-sidebar-foreground group-data-[collapsible=icon]:hidden"
            title="Sair"
            aria-label="Sair"
          >
            <LogOut className="h-4 w-4" />
          </Button>
        </div>
      </SidebarFooter>
    </Sidebar>
  );
}
