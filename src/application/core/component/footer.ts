import { createElement } from "../../../utils/virtual-element";
import bbd from "../../../../public/bbd.png";
import github from "../../../../public/github.png";
import web from "../../../../public/web.png";
import { footerLink } from "./footer-link";

export function footer() {
  const links = [
    { img: github, title: "andreburg", href: "https://github.com/andreburg" },
    { img: bbd, title: "andreburg-portfolio", href: "https://github.com/andreburg" },
    { img: web, title: "andre-dev", href: "https://github.com/andreburg" },
  ];
  return createElement({
    type: "footer",
    props: { children: links.map((link) => footerLink(link)), className: "flex-col" },
  });
}
