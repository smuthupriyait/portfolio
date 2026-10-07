import { useEffect } from "react";
import { renderPage } from "./render.js";
import { initEffects } from "./effects.js";

// The page is built from our own data.js (no user input), so injecting the markup is safe.
export default function App() {
  useEffect(() => { initEffects(); }, []);
  return <div dangerouslySetInnerHTML={{ __html: renderPage({ photo: "/photo.png" }) }} />;
}
