# Open Forms types

[![Run CI build and tests](https://github.com/open-formulieren/types/actions/workflows/ci.yml/badge.svg)](https://github.com/open-formulieren/types/actions/workflows/ci.yml)
[![NPM package](https://img.shields.io/npm/v/@open-formulieren/types.svg)](https://www.npmjs.com/package/@open-formulieren/types)
[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat)](https://github.com/prettier/prettier)

TypeScript types for Open Forms and Form.io.

Form.io ships some type definitions itself, but as it is not implemented in TypeScript itself, the
practicality of those types is a bit lacking. Open Forms supports a subset of Form.io's features and
benefits from much stricter type definitions to make working with component types and certain
generic features easier.

## Audience

This library mostly serves the `@open-formulieren/formio-renderer` and
`@open-formulieren/formio-builder` packages. In the longer term, they will become relevant for the
`@open-formulieren/sdk` package too and any person wishing to extend our SDK using TypeScript.

## Usage

Install with npm or yarn:

```bash
npm install --save-dev @open-formulieren/types
yarn add -D @open-formulieren/types
```

It's recommended to install the library as dev-dependency as it's only relevant during compilation
and in source code.

### Specific schemas

We provide schemas for the Form.io schemas used by Open Forms. Import them as:

```ts
import {NumberComponentSchema, TextfieldSchema} from '@open-formulieren/types';

// use in your own interfaces:
interface TextfieldComponentProps {
  component: TextfieldSchema;
  value: TextfieldSchema['defaultValue'];
  errors: string[];
}

// or even with generics
interface ComponentProps<T> {
  component: T;
  value: T['defaultValue'];
  errors: string[];
}

type TextfieldComponentProps = ComponentProps<TextfieldSchema>;
```

### Base schemas

The component-specific schemas are extended from the base schemas.

You can use these to narrow your own component types, or provide them to interfaces where the exact
component type is not known (yet).

```ts
import {
  DisplayConfig, // additional common OF-specific properties
  HasValidation, // subset of Form.io validate options + i18n of validation errors
  InputComponentSchema, // base schema for any user-input component type
  LayoutComponentSchema, // base schema for any purely layout component type (like fieldset) // custom backend prefill configuration
  OFExtensions, // custom backend renderer configuration
  PrefillConfig,
} from '@open-formulieren/types';
```

## Release flow

We don't let `npm` apply the git tags when releasing a new version, instead follow this process:

```bash
npm version --no-git-tag-version minor
git commit -am ":bookmark: Bump to version <newVersion>"
git tag "<newVersion>"
git push origin main --tags
```

If you have PGP keys set up, you can use them for the git tag operation.

The CI pipeline will then publish the new version to npmjs.
