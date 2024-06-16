---
slug: base64-to-string
---

## What is Base64 Encoding?

Base64 is a group of binary-to-text encoding schemes that represent binary data in an ASCII string format by translating it into a radix-64 representation. The term Base64 originates from a specific MIME content transfer encoding.

## How to convert Base64 to String?

To convert Base64 to String, we need to decode the Base64 string. There are many ways to decode a Base64 string. One way is to use the `base64` module in Python.

### Example

Let's convert the Base64 string `SGVsbG8=` to String.

```python
import base64

base64_string = "SGVsbG8="
string = base64.b64decode(base64_string).decode("utf-8")

print(string)   # Hello
```
