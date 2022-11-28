import os
from logging import warning

folder_names = os.listdir("program")

for folder_name in folder_names:
    file_names = os.listdir("program/" + folder_name)
    extensions = list(map(lambda x: x.split(".")[1], file_names))
    if len(set(extensions)) < len(extensions):
        warning(f"There is duplicated extensions in {folder_name}")
