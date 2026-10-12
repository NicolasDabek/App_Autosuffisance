import { y as require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { n as LEGAL_LABEL } from "./animals-BCW_J0tS.mjs";
import { t as Badge } from "./badge-BCJWBkyV.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/legal-badge-DQTs_IOT.js
var import_jsx_runtime = require_jsx_runtime();
function LegalBadge({ level }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
		variant: level === "simple" ? "ok" : level === "complexe" ? "warn" : "secondary",
		children: LEGAL_LABEL[level]
	});
}
//#endregion
export { LegalBadge as t };
