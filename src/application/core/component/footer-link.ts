import { createElement } from "../../../utils/virtual-element";

export function footerLink({ title, href, img }: { title: string; href: string; img: string }) {
  return createElement({
    type: "a",
    props: {
      children: [
        createElement({
          type: "div",
          props: {
            children: [
              createElement({
                type: "img",
                props: {
                  src: img,
                },
              }),
            ],
            className: "logo-container",
          },
        }),
        createElement({
          type: "span",
          props: { innerText: title },
        }),
      ],
      href,
      className: "footer-link",
    },
  });
}
