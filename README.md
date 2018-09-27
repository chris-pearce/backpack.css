# backpack.css 🎒 <!-- omit in toc -->

A lightweight and somewhat opinionated CSS foundation that is best suited to
applications.

## Table of contents <!-- omit in toc -->

- [Installation](#installation)
- [How to use](#how-to-use)
  - [Importing with a bundler](#importing-with-a-bundler)
  - [Importing without a bundler](#importing-without-a-bundler)
  - [Overriding](#overriding)
- [Motivation](#motivation)
- [What it does](#what-it-does)
- [Evolution](#evolution)
- [Browser support](#browser-support)

## Installation

Run the following command using [npm](https://www.npmjs.com/):

```bash
npm install backpack.css --save-dev
```

If you prefer [Yarn](https://yarnpkg.com/en/), use this command instead:

```bash
yarn add backpack.css --dev
```

CDN version coming soon, see: https://github.com/chris-pearce/backpack.css/issues/15.

## How to use

Typically you'll be wanting to import all of backpack.css styles into your
project but you do have the choice to be selective.

The one strict rule backpack.css does have is that it must come before your
project's CSS to ensure correct ordering of your styles and to be able to
override any of backpack.css styles.

### Importing with a bundler

If you're using a bundler such as [webpack](https://webpack.js.org/) and wanting
to import all of backpack.css then your app's entry point should look like this:

```js
import 'backpack.css';
import '[path-to-your-project-css]';
```

If you want to be selective then simply `import` the backpack.css files you need, for example:

```js
import 'backpack.css/resets.css';
import 'backpack.css/content-sectioning.css';
import 'backpack.css/forms.css';
import '[path-to-your-project-css]';
```

The order at which you import each module is important, to see this order and
what `.css` files are available refer to backpack.css [`index.css`](src/index.css).

### Importing without a bundler

CDN version coming soon, see:
https://github.com/chris-pearce/backpack.css/issues/15.

### Overriding

backpack.css is just CSS so you can easily override any of backpack.css styles
just as you would override any CSS, as in, via the rules of the cascade and
specificity.

For example, if you didn't want to use `system-ui` as the global `font-family` set in `main-root.css` then simply redeclare it in your project CSS like so:

```css
html {
  font-family: serif;
}
```

## Motivation

Nowadays I'm building [React](https://reactjs.org/) applications that have
highly componentised User Interfaces (UI) making use of native CSS layout
mechanisms such as [Flexbox](https://css-tricks.com/snippets/css/a-guide-to-flexbox/) and
[Grid](https://css-tricks.com/snippets/css/complete-guide-grid/). I'm no longer finding the need for heavy handed CSS frameworks that handle most of my UI
concerns, especially layout. Instead I build components with a smidgen of global
styles.

What I do need, however, are a bunch of smart and sensible foundational styles
suited for applications that I would typically forget project to project—think
[Normalize.css](http://necolas.github.io/normalize.css/) and then some.
Something that is lightweight, super easy to intergrate, and can easily be
overriden or allow for modular use, thus giving birth to backpack.css 🙂.

## What it does

_Coming soon…_

## Evolution

This is the third CSS framework/library I've created. Looking at each one
lets you see how UI development has evolved over the years with each iteration
getting smaller and smaller.

1.  [Scally](https://github.com/chris-pearce/scally) _circa 2014_
2.  [Shell](https://github.com/campaignmonitor/shell) _circa 2016_
3.  [backpack.css](https://github.com/chris-pearce/backpack.css) _circa 2018_

## Browser support

_Coming soon…_
