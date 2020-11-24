[![NPM
version](https://img.shields.io/npm/v/backpack.css.svg?longCache=true&style=popout-square)](https://www.npmjs.com/package/backpack.css) [![GitHub
license](https://img.shields.io/github/license/chris-pearce/backpack.css.svg?longCache=true&style=popout-square)](https://github.com/chris-pearce/backpack.css/blob/master/LICENSE) [![Dependencies](https://img.shields.io/david/chris-pearce/backpack.css.svg?longCache=true&style=popout-square)](https://david-dm.org/chris-pearce/backpack.css) [![Dev
dependencies](https://img.shields.io/david/dev/chris-pearce/backpack.css.svg?longCache=true&style=popout-square)](https://david-dm.org/chris-pearce/backpack.css?type=dev) [![Contributor Covenant](https://img.shields.io/badge/Contributor%20Covenant-v2.0%20adopted-ff69b4.svg)](https://github.com/chris-pearce/backpack.css/blob/master/CODE_OF_CONDUCT.md) [![PRs
Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square)](http://makeapullrequest.com) [![Downloads](https://img.shields.io/npm/dw/backpack.css.svg?longCache=true&style=popout-square)](https://www.npmjs.com/package/backpack.css)

# 🎒 backpack.css <!-- omit in toc -->

A lightweight and somewhat opinionated CSS foundation that is best suited to applications.

# Table of contents <!-- omit in toc -->

- [Installation](#installation)
  - [npm](#npm)
  - [Download](#download)
  - [CDN](#cdn)
  - [How to use](#how-to-use)
  - [With a bundler _(e.g., webpack, Parcel, etc.)_](#with-a-bundler-eg-webpack-parcel-etc)
    - [JS](#js)
    - [CSS](#css)
  - [No bundler](#no-bundler)
  - [Overriding](#overriding)
- [Bundle size](#bundle-size)
- [Motivation](#motivation)
- [What it does](#what-it-does)
  - [OpenType features](#opentype-features)
- [Browser support](#browser-support)
- [Contributing](#contributing)
- [Versioning](#versioning)
- [Credits](#credits)
- [License](#license)

# Installation

## npm

Run the following command using [npm](https://www.npmjs.com/):

```bash
npm install backpack.css --save-dev
```

If you prefer [Yarn](https://yarnpkg.com/en/), use this command instead:

```bash
yarn add backpack.css --dev
```

## Download

- [Unminified](https://cdn.jsdelivr.net/npm/backpack.css/lib/backpack.css)
- [Minified](https://cdn.jsdelivr.net/npm/backpack.css/lib/backpack.min.css)

## CDN

- [jsDelivr](https://www.jsdelivr.com/package/npm/backpack.css)
- [unpkg](https://unpkg.com/backpack.css)

_[cdnjs](https://cdnjs.com/) coming soon ([see here](https://github.com/cdnjs/cdnjs/issues/13224))._

## How to use

backpack.css is pretty easy to use. The one strict rule is that it **must** come before your project's CSS to ensure correct ordering of your styles and to be able to override any of backpack.css styles.

## With a bundler _(e.g., webpack, Parcel, etc.)_

### JS

```js
import 'backpack.css';
import '[path(s)-to-your-project-css]';
```

### CSS

If you're using webpack, then use the tilde (`~`) prefix at the start of the path, e.g.:

```css
@import '~backpack.css';
@import '[path(s)-to-your-project-css]';
```

## No bundler

Link to backpack.css using a `<link>` element in your HTML Head, e.g.:

```html
<head>
  […]
  <link rel="stylesheet" href="https://unpkg.com/backpack.css" />
  <link rel="stylesheet" href="[path-to-your-project-css]" />
</head>
```

## Overriding

backpack.css is just CSS so you can easily override any of its styles just as you would override any CSS, as in, via the rules of the cascade and specificity.

For example, if you don't want to use the global system font-stack defined by [sanitize.css](https://github.com/csstools/sanitize.css/blob/0d2d781758ab9cd36c6138bedaa26b0aae30bfc3/typography.css#L1-L19) then override it in your project CSS like so:

```css
html {
  font-family: serif;
}
```

# Bundle size

[![Bundle size minified](https://img.shields.io/bundlephobia/min/backpack.css.svg?longCache=true&style=popout-square)](https://bundlephobia.com/result?p=backpack.css) [![Bundle size minified](https://img.shields.io/bundlephobia/minzip/backpack.css.svg?longCache=true&style=popout-square)](https://bundlephobia.com/result?p=backpack.css)

# Motivation

Nowadays, I'm building [React](https://reactjs.org/) applications that have highly componentised User Interfaces (UI) making use of native CSS layout mechanisms such as [Flexbox](https://css-tricks.com/snippets/css/a-guide-to-flexbox/) and [Grid](https://css-tricks.com/snippets/css/complete-guide-grid/). I'm no longer finding the need for heavy-handed CSS frameworks that handle most of my UI concerns, especially layout and utilities. Instead, I build components with a smidgen of global styles.

What I do need, however, are a bunch of smart and sensible foundational styles suited for applications that I would typically forget project to project—think [sanitize.css](https://csstools.github.io/sanitize.css/) and then some. Something lightweight, super easy to integrate, and can easily be overridden or allow for modular use, thus giving birth to backpack.css 🙂🎒.

# What it does

- Apply sensible form element resets, normalisations, and fixes.
- Apply a system font, including monospace fonts.
- Apply the more agreeable `border-box` value for the `box-sizing` property to all elements.
- Apply sensible OpenType features (see [OpenType features](#opentype-features) below).
- Make embeddable elements responsive.
- Remove margins, paddings, and borders from all elements that come with those styles.
- Remove markers from lists.
- Remove all user-agent styles from heading elements and reset them to have the same styles as the body copy.
- Where applicable, use [CSS logical properties and values](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Logical_Properties).

_And more…_

All of the CSS is very well documented if you want to dig deeper.

## OpenType features

As mentioned above, backpack.css applies sensible OpenType features. However, due to the poor support of the `font-variant-` properties, backpack.css has to declare their equivalents via the better supported, but harder to maintain, `font-feature-settings` property (the `font-feature-settings` properties should always come first).

Here are some resources on this:

- [Utility OpenType](http://utility-opentype.kennethormandy.com)
- [Normalize-OpenType.css](http://kennethormandy.com/journal/normalize-opentype-css)
- [Syntax for OpenType features in CSS](https://helpx.adobe.com/typekit/using/open-type-syntax.html)
- [Caring about OpenType features](https://practice.typekit.com/lesson/caring-about-opentype-features)
- [OpenType features in CSS](https://typotheque.com/articles/opentype_features_in_css)

# Browser support

backpack.css uses [Browserslist](https://github.com/browserslist/browserslist) to manage its browser support.

backpack.css does not support IE. To see the Browserslist queries backpack.css uses, see the [`.browserslistrc`](.browserslistrc) file.

Browserslist is used for [Autoprefixer](https://github.com/postcss/autoprefixer). Autoprefixer only adds a tiny amount of vendor prefixes, the main properties being prefixed are:

- `font-feature-settings`
- `font-variant-ligatures`

_This doesn't mean that backpack.css cannot be used in browsers outside of the above Browserslist query, just that compatibility is ensured with the ones within the query._

# Contributing

Please see our [Contributing Guidelines](CONTRIBUTING.md).

# Versioning

backpack.css is maintained under the [Semantic Versioning guidelines](http://semver.org/). We'll do our best to adhere to those guidelines and strive to maintain backwards compatibility.

See the [Changelog](CHANGELOG.md).

# Credits

- [sanitize.css](https://csstools.github.io/sanitize.css/)
- [Normalize.css](http://necolas.github.io/normalize.css/)
- [modern-normalize](https://github.com/sindresorhus/modern-normalize)
- [HTML5 Boilerplate](https://html5boilerplate.com/)
- [Utility OpenType](http://utility-opentype.kennethormandy.com/)
- [CSS Remedy](https://github.com/jensimmons/cssremedy)
- [Modern CSS Reset](https://hankchizljaw.com/wrote/a-modern-css-reset/)

And anyone else who's been so kind to share their work out in the open.

❤️ Open source.

# License

The code is available under the [MIT license](https://github.com/chris-pearce/backpack.css/blob/master/LICENSE).
