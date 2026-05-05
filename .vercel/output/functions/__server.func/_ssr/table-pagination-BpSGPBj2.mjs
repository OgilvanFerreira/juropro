import { j as jsxRuntimeExports } from "../_libs/react.mjs";
import { B as Button } from "./use-business-info-CHcAbxEp.mjs";
import { S as Select, a as SelectTrigger, b as SelectValue, c as SelectContent, d as SelectItem } from "./select-Z7vlNdU9.mjs";
import { a9 as ChevronLeft, aa as ChevronRight } from "../_libs/lucide-react.mjs";
const PAGE_SIZE_OPTIONS = [5, 10, 25, 50, 100];
function TablePagination({
  page,
  pageSize,
  totalItems,
  onPageChange,
  onPageSizeChange,
  itemLabel = "registros"
}) {
  const totalPages = Math.max(1, Math.ceil(totalItems / pageSize));
  const current = Math.min(Math.max(1, page), totalPages);
  const start = totalItems === 0 ? 0 : (current - 1) * pageSize + 1;
  const end = Math.min(current * pageSize, totalItems);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col items-stretch justify-between gap-3 border-t bg-muted/20 px-3 py-3 sm:flex-row sm:items-center", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 text-xs text-muted-foreground", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "hidden sm:inline", children: "Itens por página:" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "sm:hidden", children: "Por página:" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        Select,
        {
          value: String(pageSize),
          onValueChange: (v) => onPageSizeChange(Number(v)),
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(SelectTrigger, { className: "h-8 w-[72px]", children: /* @__PURE__ */ jsxRuntimeExports.jsx(SelectValue, {}) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(SelectContent, { children: PAGE_SIZE_OPTIONS.map((s) => /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: String(s), children: s }, s)) })
          ]
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "hidden md:inline", children: [
        "• ",
        start,
        "-",
        end,
        " de ",
        totalItems,
        " ",
        itemLabel
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-end gap-2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-xs text-muted-foreground md:hidden", children: [
        start,
        "-",
        end,
        " / ",
        totalItems
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        Button,
        {
          type: "button",
          size: "sm",
          variant: "outline",
          className: "h-8 gap-1",
          disabled: current <= 1,
          onClick: () => onPageChange(current - 1),
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronLeft, { className: "h-3.5 w-3.5" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "hidden sm:inline", children: "Anterior" })
          ]
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-xs text-muted-foreground", children: [
        "Página ",
        current,
        " de ",
        totalPages
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        Button,
        {
          type: "button",
          size: "sm",
          variant: "outline",
          className: "h-8 gap-1",
          disabled: current >= totalPages,
          onClick: () => onPageChange(current + 1),
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "hidden sm:inline", children: "Próxima" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronRight, { className: "h-3.5 w-3.5" })
          ]
        }
      )
    ] })
  ] });
}
export {
  TablePagination as T
};
