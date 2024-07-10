def reverse_words_in_string(string: str) -> str:
    """Returns the reverse of words in string
    input: str
    """

    # If string is blank, return
    if not string:
        return string

    # Split the words
    words = string.split(" ")
    # Reverse and join the words
    return " ".join(reversed(words))


if __name__ == "__main__":
    result = reverse_words_in_string("hello world")
    print(result)
