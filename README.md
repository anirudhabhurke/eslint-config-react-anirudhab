# eslint-config-react-anirudhab

A versatile and extensible ESLint configuration built on top of popular libraries, with added TypeScript support and custom rules. Enforces best practices and consistent code style to improve code quality and maintainability across projects.

## Installation

Install the ESLint config and its peer dependencies:

```
npm install --save-dev eslint-config-react-anirudhab

```

If you use yarn

```
yarn add -D eslint-config-react-anirudhab

```

## Usage

### 1. In `.eslintrc.js`, add extend the config

```javascript
module.exports = {
  extends: ["eslint-config-react-anirudhab"],
};
```

### 2. [Optional] Create or update your project's tsconfig.json file with the following settings to enable path aliases

```
{
  "compilerOptions": {
    ...
    "baseUrl": ".",
    "paths": {
      "@/*": ["src/*"]
    }
  },
  ...
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
