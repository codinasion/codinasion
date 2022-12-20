# returns strings with the fist letter capitalized in a sentence

def sentence_case(string: str):
    new_string = str()
    for index, x in enumerate(string):
        if index == 0:
            new_string += x.upper()
        elif string[index - 2] == '.' and index - 2 > -1:
            new_string += x.upper()
        else:
            new_string += x

    return new_string
