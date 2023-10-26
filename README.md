<p align="center">
<a href=https://github.com/rotationalio/beacon-ds target="_blank">
<img src='/apps/docs/public/placeholder.png' width="100%" alt="Banner" />
</a>
</p>

<p align="center">
<img src="https://img.shields.io/github/languages/code-size/rotationalio/beacon-ds" alt="GitHub code size in bytes" />
<img src="https://img.shields.io/github/last-commit/rotationalio/beacon-ds" alt="GitHub last commit" />
<img src="https://img.shields.io/github/commit-activity/m/rotationalio/beacon-ds" alt="GitHub commit activity month" />
<img src="https://img.shields.io/github/license/rotationalio/beacon-ds" alt="GitHub license" />
<img src="https://img.shields.io/npm/v/@rotational/beacon-core" alt="GitHub license" />
</p>

<p></p>
<p></p>

# 📌 Overview

Beacon-DS is the Beacon Design System project, a comprehensive framework that integrates vital dependencies to enhance its functionality and design. Some of the core dependencies include `styled-components` for styled elements, `Tailwind CSS` for utility-first CSS, `Radix UI` and `Headless UI` for unstyled, fully accessible UI components, and `React Table` for building fast and extendable tables and datagrids in React. These dependencies ensure that Beacon-DS remains robust, user-friendly, and versatile in its design capabilities.

## 🔍 Table of Contents

