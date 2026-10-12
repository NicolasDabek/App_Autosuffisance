import * as React from "react";
import { Input } from "@/components/ui/input";

type Props = Omit<React.ComponentProps<typeof Input>, "type" | "value" | "onChange" | "inputMode"> & {
  value: number;
  onValueChange: (value: number) => void;
  /** Valeur écrite à la sortie du champ s’il est vide. */
  emptyValue?: number;
  integer?: boolean;
};

function toNum(raw: string, integer: boolean): number | null {
  const t = raw.trim().replace(/\s/g, "").replace(",", ".");
  if (t === "" || t === "-" || t === "." || t === "-.") return null;
  const n = Number(t);
  if (!Number.isFinite(n)) return null;
  return integer ? Math.trunc(n) : n;
}

function clamp(n: number, min?: string | number, max?: string | number) {
  let x = n;
  if (min != null && min !== "") x = Math.max(Number(min), x);
  if (max != null && max !== "") x = Math.min(Number(max), x);
  return x;
}

export function NumberField({
  value,
  onValueChange,
  emptyValue = 0,
  integer = false,
  min,
  max,
  onBlur,
  onFocus,
  onKeyDown,
  ...rest
}: Props) {
  const [draft, setDraft] = React.useState<string | null>(null);
  const shown = draft ?? String(value);

  function emit(raw: string, allowEmpty: boolean) {
    const parsed = toNum(raw, integer);
    if (parsed == null) {
      if (!allowEmpty) onValueChange(clamp(emptyValue, min, max));
      return;
    }
    onValueChange(clamp(parsed, min, max));
  }

  return (
    <Input
      {...rest}
      type="text"
      inputMode={integer ? "numeric" : "decimal"}
      autoComplete="off"
      min={min}
      max={max}
      value={shown}
      onFocus={(e) => {
        setDraft(String(value));
        onFocus?.(e);
      }}
      onChange={(e) => {
        const v = e.target.value;
        if (v === "" || /^-?[\d\s]*[.,]?\d*$/.test(v)) {
          setDraft(v);
          emit(v, true);
        }
      }}
      onBlur={(e) => {
        emit(draft ?? String(value), false);
        setDraft(null);
        onBlur?.(e);
      }}
      onKeyDown={(e) => {
        if (e.key === "Enter") (e.target as HTMLInputElement).blur();
        onKeyDown?.(e);
      }}
    />
  );
}
