### `@rotational/beacon-foundation` Package

The `@rotational/beacon-foundation` package serves as the cornerstone of our design system. Utilizing Style Dictionary, we define our color tokens, which are then integrated into our Tailwind configuration to shape the package.

Key details of the package:

- **Package Manager**: `yarn@3.4.1`
- **Version**: `2.0.4`
- **Main Entry**: `./lib/index.js`
- **Type Definitions**: `./lib/index.d.ts`

#### Build and Development

To construct the design tokens, we employ the following command:

```bash
yarn build-tokens
```

For a comprehensive build process, including token generation and TypeScript compilation, use:

```bash
yarn build
```

Additional scripts and their purposes:

- `build-tsc`: Compiles TypeScript without library checks.
- `tsc-ve`: Checks the TypeScript version.

#### Dependencies

The foundation heavily relies on:

- `style-dictionary`: `^3.7.1` for defining design tokens.
- `typescript`: `^4.7.2` for type-safe code.

#### Publish to NPM

To publish the package, execute the following command. However, ensure you have been added to the Rotational Lab NPM account teams beforehand. Follow these instructions to configure your accounts appropriately [here](https://docs.npmjs.com/cli/v9/commands/npm-adduser).

```bash
yarn release
```
