import { Header } from "./components/Header";
import { Skills } from "./components/Skills";
import "./style.css";

document.querySelector<HTMLDivElement>("#app")!.innerHTML = `
${Header()}
<p>This is the first JS-DOM site.</p>
${Skills()}
`;