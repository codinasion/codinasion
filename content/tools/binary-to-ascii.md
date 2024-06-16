---
slug: binary-to-ascii
---

## What is Binary?

Binary is a number system that only uses two digits: 1 and 0. Computers operate in binary, meaning they store data and perform calculations using only zeros and ones.

## What is ASCII?

ASCII is a character encoding standard for electronic communication. ASCII codes represent text in computers, telecommunications equipment, and other devices. Most modern character-encoding schemes are based on ASCII, although they support many additional characters.

## How to convert Binary to ASCII?

To convert Binary to ASCII, we need to convert each binary value to it's ASCII value, then convert that ASCII value to it's character.

### Example

Let's convert the binary value `0100100001100101011011000110110001101111` to ASCII.

First, we need to convert each binary value to it's ASCII value.

| Binary Value | ASCII Value |
| ------------ | ----------- |
| 01001000     | 72          |
| 01100101     | 101         |
| 01101100     | 108         |
| 01101100     | 108         |
| 01101111     | 111         |

Now, we need to convert each ASCII value to it's character.

| ASCII Value | Character |
| ----------- | --------- |
| 72          | H         |
| 101         | e         |
| 108         | l         |
| 108         | l         |
| 111         | o         |

Finally, we need to combine all the characters together to get the final word. In this case, the final word is `Hello`. This is the ASCII representation of the binary value `0100100001100101011011000110110001101111`.
