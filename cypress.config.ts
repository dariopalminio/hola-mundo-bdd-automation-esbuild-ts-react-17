import { defineConfig } from "cypress";
import * as dotenv from "dotenv";
import createBundler from "@bahmutov/cypress-esbuild-preprocessor";
import { addCucumberPreprocessorPlugin } from "@badeball/cypress-cucumber-preprocessor";
import { createEsbuildPlugin } from "@badeball/cypress-cucumber-preprocessor/esbuild";

dotenv.config({ path: `.env.${process.env.NODE_ENV || "qa"}` });

export default defineConfig({
  e2e: {
    viewportWidth: 1280,
    viewportHeight: 720,
    video: true,
    screenshotOnRunFailure: true,
    experimentalMemoryManagement: true,
    baseUrl: process.env.VITE_REDIRECT_URI || "http://localhost:5173/",
    chromeWebSecurity: false,
    trashAssetsBeforeRuns: true,
    testIsolation: true,
    env: {
      version: process.env.VITE_ENV || "qa",
      TAGS: process.env.TAGS || "@Regression",
    },
    retries: {
      runMode: 1,
      openMode: 0,
    },
    defaultCommandTimeout: 10000,
    setupNodeEvents: async (on, config) => {
      // Configura el preprocesador de Cucumber
      await addCucumberPreprocessorPlugin(on, config);

      // Configura el bundler con esbuild
      on(
        "file:preprocessor",
        createBundler({
          plugins: [createEsbuildPlugin(config)],
        })
      );

      return config;
    },
    specPattern: "cypress/e2e/**/*.feature",
  },
});
