# react-bind-properties-schema

<!-- [![Travis][build-badge]][build] -->
[![npm package][npm-badge]][npm]
<!-- [![Coveralls][coveralls-badge]][coveralls] -->

This module exports a React schema to add proprty bindings to DOM nodes in React applications. This is especially useful for working with custom elements, many of which may take complex data inputs.

This JSX pragma allows users to bind to the property on a DOM node using the `bindProps` React prop. This new prop takes an object where the each key is treated as a DOM node property and each value is bound to that value. As an example, the two code snippets peform the same task the first in Angular and the second in React:

```typescript
import { Component } from '@angular/core';

@Component({
    template: '<custom-element [list]="list"></custom-element>'
})
export class MyComponent {
    list = ['one', 'two', 'three'];
}
```

and in React:

```jsx
/** @jsx bindProps */
import bindProps from 'react-bind-properties-schema'

export function MyComponent () {
    const list = ['one', 'two', 'three']

    return <custom-element bindProps={{ list }}></custom-element>
}
```

## Installing

The recommended installation method of this package is through [npm](http://npmjs.com). If you are unfamiliar with the npm ecosystem, there is some great [documentation available on the npm website](https://docs.npmjs.com/cli/install).

If you are familiar with npm, you can install this package using the command

```bash
npm i -D react-bind-properties-schema
```

## Usage

### [See an example on StackBlitz](https://stackblitz.com/edit/bind-properties-demo?file=src/App.js)

Because the primary output of this package is a JSX pragma, you will first need to include the `/** @jsx <PRAGMA_NAME> */` syntax in your file.

Or add `pragma: "bindProps"` to your [`@babel/preset-react`](https://babeljs.io/docs/en/babel-preset-react) or [`@babel/plugin-transform-react-jsx`](https://babeljs.io/docs/en/babel-plugin-transform-react-jsx) babel config.

[build-badge]: https://img.shields.io/travis/user/repo/master.png?style=flat-square
[build]: https://travis-ci.org/user/repo

[npm-badge]: https://img.shields.io/npm/v/npm-package.png?style=flat-square
[npm]: https://www.npmjs.org/package/npm-package

[coveralls-badge]: https://img.shields.io/coveralls/user/repo/master.png?style=flat-square
[coveralls]: https://coveralls.io/github/user/repo
