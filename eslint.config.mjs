import { defineConfig, globalIgnores } from "eslint/config";
import nextVitals from "eslint-config-next/core-web-vitals";

export default defineConfig([
  ...nextVitals,
  {
    rules: {
      // Photos are plain <img> by design (remote stock images, no image loader configured).
      "@next/next/no-img-element": "off",
      // Existing, intentional pattern: state synced from URL params / reduced-motion in effects.
      // Kept as a warning so new code gets flagged without changing current behaviour.
      "react-hooks/set-state-in-effect": "warn",
    },
  },
  globalIgnores([".next/**", ".open-next/**", ".wrangler/**", "src/.next/**", "out/**", "node_modules/**"]),
]);
