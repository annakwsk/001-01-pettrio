module.exports = {
  plugins: ["stylelint-scss"],
  extends: [
    "stylelint-config-standard",
    "stylelint-config-recess-order",
    "./node_modules/prettier-stylelint/config.js",
  ],
  rules: {
    indentation: 2,
    "media-feature-name-no-unknown": false,
    "selector-type-no-unknown": false,
    "color-no-invalid-hex": false,
    "color-function-notation": "legacy",
    "declaration-block-no-shorthand-property-overrides": false,
    "declaration-block-no-duplicate-properties": true,
    "at-rule-no-unknown": false,
    "shorthand-property-no-redundant-values": true,
    "declaration-block-no-redundant-longhand-properties": true,
    "no-unknown-animations": false,
    "no-invalid-double-slash-comments": false,
  },
};
