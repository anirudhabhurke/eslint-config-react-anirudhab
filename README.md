# eslint-config-react-anirudhab

A versatile and extensible ESLint configuration built on top of popular libraries, with added TypeScript support and custom rules. Enforces best practices and consistent code style to improve code quality and maintainability across projects.

## Installation

Install the ESLint config and its peer dependencies

```
npx install-peerdeps --dev eslint-config-react-anirudhab
```

## Usage

### 1. In `.eslintrc.js`, add extend the config

```javascript
module.exports = {
  extends: ["eslint-config-react-anirudhab"],
};
```

### 2. [Optional] Update tsconfig.json

```json
{
  "extends": "eslint-config-react-anirudhab/tsconfig.base"
}
```

### 3. [Optional] Update Prettier Config `.prettierrc`

```json
{
  "semi": true,
  "singleQuote": true,
  "printWidth": 80,
  "tabWidth": 2,
  "useTabs": false,
  "bracketSpacing": false,
  "jsxBracketSameLine": true,
  "bracketSameLine": true
}
```

### 3. Add an ESLint script to your project's package.json file:

```json
{
  "scripts": {
    "lint": "eslint . --ext .js,.jsx,.ts,.tsx"
  }
}
```
