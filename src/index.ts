import { solveExpression } from "./lib/math-expression/math-expression";
import "./style.css";

document.querySelector<HTMLDivElement>("#app")!.innerHTML = `
  <div>
  </div>
`;

try {
  console.log(solveExpression("1^-1"));
} catch (err) {
  console.log(err);
}
