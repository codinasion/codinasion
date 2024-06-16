import sys
import json

from generate import generate_tools
from fetch import fetch_tools
from docs import generate_docs

if len(sys.argv) != 2:
    print("⚠️ Error : Invalid arguments.")
    print("Usage   : python sctipy.py <purpose>")
    print("Purpose : 'fetch' or 'generate' or 'docs'")
    sys.exit()
PURPOSE = str(sys.argv[1])
if PURPOSE not in ["fetch", "generate", "docs"]:
    print(
        "⚠️ Error : Invalid arguments. Purpose must be 'fetch' or 'generate' or 'docs'"
    )
    sys.exit()

# Read Tools JSON file
print("👀 Read : tools.json")
with open(
    "../website/src/app/tools/_components/tools.json", encoding="utf-8"
) as f:
    tools_data = json.load(f)
print("✅ Total packages in tools.json: " + str(len(tools_data)))
print("")

##############################################
if PURPOSE == "fetch":
    fetch_tools(tools_data)
elif PURPOSE == "generate":
    generate_tools(tools_data)
elif PURPOSE == "docs":
    generate_docs(tools_data)
##############################################
