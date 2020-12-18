module.exports = {
  env: {
    'cypress/globals': true,
    'jest/globals': true,
  },
  extends: ['standard'],
  plugins: [
    'standard',
    'react',
    'eslint-plugin-cypress',
    'jest',
    'chai-friendly',
    'react-hooks',
  ],
  rules: {
    'no-var': 'error', // optional, recommended when using es6+
    'no-unused-vars': 1, // recommended
    'operator-linebreak': ['error', 'after'],
    'arrow-spacing': ['error', { before: true, after: true }], // recommended
    indent: ['error', 2],
    'comma-dangle': [
      'error',
      {
        objects: 'only-multiline',
        arrays: 'only-multiline',
        imports: 'never',
        exports: 'never',
        functions: 'never',
      },
    ],

    // options to emulate prettier setup
    semi: ['error', 'never'],
    'max-len': [
      'error',
      {
        code: 100,
        ignoreStrings: true,
        ignoreComments: true,
        ignoreUrls: true,
      },
    ],
    'template-curly-spacing': ['error', 'always'],
    'arrow-parens': ['error', 'as-needed'],

    // standard.js
    'space-before-function-paren': ['error', 'never'],

    // standard plugin - options
    'standard/object-curly-even-spacing': ['error', 'either'],
    'standard/array-bracket-even-spacing': ['error', 'either'],
    'standard/computed-property-even-spacing': 0,
    'standard/no-callback-literal': ['error', ['cb', 'callback']],

    // react plugin - options
    'react/jsx-uses-react': 'error',
    'react/jsx-uses-vars': 'error',

    // jest plugin - rules
    'jest/no-disabled-tests': 'warn',
    'jest/no-focused-tests': 'error',
    'jest/no-identical-title': 'error',
    'jest/prefer-to-have-length': 'warn',
    'jest/valid-expect': 'error',

    // chai-friendly no-unused-expression replacement
    'no-unused-expressions': 0,
    'chai-friendly/no-unused-expressions': 2,

    //react hooks
    'react-hooks/rules-of-hooks': 'error',
  },
  parser: 'babel-eslint',
  parserOptions: {
    ecmaVersion: 8, // optional, recommended 6+
  },
}
