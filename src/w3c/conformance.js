// Module w3c/conformance
// Handle the conformance section properly.
import confoTmpl from "w3c/templates/conformance";
import { pub } from "core/pubsubhub";

export const name = "w3c/conformance";

export function run(conf) {
  const conformance = document.getElementById("conformance");
  if (conformance) {
    conformance.prepend(...confoTmpl(conf).childNodes);
  }
  // Added message for legacy compat with Aria specs
  // See https://github.com/w3c/respec/issues/793
  pub("end", "w3c/conformance");
}
