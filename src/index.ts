import type { Config } from "@jest/types";
import baseConfig from "@esxl/config-jest-base";
import { createRequire } from "module";

const require$ = createRequire(import.meta.url);

const config: Config.InitialOptions = {
  ...baseConfig,
  setupFilesAfterEnv: [
    ...(baseConfig.setupFilesAfterEnv ?? [
      require$.resolve("@esxl/config-jest-dom/setupJestAxe"),
      require$.resolve("@esxl/config-jest-dom/setupReactTestingLibrary"),
    ]),
  ],
  testEnvironment: "jest-environment-jsdom",
};

export default config;
