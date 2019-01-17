# Contributing to backpack.css 🎒 <!-- omit in toc -->

Please take a moment to review this document in order to make the contribution process easy and effective for everyone involved.

Following these guidelines helps to communicate that you respect the time of the developers managing and developing this open source project. In return, they should reciprocate that respect in addressing your issue or assessing patches and features.

This project has a [code of conduct](CODE_OF_CONDUCT.md) that all contributors are expected to follow.

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
  - [Step 4 breakdown](#step-4-breakdown)
- [CSS style guide](#css-style-guide)

## Issue tracker

The [issue tracker](https://github.com/chris-pearce/backpack.css/issues) is the preferred channel for [bug reports](#bug-reports), [features requests](#feature-requests) and [submitting pull requests](#pull-requests), however, please respect the following restrictions:

- Please **do not** use the issue tracker for personal support requests.
- Please **do not** derail or troll issues. Keep the discussion on topic and respect the opinions of others.
- Please **do not** post comments consisting solely of '+1' or '👍'. Use [GitHub's 'reactions' feature](https://github.com/blog/2119-add-reactions-to-pull-requests-issues-and-comments) instead. We reserve the right to delete comments which violate this rule.

### Labels

The issue tracker utilises labels to help organise and identify issues. Each label should be self-explanatory, to further help each has a description.

Please always attach a label(s) to your issue and you can see all of the project's labels [here](https://github.com/chris-pearce/backpack.css/labels).

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

**Please ask first** before embarking on any significant work, otherwise you risk spending a lot of time working on something that the project's developers might not want to merge into the project. And please adhere to the [CSS style guide](#css-style-guide).

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

7. [Open a Pull Request](https://help.github.com/articles/using-pull-requests/) with a clear title and description. If your Pull Request corresponds to an issue then please make the title the same as the issue title and somewhere in the description include this: _**This fixes #`<x>`**_, where `<x>` is the issue number, also add the relevant issue [label(s)](#labels).

**✋ IMPORTANT:** by submitting a patch, you agree to allow the project owner to license your work under the same license that used by the project.

## Publishing

If you have permission to publish a new version apply the following steps, always on the `master` branch:

1. Commit all your changes.
2. Add all new changes to [`CHANGELOG.md`](CHANGELOG.md) making sure to follow the existing format.
3. Update the version number in [`index.css`](src/index.css).
4. Run: `npm version <update-type> --force` where `<update-type>` is one of the semantic versioning release types: **patch**, **minor**, or **major** (see the README's [Versioning](README.md#versioning) section).

### Step 4 breakdown

1. Run the `build` script.
2. Add `CHANGELOG.md` and `index.css` that got modified in steps **1** and **2** to the version commit.
3. Change the version number in [`package.json`](package.json).
4. Push the new version commit and tag up to the repository.
5. Publish the new version to the NPM registry.
6. Clean the `lib` directory.

_Each step will only run if the one before it passed._

## CSS style guide

The CSS style guide is coming soon, [see](https://github.com/chris-pearce/backpack.css/issues/24).
