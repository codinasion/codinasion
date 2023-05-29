import os

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
            # Print file name and file extension
            print(file_name, file_extension)
