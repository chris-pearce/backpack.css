# backpack.css 🎒 <!-- omit in toc -->

A lightweight and somewhat opinionated CSS foundation that is best suited to applications.

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
- [Publishing](#publishing)
  - [The breakdown of step 3](#the-breakdown-of-step-3)
- [Contributing](#contributing)
- [Versioning](#versioning)

## Installation

Run the following command using [npm](https://www.npmjs.com/):

```bash
npm install backpack.css --save-dev
```

If you prefer [Yarn](https://yarnpkg.com/en/), use this command instead:

```bash
yarn add backpack.css --dev
```

CDN version coming soon, [see](https://github.com/chris-pearce/backpack.css/issues/15).

## How to use

Typically you'll be wanting to import all of backpack.css styles into your project but you do have the choice to be selective. The one strict rule is that it must come before your project's CSS to ensure correct ordering of your styles and to be able to override any of backpack.css styles.

### Importing with a bundler

If you're using a bundler such as [webpack](https://webpack.js.org/) and wanting to import all of backpack.css then your projects entry point should look like this:

```js
import 'backpack.css';
import '[path(s)-to-your-project-css]';
```

If you want to be selective then simply `import` the backpack.css files you need, for example:

```js
import 'backpack.css/lib/resets.css';
import 'backpack.css/lib/content-sectioning.css';
import 'backpack.css/lib/forms.css';
import '[path(s)-to-your-project-css]';
```

The order at which you import each module is important, to see this order and what `.css` files are available refer to backpack.css [`index.css`](src/index.css).

### Importing without a bundler

CDN version coming soon, [see](https://github.com/chris-pearce/backpack.css/issues/15). In the meantime you can link to the hosted version on [UNPKG](https://unpkg.com) via a `<link>` element in your HTML Head, however, make sure it comes before your project's CSS.

### Overriding

backpack.css is just CSS so you can easily override any of backpack.css styles just as you would override any CSS, as in, via the rules of the cascade and specificity.

For example, if you don't want to use `system-ui` as the global `font-family` set in [`main-root.css`](src/main-root.css) then simply redeclare it in your project CSS like so:

```css
html {
  font-family: serif;
}
```

## Motivation

Nowadays I'm building [React](https://reactjs.org/) applications that have highly componentised User Interfaces (UI) making use of native CSS layout mechanisms such as [Flexbox](https://css-tricks.com/snippets/css/a-guide-to-flexbox/) and [Grid](https://css-tricks.com/snippets/css/complete-guide-grid/). I'm no longer finding the need for heavy handed CSS frameworks that handle most of my UI concerns, especially layout. Instead I build components with a smidgen of global styles.

What I do need, however, are a bunch of smart and sensible foundational styles suited for applications that I would typically forget project to project—think [Normalize.css](http://necolas.github.io/normalize.css/) and then some. Something that is lightweight, super easy to intergrate, and can easily be overriden or allow for modular use, thus giving birth to backpack.css 🙂.

## What it does

- Removes margins, paddings, and borders from all elements except `<input>` so that everything is on an even playing field.
- Applies sensible form element resets and normalisations, e.g.: _remove all user-agent styles from buttons_.
- Makes all images responsive.
- Applies sensible interactive styles, e.g.: _avoid 300ms click delay on touch devices_.
- Applies foundational print styles.
- Applies the nicer `border-box` value to all elements.
- Removes list bullets.
- Applies sensible OpenType features, e.g.: _enables lining numerals, tabular numerals, and slashed zero, for table content_.

_And more…_

## Evolution

This is the third CSS framework/library I've created. Looking at each one lets you see how UI development has evolved over the years with each iteration getting smaller and smaller.

1.  [Scally](https://github.com/chris-pearce/scally) _circa 2014_
2.  [Shell](https://github.com/campaignmonitor/shell) _circa 2016_
3.  [backpack.css](https://github.com/chris-pearce/backpack.css) _circa 2018_

## Browser support

- Chrome
- Edge
- Firefox
- Internet Explorer 11
- Safari 8+
- Opera

Not everything will work in Internet Explorer 11, e.g.: the [`system-ui`](https://caniuse.com/#feat=font-family-system-uiZ) font, however, anything that doesn't work will simply degrade gracefully.

It's recommended to have [Autoprefixer](https://github.com/postcss/autoprefixer) setup as part of your projects build.

## Publishing

Once new changes have been merged do the following:

1. Add all new changes to [`CHANGELOG.md`](CHANGELOG.md) making sure to follow the existing format.
2. Update the version number in [`index.css`](src/index.css).
3. Run: `npm version <update_type> --force` where `<update_type>` is one of the semantic versioning release types: **patch**, **minor**, or **major** (see [versioning](#versioning)).

### The breakdown of step 3

1. Run the `build` script.
2. Add `CHANGELOG.md` and `index.css` modified in **steps 1** and **2** to the version commit.
3. Change the version number in [`package.json`](package.json).
4. Push the new version commit and tag up to the repository.
5. Clean the `lib` directory.
6. Publish the new version to the NPM registry.

_Each step will only run if the one before it passed._

## Contributing

_`CONTRIBUTING.MD` coming soon, [see](https://github.com/chris-pearce/backpack.css/issues/10)._

## Versioning

backpack.css is maintained under the [Semantic Versioning guidelines](http://semver.org/). We'll do our best to adhere to those guidelines and strive to maintain backwards compatibility.

See the [CHANGELOG](CHANGELOG.md).
