import { defineConfig, globalIgnores } from "eslint/config";
import tseslint from "typescript-eslint";

export default defineConfig([
  globalIgnores(["dist/**", "node_modules/**", "generated/**"]),
  ...tseslint.configs.recommended,
  {
    languageOptions: {
      sourceType: "commonjs",
    },
    rules: {
      "@typescript-eslint/no-explicit-any": "warn",
    },
  },
]);
