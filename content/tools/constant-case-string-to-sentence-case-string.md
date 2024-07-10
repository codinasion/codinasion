---
slug: constant-case-string-to-sentence-case-string
---

## What is Constant Case?

Constant case is a naming convention in which a word or phrase is written without spaces between words and each word is capitalized.

## What is Sentence Case?

Sentence case is a naming convention in which a word or phrase is written without spaces between words and each word is capitalized except for the first word.

## How to convert Constant Case String to Sentence Case String?

To convert Constant Case String to Sentence Case String, we need to split the string into words, then convert each word to lowercase, then join the words together with the first letter of the first word capitalized.

### Example

Let's convert the string "HELLO_WORLD" to Sentence Case String.

First, we need to split the string into words.

| String      | Words        |
| ----------- | ------------ |
| HELLO_WORLD | HELLO, WORLD |

Now, we need to convert each word to lowercase.

| Words        | Lowercase Words |
| ------------ | --------------- |
| HELLO, WORLD | hello, world    |

Finally, we need to join the words together with the first letter of the first word capitalized. In this case, the final Sentence Case String is `Hello world`. This is the Sentence Case String representation of the string "HELLO_WORLD".
