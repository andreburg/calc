export type VirtualElementType<T> = T extends keyof HTMLElementTagNameMap ? T : never;
export type VirtualElementProps<T> = {
  children?: (HTMLElement | string)[];
  [key: string]: any;
} & Omit<Partial<HTMLElementTagNameMap[VirtualElementType<T>]>, "children">;

export type VirtualElement<T> = { type: VirtualElementType<T>; props?: VirtualElementProps<T> };

export function createElement<T>(element: VirtualElement<T>): HTMLElementTagNameMap[VirtualElementType<T>] {
  const root = populateHTMLElementProps(document.createElement(element.type), element.props);
  element.props?.children?.map((child) => {
    if (child instanceof HTMLElement) root.appendChild(child);
    else {
      const span = document.createElement("span");
      span.textContent = child;
      root.appendChild(span);
    }
    return child;
  });
  return root as HTMLElementTagNameMap[VirtualElementType<T>];
}

function populateHTMLElementProps(element: HTMLElement, props?: VirtualElementProps<any>) {
  for (let [key, value] of Object.entries(props || {})) {
    if (key in element && key !== "children") {
      try {
        (element as any)[key] = value;
      } catch (e) {
        console.error(e);
      }
    }
  }
  return element;
}
