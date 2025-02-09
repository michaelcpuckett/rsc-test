import { use } from "react";
import { createRoot } from "react-dom/client";

const root = createRoot(document.getElementById("root") as HTMLElement);
root.render(<Root />);

function Root() {
  const content = use(fetch("/react"));
  return <>{content}</>;
}
