# Returns a string with the first letter capitalized in a sentence
# The first letter of the string is capitalized if nothing but spaces or the listed punctuation is found
# Every first letter after the listed punctuation is also capitalized


def sentence_case(string: str):
    new_string = str()  # return value
    cap = bool()  # letter capitalized if true
    punc = ["!", "?", "."]  # listed punctuation
    for index, x in enumerate(string):
        if index == 0:
            if x.islower():
                new_string += x.upper()
            elif x in punc or x == " ":
                new_string += x
                cap = True
            else:
                new_string += x
        else:
            if x in punc:
                new_string += x
                cap = True
            else:
                if cap and x.islower():
                    new_string += x.upper()
                    cap = False
                else:
                    new_string += x

    return new_string


print(sentence_case(input()))
