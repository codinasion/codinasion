---
slug: ascii-to-binary
---

## What is ASCII?

ASCII is a character encoding standard for electronic communication. ASCII codes represent text in computers, telecommunications equipment, and other devices. Most modern character-encoding schemes are based on ASCII, although they support many additional characters.

## What is Binary?

Binary is a number system that only uses two digits: 1 and 0. Computers operate in binary, meaning they store data and perform calculations using only zeros and ones.

## How to convert ASCII to Binary?

To convert ASCII to Binary, we need to convert each character to it's ASCII value, then convert that ASCII value to binary.

### Example

Let's convert the word "Hello" to binary.

First, we need to convert each character to it's ASCII value.

| Character | ASCII Value |
| --------- | ----------- |
| H         | 72          |
| e         | 101         |
| l         | 108         |
| l         | 108         |
| o         | 111         |

Now, we need to convert each ASCII value to binary.

| ASCII Value | Binary Value |
| ----------- | ------------ |
| 72          | 01001000     |
| 101         | 01100101     |
| 108         | 01101100     |
| 108         | 01101100     |
| 111         | 01101111     |

Finally, we need to combine all the binary values together to get the final binary value. In this case, the final binary value is `0100100001100101011011000110110001101111`. This is the binary representation of the word "Hello".
