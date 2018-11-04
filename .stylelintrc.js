module.exports = {
  plugins: ['stylelint-order', 'stylelint-high-performance-animation'],
  rules: {
    /**
     * Possible errors.
     * https://stylelint.io/user-guide/rules/#possible-errors
     */
    // Color
    'color-no-invalid-hex': true,

    // Font family
    'font-family-no-duplicate-names': true,
    'font-family-no-missing-generic-family-keyword': true,

    // Function
    'function-calc-no-unspaced-operator': true,
    'function-linear-gradient-no-nonstandard-direction': true,

    // String
    'string-no-newline': true,

    // Unit
    'unit-no-unknown': true,

    // Property
    'property-no-unknown': true,

    // Keyframe declaration
    'keyframe-declaration-no-important': true,

    // Declaration block
    'declaration-block-no-duplicate-properties': [
      true,
      { ignore: ['consecutive-duplicates'] },
    ],
    'declaration-block-no-shorthand-property-overrides': true,

    // Block
    'block-no-empty': true,

    // Selector
    'selector-pseudo-class-no-unknown': true,
    'selector-pseudo-element-no-unknown': true,
    'selector-type-no-unknown': true,

    // Media feature
    'media-feature-name-no-unknown': true,

    // At-rule
    'at-rule-no-unknown': true,

    // Comment
    'comment-no-empty': true,

    // General / Sheet
    'no-descending-specificity': true,
    'no-duplicate-at-import-rules': true,
    'no-duplicate-selectors': true,
    'no-empty-source': true,
    'no-extra-semicolons': true,
    'no-invalid-double-slash-comments': true,

    /**
     * Limit language features.
     * https://stylelint.io/user-guide/rules/#limit-language-features
     */

    // Color
    'color-named': 'always-where-possible',
    'color-no-hex': null,

    // Function
    'function-blacklist': null,
    'function-url-no-scheme-relative': true,
    'function-url-scheme-blacklist': ['data', 'ftp', '/^http/'],
    'function-url-scheme-whitelist': null,
    'function-whitelist': null,

    // Keyframes
    'keyframes-name-pattern': null,

    'at-rule-blacklist': null,
    'at-rule-no-vendor-prefix': true,
    'at-rule-whitelist': null,

    'comment-word-blacklist': null,
    'custom-media-pattern': null,
    'custom-property-pattern': null,
    'declaration-block-no-redundant-longhand-properties': [
      true,
      {
        ignoreShorthands: ['/^flex.*/', '/^grid.*/'],
      },
    ],
    'declaration-block-single-line-max-declarations': 0,
    'declaration-no-important': null,
    'declaration-property-unit-blacklist': null,
    'declaration-property-unit-whitelist': { 'line-height': [] },
    'declaration-property-value-blacklist': null,
    'declaration-property-value-whitelist': null,

    'max-nesting-depth': [1, { ignore: ['blockless-at-rules'] }],
    'media-feature-name-blacklist': null,
    'media-feature-name-no-vendor-prefix': true,
    'media-feature-name-value-whitelist': null,
    'media-feature-name-whitelist': null,
    'no-unknown-animations': true,
    'number-max-precision': 3,
    'property-blacklist': ['flex', 'grid'],
    'property-no-vendor-prefix': true,
    'property-whitelist': null,
    'selector-attribute-operator-blacklist': null,
    'selector-attribute-operator-whitelist': null,
    'selector-class-pattern': null,
    'selector-combinator-blacklist': null,
    'selector-combinator-whitelist': null,
    'selector-id-pattern': null,
    'selector-max-attribute': 1,
    'selector-max-class': 2,
    'selector-max-combinators': 1,
    'selector-max-compound-selectors': 2,
    'selector-max-empty-lines': 0,
    'selector-max-id': 0,
    'selector-max-pseudo-class': null,
    'selector-max-specificity': '0,3,0',
    'selector-max-type': 1,
    'selector-max-universal': 1,
    'selector-nested-pattern': '^(&|@media)',
    'selector-no-qualifying-type': true,
    'selector-no-vendor-prefix': true,
    'selector-pseudo-class-blacklist': null,
    'selector-pseudo-class-whitelist': null,
    'selector-pseudo-element-blacklist': null,
    'selector-pseudo-element-whitelist': null,
    'shorthand-property-no-redundant-values': true,
    'time-min-milliseconds': null,
    'unit-blacklist': ['cm', 'ex', 'in', 'mm', 'pc', 'pt'],
    'value-no-vendor-prefix': true,

    /**
     * Stylistic issues.
     * https://stylelint.io/user-guide/rules/#stylistic-issues
     */
    'at-rule-empty-line-before': [
      'always',
      {
        except: ['blockless-after-same-name-blockless', 'first-nested'],
      },
    ],
    'at-rule-name-case': 'lower',
    'at-rule-name-newline-after': null,
    'at-rule-name-space-after': 'always',
    'at-rule-semicolon-newline-after': 'always',
    'at-rule-semicolon-space-before': 'never',
    'block-closing-brace-empty-line-before': 'never',
    'block-closing-brace-newline-after': 'always',
    'block-closing-brace-newline-before': 'always-multi-line',
    'block-closing-brace-space-after': null,
    'block-closing-brace-space-before': null,
    'block-opening-brace-newline-after': 'always-multi-line',
    'block-opening-brace-newline-before': null,
    'block-opening-brace-space-after': 'always-single-line',
    'block-opening-brace-space-before': 'always',
    'color-hex-case': 'lower',
    'color-hex-length': 'long',
    'comment-empty-line-before': [
      'always',
      {
        except: ['first-nested'],
        ignore: ['after-comment', 'stylelint-commands'],
      },
    ],
    'comment-whitespace-inside': 'always',
    'custom-property-empty-line-before': [
      'always',
      {
        except: ['after-custom-property', 'first-nested'],
        ignore: ['after-comment'],
      },
    ],
    'declaration-bang-space-after': 'never',
    'declaration-bang-space-before': 'always',
    'declaration-block-semicolon-newline-after': 'always-multi-line',
    'declaration-block-semicolon-newline-before': null,
    'declaration-block-semicolon-space-after': 'always-single-line',
    'declaration-block-semicolon-space-before': 'never',
    'declaration-block-trailing-semicolon': 'always',
    'declaration-colon-newline-after': null,
    'declaration-colon-space-after': 'always',
    'declaration-colon-space-before': 'never',
    'declaration-empty-line-before': [
      'always',
      {
        except: ['after-declaration', 'first-nested'],
        ignore: ['after-comment'],
      },
    ],
    'font-family-name-quotes': 'always-where-recommended',
    'font-weight-notation': 'numeric',
    'function-comma-newline-after': 'always-multi-line',
    'function-comma-newline-before': null,
    'function-comma-space-after': 'always-single-line',
    'function-comma-space-before': 'never',
    'function-max-empty-lines': 0,
    'function-name-case': 'lower',
    'function-parentheses-newline-inside': 'always-multi-line',
    'function-parentheses-space-inside': 'never-single-line',
    'function-url-quotes': 'always',
    'function-whitespace-after': 'always',
    // Turn off to avoid conflicting with Prettier
    indentation: null,
    'length-zero-no-unit': true,
    'max-empty-lines': 1,
    // Turn off to avoid conflicting with Prettier
    'max-line-length': null,
    'media-feature-colon-space-after': 'always',
    'media-feature-colon-space-before': 'never',
    'media-feature-name-case': 'lower',
    'media-feature-parentheses-space-inside': 'never',
    'media-feature-range-operator-space-after': 'always',
    'media-feature-range-operator-space-before': 'always',
    'media-query-list-comma-newline-after': 'always-multi-line',
    'media-query-list-comma-newline-before': 'never-multi-line',
    'media-query-list-comma-space-after': 'always-single-line',
    'media-query-list-comma-space-before': 'never',
    'no-eol-whitespace': true,
    'no-missing-end-of-source-newline': true,
    'number-leading-zero': 'always',
    'number-no-trailing-zeros': true,
    'property-case': 'lower',
    'rule-empty-line-before': [
      'always-multi-line',
      { except: ['first-nested'] },
    ],
    'selector-attribute-brackets-space-inside': 'never',
    'selector-attribute-operator-space-after': 'never',
    'selector-attribute-operator-space-before': 'never',
    'selector-attribute-quotes': 'always',
    'selector-combinator-space-after': 'always',
    'selector-combinator-space-before': 'always',
    'selector-descendant-combinator-no-non-space': true,
    'selector-pseudo-class-case': 'lower',
    'selector-pseudo-class-parentheses-space-inside': 'never',
    'selector-pseudo-element-case': 'lower',
    'selector-pseudo-element-colon-notation': 'double',
    'selector-type-case': 'lower',
    'selector-list-comma-newline-after': 'always',
    'selector-list-comma-space-before': 'never',
    'selector-list-comma-space-after': 'always-single-line',
    // Turn off to avoid conflicting with Prettier
    'string-quotes': null,
    'unit-case': 'lower',
    'value-keyword-case': 'lower',
    'value-list-comma-newline-after': null,
    'value-list-comma-newline-before': null,
    'value-list-comma-space-after': 'always-single-line',
    'value-list-comma-space-before': 'never',
    'value-list-max-empty-lines': 0,

    /**
     * Plugin rules.
     */
    'plugin/no-low-performance-animation-properties': true,
    'order/order': [
      'custom-properties',
      'dollar-variables',
      'declarations',
      'at-rules',
      'rules',
      {
        type: 'rule',
      },
      {
        type: 'rule',
        // Matches pseudo-elements
        selector: /^&::[\w-]+$/,
      },
      {
        type: 'rule',
        // Matches simple pseudo-classes
        selector: /^&:[\w-]+$/,
      },
    ],
    'order/properties-alphabetical-order': true,
  },
};
