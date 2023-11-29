# `@codinasion/language-data`

Get data about programming languages.

![NPM Version](https://img.shields.io/npm/v/%40codinasion%2Flanguage-data?color=33cd56&logo=npm) ![Downloads](https://img.shields.io/npm/dm/%40codinasion%2Flanguage-data?logo=docusign&label=Downloads&logoColor=white) ![LICENSE](https://img.shields.io/npm/l/%40codinasion%2Flanguage-data?logo=googledocs&logoColor=white&label=LICENSE)

<div align="center">
  <img src="https://raw.githubusercontent.com/codinasion/codinasion/master/assets/rainbow-hr.png" alt="rainbow hr" width="100%" height="70%">
</div>

## Installation

```bash
# if you're using pnpm
pnpm add @codinasion/language-data

# or, if you're using npm
npm install @codinasion/language-data

# or, if you're using yarn
yarn add @codinasion/language-data
```

<div align="center">
  <img src="https://raw.githubusercontent.com/codinasion/codinasion/master/assets/rainbow-hr.png" alt="rainbow hr" width="100%" height="70%">
</div>

## Usage

```javascript
import { GetLanguageData } from "@codinasion/language-data";

const cLanguageData = GetLanguageData({ name: "C++" })[0];
// or, const cLanguageData = GetLanguageData({ fileExtension: "cpp" })[0];
// or, const cLanguageData = GetLanguageData({ prismTag: "cpp" })[0];

console.log(cLanguageData);

// {
//     name: 'C++',
//     fileExtension: [
//         'cpp', 'c++', 'cc',
//         'cp',  'cxx', 'h',
//         'h++', 'hh',  'hpp',
//         'hxx', 'inc', 'inl',
//         'ipp', 'tcc', 'tpp'
//     ],
//     namingConvention: 'PascalCase',
//     prismTag: 'cpp',
//     logo: 'https://raw.githubusercontent.com/codinasion/codinasion/master/assets/language/c-plus-plus.png'
// }
```

<div align="center">
  <img src="https://raw.githubusercontent.com/codinasion/codinasion/master/assets/rainbow-hr.png" alt="rainbow hr" width="100%" height="70%">
</div>

## Sponsors & Backers

![Sponsors](https://raw.githubusercontent.com/codinasion/sponsors/sponsors/sponsors.svg)

<div align="center">
  <img src="https://raw.githubusercontent.com/codinasion/codinasion/master/assets/rainbow-hr.png" alt="rainbow hr" width="100%" height="70%">
</div>

<br/>

<p align="center">
Made with 💖 by <a href="https://github.com/codinasion"><b>Codinasion</b></a>
</p>

<div align="center">
  <img src="https://raw.githubusercontent.com/codinasion/codinasion/master/assets/rainbow-hr.png" alt="rainbow hr" width="100%" height="70%">
</div>
