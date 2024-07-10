import os
from logging import warning


def check_readme_file():
    flag = False

    folder_names = os.listdir("../program/program")

    # sort the folder names
    folder_names = sorted(folder_names)

    for folder_name in folder_names:
        # print(folder_name)
        file_names = os.listdir("../program/program/" + folder_name)

        # if there is no README.md file
        if "README.md" not in file_names:
            flag = True
            warning(f"There is no README.md file in {folder_name}")

    if not flag:
        print("✅ There is README.md file in all folders")

    return flag
