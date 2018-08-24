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

Or you can link to a minified version hosted on [CDNJS](https://cdnjs.com/about)
but make sure it comes before any of your project's CSS:

```html
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/backpack.css/[version]/backpack.min.css" />
<link rel="stylesheet" href="[path-to-your-project-css]" />
```

## How to use

Typically you'll be wanting to import all of backpack.css styles into your
project but you do have the choice to be selective.

The one strict rule backpack.css does have is that it must come before your
project's CSS to ensure correct ordering of your styles and if you need to
override any of backpack.css styles.

### Importing with a bundler

If you're using a bundler such as [webpack](https://webpack.js.org/) and wanting
to import all of backpack.css then your app's entry point should look like this:

```js
import 'backpack.css';
import '[path-to-your-project-css]';
```

If you want to be selective on what to import then simply `import` the
backpack.css files you need, for example:

```js
import 'backpack.css/resets.css';
import 'backpack.css/content-sectioning.css';
import 'backpack.css/forms.css';
import '[path-to-your-project-css]';
```

The order at which you import each module is important, to see this order and
what `.css` files are available refer to backpack.css `index.css`.

### Importing without a bundler

Simply include a `<link>` element that references the
[CDNJS](https://cdnjs.com/about) version of backpack.css, for example:

```html
<html>
  <head>
    […]
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/backpack.css/[version]/backpack.min.css" />
    <link rel="stylesheet" href="[path-to-your-project-css]" />
  </head>
  <body>
    […]
  </body>
<html>
```

For better performance and versioning it's recommended to use the CDNJS version,
however, you don't have to, you can
[download](https://github.com/chris-pearce/backpack.css/archive/master.zip)
backpack.css from Github.

### Overriding

backpack.css is just CSS so you can easily override any of backpack.css styles just as
you would override any CSS, as in, via the rules of the cascade and specificity.

For example, if you didn't want to use `system-ui` as the global `font-family`
set in `main-root.css` then simply redeclare it in your project's CSS like so:

```css
html {
  font-family: serif;
}
```

As already mentioned above if you aren't needing entire modules

## Motivation

Nowadays I'm building [React](https://reactjs.org/) applications that have
highly componentised User Interfaces (UI) making use of native CSS layout
mechanisms such as
[Flexbox](https://css-tricks.com/snippets/css/a-guide-to-flexbox/) and
[Grid](https://css-tricks.com/snippets/css/complete-guide-grid/). I'm no longer
finding the need for heavy handed CSS frameworks that handle most of my UI
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

This is the third CSS framework/library I've created. Looking at each one really
lets you see how UI development has evolved over the years with each iteration
getting smaller and smaller.

1.  [Scally](https://github.com/chris-pearce/scally) _circa 2014_
2.  [Shell](https://github.com/campaignmonitor/shell) _circa 2016_
3.  [backpack.css](https://github.com/chris-pearce/backpack.css) _circa 2018_

## Browser support

_Coming soon…_

<!-- ## What it does

- Applies sensible OpenType features to select elements. For example, table
  cells (`<td>`) have enabled:
  - _lining numerals_
  - _tabular numerals_
  - _slashed zero_
- Resets all margins
- each `.css` file is completely standalone -->

<!-- ## What it doesn't do

where's my utils, just create a component!

## TODO

* Explain headings
* Sensible defaults, fixing bugs, improving a11y/UX, helping responsive,
* https://hackernoon.com/the-coolest-react-ui-frameworks-for-your-new-react-app-ad699fffd651 -->
