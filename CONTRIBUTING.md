# Contributing to backpack.css 🎒 <!-- omit in toc -->

Please take a moment to review this document to make the contribution process easy and effective for everyone involved.

Following these guidelines helps to communicate that you respect the time of the developers managing and developing this open-source project. In return, they should reciprocate that respect in addressing your issue or assessing patches and features.

## Table of contents <!-- omit in toc -->

- [Issue tracker](#issue-tracker)
  - [Labels](#labels)
- [Bug reports](#bug-reports)
  - [Guidelines](#guidelines)
  - [Example](#example)
- [Feature requests](#feature-requests)
- [Pull requests](#pull-requests)
  - [Process](#process)
- [Publishing](#publishing)
- [Linting](#linting)
  - [Tooling](#tooling)
  - [Text editor setup](#text-editor-setup)
  - [`yarn lint`](#yarn-lint)
- [File structure](#file-structure)
- [Code of conduct](#code-of-conduct)

## Issue tracker

The [issue tracker](https://github.com/chris-pearce/backpack.css/issues) is the preferred channel for [bug reports](#bug-reports), [features requests](#feature-requests) and [submitting pull requests](#pull-requests), however, please respect the following restrictions:

- Please **do not** use the issue tracker for personal support requests.
- Please **do not** derail or troll issues. Keep the discussion on topic and respect the opinions of others.
- Please **do not** post comments consisting solely of '+1' or '👍'. Use [GitHub's 'reactions' feature](https://github.com/blog/2119-add-reactions-to-pull-requests-issues-and-comments) instead. We reserve the right to delete comments which violate this rule.

### Labels

The issue tracker utilises labels to help organise and identify issues. Each label should be self-explanatory to help further each has a description.

Please always attach a label(s) to your issue, and you can see all of the project's labels [here](https://github.com/chris-pearce/backpack.css/labels).

## Bug reports

A bug is a _demonstrable problem_ that is caused by the code in the repository. Good bug reports are extremely helpful, so thanks!

### Guidelines

1. **Use the GitHub issue search** to check if the issue has already been reported.
2. **Check if the issue has been fixed** by trying to reproduce it using the latest `master` branch in the repository.
3. **Isolate the problem** by creating a live example (e.g., on [Codepen](http://codepen.io)) of a [reduced test case](http://css-tricks.com/6263-reduced-test-cases/).

A good bug report shouldn't leave others needing to chase you up for more information. Please try to be as detailed as possible in your report. What is your environment? What steps will reproduce the issue? What browser(s) and OS experience the problem? What would you expect to be the outcome? All these details will help people to fix any potential bugs.

### Example

> Short and descriptive example bug report title
>
> A summary of the issue and the browser/OS environment in which it occurs. If suitable, include the steps required to reproduce the bug.
>
> 1. This is the first step
> 2. This is the second step
> 3. Further steps, etc.
>
> `<url>` - a link to the reduced test case.
>
> Any other information you want to share that is relevant to the issue being reported. This might include the lines of code that you have identified as causing the bug, and potential solutions (and your opinions on their merits).

## Feature requests

Before opening a feature request, please take a moment to find out whether your idea fits with the scope and aims of the project. It's up to you to make a strong case to convince the project's developers of the merits of this feature. Please provide as much detail and context as possible.

## Pull requests

Good pull requests—patches, improvements, new features—are a fantastic help. They should remain focused in scope and avoid containing unrelated commits.

**Please ask first** before embarking on any significant work; otherwise, you risk spending a lot of time working on something that the project's developers might not want to merge into the project. And please adhere to the [linting rules](#linting).

**Working on your first Pull Request?** You can learn how from this _free_ series [How to Contribute to an Open Source Project on GitHub](https://egghead.io/series/how-to-contribute-to-an-open-source-project-on-github).

### Process

Follow this process if you'd like your work considered for inclusion in the project:

1. [Fork](https://help.github.com/articles/fork-a-repo/) the project, clone your fork, and configure the remotes:

   ```bash
   # Clone your fork of the repo into the current directory
   git clone https://github.com/<your-username>/backpack.css.git

   # Navigate to the newly cloned directory
   cd backpack.css

   # Assign the original repo to a remote called 'upstream'
   git remote add upstream https://github.com/chris-pearce/backpack.css.git

   # Install dependencies
   yarn install
   ```

2. If you cloned a while ago, get the latest changes from upstream:

   ```bash
   git checkout master
   git pull upstream master
   ```

3. Never work directly on `master`. Create a new topic branch (off the latest version of `master`) to contain your feature, change, or fix:

   ```bash
   git checkout -b <topic-branch-name>
   ```

4. Commit your changes in logical chunks. Please adhere to these [git commit message conventions](http://tbaggery.com/2008/04/19/a-note-about-git-commit-messages.html) or your code is unlikely be merged into the main project. Use Git's [interactive rebase](https://help.github.com/articles/interactive-rebase) feature to tidy up your commits before making them public.

5. Locally rebase the upstream development branch into your topic branch:

   ```bash
   git pull --rebase upstream master
   ```

6. Push your topic branch up to your fork:

   ```bash
   git push origin <topic-branch-name>
   ```

7. [Open a Pull Request](https://help.github.com/articles/using-pull-requests/) with a clear title and description. If your Pull Request corresponds to an issue, then please make the title the same as the issue title and somewhere in the description include this: _**This fixes #`<x>`**_, where `<x>` is the issue number, also add the relevant issue [label(s)](#labels).

Tests will be added eventually for everything that can have a visual test ([see](https://github.com/chris-pearce/backpack.css/issues/20)), similar to [Normalize.css](https://github.com/necolas/normalize.css) [test file](https://github.com/necolas/normalize.css/blob/master/test.html). In the meantime, there is the [html5-test-page.html](test/html5-test-page.html) page that can be used as a quick visual and cross-browser check.

**✋ IMPORTANT:** by submitting a patch, you agree to allow the project owner to license your work under the same license that used by the project.

## Publishing

backpack.css uses [np](https://github.com/sindresorhus/np) for publishing.

If you have permission to publish a new version, apply the following steps on the `master` branch:

1. Add all new changes to [`CHANGELOG.md`](CHANGELOG.md), making sure to follow the existing format.
2. Run: `git add -A` then `git commit -m "updates before release"`.
3. Run: `yarn release`.

## Linting

### Tooling

backpack.css uses these tools to report and apply its linting rules:

- [stylelint.io](stylelint.io)
- [Prettier](https://prettier.io/)
- [EditorConfig](https://editorconfig.org/)
- [lint-staged](https://github.com/okonet/lint-staged) and [husky](https://github.com/typicode/husky)

### Text editor setup

Your text editor should be set up to work with this project's tooling.

If you're using Visual Studio Code, you'll be prompted to install the relevant [**Extensions**](https://code.visualstudio.com/docs/editor/extension-gallery) and the relevant [**Workspace Settings**](https://code.visualstudio.com/docs/getstarted/settings) will automatically be applied. If you're not using Visual Studio Code, the stylelint.io site has an [Editor plugins](https://stylelint.io/user-guide/complementary-tools/#editor-plugins) section that may help.

### `yarn lint`

Whenever you want to lint all of the source `.css` files you can run: `yarn lint`. And to auto fix errors run: `yarn lint --fix`. A pre-commit hook will check for conformity and where applicable auto fix any errors.

## File structure

The source files are grouped by function using the groups defined in MDN's **[HTML elements reference](https://developer.mozilla.org/en-US/docs/Web/HTML/Element)** document.

This makes it easier to find what you're looking for especially when this grouping is commonly used amongst other similar CSS libraries.

There are two groups (files) that are outside of the **HTML elements reference** grouping, these are:

- **[`global.css`](src/global.css)** _which has two usages:_
  1. For styles that are applied to everything typically via the universal selector (`*`).
  2. For styles that might not be genuinely global but are still considered "global" enough due to the type of selectors they use, e.g.: `[tabindex='-1']:focus`. Plus, these styles don't fit into any of the other groups.
- **[`grouped.css`](src/grouped.css)** is for grouping selectors from two or more groups that share the same styles whereby repeating the styles across multiple files would be detrimental to the maintainability of the library. In short, this file is to keep things DRY.

Please always stick to this structure.

## Code of conduct

Please note that this project is released with a [Contributor Code of Conduct](CODE_OF_CONDUCT.md). By participating in this project you agree to abide by its terms.
