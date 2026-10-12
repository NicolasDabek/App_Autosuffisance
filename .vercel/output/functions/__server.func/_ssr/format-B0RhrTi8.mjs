//#region node_modules/.nitro/vite/services/ssr/assets/format-B0RhrTi8.js
function frNumber(n, digits = 0) {
	return n.toLocaleString("fr-FR", {
		maximumFractionDigits: digits,
		minimumFractionDigits: digits
	});
}
function frEuro(n) {
	return n.toLocaleString("fr-FR", {
		style: "currency",
		currency: "EUR",
		maximumFractionDigits: 0
	});
}
function frDate(iso) {
	return (/* @__PURE__ */ new Date(iso + (iso.length === 10 ? "T12:00:00" : ""))).toLocaleDateString("fr-FR", {
		day: "numeric",
		month: "long",
		year: "numeric"
	});
}
function todayISO() {
	const d = /* @__PURE__ */ new Date();
	const m = String(d.getMonth() + 1).padStart(2, "0");
	const day = String(d.getDate()).padStart(2, "0");
	return `${d.getFullYear()}-${m}-${day}`;
}
function currentMonthIndex() {
	return (/* @__PURE__ */ new Date()).getMonth();
}
var MONTHS = [
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
	"décembre"
];
var MONTH_LABELS = MONTHS;
function monthLabel(index) {
	return MONTHS[index] ?? "";
}
//#endregion
export { frNumber as a, frEuro as i, currentMonthIndex as n, monthLabel as o, frDate as r, todayISO as s, MONTH_LABELS as t };
