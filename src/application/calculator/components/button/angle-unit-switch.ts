import { ANGLE_UNITS } from "../../../../lib/math-expression/settings";
import { StateObject } from "../../../../utils/state-object";
import { createElement } from "../../../../utils/virtual-element";
import { settings } from "../../state/settings";

export function angleUnitSwitch() {
  const selectedIndex = new StateObject(0);

  let element = render();

  selectedIndex.sub(() => {
    if (selectedIndex.value === ANGLE_UNITS.length) {
      selectedIndex.value = 0;
      return;
    }
    settings.value = { ...settings.value, angle: ANGLE_UNITS[selectedIndex.value] };
    let newElement = render();
    element.replaceWith(newElement);
    element = newElement;
  });

  settings.sub(() => {
    let newAngle = ANGLE_UNITS.findIndex((angle) => angle === settings.value.angle);
    if (newAngle != selectedIndex.value) {
      selectedIndex.value = newAngle;
      let newElement = render();
      element.replaceWith(newElement);
      element = newElement;
    }
  });

  function onClick() {
    selectedIndex.value += 1;
  }

  function render() {
    const angle = settings.value.angle;
    return createElement({
      type: "button",
      props: {
        innerText: angle,
        onclick: onClick,
        className: "brutal-container angle-unit-switch",
      },
    });
  }
  return element;
}
