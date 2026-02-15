import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import { portfolioSchema, siteSettingsSchema } from "./sanity/schemas";

export default defineConfig({
  name: "hooklab",
  title: "HookLab",
  projectId: "4r409ts6",
  dataset: "production",
  plugins: [structureTool()],
  schema: {
    types: [portfolioSchema, siteSettingsSchema],
  },
});
