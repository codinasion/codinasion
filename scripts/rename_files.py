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

# Important flags
number_of_files_renamed = 0
rename = True
passed = False
ct = 0

#Accessing all the files present in there respective folders.
for folder_name in folder_names:
    file_names = os.listdir("program/" + folder_name)
    for file_name in file_names:
        temp_file_name = file_name
        file_extension = temp_file_name.split(".")[-1]
        
        #Fetching required data
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

                #finding temp file name without extension
                temp_file_name_without_extension=""
                for i in range(0,len(temp_file_name)):
                    if temp_file_name[i]=='.':
                        break
                    else:
                        temp_file_name_without_extension = temp_file_name_without_extension + temp_file_name[i]

                #For handling std file naming conventions. (File_Name.txt == file_name.txt) --> Std file naming convention
                mini = min(len(temp_file_name_without_extension),len(new_file_name))
                if len(temp_file_name_without_extension) == len(new_file_name):
                    if temp_file_name_without_extension.lower() == new_file_name.lower() :
                        for i in range(0, len(new_file_name)) :
                            if temp_file_name_without_extension[i] != new_file_name[i] :
                                ct = ct + 1
                                # print(ct)
                    else :
                         #Verifying if the file already exists...
                            if os.path.exists(os.path.join("program",folder_name, new_file_name+"."+file_extension)) :
                                print("*********************************************")
                                print("Could not rename " + temp_file_name + " as the file " + new_file_name + "." + file_extension + " already exists!")
                                confirm_delete=input("Do you want to delete "+ temp_file_name + " Y/N ")
                                if confirm_delete == 'Y' :
                                    os.remove("program/"
                                + folder_name
                                + "/"
                                + temp_file_name
                                    )
                                    print("Successfully deleted "  + temp_file_name + " file")
                                    rename = False
                                elif confirm_delete == 'N' :
                                    confirm_delete = input("Do you want to delete existing "+ new_file_name + "."+file_extension+ " Y/N ")
                                    if(confirm_delete == 'Y'):
                                        os.remove("program/"
                                                + folder_name
                                                + "/"
                                                + new_file_name
                                                + "."
                                                + file_extension)
                                        print("Successfully deleted "  + new_file_name + " file")
                                        rename = True
                                    else :
                                        rename = False
                                        print("Renaming could not be done! multiple files exist at "+ "/program/"+folder_name)
                                else :
                                    print("File Not deleted.")
                                
                                number_of_files_renamed = -1
                

                            #check 2
                            elif os.path.isfile("program/"
                                    + folder_name
                                    + "/"
                                    + new_file_name
                                    + "."
                                    + file_extension) :
                                print("Path 2")
                                # print(os.path.join("program",folder_name,new_file_name+"."+file_extension))
                                print("Could not rename " + temp_file_name + " as the file "+ new_file_name + "." + file_extension + " already exists!")
                                confirm_delete=input("Do you want to delete "+ temp_file_name +"."+file_extension+ " Y/N ")
                                if confirm_delete == 'Y' :
                                    os.remove("program/"
                                + folder_name
                                + "/"
                                + temp_file_name
                                    )
                                    print("Successfully deleted "  + temp_file_name + " file")
                                    rename = False
                                elif confirm_delete == 'N' :
                                    confirm_delete = input("Do you want to delete existing "+ new_file_name + " Y/N ")
                                    if(confirm_delete == 'Y'):
                                        os.remove("program/"
                                                + folder_name
                                                + "/"
                                                + new_file_name
                                                + "."
                                                + file_extension)
                                        print("Successfully deleted "  + new_file_name + " file")
                                        # print(temp_file_name)
                                        rename = True
                                    else :
                                        rename = False
                                        print("Renaming could not be done! multiple files exist at "+ "/program/"+folder_name)
                                else :
                                    print("File Not deleted.")
                                
                                number_of_files_renamed = -1

                            #Renaming the file....

                            if(rename):
                                # print(temp_file_name)
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
                        

                else :
                        # print(temp_file_name)
                        # print(new_file_name + "." + file_extension)
                        #Verifying if the file already exists...
                            if os.path.exists(os.path.join("program",folder_name, new_file_name+"."+file_extension)) :
                                print("*********************************************")
                                print("Could not rename " + temp_file_name + " as the file " + new_file_name + "." + file_extension + " already exists!")
                                confirm_delete=input("Do you want to delete "+ temp_file_name + " Y/N ")
                                if confirm_delete == 'Y' :
                                    os.remove("program/"
                                + folder_name
                                + "/"
                                + temp_file_name
                                    )
                                    print("Successfully deleted "  + temp_file_name + " file")
                                    rename = False
                                elif confirm_delete == 'N' :
                                    confirm_delete = input("Do you want to delete existing "+ new_file_name + "."+file_extension+ " Y/N ")
                                    if(confirm_delete == 'Y'):
                                        os.remove("program/"
                                                + folder_name
                                                + "/"
                                                + new_file_name
                                                + "."
                                                + file_extension)
                                        print("Successfully deleted "  + new_file_name + " file")
                                        rename = True
                                    else :
                                        rename = False
                                        print("Renaming could not be done! multiple files exist at "+ "/program/"+folder_name)
                                else :
                                    print("File Not deleted.")
                                
                                number_of_files_renamed = -1
                

                            #check 2
                            elif os.path.isfile("program/"
                                    + folder_name
                                    + "/"
                                    + new_file_name
                                    + "."
                                    + file_extension) :
                                print("Path 2")
                                # print(os.path.join("program",folder_name,new_file_name+"."+file_extension))
                                print("Could not rename " + temp_file_name + " as the file "+ new_file_name + "." + file_extension + " already exists!")
                                confirm_delete=input("Do you want to delete "+ temp_file_name +"."+file_extension+ " Y/N ")
                                if confirm_delete == 'Y' :
                                    os.remove("program/"
                                + folder_name
                                + "/"
                                + temp_file_name
                                    )
                                    print("Successfully deleted "  + temp_file_name + " file")
                                    rename = False
                                elif confirm_delete == 'N' :
                                    confirm_delete = input("Do you want to delete existing "+ new_file_name + " Y/N ")
                                    if(confirm_delete == 'Y'):
                                        os.remove("program/"
                                                + folder_name
                                                + "/"
                                                + new_file_name
                                                + "."
                                                + file_extension)
                                        print("Successfully deleted "  + new_file_name + " file")
                                        # print(temp_file_name)
                                        rename = True
                                    else :
                                        rename = False
                                        print("Renaming could not be done! multiple files exist at "+ "/program/"+folder_name)
                                else :
                                    print("File Not deleted.")
                                
                                number_of_files_renamed = -1

                            #Renaming the file....

                            if(rename):
                                # print(temp_file_name)
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
                                # rename= False (doubt)

                #Solving the case of Std file naming convention.

                if len(temp_file_name_without_extension) == len(new_file_name):
                    
                        if ct > 0 :
                        # print(temp_file_name)
                        # print(new_file_name + "." + file_extension)
                        #Same Verifying the existance of the file...
                            #Renaming the file
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
                            ct=0
                

# Showing the final output
if number_of_files_renamed == 0 :
    print("All files are Named properly!")
elif number_of_files_renamed < 0 :
    print("All the files are as per your wish!")
