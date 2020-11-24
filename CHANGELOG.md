# Changes to backpack.css 🎒

## 3.0.0 (November 24, 2020)

- Replace [Normalize.css](https://necolas.github.io/normalize.css/) with [sanitize.css](https://csstools.github.io/sanitize.css/) as sanitize.css is being actively developed on compared to Normalize.css. Plus, sanitize.css contains many useful opinionated styles, and in general, it's a more modern CSS library. Adopting sanitize.css also meant that quite a few of the backpack.css styles got removed. To see exactly what backpack.css uses from sanitize.css visit the library's entry point [`src/index.css`](src/index.css) file. ([#70](https://github.com/chris-pearce/backpack.css/issues/70)).
- In keeping with backpack.css's philosophy of starting on an even playing field when it comes to styling, the following changes got made:
  - Make table headers be left-aligned and not bold ([#68](https://github.com/chris-pearce/backpack.css/issues/68)).
  - Make button elements be left-aligned instead of their default center-alignment ([#55](https://github.com/chris-pearce/backpack.css/issues/55)).
- Remove all print styles as backpack.css is an opinionated CSS foundation that is best suited to applications. Therefore, the need for print styles isn't there compared to a content-heavy site, such as a blog ([#74](https://github.com/chris-pearce/backpack.css/issues/74)).
- Introduce a [`postcss.config.js`](postcss.config.js) file considering two PostCSS plugins are used and maybe more in the future ([#72](https://github.com/chris-pearce/backpack.css/issues/72)).
- Turn off margins, paddings, and borders on only the elements that need it instead of the prior `*:not(input)` selector.
- Remove all IE related CSS and update the Browserslist query as backpack.css moves to a more modern support policy. See the "Browser support" section in the [`README.md`](README.md) ([#62](https://github.com/chris-pearce/backpack.css/issues/62)).
- Began work on the new test suite; this will be a work-in-progress for a while. In the meantime, to test for visual regressions when adding new styles to backpack.css, or to see your changes, use the [HTML5 Test Page](https://github.com/cbracco/html5-test-page) which can be accessed in the browser when running `yarn test` (is available at http://localhost:3000/html5-test-page.html) ([#20](https://github.com/chris-pearce/backpack.css/issues/20)). See the "Testing" section in [`CONTRIBUTING.md`](CONTRIBUTING.md).
- Add ESLint as there are a few JS files now, mainly configuration files. Plus, JS linting is needed for the new test suite mentioned in the preceding bullet point ([#65](https://github.com/chris-pearce/backpack.css/issues/65)). Also, add linting for HTML files ([#66](https://github.com/chris-pearce/backpack.css/issues/66)).
- Introduce [logical properties and values](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Logical_Properties#:~:text=CSS%20Logical%20Properties%20and%20Values%20is%20a%20module%20of%20CSS,previously%20defined%20in%20CSS%202.1.) where applicable.
- Apply a pointer cursor to labels with a `for` attribute to indicate that a label will shift focus to its associated control ([#59](https://github.com/chris-pearce/backpack.css/issues/59)).
- Bring back the license comment in the library's entrypoint [`src/index.css`](src/index.css) file ([#63](https://github.com/chris-pearce/backpack.css/issues/63)).
- Apply a more readable underline for links using `text-decoration-skip-ink: auto;`.
- Change the built CSS file from `backpack.css` to `index.css`.
- Move any tooling configuration applied in `package.json` to specific config files. For example, `lint-stage` and `husky`.
- Add to the `.vscode` settings and extensions.
- Bump dependencies.
- It's possible a few updates got missed. However, the library's `.css` files are very well-documented if more information is needed.

## 2.2.0 (April 02, 2020)

- Improve the publishing experience ([#22](https://github.com/chris-pearce/backpack.css/issues/22)).

## 2.1.0 (March 29, 2020)

- Set up linting ([#9](https://github.com/chris-pearce/backpack.css/issues/9)).
- Update the `CODE_OF_CONDUCT.md` to the latest version.
- Grammar and punctuation fix applied across the board.
- Change the build branch name from `lib` to `dist`.
- Add `.vscode` folder with appropriate **settings** and **extensions** for VS Code contributors.

## 2.0.0 (January 31, 2019)

- Make backpack.css available on CDN's ([#15](https://github.com/chris-pearce/backpack.css/issues/15)).
- Add GitHub Templates ([#23](https://github.com/chris-pearce/backpack.css/issues/23)).
- Make `button` elements use `cursor: pointer` ([#26](https://github.com/chris-pearce/backpack.css/issues/26)).
- Make the `video` element responsive (same as `img` element) ([#35](https://github.com/chris-pearce/backpack.css/issues/35)).
- Remove `outline` for pointers that don't need it ([#36](https://github.com/chris-pearce/backpack.css/issues/36)).
- Remove deprecated `text-decoration-skip: ink` rule ([#38](https://github.com/chris-pearce/backpack.css/issues/38)).
- Remove animations, smooth scrolling, and transitions when the `prefers-reduced-motion: reduce` media query is set ([#39](https://github.com/chris-pearce/backpack.css/issues/39)).
- Remove `system-ui` and declare a new font-stack for the system font ([#41](https://github.com/chris-pearce/backpack.css/issues/41)).
- Set the `tab-size` property to "4" ([#42](https://github.com/chris-pearce/backpack.css/issues/42)).
- Remove the gap between specific elements and the bottom of their containers ([#43](https://github.com/chris-pearce/backpack.css/issues/43)).
- Remove the bottom margin for `p` elements in `print.css` ([#45](https://github.com/chris-pearce/backpack.css/issues/45)).
- Set a system font for elements that use a monospace font ([#46](https://github.com/chris-pearce/backpack.css/issues/46)).
- Add new sections to the `README.md` and `CONTRIBUTING.md` docs ([#49](https://github.com/chris-pearce/backpack.css/issues/49)).
- Restructure source files ([#50](https://github.com/chris-pearce/backpack.css/issues/50)).
- Add Autoprefixer to the build ([#51](https://github.com/chris-pearce/backpack.css/issues/51)).
- Only include `backpack.css` in the lib. As in, remove modular usage. It was becoming awkward to document and when giving it more thought I couldn't see any compelling use-cases for modular use. Size wise, the entire thing is ~1.3kb gzipped.
- Remove `cursor: pointer` rule for `label` elements with a `for` attribute ([see discussion](https://github.com/chris-pearce/backpack.css/pull/40#pullrequestreview-197387264)).
- Add [html5-test-page](https://github.com/cbracco/html5-test-page).
- Bump dependencies.

## 1.3.0 (November 6, 2018)

- Remove JS module export for now.
- Add missing CSS to package (`inline-text-semantics.css`).
- Bump dependencies.

## 1.2.0 (November 5, 2018)

- Add a JS module export.
- Add ESLint.
- Add a Prettier ignore file.

## 1.1.0 (October 6, 2018)

- Add contributing guidelines (see [`CONTRIBUTING.md`](CONTRIBUTING.md)).
- Add a code of conduct (see [`CODE_OF_CONDUCT.md`](CODE_OF_CONDUCT.md)).
- Various minor updates to [`README.md`](README.md).
- Minor comment update to [`content-sectioning.css`](src/content-sectioning.css).

## 1.0.1 (October 3, 2018)

- Make `npm publish` execute before `yarn clean` so that `lib` actually makes it into the NPM package 🤪.

## 1.0.0 (October 2, 2018)

- Version 1! 😃
