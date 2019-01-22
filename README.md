[![NPM
version](https://img.shields.io/npm/v/backpack.css.svg?longCache=true&style=popout-square)](https://www.npmjs.com/package/backpack.css) [![GitHub
license](https://img.shields.io/github/license/chris-pearce/backpack.css.svg?longCache=true&style=popout-square)](https://github.com/chris-pearce/backpack.css/blob/master/LICENSE) [![Dependencies](https://img.shields.io/david/chris-pearce/backpack.css.svg?longCache=true&style=popout-square)](https://david-dm.org/chris-pearce/backpack.css) [![Dev
dependencies](https://img.shields.io/david/dev/chris-pearce/backpack.css.svg?longCache=true&style=popout-square)](https://david-dm.org/chris-pearce/backpack.css?type=dev) [![Code of
conduct](https://img.shields.io/badge/code%20of-conduct-ff69b4.svg?longCache=true&style=popout-square)](https://github.com/chris-pearce/backpack.css/blob/master/CODE_OF_CONDUCT.md) [![PRs
Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square)](http://makeapullrequest.com) [![Downloads](https://img.shields.io/npm/dw/backpack.css.svg?longCache=true&style=popout-square)](https://www.npmjs.com/package/backpack.css)

# backpack.css 🎒 <!-- omit in toc -->

A lightweight and somewhat opinionated CSS foundation that is best suited to applications.

## Table of contents <!-- omit in toc -->

- [Installation](#installation)
  - [npm](#npm)
  - [Download](#download)
  - [CDN](#cdn)
- [How to use](#how-to-use)
  - [With a bundler (webpack)](#with-a-bundler-webpack)
    - [JS](#js)
    - [CSS](#css)
  - [No bundler](#no-bundler)
  - [Overriding](#overriding)
- [Bundle size](#bundle-size)
- [Motivation](#motivation)
- [What it does](#what-it-does)
  - [OpenType features](#opentype-features)
- [Evolution](#evolution)
- [Browser support](#browser-support)
- [Contributing](#contributing)
- [Versioning](#versioning)
- [Credits](#credits)
- [License](#license)

## Installation

### npm

Run the following command using [npm](https://www.npmjs.com/):

```bash
npm install backpack.css --save-dev
```

If you prefer [Yarn](https://yarnpkg.com/en/), use this command instead:

```bash
yarn add backpack.css --dev
```

### Download

- [Unminified](https://cdn.jsdelivr.net/npm/backpack.css/lib/backpack.css)
- [Minified](https://cdn.jsdelivr.net/npm/backpack.css/lib/backpack.min.css)

### CDN

- [jsDelivr](https://www.jsdelivr.com/package/npm/backpack.css)
- [unpkg](https://unpkg.com/backpack.css)

_[cdnjs](https://cdnjs.com/) coming soon ([see here](https://github.com/cdnjs/cdnjs/issues/13224))._

## How to use

backpack.css is pretty easy to use. The one strict rule is that it **must** come before your project's CSS to ensure correct ordering of your styles and to be able to override any of backpack.css styles.

### With a bundler (webpack)

#### JS

```js
import 'backpack.css';
import '[path(s)-to-your-project-css]';
```

#### CSS

If you're using webpack then use the tilde (`~`) prefix at the start of the path, e.g.:

```css
@import '~backpack.css';
@import '[path(s)-to-your-project-css]';
```

### No bundler

Simply link to backpack.css using a `<link>` element in your HTML Head, e.g.:

```html
<head>
  […]
  <link rel="stylesheet" href="https://unpkg.com/backpack.css" />
  <link rel="stylesheet" href="[path-to-your-project-css]" />
</head>
```

Or if you prefer to host backpack.css yourself simply visit the [UNPKG hosted version](https://unpkg.com/backpack.css) and do a "Save As" to your machine.

### Overriding

backpack.css is just CSS so you can easily override any of its styles just as you would override any CSS, as in, via the rules of the cascade and specificity.

For example, if you don't want to use the global system font-stack defined in [`main-root.css`](src/main-root.css) then simply override it in your project CSS like so:

```css
html {
  font-family: serif;
}
```

## Bundle size

[![Bundle size minified](https://img.shields.io/bundlephobia/min/backpack.css.svg?longCache=true&style=popout-square)](https://bundlephobia.com/result?p=backpack.css) [![Bundle size minified](https://img.shields.io/bundlephobia/minzip/backpack.css.svg?longCache=true&style=popout-square)](https://bundlephobia.com/result?p=backpack.css)

## Motivation

Nowadays I'm building [React](https://reactjs.org/) applications that have highly componentised User Interfaces (UI) making use of native CSS layout mechanisms such as [Flexbox](https://css-tricks.com/snippets/css/a-guide-to-flexbox/) and [Grid](https://css-tricks.com/snippets/css/complete-guide-grid/). I'm no longer finding the need for heavy handed CSS frameworks that handle most of my UI concerns, especially layout and utilities. Instead I build components with a smidgen of global styles.

What I do need, however, are a bunch of smart and sensible foundational styles suited for applications that I would typically forget project to project—think [Normalize.css](http://necolas.github.io/normalize.css/) and then some. Something that is lightweight, super easy to intergrate, and can easily be overriden or allow for modular use, thus giving birth to backpack.css 🙂🎒.

## What it does

- Applies sensible form element resets, normalisations, and fixes, e.g. _remove all user-agent styles from buttons_.
- Applies sensible interactive styles, e.g. _avoid 300ms click delay on touch devices_.
- Applies foundational print styles.
- Applies a system font including monospace fonts.
- Applies the nicer `border-box` value for the `box-sizing` property to all elements.
- Applies sensible OpenType features, e.g. _enables lining numerals, tabular numerals, and slashed zero, for table content_ (see [OpenType features](#opentype-features) below).
- Makes all images and videos responsive.
- Removes margins, paddings, and borders from all elements except `<input>` so that everything is on an even playing field.
- Removes list bullets.
- Removes all user-agent styles from heading elements and resets them to have the same styles as the body copy. This article: [Handling headings in a UI component library](https://medium.com/fed-or-dead/handling-headings-in-a-ui-component-library-2587de93c890) goes into more detail on this.

_And more…_

All of the CSS is very well documentated if you want to dig deeper.

### OpenType features

As mentioned above, backpack.css applies sensible OpenType features. However, due to the poor support of the `font-variant-` properties backpack.css has to declare their equivalents via the better supported, but harder to maintain, `font-feature-settings` property (the `font-feature-settings` properties should always come first).

Here are some resources on this:

- [Utility OpenType](http://utility-opentype.kennethormandy.com)
- [Normalize-OpenType.css](http://kennethormandy.com/journal/normalize-opentype-css)
- [Syntax for OpenType features in CSS](https://helpx.adobe.com/typekit/using/open-type-syntax.html)
- [Caring about OpenType features](https://practice.typekit.com/lesson/caring-about-opentype-features)
- [OpenType features in CSS](https://typotheque.com/articles/opentype_features_in_css)

## Evolution

This is the third CSS framework/library I've created. Looking at each one lets you see how UI development has evolved over the years with each iteration getting smaller and smaller.

1.  [Scally](https://github.com/chris-pearce/scally) _circa 2014_
2.  [Shell](https://github.com/campaignmonitor/shell) _circa 2016_
3.  [backpack.css](https://github.com/chris-pearce/backpack.css) _circa 2018_

## Browser support

- Chrome _(latest 2)_
- Edge _(latest 2)_
- Firefox _(latest 2)_
- Internet Explorer 11 _(partial)_
- Safari _(latest 2)_
- Opera _(latest 2)_

backpack.css is designed with progressive enhancement in mind so not everything will work in Internet Explorer 11 or even in every browser, e.g. the [`tab-size`](https://caniuse.com/#feat=font-family-system-uiZ) property set in [`main-root.css`](src/main-root.css).

**✋ IMPORTANT:** [Autoprefixer](https://github.com/postcss/autoprefixer) should be set up as part of your project's build as backpack.css does not include any vendor prefixes.

## Contributing

Please see our [contributing guidelines](CONTRIBUTING.md).

## Versioning

backpack.css is maintained under the [Semantic Versioning guidelines](http://semver.org/). We'll do our best to adhere to those guidelines and strive to maintain backwards compatibility.

See the [change log](CHANGELOG.md).

## Credits

- [Normalize.css](http://necolas.github.io/normalize.css/)
- [modern-normalize](https://github.com/sindresorhus/modern-normalize)
- [sanitize.css](https://csstools.github.io/sanitize.css/)
- [HTML5 Boilerplate](https://html5boilerplate.com/)
- [Utility OpenType](http://utility-opentype.kennethormandy.com/)

And anyone else who's been so kind to share their work out in the open.

❤️ open source.

## License

The code is available under the [MIT license](https://github.com/chris-pearce/backpack.css/blob/master/LICENSE).
