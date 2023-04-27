import json
import os

from check_duplicate_file_extensions import check_duplicate_file_extensions

Check_flag = check_duplicate_file_extensions()
if Check_flag:
    raise Exception("::Start:: There is duplicated extensions in the program folder")

# read language data
language_data = json.load(open("data/languages.json", "r"))

# get list of different language namingConvension from language_data
namingConvension = list(
    set([language["namingConvension"] for language in language_data])
)

# get list of fileExtension for each namingConvension
extensions = []
for naming in namingConvension:
    # list of extensions for each namingConvension
    extensions.append(
        {
            "namingConvension": naming,
            "extensions": list(
                set(
                    [
                        language["fileExtension"]
                        for language in language_data
                        if language["namingConvension"] == naming
                    ]
                )
            ),
        }
    )


def ConvertToPascalCase(name):
    return "".join([word.capitalize() for word in name.split("-")])


def ConvertToSnakeCase(name):
    return "_".join([word.lower() for word in name.split("-")])


def ConvertToKebabCase(name):
    return "-".join([word.lower() for word in name.split("-")])


def ConvertToCamelCase(name):
    name = ConvertToPascalCase(name)
    name = name[0].lower() + name[1:]
    return name


folder_names = os.listdir("program")

# Important flags
rename = True
passed = False
ct = 0

# Accessing all the files present in there respective folders.

for folder_name in folder_names:
    try:
        file_names = os.listdir("program/" + folder_name)
        for file_name in file_names:
            temp_file_name = file_name
            file_extension = temp_file_name.split(".")[-1]

            # Fetching required data
            for data in extensions:
                if file_extension in data["extensions"]:
                    namingConvension = data["namingConvension"]
                    if namingConvension == "PascalCase":
                        new_file_name = ConvertToPascalCase(folder_name)
                    elif namingConvension == "snake_case":
                        new_file_name = ConvertToSnakeCase(folder_name)
                    elif namingConvension == "kebab-case":
                        new_file_name = ConvertToKebabCase(folder_name)
                    elif namingConvension == "camelCase":
                        new_file_name = ConvertToCamelCase(folder_name)

                    # Rename the file
                    os.rename(
                        "program/" + folder_name + "/" + temp_file_name,
                        "program/"
                        + folder_name
                        + "/"
                        + new_file_name
                        + "."
                        + file_extension,
                    )
    except:
        raise Exception("Error in renaming files")

Check_flag = check_duplicate_file_extensions()
if Check_flag:
    raise Exception("::End:: There is duplicated extensions in the program folder")
