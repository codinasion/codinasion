if __name__ == '__main__':
    word = [ str(word) for word in input("Type your word:..").split(" ")]
    string = '_'.join(word)
    print(string.upper()) 