<h1 align="center">Program API</h1>
<p align="center">
This folder contains the source code of <a alt="api.program.codinasion.org" href="https://api.program.codinasion.org/">api.program.codinasion.org</a>
</P>

---

## Use Cases

- This api will be used for fetching data for [program.codinasion.org](https://program.codinasion.org/)
- You can use this api to fetch data for your own project :smile: :hugs:

## Sample Request

```bash
curl -X GET \
  https://api.program.codinasion.org/ \
  -H 'Content-Type: application/json'
```

## Sample Response

```json
[
  {
    "slug": "add-two-matrices",
    "title": "Add two matrices",
    "trackId": 4544,
    "tags": [
      "c",
      "cpp",
      "py",
      "php"
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
  ...
]
```

---

<p align="center">
Made with 💖 by Codinasion
</p>

---
