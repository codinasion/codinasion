import json
import os

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
# print(extensions)


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
number_of_files_renamed = 0
for folder_name in folder_names:
    file_names = os.listdir("program/" + folder_name)
    for file_name in file_names:
        temp_file_name = file_name
        file_extension = temp_file_name.split(".")[-1]
        
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
                
                if temp_file_name != new_file_name + "." + file_extension:
                        # print(temp_file_name)
                        # print(new_file_name + "." + file_extension)
                        if os.path.isfile("program/"
                                + folder_name
                                + "/"
                                + new_file_name
                                + "."
                                + file_extension) :
                            # print(os.path.join("program",folder_name,new_file_name+"."+file_extension))
                            print("Could not rename " + temp_file_name + " as the file "+ new_file_name + "." + file_extension + " already exists!")
                            confirm_delete=input("Do you want to delete "+ temp_file_name + " Y/N ")
                            if confirm_delete == 'Y' :
                                os.remove("program/"
                            + folder_name
                            + "/"
                            + temp_file_name)
                                print("Successfully deleted "  + temp_file_name + " file")
                            
                            else :
                                print("File Not deleted.")
                            
                            number_of_files_renamed = -1

                            
                        else:
                            os.rename(
                                "program/" + folder_name + "/" + temp_file_name,
                                "program/"
                                + folder_name
                                + "/"
                                + new_file_name
                                + "."
                                + file_extension,
                            )
                            print("Successfully Renamed "  + temp_file_name + " to " + new_file_name + "." + file_extension)
                            number_of_files_renamed = number_of_files_renamed + 1


if number_of_files_renamed == 0 :
    print("All files are Named properly!")
elif number_of_files_renamed < 0 :
    print("All the files are as per your wish!")
