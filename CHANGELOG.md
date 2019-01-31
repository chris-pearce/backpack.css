# Changes to backpack.css 🎒

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
