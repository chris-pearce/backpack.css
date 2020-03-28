const regExes = {
  kebabCase: '^([a-z][a-z0-9]*)(-[a-z0-9]+)*$',
};

module.exports = {
  extends: ['stylelint-prettier/recommended'],
  plugins: [
    'stylelint-a11y',
    'stylelint-csstree-validator',
    'stylelint-declaration-block-no-ignored-properties',
    'stylelint-order',
    'stylelint-high-performance-animation',
  ],
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
    'function-calc-no-invalid': true,
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
      { ignore: ['consecutive-duplicates-with-different-values'] },
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
    'keyframes-name-pattern': regExes.kebabCase,

    // Number
    'number-max-precision': 3,

    // Time
    'time-min-milliseconds': null,

    // Unit
    'unit-blacklist': ['cm', 'ex', 'in', 'mm', 'pc', 'pt'],
    'unit-whitelist': null,

    // Shorthand property
    'shorthand-property-no-redundant-values': true,

    // Vendor
    'value-no-vendor-prefix': true,

    // Custom property
    'custom-property-pattern': regExes.kebabCase,

    // Property
    'property-blacklist': null,
    'property-no-vendor-prefix': true,
    'property-whitelist': null,

    // Declaration
    'declaration-block-no-redundant-longhand-properties': [
      true,
      {
        ignoreShorthands: ['/^flex.*/', '/^grid.*/'],
      },
    ],
    'declaration-no-important': null,
    'declaration-property-unit-blacklist': null,
    'declaration-property-unit-whitelist': { 'line-height': [] },
    'declaration-property-value-blacklist': null,
    'declaration-property-value-whitelist': null,

    // Declaration block
    'declaration-block-single-line-max-declarations': 0,

    // Selector
    'selector-attribute-operator-blacklist': null,
    'selector-attribute-operator-whitelist': null,
    'selector-class-pattern': regExes.kebabCase,
    'selector-combinator-blacklist': null,
    'selector-combinator-whitelist': null,
    'selector-id-pattern': regExes.kebabCase,
    'selector-max-attribute': 1,
    'selector-max-class': 2,
    'selector-max-combinators': 1,
    'selector-max-compound-selectors': 2,
    'selector-max-empty-lines': 0,
    'selector-max-id': 1,
    'selector-max-pseudo-class': null,
    'selector-max-specificity': '0,3,0',
    'selector-max-type': null,
    'selector-max-universal': 1,
    'selector-nested-pattern': null,
    'selector-no-qualifying-type': [
      true,
      {
        ignore: ['attribute'],
      },
    ],
    'selector-no-vendor-prefix': true,
    'selector-pseudo-class-blacklist': null,
    'selector-pseudo-class-whitelist': null,
    'selector-pseudo-element-blacklist': null,
    'selector-pseudo-element-whitelist': null,

    // Media feature
    'media-feature-name-blacklist': null,
    'media-feature-name-no-vendor-prefix': true,
    'media-feature-name-value-whitelist': null,
    'media-feature-name-whitelist': null,

    // Custom media
    'custom-media-pattern': regExes.kebabCase,

    // At-rule
    'at-rule-blacklist': null,
    'at-rule-no-vendor-prefix': true,
    'at-rule-property-requirelist': null,
    'at-rule-whitelist': null,

    // Comment
    'comment-word-blacklist': null,

    // General / Sheet
    'max-nesting-depth': null,
    'no-unknown-animations': true,

    /**
     * Stylistic issues.
     * https://stylelint.io/user-guide/rules/#stylistic-issues
     */

    // Color
    'color-hex-case': 'lower',
    'color-hex-length': 'short',

    // Font family
    'font-family-name-quotes': 'always-where-recommended',

    // Font weight
    'font-weight-notation': 'numeric',

    // Function
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

    // Number
    'number-leading-zero': 'always',
    'number-no-trailing-zeros': true,

    // Length
    'length-zero-no-unit': true,

    // Unit
    'unit-case': 'lower',

    // Value
    'value-keyword-case': 'lower',

    // Value list
    'value-list-comma-newline-after': null,
    'value-list-comma-newline-before': null,
    'value-list-comma-space-after': 'always-single-line',
    'value-list-comma-space-before': 'never',
    'value-list-max-empty-lines': 0,

    // Custom property
    'custom-property-empty-line-before': 'never',

    // Property
    'property-case': 'lower',

    // Declaration
    'declaration-bang-space-after': 'never',
    'declaration-bang-space-before': 'always',
    'declaration-colon-newline-after': null,
    'declaration-colon-space-after': 'always',
    'declaration-colon-space-before': 'never',
    'declaration-empty-line-before': 'never',

    // Declaration block
    'declaration-block-semicolon-newline-after': 'always-multi-line',
    'declaration-block-semicolon-newline-before': null,
    'declaration-block-semicolon-space-after': 'always-single-line',
    'declaration-block-semicolon-space-before': 'never',
    'declaration-block-trailing-semicolon': 'always',

    // Block
    'block-closing-brace-empty-line-before': 'never',
    'block-closing-brace-newline-after': 'always',
    'block-closing-brace-newline-before': 'always',
    'block-closing-brace-space-after': null,
    'block-closing-brace-space-before': null,
    'block-opening-brace-newline-after': 'always',
    'block-opening-brace-newline-before': null,
    'block-opening-brace-space-after': null,
    'block-opening-brace-space-before': 'always',

    // Selector
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

    // Selector list
    'selector-list-comma-newline-after': 'always',
    'selector-list-comma-newline-before': null,
    'selector-list-comma-space-after': null,
    'selector-list-comma-space-before': null,

    // Rule
    'rule-empty-line-before': [
      'always',
      { except: ['after-single-line-comment', 'first-nested'] },
    ],

    // Media feature
    'media-feature-colon-space-after': 'always',
    'media-feature-colon-space-before': 'never',
    'media-feature-name-case': 'lower',
    'media-feature-parentheses-space-inside': 'never',
    'media-feature-range-operator-space-after': 'always',
    'media-feature-range-operator-space-before': 'always',

    // Media query list
    'media-query-list-comma-newline-after': 'always-multi-line',
    'media-query-list-comma-newline-before': 'never-multi-line',
    'media-query-list-comma-space-after': 'always-single-line',
    'media-query-list-comma-space-before': 'never',

    // At-rule
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

    // Comment
    'comment-empty-line-before': [
      'always',
      {
        except: ['first-nested'],
        ignore: ['after-comment', 'stylelint-commands'],
      },
    ],
    'comment-whitespace-inside': 'always',

    // General / Sheet
    indentation: null,
    linebreaks: null,
    'max-empty-lines': 1,
    'max-line-length': null,
    'no-eol-whitespace': null,
    'no-missing-end-of-source-newline': null,
    'no-empty-first-line': true,
    'unicode-bom': null,

    /**
     * Plugins.
     */

    // a11y
    'a11y/content-property-no-static-value': [true, { severity: 'warning' }],
    'a11y/font-size-is-readable': null,
    'a11y/line-height-is-vertical-rhythmed': null,
    'a11y/media-prefers-reduced-motion': true,
    'a11y/media-prefers-color-scheme': null,
    'a11y/no-display-none': null,
    'a11y/no-obsolete-attribute': [true, { severity: 'warning' }],
    'a11y/no-obsolete-element': [true, { severity: 'warning' }],
    'a11y/no-outline-none': true,
    'a11y/no-spread-text': [true, { severity: 'warning' }],
    'a11y/no-text-align-justify': [true, { severity: 'warning' }],
    'a11y/selector-pseudo-class-focus': true,

    // csstree-validator
    'csstree/validator': true,

    // declaration-block-no-ignored-properties
    'plugin/declaration-block-no-ignored-properties': true,

    // high-performance-animation
    'plugin/no-low-performance-animation-properties': true,

    // prettier
    'prettier/prettier': true,

    // order
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
