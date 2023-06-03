# @codinasion/language-data

Get programming language data.

<div align="center">
  <img src="https://raw.githubusercontent.com/codinasion/codinasion/master/assets/rainbow-hr.png" alt="rainbow hr" width="100%" height="70%">
</div>

## Installation

```bash
npm install @codinasion/language-data
# or
yarn add @codinasion/language-data
# or
pnpm add @codinasion/language-data
```

<div align="center">
  <img src="https://raw.githubusercontent.com/codinasion/codinasion/master/assets/rainbow-hr.png" alt="rainbow hr" width="100%" height="70%">
</div>

## Usage

### `getLanguageData`

```js
// Import the `getLanguageData` function from the `@codinasion/language-data` package.
import { getLanguageData } from "@codinasion/language-data";

// Call the `getLanguageData` function with the language name, or, file extension.
const languageData = getLanguageData({ name: "Python" })[0];

// Use the `languageData` object to get the language data.
console.log(languageData.name); // Python
console.log(languageData.fileExtension[0]); // py
console.log(languageData.namingConvention); // snake_case
console.log(languageData.prismTag); // python
console.log(languageData.logo); // https://raw.githubusercontent.com/codinasion/codinasion/master/assets/language/Python.png
```

```js
// Import the `getLanguageData` function from the `@codinasion/language-data` package.
import { getLanguageData } from "@codinasion/language-data";

// Call the `getLanguageData` function with the language name, or, file extension.
const languageData = getLanguageData({
  prismTag: "csharp",
})[0];

// // Use the `languageData` object to get the language data.
console.log(languageData.name); // C#
console.log(languageData.fileExtension[0]); // cs
console.log(languageData.namingConvention); // PascalCase
console.log(languageData.prismTag); // csharp
console.log(languageData.logo); // https://raw.githubusercontent.com/codinasion/codinasion/master/assets/language/C%23.png
```

### `renameFile`

```js
// Import the `renameFile` function from the `@codinasion/language-data` package.
import { renameFile } from "@codinasion/language-data";

// Call the `renameFile` function with the file name and the language name, or, file extension.
const sampleFileName = "sample-file-name.py";

console.log(renameFile({ fileName: sampleFileName })); // sample_file_name.py
```

> **Note:** Use `language name` with `file name` to rename file. Because multiple languages can have the same file extension.

```js
import { renameFile } from "@codinasion/language-data";

const sampleFileName = "sample-file-name.py";

console.log(renameFile({ fileName: sampleFileName, name: "python" })); // sample_file_name.py
```

<div align="center">
  <img src="https://raw.githubusercontent.com/codinasion/codinasion/master/assets/rainbow-hr.png" alt="rainbow hr" width="100%" height="70%">
</div>

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE.md) file for details.

<div align="center">
  <img src="https://raw.githubusercontent.com/codinasion/codinasion/master/assets/rainbow-hr.png" alt="rainbow hr" width="100%" height="70%">
</div>

<br/>

<p align="center">
Made with 💖 by Codinasion
</p>

<div align="center">
  <img src="https://raw.githubusercontent.com/codinasion/codinasion/master/assets/rainbow-hr.png" alt="rainbow hr" width="100%" height="70%">
</div>