* [📁 Project Structure](#project-structure)

* [📝 Project Summary](#project-summary)

* [💻 Stack](#stack)

* [⚙️ Setting Up](#setting-up)

* [🚀 Run Locally](#run-locally)

* [🖇️ Run Storybook](#run-storybook)

* [✨ Manage the Versioning](#manage-the-versioning)

* [🚦 Publish to NPM](#publish-to-npm)

* [☁️ Deploy](#deploy)

* [🙌 Contributors](#contributors)

* [📄 License](#license)

## 📁 Project Structure

```bash
├── .DS_Store
├── .changeset
│  
│ 
├── .config
│   └── barrelsby.json
├── .eslintignore
├── .eslintrc.js
├── .github
│   └── workflows
│       ├── deploy-docs.yml
│       ├── deploy-storybook.yml
│       └── release.yml
├── .gitignore
├── .prettierrc
├── .yarn
│   └── install-state.gz
├── .yarnrc.yml
├── README.md
├── apps
│  
│   └── docs
│       ├── .DS_Store
│       ├── .gitignore
│       ├── CHANGELOG.md
│       ├── components
│       │   ├── counters.module.css
│       │   ├── counters.tsx
│       │   └── style.module.css
│       ├── next-env.d.ts
│       ├── next.config.js
│       ├── package.json
│       ├── pages
│       │   ├── .DS_Store
│       │   ├── Foundation
│       │   │   ├── Layouts
│       │   │   │   ├── Container.mdx
│       │   │   │   └── Grid.mdx
│       │   │   ├── Typography.mdx
│       │   │   └── colors.mdx
│       │   ├── _app.mdx
│       │   ├── _meta.json
│       │   ├── advanced.mdx
│       │   ├── another.mdx
│       │   ├── components
│       │   │   ├── button.mdx
│       │   │   ├── card.mdx
│       │   │   ├── modal.mdx
│       │   │   └── spinner.mdx
│       │   └── index.mdx
│       ├── public
│       │   └── dash-layout.png
│       ├── theme.config.tsx
│       └── tsconfig.json
├── package.json
├── packages
│   ├── core
│   │   ├── CHANGELOG.md
│   │   ├── README.md
│   │   ├── babel.config.js
│   │   ├── jest.config.js
│   │   ├── package.json
│   │   ├── src
│   │   │   ├── components
│   │   │   │   ├── Avatar
│   │   │   │   │   ├── Avatar.styles.tsx
│   │   │   │   │   ├── Avatar.tsx
│   │   │   │   │   ├── Avatar.type.ts
│   │   │   │   │   └── index.ts
│   │   │   │   ├── Box
│   │   │   │   │   ├── Box.tsx
│   │   │   │   │   └── index.ts
│   │   │   │   ├── Breadcrumbs
│   │   │   │   │   ├── Breadcrumb.type.ts
│   │   │   │   │   ├── Breadcrumbs.tsx
│   │   │   │   │   ├── breadcrumbs-icon.svg
│   │   │   │   │   ├── breadcrumbs-icon.tsx
│   │   │   │   │   └── index.ts
│   │   │   │   ├── Button
│   │   │   │   │   ├── Button.styles.tsx
│   │   │   │   │   ├── Button.tsx
│   │   │   │   │   ├── Button.types.ts
│   │   │   │   │   └── index.ts
│   │   │   │   ├── Card
│   │   │   │   │   ├── Card.spec.tsx
│   │   │   │   │   ├── Card.styles.tsx
│   │   │   │   │   ├── Card.tsx
│   │   │   │   │   ├── Card.types.ts
│   │   │   │   │   ├── index.ts
│   │   │   │   │   └── utils.ts
│   │   │   │   ├── Checkbox
│   │   │   │   │   ├── Checkbox.styles.tsx
│   │   │   │   │   ├── Checkbox.tsx
│   │   │   │   │   └── index.ts
│   │   │   │   ├── Container
│   │   │   │   │   ├── Container.tsx
│   │   │   │   │   ├── Container.types.tsx
│   │   │   │   │   ├── index.ts
│   │   │   │   │   └── utils.ts
│   │   │   │   ├── Grid
│   │   │   │   │   ├── Grid.styles.tsx
│   │   │   │   │   ├── Grid.tsx
│   │   │   │   │   ├── Grid.types.ts
│   │   │   │   │   ├── index.tsx
│   │   │   │   │   └── utils.ts
│   │   │   │   ├── Heading
│   │   │   │   │   ├── Heading.spec.tsx
│   │   │   │   │   ├── Heading.tsx
│   │   │   │   │   └── index.ts
│   │   │   │   ├── Icon
│   │   │   │   │   ├── Icon.styles.tsx
│   │   │   │   │   ├── Icon.tsx
│   │   │   │   │   ├── Icon.types.ts
│   │   │   │   │   ├── Icons.tsx
│   │   │   │   │   └── index.tsx
│   │   │   │   ├── Label
│   │   │   │   │   ├── Label.styles.tsx
│   │   │   │   │   ├── Label.tsx
│   │   │   │   │   └── index.ts
│   │   │   │   ├── Loader
│   │   │   │   │   ├── Loader.tsx
│   │   │   │   │   ├── LoaderComponent.tsx
│   │   │   │   │   └── index.ts
│   │   │   │   ├── Menu
│   │   │   │   │   ├── Menu.spec.tsx
│   │   │   │   │   ├── Menu.styles.tsx
│   │   │   │   │   ├── Menu.tsx
│   │   │   │   │   └── index.ts
│   │   │   │   ├── Modal
│   │   │   │   │   ├── CloseIcon.tsx
│   │   │   │   │   ├── Modal.spec.tsx
│   │   │   │   │   ├── Modal.styles.tsx
│   │   │   │   │   ├── Modal.tsx
│   │   │   │   │   ├── Modal.types.ts
│   │   │   │   │   └── index.ts
│   │   │   │   ├── Radio
│   │   │   │   │   ├── Radio.tsx
│   │   │   │   │   ├── Radio.type.ts
│   │   │   │   │   └── index.ts
│   │   │   │   ├── RadioGroup
│   │   │   │   │   ├── RadioGroup.context.tsx
│   │   │   │   │   ├── RadioGroup.tsx
│   │   │   │   │   ├── RadioGroup.type.ts
│   │   │   │   │   └── index.ts
│   │   │   │   ├── Select
│   │   │   │   │   ├── Select.spec.tsx
│   │   │   │   │   ├── Select.styles.tsx
│   │   │   │   │   ├── Select.tsx
│   │   │   │   │   ├── Select.types.tsx
│   │   │   │   │   ├── checkist.todo
│   │   │   │   │   └── index.ts
│   │   │   │   ├── Switch
│   │   │   │   │   ├── Switch.tsx
│   │   │   │   │   ├── Switch.type.ts
│   │   │   │   │   └── index.ts
│   │   │   │   ├── Table
│   │   │   │   │   ├── Table.styles.tsx
│   │   │   │   │   ├── Table.tsx
│   │   │   │   │   ├── Table.types.ts
│   │   │   │   │   ├── index.ts
│   │   │   │   │   └── shared
│   │   │   │   │       ├── ActionPill.tsx
│   │   │   │   │       ├── PaginateButton.tsx
│   │   │   │   │       ├── StatusPill.tsx
│   │   │   │   │       └── util.ts
│   │   │   │   ├── TextField
│   │   │   │   │   ├── Input.styles.tsx
│   │   │   │   │   ├── TextField.spec.tsx
│   │   │   │   │   ├── TextField.tsx
│   │   │   │   │   ├── TextField.types.tsx
│   │   │   │   │   ├── index.ts
│   │   │   │   │   └── util.ts
│   │   │   │   ├── Toast
│   │   │   │   │   ├── Toast.styles.tsx
│   │   │   │   │   ├── Toast.tsx
│   │   │   │   │   ├── Toast.types.tsx
│   │   │   │   │   ├── index.ts
│   │   │   │   │   └── util.tsx
│   │   │   │   └── Tooltip
│   │   │   │       ├── Tooltip.styles.ts
│   │   │   │       ├── Tooltip.tsx
│   │   │   │       ├── Tooltip.types.ts
│   │   │   │       └── index.ts
│   │   │   ├── hooks
│   │   │   │   ├── index.ts
│   │   │   │   ├── useMenu.ts
│   │   │   │   └── useTheme.tsx
│   │   │   ├── index.ts
│   │   │   ├── style.css
│   │   │   ├── types
│   │   │   │   ├── color.ts
│   │   │   │   ├── index.ts
│   │   │   │   ├── react-table-config.d.ts
│   │   │   │   └── size.ts
│   │   │   └── utils
│   │   │       ├── extractProps.ts
│   │   │       ├── getInitials.ts
│   │   │       ├── globalStyles.ts
│   │   │       ├── index.ts
│   │   │       ├── mergeClassnames.ts
│   │   │       └── tokens
│   │   │           ├── colors.ts
│   │   │           ├── radii.ts
│   │   │           └── spacings.ts
│   │   ├── tailwind.config.js
│   │   └── tsconfig.json
│   ├── foundation
│   │   ├── .gitignore
│   │   ├── CHANGELOG.md
│   │   ├── README.md
│   │   ├── package.json
│   │   ├── sd.config.js
│   │   ├── src
│   │   │   ├── index.ts
│   │   │   ├── tailwindPreset.config.js
│   │   │   ├── tokens
│   │   │   │   ├── animations.json
│   │   │   │   ├── colors.json
│   │   │   │   ├── radius.json
│   │   │   │   ├── shadows.json
│   │   │   │   └── spacings.json
│   │   │   └── typography.css
│   │   └── tsconfig.json
│   ├── icons
│   │   ├── .gitkeep
│   │   ├── package.json
│   │   ├── src
│   │   │   ├── SortIcon
│   │   │   │   ├── SortIcon.tsx
│   │   │   │   └── index.ts
│   │   │   └── index.ts
│   │   └── tsconfig.json
│   └── storybook
│       ├── .babelrc.json
│       ├── .eslintignore
│       ├── .storybook
│       │   ├── main.js
│       │   └── preview.js
│       ├── CHANGELOG.md
│       ├── README.md
│       ├── package.json
│       ├── stories
│       │   ├── AriaButton.stories.tsx
│       │   ├── Avatar.stories.tsx
│       │   ├── Breadcrumbs.stories.tsx
│       │   ├── Button.stories.tsx
│       │   ├── Card.stories.tsx
│       │   ├── Checkbox.stories.tsx
│       │   ├── Grid.stories.tsx
│       │   ├── Heading.stories.tsx
│       │   ├── Introduction.stories.mdx
│       │   ├── Loader.stories.tsx
│       │   ├── Menu.stories.tsx
│       │   ├── Modal.stories.tsx
│       │   ├── RadioGroup.stories.tsx
│       │   ├── Select.stories.tsx
│       │   ├── Switch.stories.tsx
│       │   ├── Table.stories.tsx
│       │   ├── TextField.stories.tsx
│       │   ├── Toast.stories.tsx
│       │   ├── Tooltip.stories.tsx
│       │   ├── Typography.stories.mdx
│       │   └── assets
│       │       ├── button-tailwind.svg
│       │       ├── button.svg
│       │       ├── code-brackets.svg
│       │       ├── colors.svg
│       │       ├── comments.svg
│       │       ├── direction.svg
│       │       ├── flow.svg
│       │       ├── plugin.svg
│       │       ├── repo.svg
│       │       ├── stackalt.svg
│       │       └── typography.svg
│       └── tsconfig.json
├── tsconfig.json
└── yarn.lock
```

## 📝 Project Summary

* [**apps**](apps): Contains the main applications of the project.
* [**packages/core**](packages/core): Core package with various components like Avatar, Checkbox, Modal, etc.
* [**packages/core/src/components**](packages/core/src/components): Collection of reusable UI components.
* [**packages/core/src/hooks**](packages/core/src/hooks): Custom hooks for managing state and side effects.
* [**packages/core/src/utils**](packages/core/src/utils): Utility functions used throughout the project.
* [**packages/foundation**](packages/foundation): Package related to foundational elements of the project.
* [**packages/foundation/src/tokens**](packages/foundation/src/tokens): Tokens defining design system attributes.
* [**packages/icons**](packages/icons): Package containing custom icons for the project.
* [**packages/storybook**](packages/storybook): Storybook configuration and stories for component development.
* [**packages/storybook/stories**](packages/storybook/stories): Stories showcasing components in Storybook.

## 💻 Stack

Here's the corrected content:

* [Next.js](https://nextjs.org/): Framework for building server-rendered React applications.
* [React](https://reactjs.org/): JavaScript library for building user interfaces.
* [radix ui](https://www.radix-ui.com/): A low-level UI primitive library for building high-quality, accessible design systems without sacrificing style.
* [typescript](https://www.typescriptlang.org/): Typed superset of JavaScript that compiles to plain JavaScript.
* [react table](https://react-table.tanstack.com/): Hooks for building lightweight, fast, and extendable data-grid tables for React.
* [nextra-theme-docs](https://nextra-theme-docs.vercel.app/): Theme for Nextra that adds documentation-specific features.
* [Headless UI](https://headlessui.dev/): Completely unstyled, fully accessible UI components.
* [@types/node](https://www.npmjs.com/package/@types/node): TypeScript definitions for Node.js.


## ⚙️ Setting Up

Ensure the following configurations for a smooth setup:

* Use `yarn berry` with a version of `yarn 3.4.1`.
* Your system should have `node` version 16 or higher.
* Ensure `npm` is updated to version 9.3.1 or above.

## 🚀 Run Locally

1.Clone the beacon-ds repository:

```sh
git clone https://github.com/rotationalio/beacon-ds
```

2.Install the dependencies with one of the package managers listed below:

```bash
yarn install
```

3.Some packages need to be built before consuming them, like the `foundation`, which will distribute the design tokens to the rest of the packages.

```bash
yarn build
```


## Run Storybook

You can run Storybook and instantly start experimenting with the components' code running the command:

```bash
yarn storybook
```

A compiled storybook can be found also [here](https://rotational.io).

## Manage the Versioning

When a change has been made to the codebase, it's essential to keep track of versions for smoother rollbacks, updates, and collaboration. To facilitate this, we utilize the Changeset CLI. This tool allows us to document changes, automatically bump versions, and generate changelogs. Before pushing any updates, ensure you've run the Changeset CLI to log the modifications and update the version accordingly. This practice ensures consistency and clarity for all team members and users of the package.

```bash
yarn changeset
```

## Publish to NPM

To publish the package, execute the following command. However, ensure you have been added to the Rotational Lab NPM account teams beforehand. Follow these instructions to configure your accounts appropriately [here](https://docs.npmjs.com/cli/v9/commands/npm-adduser).

```bash
yarn release
```

## ☁️ Deploy

Our documentation is constructed using NextJS, enhanced with Nextra. For deployment, we use [`surge.sh`](surge.sh) to achieve static deployment.

To deploy the documentation, execute the following command:

```bash
yarn run docs:export
```

Ensure you have the necessary dependencies installed and configured before running the command.


[Beacon Design System](https://beacon-ds.surge.sh/)

## 🙌 Contributors

<a href="https://github.com/rotationalio/beacon-ds/graphs/contributors">
<img src="https://contrib.rocks/image?repo=rotationalio/beacon-ds" />
</a>

## 📄 License

[**BSD 3-Clause License**](https://en.wikipedia.org/wiki/BSD_licenses#3-clause)
