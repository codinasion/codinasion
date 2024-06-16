import { GetLanguageData } from "codinasion";

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
