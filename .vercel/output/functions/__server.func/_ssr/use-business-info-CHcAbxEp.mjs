import { r as reactExports, j as jsxRuntimeExports } from "../_libs/react.mjs";
import { S as Slot } from "../_libs/radix-ui__react-slot.mjs";
import { c as cva } from "../_libs/class-variance-authority.mjs";
import { u as useAuth, c as cn } from "./router-DtZwCPIN.mjs";
const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground shadow hover:bg-primary/90",
        destructive: "bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90",
        outline: "border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground",
        secondary: "bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline"
      },
      size: {
        default: "h-9 px-4 py-2",
        sm: "h-8 rounded-md px-3 text-xs",
        lg: "h-10 rounded-md px-8",
        icon: "h-9 w-9"
      }
    },
    defaultVariants: {
      variant: "default",
      size: "default"
    }
  }
);
const Button = reactExports.forwardRef(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return /* @__PURE__ */ jsxRuntimeExports.jsx(Comp, { className: cn(buttonVariants({ variant, size, className })), ref, ...props });
  }
);
Button.displayName = "Button";
const NAME_BASE = "juropro:business_name";
const LOGO_BASE = "juropro:business_logo";
const DETAILS_BASE = "juropro:business_details";
const DEFAULT_NAME = "JuroPro";
const NAME_EVENT = "juropro:business_name_changed";
const LOGO_EVENT = "juropro:business_logo_changed";
const DETAILS_EVENT = "juropro:business_details_changed";
const DEFAULT_DETAILS = {
  cnpj: "",
  telefone: "",
  email: "",
  cep: "",
  endereco: "",
  numero: "",
  complemento: "",
  bairro: "",
  cidade: "",
  uf: ""
};
function scopedKey(base, userId) {
  return userId ? `${base}:${userId}` : base;
}
function readName(userId) {
  if (typeof window === "undefined") return DEFAULT_NAME;
  try {
    const v = window.localStorage.getItem(scopedKey(NAME_BASE, userId));
    return v && v.trim().length > 0 ? v : DEFAULT_NAME;
  } catch {
    return DEFAULT_NAME;
  }
}
function readLogo(userId) {
  if (typeof window === "undefined") return null;
  try {
    const v = window.localStorage.getItem(scopedKey(LOGO_BASE, userId));
    return v && v.length > 0 ? v : null;
  } catch {
    return null;
  }
}
function readDetails(userId) {
  if (typeof window === "undefined") return DEFAULT_DETAILS;
  try {
    const raw = window.localStorage.getItem(scopedKey(DETAILS_BASE, userId));
    if (!raw) return DEFAULT_DETAILS;
    const parsed = JSON.parse(raw);
    return { ...DEFAULT_DETAILS, ...parsed };
  } catch {
    return DEFAULT_DETAILS;
  }
}
function useBusinessName() {
  const { user } = useAuth();
  const userId = user?.id ?? null;
  const [name, setNameState] = reactExports.useState(DEFAULT_NAME);
  reactExports.useEffect(() => {
    setNameState(readName(userId));
    const onStorage = (e) => {
      if (e.key === scopedKey(NAME_BASE, userId)) setNameState(readName(userId));
    };
    const onCustom = () => setNameState(readName(userId));
    window.addEventListener("storage", onStorage);
    window.addEventListener(NAME_EVENT, onCustom);
    return () => {
      window.removeEventListener("storage", onStorage);
      window.removeEventListener(NAME_EVENT, onCustom);
    };
  }, [userId]);
  const setName = (next) => {
    const clean = next.trim();
    try {
      const k = scopedKey(NAME_BASE, userId);
      if (clean.length === 0) window.localStorage.removeItem(k);
      else window.localStorage.setItem(k, clean);
    } catch {
    }
    window.dispatchEvent(new Event(NAME_EVENT));
    setNameState(clean.length > 0 ? clean : DEFAULT_NAME);
  };
  return { name, setName, defaultName: DEFAULT_NAME };
}
function useBusinessLogo() {
  const { user } = useAuth();
  const userId = user?.id ?? null;
  const [logo, setLogoState] = reactExports.useState(null);
  reactExports.useEffect(() => {
    setLogoState(readLogo(userId));
    const onStorage = (e) => {
      if (e.key === scopedKey(LOGO_BASE, userId)) setLogoState(readLogo(userId));
    };
    const onCustom = () => setLogoState(readLogo(userId));
    window.addEventListener("storage", onStorage);
    window.addEventListener(LOGO_EVENT, onCustom);
    return () => {
      window.removeEventListener("storage", onStorage);
      window.removeEventListener(LOGO_EVENT, onCustom);
    };
  }, [userId]);
  const setLogo = (next) => {
    try {
      const k = scopedKey(LOGO_BASE, userId);
      if (!next) window.localStorage.removeItem(k);
      else window.localStorage.setItem(k, next);
    } catch {
    }
    window.dispatchEvent(new Event(LOGO_EVENT));
    setLogoState(next);
  };
  return { logo, setLogo };
}
function useBusinessDetails() {
  const { user } = useAuth();
  const userId = user?.id ?? null;
  const [details, setDetailsState] = reactExports.useState(DEFAULT_DETAILS);
  reactExports.useEffect(() => {
    setDetailsState(readDetails(userId));
    const onStorage = (e) => {
      if (e.key === scopedKey(DETAILS_BASE, userId)) setDetailsState(readDetails(userId));
    };
    const onCustom = () => setDetailsState(readDetails(userId));
    window.addEventListener("storage", onStorage);
    window.addEventListener(DETAILS_EVENT, onCustom);
    return () => {
      window.removeEventListener("storage", onStorage);
      window.removeEventListener(DETAILS_EVENT, onCustom);
    };
  }, [userId]);
  const setDetails = (next) => {
    try {
      window.localStorage.setItem(scopedKey(DETAILS_BASE, userId), JSON.stringify(next));
    } catch {
    }
    window.dispatchEvent(new Event(DETAILS_EVENT));
    setDetailsState(next);
  };
  return { details, setDetails, defaultDetails: DEFAULT_DETAILS };
}
export {
  Button as B,
  useBusinessLogo as a,
  useBusinessDetails as b,
  buttonVariants as c,
  useBusinessName as u
};
