<h1 align="center">Program API</h1>
<p align="center">
This folder contains the source code of <a alt="api.program.codinasion.org" href="https://api.program.codinasion.org/">api.program.codinasion.org</a>
</P>

---

## Use Cases

- This api will be used for fetching data for [program.codinasion.org](https://program.codinasion.org/)
- You can use this api to fetch data for your own project :smile: :hugs:

## Sample Request

### Get all programs metadata

```bash
curl -X GET \
  https://api.program.codinasion.org/ \
  -H 'Content-Type: application/json'
```

#### Sample Response

```json
[
  {
    "slug": "add-two-matrices",
    "title": "Add two matrices",
    "trackId": 4544,
    "tags": [
      "C",
      "C++",
      "Python",
      "PHP"
    ],
    "contributors": [
      "joao-vitor-souza",
      "harshraj8843",
      "priya1011",
      "savi001",
      "ShivangiRai1310"
    ],
    "latestUpdateDate": "2022-12-02T06:03:31Z"
  },
  // ... more similar objects
]
```

### Get specific program details

```bash
curl -X GET \
  https://api.program.codinasion.org/add-two-matrices \
  -H 'Content-Type: application/json'
```

#### Sample Response

```json
{
  "slug": "add-two-matrices",
  "title": "Add two matrices",
  "trackId": 4544,
  "tags": [
    "C",
    "C++",
    "Python",
    "PHP"
  ],
  "contributors": [
    "joao-vitor-souza",
    "harshraj8843",
    "priya1011",
    "savi001",
    "ShivangiRai1310"
  ],
  "contentHtml": "<h2>Write a program to add two matrices</h2>\n<p>Matrix addition is the process of adding two matrices by adding the corresponding elements of the two matrices. Two matrices must have an equal number of rows and columns to be added.</p>\n<pre><code>Input  :\n1 2 3\n4 5 6\n7 8 9\n\n1 2 3\n4 5 6\n7 8 9\n\nOutput :\n2 4 6\n8 10 12\n14 16 18\n</code></pre>\n<hr>\n<pre><code>// C program for addition of two matrices of size n*n\n#include &#x3C;stdio.h>\n#define MAX 100\n\nint main()\n{\n    int i, j, n;\n    int mat1[MAX][MAX], mat2[MAX][MAX], mat3[MAX][MAX];\n\n    // Input size of n*n matrix\n    scanf(\"%d\", &#x26;n);\n\n    // Input Elements for First Matrix\n    for(i=0; i&#x3C;n; i++)\n    {\n        for(j=0; j&#x3C;n; j++)\n            scanf(\"%d\", &#x26;mat1[i][j]);\n    }\n\n   // Input Elements for Second Matrix\n    for(i=0; i&#x3C;n; i++)\n    {\n        for(j=0; j&#x3C;n; j++)\n            scanf(\"%d\", &#x26;mat2[i][j]);\n    }\n\n    // Addition\n    for(i=0; i&#x3C;n; i++)\n    {\n        for(j=0; j&#x3C;n; j++)\n            mat3[i][j] = mat1[i][j] + mat2[i][j];\n    }\n\n    // Show addition result\n    for(i=0; i&#x3C;n; i++)\n    {\n        for(j=0; j&#x3C;n; j++)\n            printf(\"%d \", mat3[i][j]);\n        printf(\"\\n\");\n    }\n\n    return 0;\n}\n</code></pre>\n<pre><code>// C++ program for addition of two matrices\n#include &#x3C;bits/stdc++.h>\nusing namespace std;\n#define n 3\n\n// Function adds mat1[][] and mat2[][], and stores the result in mat3[][]\nvoid add(int mat1[][n], int mat2[][n], int mat3[][n])\n{\n    int i, j;\n    for(i=0; i&#x3C;n; i++)\n    {\n        for(j=0; j&#x3C;n; j++)\n            mat3[i][j] = mat1[i][j]+mat2[i][j];\n    }\n}\n\nint main()\n{\n    int mat1[n][n], mat2[n][n], mat3[n][n], i, j ;\n\n    //Input Elements for First Matrix\n    for(i=0; i&#x3C;n; i++)\n    {\n        for(j=0; j&#x3C;n; j++)\n            cin>>mat1[i][j];\n    }\n\n   //Input Elements for Second Matrix\n    for(i=0; i&#x3C;n; i++)\n    {\n        for(j=0; j&#x3C;n; j++)\n            cin>>mat2[i][j];\n    }\n\n    //Addition the two given matrices\n    add(mat1, mat2, mat3);\n\n    //Addition result\n    for(i=0; i&#x3C;n; i++)\n    {\n        for(j=0; j&#x3C;n; j++)\n            cout&#x3C;&#x3C;mat3[i][j]&#x3C;&#x3C;\" \";\n        cout&#x3C;&#x3C;endl;\n    }\n\n    return 0;\n}\n</code></pre>\n<pre><code>import numpy as np\n\na = np.arange(1, 10).reshape((3, 3))\nb = np.arange(1, 10).reshape((3, 3))\nc = np.add(a, b)\nprint(c)\n</code></pre>\n<pre><code>&#x3C;?php\n$a1 = array(\n    array(1,2,3),\n    array(4,5,6),\n    array(7,8,9)\n);\n$a2 = array(\n    array(1,2,3),\n    array(4,5,6),\n    array(7,8,9)\n   \n);\n$row = count($a1);\n$col = count($a1[0]);\necho \"First matrix: \\n\";\nfor ($i = 0; $i &#x3C; $row; $i++) {\n    for ($j = 0; $j &#x3C; $col; $j++) {\n        echo $a1[$i][$j] . \" \";\n    }\n    echo \"\\n\";\n}\necho \"Second matrix: \\n\";\nfor ($i = 0; $i &#x3C; $row; $i++) {\n    for ($j = 0; $j &#x3C; $col; $j++) {\n        echo $a2[$i][$j] . \" \";\n    }\n    echo \"\\n\";\n} \n$sum = array();\nfor ($i = 0; $i &#x3C; $row; $i++) {\n    for ($j = 0; $j &#x3C; $col; $j++) {\n        $sum[$i][$j] = $a1[$i][$j] + $a2[$i][$j];\n    }\n}\necho \"Addition of two matrices: \\n\";\nfor ($i = 0; $i &#x3C; $row; $i++) {\n    for ($j = 0; $j &#x3C; $col; $j++) {\n        echo $sum[$i][$j] . \" \";\n    }\n    echo \"\\n\";\n}\n?>\n</code></pre>\n",
  "markdown": "\n## Write a program to add two matrices\n\nMatrix addition is the process of adding two matrices by adding the corresponding elements of the two matrices. Two matrices must have an equal number of rows and columns to be added.\n\n```\nInput  :\n1 2 3\n4 5 6\n7 8 9\n\n1 2 3\n4 5 6\n7 8 9\n\nOutput :\n2 4 6\n8 10 12\n14 16 18\n```\n\n---\n\n<CodeBlock>\n\n```C\n// C program for addition of two matrices of size n*n\n#include <stdio.h>\n#define MAX 100\n\nint main()\n{\n    int i, j, n;\n    int mat1[MAX][MAX], mat2[MAX][MAX], mat3[MAX][MAX];\n\n    // Input size of n*n matrix\n    scanf(\"%d\", &n);\n\n    // Input Elements for First Matrix\n    for(i=0; i<n; i++)\n    {\n        for(j=0; j<n; j++)\n            scanf(\"%d\", &mat1[i][j]);\n    }\n\n   // Input Elements for Second Matrix\n    for(i=0; i<n; i++)\n    {\n        for(j=0; j<n; j++)\n            scanf(\"%d\", &mat2[i][j]);\n    }\n\n    // Addition\n    for(i=0; i<n; i++)\n    {\n        for(j=0; j<n; j++)\n            mat3[i][j] = mat1[i][j] + mat2[i][j];\n    }\n\n    // Show addition result\n    for(i=0; i<n; i++)\n    {\n        for(j=0; j<n; j++)\n            printf(\"%d \", mat3[i][j]);\n        printf(\"\\n\");\n    }\n\n    return 0;\n}\n```\n\n```C++\n// C++ program for addition of two matrices\n#include <bits/stdc++.h>\nusing namespace std;\n#define n 3\n\n// Function adds mat1[][] and mat2[][], and stores the result in mat3[][]\nvoid add(int mat1[][n], int mat2[][n], int mat3[][n])\n{\n    int i, j;\n    for(i=0; i<n; i++)\n    {\n        for(j=0; j<n; j++)\n            mat3[i][j] = mat1[i][j]+mat2[i][j];\n    }\n}\n\nint main()\n{\n    int mat1[n][n], mat2[n][n], mat3[n][n], i, j ;\n\n    //Input Elements for First Matrix\n    for(i=0; i<n; i++)\n    {\n        for(j=0; j<n; j++)\n            cin>>mat1[i][j];\n    }\n\n   //Input Elements for Second Matrix\n    for(i=0; i<n; i++)\n    {\n        for(j=0; j<n; j++)\n            cin>>mat2[i][j];\n    }\n\n    //Addition the two given matrices\n    add(mat1, mat2, mat3);\n\n    //Addition result\n    for(i=0; i<n; i++)\n    {\n        for(j=0; j<n; j++)\n            cout<<mat3[i][j]<<\" \";\n        cout<<endl;\n    }\n\n    return 0;\n}\n```\n\n```Python\nimport numpy as np\n\na = np.arange(1, 10).reshape((3, 3))\nb = np.arange(1, 10).reshape((3, 3))\nc = np.add(a, b)\nprint(c)\n```\n\n```PHP\n<?php\n$a1 = array(\n    array(1,2,3),\n    array(4,5,6),\n    array(7,8,9)\n);\n$a2 = array(\n    array(1,2,3),\n    array(4,5,6),\n    array(7,8,9)\n   \n);\n$row = count($a1);\n$col = count($a1[0]);\necho \"First matrix: \\n\";\nfor ($i = 0; $i < $row; $i++) {\n    for ($j = 0; $j < $col; $j++) {\n        echo $a1[$i][$j] . \" \";\n    }\n    echo \"\\n\";\n}\necho \"Second matrix: \\n\";\nfor ($i = 0; $i < $row; $i++) {\n    for ($j = 0; $j < $col; $j++) {\n        echo $a2[$i][$j] . \" \";\n    }\n    echo \"\\n\";\n} \n$sum = array();\nfor ($i = 0; $i < $row; $i++) {\n    for ($j = 0; $j < $col; $j++) {\n        $sum[$i][$j] = $a1[$i][$j] + $a2[$i][$j];\n    }\n}\necho \"Addition of two matrices: \\n\";\nfor ($i = 0; $i < $row; $i++) {\n    for ($j = 0; $j < $col; $j++) {\n        echo $sum[$i][$j] . \" \";\n    }\n    echo \"\\n\";\n}\n?>\n```\n\n</CodeBlock>\n\n",
  "latestUpdateDate": "2022-12-02T06:03:31Z"
}
```

---

<p align="center">
Made with 💖 by Codinasion
</p>

---
