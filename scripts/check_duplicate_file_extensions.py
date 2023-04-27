import os
from logging import warning


def check_duplicate_file_extensions():
    flag = False

    folder_names = os.listdir("program")

    # sort the folder names
    folder_names = sorted(folder_names)

    for folder_name in folder_names:
        # print(folder_name)
        file_names = os.listdir("program/" + folder_name)
        # print(file_names)
        extensions = list(map(lambda x: x.split(".")[1], file_names))
        if len(set(extensions)) < len(extensions):
            flag = True
            warning(
                f"There is duplicated extensions in {folder_name} -> {set([x for x in extensions if extensions.count(x) > 1])}"
            )

    if not flag:
        print("There is no duplicated extensions in the program folder")

    return flag
