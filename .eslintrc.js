module.exports = {
  extends: [
    "react-app",
    "airbnb",
    "airbnb-typescript",
    "eslint:recommended",
    "plugin:react/jsx-runtime",
    "prettier",
    "plugin:import/typescript",
    "plugin:@typescript-eslint/recommended",
  ],
  plugins: ["import", "@typescript-eslint"],
  parser: "@typescript-eslint/parser",
  root: true,
  rules: {
    "react/jsx-filename-extension": [
      2,
      { extensions: [".js", ".jsx", ".ts", ".tsx"] },
    ],
    "react/button-has-type": "off",
    "prettier/prettier": [
      "off",
      {
        require: {
          semi: true,
          singleQuote: true,
          printWidth: 80,
          tabWidth: 2,
          useTabs: false,
          jsxBracketSameLine: true,
          bracketSpacing: false,
          bracketSameLine: true,
        },
      },
    ],
    "import/order": [
      "error",
      {
        "newlines-between": "always",
        groups: [
          "builtin",
          "external",
          "internal",
          "unknown",
          "parent",
          "sibling",
          "index",
          "object",
          "type",
        ],
        pathGroupsExcludedImportTypes: [],
      },
    ],
    "import/no-anonymous-default-export": 0,
    "import/no-extraneous-dependencies": [0, { packageDir: "./" }],
    "import/no-default-export": 0,
    "import/extensions": "off",
    "no-restricted-imports": "off",
    "no-restricted-exports": "off",
    "@typescript-eslint/no-unused-vars": "error",
    "@typescript-eslint/explicit-function-return-type": [
      "error",
      { allowExpressions: true },
    ],
  },
  settings: {
    "import/resolver": {
      typescript: {
        alwaysTryTypes: true,
        project: "./tsconfig.json",
      },
    },
  },
  globals: {
    React: true,
    jsdom: true,
    JSX: true,
  },
  parserOptions: {
    project: "./tsconfig.json",
  },
};
