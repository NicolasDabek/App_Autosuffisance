import { i as __toESM } from "../_runtime.mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { y as require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { t as Input } from "./input-DXePJzje.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/number-field-B7hIsrlq.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function toNum(raw, integer) {
	const t = raw.trim().replace(/\s/g, "").replace(",", ".");
	if (t === "" || t === "-" || t === "." || t === "-.") return null;
	const n = Number(t);
	if (!Number.isFinite(n)) return null;
	return integer ? Math.trunc(n) : n;
}
function clamp(n, min, max) {
	let x = n;
	if (min != null && min !== "") x = Math.max(Number(min), x);
	if (max != null && max !== "") x = Math.min(Number(max), x);
	return x;
}
function NumberField({ value, onValueChange, emptyValue = 0, integer = false, min, max, onBlur, onFocus, onKeyDown, ...rest }) {
	const [draft, setDraft] = import_react.useState(null);
	const shown = draft ?? String(value);
	function emit(raw, allowEmpty) {
		const parsed = toNum(raw, integer);
		if (parsed == null) {
			if (!allowEmpty) onValueChange(clamp(emptyValue, min, max));
			return;
		}
		onValueChange(clamp(parsed, min, max));
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
		...rest,
		type: "text",
		inputMode: integer ? "numeric" : "decimal",
		autoComplete: "off",
		min,
		max,
		value: shown,
		onFocus: (e) => {
			setDraft(String(value));
			onFocus?.(e);
		},
		onChange: (e) => {
			const v = e.target.value;
			if (v === "" || /^-?[\d\s]*[.,]?\d*$/.test(v)) {
				setDraft(v);
				emit(v, true);
			}
		},
		onBlur: (e) => {
			emit(draft ?? String(value), false);
			setDraft(null);
			onBlur?.(e);
		},
		onKeyDown: (e) => {
			if (e.key === "Enter") e.target.blur();
			onKeyDown?.(e);
		}
	});
}
//#endregion
export { NumberField as t };
