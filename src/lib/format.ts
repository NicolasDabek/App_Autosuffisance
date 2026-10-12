export function frNumber(n: number, digits = 0) {
  return n.toLocaleString("fr-FR", {
    maximumFractionDigits: digits,
    minimumFractionDigits: digits,
  });
}

export function frEuro(n: number) {
  return n.toLocaleString("fr-FR", {
    style: "currency",
    currency: "EUR",
    maximumFractionDigits: 0,
  });
}

export function frDate(iso: string) {
  return new Date(iso + (iso.length === 10 ? "T12:00:00" : "")).toLocaleDateString(
    "fr-FR",
    { day: "numeric", month: "long", year: "numeric" },
  );
}

export function todayISO() {
  const d = new Date();
  const m = String(d.getMonth() + 1).padStart(2, "0");
  const day = String(d.getDate()).padStart(2, "0");
  return `${d.getFullYear()}-${m}-${day}`;
}

export function currentMonthIndex() {
  return new Date().getMonth();
}

const MONTHS = [
  "janvier",
  "février",
  "mars",
  "avril",
  "mai",
  "juin",
  "juillet",
  "août",
  "septembre",
  "octobre",
  "novembre",
  "décembre",
] as const;

export const MONTH_LABELS = MONTHS;

export function monthLabel(index: number) {
  return MONTHS[index] ?? "";
}
