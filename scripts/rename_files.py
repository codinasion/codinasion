import os


def ConvertToKebabCase(name):
    return "-".join([word.lower() for word in name.split("-")])


current_dir = os.getcwd()
# print(current_dir)

program_folder_path = (
    current_dir + "/program"
    if current_dir.split("/")[-1] == "codinasion"
    else current_dir + "/../program"
)
# print(program_folder_path)

folder_names = os.listdir(program_folder_path)
folder_names.remove("README.md")
# print(folder_names)

for folder_name in folder_names:
    try:
        file_names = os.listdir(program_folder_path + "/" + folder_name)
        for file_name in file_names:
            temp_file_name = file_name
            file_extension = temp_file_name.split(".")[-1]

            if file_extension == "js":
                new_file_name = ConvertToKebabCase(folder_name)

                # Rename the file
                print(f"Renaming {temp_file_name} to {new_file_name}.{file_extension}")
                os.rename(
                    program_folder_path + "/" + folder_name + "/" + temp_file_name,
                    program_folder_path
                    + "/"
                    + folder_name
                    + "/"
                    + new_file_name
                    + "."
                    + file_extension,
                )
    except Exception as exc:
        raise RuntimeError(f"Error in renaming files in {folder_name} folder") from exc
