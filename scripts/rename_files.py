import os

folder_names = os.listdir("program")

for folder_name in folder_names:
    file_names = os.listdir("program/" + folder_name)
    for file_name in file_names:
        file = file_name.split(".")[0]
        extension = file_name.split(".")[-1]
        scake_case_name = folder_name.replace("-", "_")
        camel_case_name = "".join(map(str.title, folder_name.split("-")))
        if extension in ["go", "php", "pl", "r", "rs", "dart"]:
            if file != scake_case_name:
                os.rename(
                    "program/" + folder_name + "/" + file_name,
                    "program/" + folder_name + "/" + scake_case_name + "." + extension,
                )
        elif extension in [
            "c",
            "cpp",
            "cs",
            "hs",
            "java",
            "js",
            "kt",
            "rb",
            "swift",
            "ts",
            "fs",
        ]:
            if file != camel_case_name:
                os.rename(
                    "program/" + folder_name + "/" + file_name,
                    "program/" + folder_name + "/" + camel_case_name + "." + extension,
                )
        elif extension == "scala":
            camel_case_name_lower = camel_case_name[0].lower() + camel_case_name[1:]
            if file != camel_case_name_lower:
                os.rename(
                    "program/" + folder_name + "/" + file_name,
                    "program/"
                    + folder_name
                    + "/"
                    + camel_case_name_lower
                    + "."
                    + extension,
                )
        elif extension in ["py", "jl"]:
            if file != folder_name:
                os.rename(
                    "program/" + folder_name + "/" + file_name,
                    "program/" + folder_name + "/" + folder_name + "." + extension,
                )
