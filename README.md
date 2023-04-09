# `@esxl/config-jest-dom`

A shareable Jest [configuration](https://jestjs.io/docs/configuration) for all EcmaScript based projects.

## Table of contents

<details><summary> Click to expand table of contents</summary>

- [`@esxl/config-jest-dom`](#esxlconfig-jest-dom)
  - [Table of contents](#table-of-contents)
  - [Install](#install)
  - [Use](#use)
    - [Use as a preset](#use-as-a-preset)
    - [Use programmatically](#use-programmatically)
    </details>

## Install

```bash
npm install --save-dev @esxl/config-jest-dom
```

## Use

This package simply exports a Jest [configuration](https://jestjs.io/docs/configuration) Object.

You may either use it as a [`preset`](https://jestjs.io/docs/configuration#preset-string) for your Jest configuration, or import it and extend at will programmatically.

### Use as a preset

#### Use as a preset via CLI

When you invoke the Jest CLI, add the `--preset` flag:

```sh
jest --preset @esxl/config-jest-dom
```

#### Use as a preset via configuration

In your Jest configuration, add the following `preset`:

```json
{
  "preset": "@esxl/config-jest-dom"
}
```

### Use programmatically

```js
import baseConfig from "@esxl/config-jest-dom";

export default {
  ...baseConfig,
  // Add your own configuration here
};
```
