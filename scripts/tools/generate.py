import os


def kebab_to_pascal(string):
    return "".join(x.capitalize() for x in string.split("-"))


def generate_tools(tools_data):
    if not os.path.exists("../website/src/app/tools/_components/Tools"):
        print("🏗️  Create : Tools directory")
        os.makedirs("../website/src/app/tools/_components/Tools")

    if not os.path.exists(
        "../website/src/app/tools/_components/Tools/Accepted"
    ):
        print("🏗️  Create : Tools/Accepted directory")
        os.makedirs("../website/src/app/tools/_components/Tools/Accepted")

    if not os.path.exists("../website/src/app/tools/_components/Tools/Temp"):
        print("🏗️  Create : Tools/Temp directory")
        os.makedirs("../website/src/app/tools/_components/Tools/Temp")

    print("")

    for tool in tools_data:
        if tool["ignore"] is False:
            # Check if path doesn't exist, create file in temp
            if not os.path.exists(
                f"../website/src/app/tools/_components/Tools/Accepted/{tool['name']}.tsx"
            ):
                file_name = f"../website/src/app/tools/_components/Tools/Temp/{tool['name']}.tsx"
                function_name = kebab_to_pascal(tool["name"])
                print(f"🏗️  Create : {file_name}")
                with open(file_name, "w", encoding="utf-8") as f:
                    f.write(
                        "import { "
                        + function_name
                        + " as "
                        + function_name
                        + 'Fn } from "codinasion";\n'
                    )
                    f.write('import type { ToolPropsType } from "@/private-types";\n')
                    f.write('import ToolComponent from "../../tool-component";\n\n')
                    f.write(
                        "export function "
                        + function_name
                        + "Component(props: ToolPropsType): JSX.Element {\n"
                    )
                    f.write("const { ")
                    f.write("input1Value,")
                    f.write(" setOutputValue } = props;\n")
                    f.write("return (\n")

                    f.write("<ToolComponent\n")
                    f.write("{...props}\n")

                    f.write("action={{\n")
                    f.write('label: "')
                    f.write("Convert")
                    f.write('",\n')
                    f.write(
                        "onClick: (e: React.MouseEvent<HTMLButtonElement>): void => {\n"
                    )
                    f.write("e.preventDefault();\n")
                    f.write("// eslint-disable-next-line no-unused-vars\n")
                    f.write(
                        "(setOutputValue as (value: unknown) => void)("
                        + function_name
                        + "Fn("
                    )
                    f.write("String" + "(input1Value)")
                    f.write("));\n")
                    f.write("},\n")
                    f.write("}}\n")

                    f.write("inputs={[\n")

                    f.write("{\n")
                    f.write('label: "Input')

                    f.write('",\n')
                    f.write("},\n")

                    f.write("]}\n")

                    f.write("output={{\n")
                    f.write('label: "Output",\n')
                    f.write("}}\n")
                    f.write("/>\n")

                    f.write(");\n")
                    f.write("}\n")
                    f.close()

            # # Test
            # break
