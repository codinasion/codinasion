---
slug: string-to-base64
---

## What is Base64 Encoding?

Base64 is a group of binary-to-text encoding schemes that represent binary data in an ASCII string format by translating it into a radix-64 representation. The term Base64 originates from a specific MIME content transfer encoding.

## How to convert String to Base64?

To convert String to Base64, we need to encode the String. There are many ways to encode a String to Base64. One way is to use the `base64` module in Python.

### Example

Let's convert the String "Hello" to Base64.

```python
import base64

string = "Hello"
base64_string = base64.b64encode(string.encode("utf-8"))

print(base64_string)   # b'SGVsbG8='
```
