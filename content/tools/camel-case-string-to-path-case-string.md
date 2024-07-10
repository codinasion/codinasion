---
slug: camel-case-string-to-path-case-string
---

## What is Camel Case?

Camel case is a naming convention in which a word or phrase is written without spaces between words and each word is capitalized except for the first word.

## What is Path Case?

Path case is a naming convention in which a word or phrase is written without spaces between words and each word is separated by a slash.

## How to convert Camel Case String to Path Case String?

To convert Camel Case String to Path Case String, we need to split the string into words, then convert each word to lowercase, then join the words together with a slash.

### Example

Let's convert the string "helloWorld" to Path Case String.

First, we need to split the string into words.

| String     | Words        |
| ---------- | ------------ |
| helloWorld | hello, World |

Now, we need to convert each word to lowercase.

| Words        | Lowercase Words |
| ------------ | --------------- |
| hello, World | hello, world    |

Finally, we need to join the words together with a slash. In this case, the final Path Case String is `hello/world`. This is the Path Case String representation of the string "helloWorld".
