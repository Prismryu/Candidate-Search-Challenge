# React + TypeScript + Vite

![License](https://img.shields.io/badge/License-MIT-blue.svg)

## Description

 Candidate search application that calls the GitHub API and renders data in the browser.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)

## Installation

? How should someone install your project? Clone the repository from GitHub and install the required packages using the command below:          npm install

## Usage

Run "npm run dev" in the terminal or use the link provided to access the website.

## License

This application is covered under the [MIT](https://opensource.org/licenses/MIT) license.

## Contributing

For contributions, contact user Prismryu. 

## Tests

Use the link provided to test: https://candidate-search-f99p.onrender.com

## Questions

If you have any questions, feel free to reach out:

- GitHub: [Prismryu](https://github.com/Prismryu)
- Email: Guyrunby@gmail.com

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

* [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md), which uses [Babel](https://babeljs.io/) for Fast Refresh
* [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc), which uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you're developing a production application, we recommend updating the configuration to enable type-aware lint rules:

* Configure the top-level `parserOptions` property as follows:

```js
export default {
  // other rules...
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json', './tsconfig.node.json'],
    tsconfigRootDir: __dirname,
  },
}
```

* Replace `plugin:@typescript-eslint/recommended` with `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`.
* Optionally, add `plugin:@typescript-eslint/stylistic-type-checked`.
* Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` and `plugin:react/jsx-runtime` to the `extends` list.

---
© 2024 edX Boot Camps LLC. Confidential and Proprietary. All Rights Reserved.
