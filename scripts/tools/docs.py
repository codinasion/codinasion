import os


def generate_docs(tools_data):
    if not os.path.exists("../content/tools"):
        print("🏗️  Create : Tools directory")
        os.makedirs("../content/tools")

    print("")

    for tool in tools_data:
        if tool["ignore"] is False:
            # Check if path doesn't exist, create file in temp
            if not os.path.exists(f"../content/tools/{tool['name']}.md"):
                file_name = f"../content/tools/{tool['name']}.md"
                print(f"🏗️  Create : {file_name}")
                with open(file_name, "w", encoding="utf-8") as f:
                    f.write("---\n")
                    f.write("slug: " + tool["name"] + "\n")
                    f.write("---\n")

            # # Test
            # break
