import os
from logging import warning

known_extensions = [
    "c",
    "cs",
    "cpp",
    "dart",
    "fs",
    "go",
    "hs",
    "java",
    "js",
    "jl",
    "kt",
    "pl",
    "perl",
    "php",
    "py",
    "r",
    "rb",
    "rs",
    "scala",
    "sc",
    "swift",
    "ts",
    "md",
]


def check_unknown_extensions():
    flag = False

    # Get list of all folders in program
    folder_names = os.listdir("program")

    for folder_name in folder_names:
        # Get list of all files in each folder
        file_names = os.listdir("program/" + folder_name)
        for file_name in file_names:
            # Get file extension
            file_extension = file_name.split(".")[-1]
            # Check if file extension is unknown
            if file_extension not in known_extensions:
                flag = True
                # Print file name and file extension
                warning(f"Unknown extension in {folder_name} -> {file_name}")

    if not flag:
        print("✅ There is no unknown extensions in the program folder")

    return flag
