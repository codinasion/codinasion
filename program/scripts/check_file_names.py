import os
from logging import warning


def check_file_names():
    flag = False

    folder_names = os.listdir("program")

    # sort the folder names
    folder_names = sorted(folder_names)

    for folder_name in folder_names:
        # print(folder_name)
        file_names = os.listdir("program/" + folder_name)
        for file_name in file_names:
            if ("'" or '"' or " ") in file_name:
                flag = True
                warning(f"There is a space or a quote in {folder_name} -> {file_name}")

    if not flag:
        print("✅ There is no space or quote in file names")

    return flag
