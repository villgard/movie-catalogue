module.exports = {
  root: true,
  env: {
    node: true,
    'vue/setup-compiler-macros': true,
  },
  parserOptions: {
    ecmaVersion: 2020,
  },
  extends: [
    'plugin:vue/vue3-essential',
    'eslint:recommended',
    '@vue/eslint-config-typescript/recommended',
    'plugin:prettier/recommended', // Turns off all rules that are unnecessary or might conflict with [Prettier]
  ],
  plugins: ['prettier', 'import'],
  rules: {
    'prettier/prettier': [
      'warn',
      {
        semi: true,
        singleQuote: true,
        trailingComma: 'all',
        bracketSpacing: true,
        bracketSameLine: false,
        vueIndentScriptAndStyle: false,
        printWidth: 120,
      },
    ],
    'vue/component-definition-name-casing': ['error', 'PascalCase'],
    'brace-style': 'warn',
    'object-property-newline': 'warn',
    'comma-dangle': ['error', 'always-multiline'],
    'object-curly-spacing': ['error', 'always'],
    'vue/multi-word-component-names': [0],
    eqeqeq: ['error', 'always'],
    'import/newline-after-import': 'warn',
    'newline-before-return': 'warn',
    '@typescript-eslint/no-unused-vars': [
      'warn',
      {
        argsIgnorePattern: '^_',
        varsIgnorePattern: '^_',
        caughtErrorsIgnorePattern: '^_',
      },
    ],
  },
};
