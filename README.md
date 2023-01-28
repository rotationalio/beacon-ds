<div>
  <h1 align="center">Beacon design system  🎨</h1>
  
  <div align="center">
    <strong>
      Design system based on style dictionary on top of tailwind and styled component
    </strong>
  </div>

  <div>

  <div>

</div>

<hr />

## Quick start

Assuming that you will run in a local development environment, follow the instructions below:

#### 1. Install `yarn`

This repository uses `yarn` v3 (berry).

#### 2. Install the packages

Run `yarn` to install the node packages

### 3. Build the packages

Some packages need to be built before consuming them, like the `foundation`, which will distribute the design tokens to the rest of the packages. To build the packages execute:

```bash
yarn build
```

## System Requirements

- git
- NodeJS `>=16.0.0`
- yarn v3

## Run Storybook

You can run Storybook and instantly start experimenting with the components' code running the command:

```bash
yarn storybook
```

A compiled storybook can be found also [here](https://rotational.io).

## Publish to NPM 

You can publish the package by running 

```bash
yarn release
```

## Packages used 

 - tailwind css 
 - cva (class-variance-authority)
 - clsx
 - tailwind-merge 
 - styled component 
