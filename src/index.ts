import type { Config } from "@jest/types";
import baseConfig from "@esxl/config-jest-base";
import { join } from "path";
import { fileURLToPath } from "url";

const __dirname = fileURLToPath(new URL(".", import.meta.url));

const config: Config.InitialOptions = {
  ...baseConfig,
  setupFilesAfterEnv: [
    ...(baseConfig?.setupFilesAfterEnv ?? []),
    /**
     * The Jest resolver does not properly support the "exports" field,
     * so we cannot use bare specifiers like
     * `"@esxl/config-jest-dom/setupJestAxe"`.
     *
     * To be safe, we use an absolute file path. Keep in mind that these paths
     * are relative to the file locations FROM THE BUILD. Since Jest requires
     * presets to contain a `jest-preset.(extension)` at the root of the
     * package, these paths should be from the root (`__dirname`) to wherever
     * we output the built files (currently "dist").
     *
     * Ultimately the build configuration is the source of truth for where these
     * are output.
     */
    join(__dirname, "dist", "setupJestAxe.cjs"),
    join(__dirname, "dist", "setupReactTestingLibrary.cjs"),
  ],
  testEnvironment: "jest-environment-jsdom",
};

export default config;
