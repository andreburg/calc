import { createElement } from "../../../utils/virtual-element";

export function header() {
  return createElement({
    type: "header",
    props: { children: [createElement({ type: "span", props: { innerText: "Calculator", className: "web-title" } })] },
  });
}
