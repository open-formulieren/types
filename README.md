# Open Forms types

[![Run CI build and tests](https://github.com/open-formulieren/types/actions/workflows/ci.yml/badge.svg)](https://github.com/open-formulieren/types/actions/workflows/ci.yml)
[![NPM package](https://img.shields.io/npm/v/@open-formulieren/types.svg)](https://www.npmjs.com/package/@open-formulieren/types)
[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat)](https://github.com/prettier/prettier)

Typescript type definitions for Open Forms' Form.io components

## Audience

The type definitions are used in internal libraries of Open Forms:

- [`@open-formulieren/formio-renderer`](https://github.com/open-formulieren/formio-renderer)
- [`@open-formulieren/formio-builder`](https://github.com/open-formulieren/formio-builder)
- [`@open-formulieren/open-forms-sdk`](https://github.com/open-formulieren/open-forms-sdk)

## Usage

Install with your favourite package manager:

```bash
npm install --save-dev @open-formulieren/types
```

It's recommended to install the library as dev-dependency as it's only relevant during compilation
and in source code.

### Specific schemas

We provide schemas for the component types supported in Open Forms. Import them as:

```ts
import type {NumberComponentSchema, TextFieldComponentSchema} from '@open-formulieren/types';

// use in your own types:
interface TextfieldComponentProps {
  component: TextFieldComponentSchema;
  value: TextFieldComponentSchema['defaultValue'];
  errors: string[];
}
```

For types related to a particular component type, you can import them from their respective modules:

```ts
import type {MapValue} from '@open-formulieren/types/components/map';
```

### `AnyComponentSchema`

The type `AnyComponentSchema` is a union of all supported component schemas. Use it where you can
expect any valid Formio component definition.

```ts
import type {AnyComponentSchema} from '@open-formulieren/types';
```

## Release flow

Releases are published automatically to the npm package registry by the CI pipeline when a git tag
is pushed.

To prepare a release, bump the version number and tag the commit:

```bash
npm version minor # or patch or major
git commit -am ":bookmark: Bump to version <newVersion>"
git tag "<newVersion>"
git push origin main --tags
```

If you have PGP keys set up, you can use them for the git tag operation.

## Coding style / guidelines

### Code formatting

Code is formatted with `prettier`. Configure your editor to apply it on save, or ensure
`npm run format` is applied as a pre-commit hook. The CI pipeline checks the formatting and fails
the build if there are changes detected.

### Exports

Export the public API from `src/index.ts`. The public API consists of:

- each supported component type
- the JSON types
- other general purpose types that are useful in downstream projects

For highly specific types (e.g. supporting types for a particular component type), library users can
import them from their respective modules. These do not need to be exported from the entrypoint.

### `interface` vs. `type`

A common debate in TS is `interface` vs `type` aliases. They're mostly equivalent - the biggest
exception is probably that interfaces can be augmented by downstream code. Some may also argue that
the code is cleaner.

In this repository, we apply some rules to decide which to use:

- when the shape of the object exists by itself and is not expected to be further extended, use an
  `interface` for the improved readability
- when the type is a base to be composed into more complex types (e.g. variants of the same
  component type), use a `type`, combined with the `Prettify` helper on the final result for better
  readability in code editors
- for component types, always use `type` for consistency - there are a number of component
  types/variants that result in unions, and allowing interfaces leads to a mix of types that are
  harder to read.

### Documentation

The documentation is built with [TypeDoc](https://typedoc.org/) - you can use the directives/tags
that are available.

We favour docblocks right above each property, rather than using the `@property` tags that are
common in JSDoc. Keep documentation close to the item being documented.

Use documentation for the intent behind the definition and provide context for the developers using
the types.
