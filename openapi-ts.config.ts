import { defineConfig } from "@hey-api/openapi-ts";

export default defineConfig({
  input: "./openapi/openapi.yaml", // sign up at app.heyapi.dev
  output: "src/client",
  plugins: ["@tanstack/react-query"],
});
