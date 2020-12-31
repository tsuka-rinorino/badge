module.exports = {
  parser: 'vue-eslint-parser',
  parserOptions: {
    parser: 'babel-eslint',
    sourceType: 'module'
  },
  extends:[
    'plugin:vue/recommended'
  ],
  rules: {
    'no-empty-interface': 0,
    'no-multi-spaces': 2,
    'keyword-spacing': 2,
    'no-unused-vars': 2,
    'space-infix-ops': 2,
    'comma-spacing': 2,
    'brace-style': 2,
    'no-multiple-empty-lines': [2, { 'max': 1, 'maxEOF': 0 }],
    'block-spacing': 2,
    'camelcase': 2,
    'comma-style': 2,
    'func-call-spacing': 2,
    'key-spacing': 2,
    'no-constant-condition': 2,
    'no-duplicate-imports': 2,
    'no-mixed-spaces-and-tabs': 2,
    'no-tabs': 2,
    'no-trailing-spaces': 2,
    'rest-spread-spacing': 2,
    'space-before-blocks': 2,
    'space-in-parens': 2,
    'space-unary-ops': 2,
    'spaced-comment': 2,
    'template-curly-spacing': 2,
    'semi': 2,
    'indent': [2, 2],
    'quotes': [2, 'single'],
    'eol-last': 2,
  }
};
