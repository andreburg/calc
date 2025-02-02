export type VirtualElementType = keyof HTMLElementTagNameMap;
export type VirtualElementProps = {
  children?: (HTMLElement | string)[];
  [key: string]: any;
} & Omit<Partial<HTMLElementTagNameMap[VirtualElementType]>, "children">;

export type VirtualElement = { type: VirtualElementType; props?: VirtualElementProps };

export function createElement(element: VirtualElement): HTMLElementTagNameMap[VirtualElementType] {
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
  return root as HTMLElementTagNameMap[VirtualElementType];
}

function populateHTMLElementProps(element: HTMLElement, props?: VirtualElementProps) {
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
